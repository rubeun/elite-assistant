import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Elite Assistant/i);
  expect(headerElement).toBeInTheDocument();
});
