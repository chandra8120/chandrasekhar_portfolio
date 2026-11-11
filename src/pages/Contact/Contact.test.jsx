import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from './index';

vi.mock('../../hoc/LandingPage_Layout', () => ({ default: ({ children }) => <div>{children}</div> }));

beforeEach(() => vi.stubGlobal('fetch', vi.fn()));
afterEach(() => vi.unstubAllGlobals());
const accepted = () => ({ ok: true, json: async () => ({ success: 'true' }) });
const fill = (label, value) => fireEvent.change(screen.getByLabelText(label), { target: { value } });
const renderContact = () => render(<MemoryRouter><Contact /></MemoryRouter>);
const fillValid = () => {
  fill('Name', 'Chandra');
  fill('Email', 'visitor@example.com');
  fill('Message', 'I would like to discuss a project.');
};

test('sends all contact details, blocks duplicates, and requires a new email after success', async () => {
  let resolveSend;
  fetch.mockReturnValue(new Promise(resolve => { resolveSend = resolve; }));
  renderContact();
  fillValid();
  fill('Company ( optional )', 'Example Company');
  fill('MobileNo ( optional )', '+91 1234567890');
  const send = screen.getByRole('button', { name: 'Send Away' });
  fireEvent.click(send);
  expect(screen.getByRole('button', { name: /Sending/ })).toBeDisabled();
  fireEvent.click(send);
  expect(fetch).toHaveBeenCalledTimes(1);
  const [url, request] = fetch.mock.calls[0];
  expect(url).toBe('https://formsubmit.co/ajax/chandrasekhar8120@gmail.com');
  expect(request.method).toBe('POST');
  expect(JSON.parse(request.body)).toMatchObject({
    name: 'Chandra', email: 'visitor@example.com', company: 'Example Company',
    phone: '+91 1234567890', message: 'I would like to discuss a project.',
  });
  await act(async () => resolveSend(accepted()));
  expect(screen.getByText('Thanks for reaching out!')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Close success message' }));
  fill('Name', 'Another visitor');
  fill('Message', 'I have another project to discuss.');
  expect(screen.getByLabelText('Email')).toHaveValue('');
  expect(screen.getByRole('button', { name: 'Send Away' })).toBeDisabled();
  fill('Email', 'another@example.com');
  expect(screen.getByRole('button', { name: 'Send Away' })).toBeEnabled();
});

test.each([
  ['network error', () => Promise.reject(new Error('Network unavailable'))],
  ['HTTP error', async () => ({ ok: false })],
  ['service rejection', async () => ({ ok: true, json: async () => ({ success: 'false' }) })],
  ['invalid response', async () => ({ ok: true, json: async () => { throw new Error('Invalid JSON'); } })],
])('keeps inputs and allows retry after %s', async (_, response) => {
  fetch.mockImplementationOnce(response).mockResolvedValueOnce(accepted());
  renderContact();
  fillValid();
  fireEvent.click(screen.getByRole('button', { name: 'Send Away' }));
  expect(await screen.findByRole('alert')).toHaveTextContent(/Unable to send your message/);
  expect(screen.getByRole('link', { name: 'Email Chandra Sekhar' })).toHaveAttribute('href', 'mailto:chandrasekhar8120@gmail.com');
  expect(screen.getByLabelText('Email')).toHaveValue('visitor@example.com');
  expect(screen.getByRole('button', { name: 'Send Away' })).toBeEnabled();
  expect(screen.queryByText('Thanks for reaching out!')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Send Away' }));
  expect(await screen.findByText('Thanks for reaching out!')).toBeInTheDocument();
  expect(fetch).toHaveBeenCalledTimes(2);
});

test('rejects whitespace-only required inputs and invalid email addresses', () => {
  renderContact();
  fillValid();
  fill('Name', '   ');
  expect(screen.getByRole('button', { name: 'Send Away' })).toBeDisabled();
  fill('Name', 'Chandra');
  fill('Message', '                ');
  expect(screen.getByRole('button', { name: 'Send Away' })).toBeDisabled();
  fill('Message', 'A valid project inquiry.');
  fill('Email', 'invalid');
  expect(screen.getByRole('button', { name: 'Send Away' })).toBeDisabled();
  expect(fetch).not.toHaveBeenCalled();
});
