import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page', () => {
  render(<App />);
  expect(screen.getByText(/Hey !, I'm Chandra Sekhar/i)).toBeInTheDocument();
});
