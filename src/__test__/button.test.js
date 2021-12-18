import React from 'react';
import ButtonLoading from 'components/ButtonLoading';
import { render, screen } from '@testing-library/react';

it('renderiza bien', () => {
  render(<ButtonLoading text='prueba' loading={false} disabled={false} />);
  expect(screen.getByTestId('button-loading')).toBeInTheDocument();
});

it('Muestra el texto cuando carga', () => {
  render(<ButtonLoading text='prueba' loading={false} disabled={false} />);
  expect(screen.getByTestId('button-loading')).toHaveTextContent('prueba');
});

it('No muestra el texto cuando carga', () => {
  render(<ButtonLoading text='prueba' loading={true} disabled={false} />);
  expect(screen.getByTestId('button-loading')).not.toHaveTextContent('prueba');
});

it('muestra el componente de cargar cuando está cargando', () => {
  render(<ButtonLoading text='prueba' loading={true} disabled={false} />);
  expect(screen.getByTestId('loading-in-button')).toBeInTheDocument();
});

it('esta desactivado cuando los prop pasaron', () => {
  render(<ButtonLoading text='prueba' loading={true} disabled={true} />);
  expect(screen.getByTestId('button-loading')).toHaveAttribute('disabled');
});

it('esta desactivado cuando los prop pasaron', () => {
  render(<ButtonLoading text='prueba' loading={true} disabled={false} />);
  expect(screen.getByTestId('button-loading')).not.toHaveAttribute('disabled');
});

it('carga el svg html cuando loadins está desactivado', () => {
  render(<ButtonLoading text='prueba' loading={true} disabled={false} />);
  expect(screen.getByTestId('button-loading')).toMatchSnapshot();
});
