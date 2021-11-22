import { render, screen } from '@testing-library/react';
import Pokemons from '../pages/Pokemons/Pokemons';

test('renders title', () => {
  render(<Pokemons />);
  const title = screen.getByText(/Todos os Pokemons/i);
  expect(title).toBeInTheDocument();
});
