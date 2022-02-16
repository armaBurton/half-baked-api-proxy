import { render, screen } from '@testing-library/react';
import WeatherSearch from './WeatherSearch';

test('Search weather for a city link', () => {
  render(<WeatherSearch />);
  const linkElement = screen.getByText(/weather for a city/i);
  expect(linkElement).toBeInTheDocument();
});
