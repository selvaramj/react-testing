import { render, screen, fireEvent } from '@testing-library/react';
import Greet from '../components/greet/greet';
import React from 'react';

describe('Testing Greet component', () => {
  test('render component without name', () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });
  test('render component with name', () => {
    render(<Greet name="Selvam" />);
    const greetElement = screen.getByText(/Hello Selvam!/i);
    expect(greetElement).toBeInTheDocument();
  });
});
