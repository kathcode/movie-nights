import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page with title', () => {
  render(<App />);
  const linkElement = screen.getByText(/What’s your favorite Movie?/i);
  expect(linkElement).toBeInTheDocument();
});
