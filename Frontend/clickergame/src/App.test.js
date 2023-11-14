/***
 * Author: Randy Franzmeier
 * Date: 11-13-2023
 * This file was created by React and 
 * tests the App component to make sure
 * it works as expected
 */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
