import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('Testing Custom Counter component', () => {
  it('make sure increment buttons works', async () => {
    const incrementBtn = jest.fn();
    const decrementBtn = jest.fn();
    userEvent.setup();
    render(
      <Counter counter={0} increment={incrementBtn} decrement={decrementBtn} />,
    );
    const incrementBtnElement = screen.getByRole('button', {
      name: 'increment',
    });
    const decrementBtnElement = screen.getByRole('button', {
      name: 'decrement',
    });
    await userEvent.click(incrementBtnElement);
    await userEvent.click(decrementBtnElement);
    expect(incrementBtn).toHaveBeenCalledTimes(1);
    expect(decrementBtn).toHaveBeenCalledTimes(1);
  });
});
