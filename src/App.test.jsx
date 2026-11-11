import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

afterEach(() => {
  window.history.replaceState({}, '', '/');
  vi.unstubAllGlobals();
});

test('renders the home page', () => {
  render(<App />);
  expect(screen.getByText(/Hey !, I'm Chandra Sekhar/i)).toBeInTheDocument();
});

test('resume preview is a focusable link that opens the resume page', () => {
  render(<App />);
  const link = screen.getByRole('link', { name: 'View resume' });
  expect(link).toHaveAttribute('href', '/resume');
  link.focus();
  expect(link).toHaveFocus();
  fireEvent.click(link);
  expect(screen.getByTitle('Chandra Sekhar Resume')).toBeInTheDocument();
});

test('mobile navigation is labelled and closes when selecting the current page', async () => {
  vi.stubGlobal('matchMedia', vi.fn(query => ({
    matches: true, media: query, onchange: null,
    addListener: vi.fn(), removeListener: vi.fn(),
    addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: vi.fn(),
  })));
  render(<App />);
  expect(screen.getByRole('button', { name: 'Go to home' })).toBeInTheDocument();
  const menu = screen.getByRole('button', { name: 'Open navigation menu' });
  expect(menu).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(menu);
  expect(menu).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('menuitem', { name: 'Home' }));
  await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  expect(menu).toHaveAttribute('aria-expanded', 'false');
});
