import React from 'react';
import { render, screen } from '@testing-library/react';
import FormularioAdicionarAmigo from './FormularioAdicionarAmigo';

test('Há o input no documento', () => {
  render(<FormularioAdicionarAmigo />);
  const input = screen.getByRole("input")
  expect(input).toBeInTheDocument();
});
