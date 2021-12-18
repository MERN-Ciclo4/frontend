import React from 'react';
import Input from 'components/Input';
import { render, screen } from '@testing-library/react';

it('renderiza bien el label', () => {
    render(<Input text='prueba' loading={false} disabled={false} />);
    expect(screen.getByTestId('label-loading')).toBeInTheDocument();
  });
