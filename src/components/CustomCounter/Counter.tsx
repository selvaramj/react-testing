import React, { useState } from 'react';

type CounterProps = {
  increment: (setCounter: React.Dispatch<React.SetStateAction<number>>) => void;
  decrement: (setCounter: React.Dispatch<React.SetStateAction<number>>) => void;
  counter: number;
};
const Counter: React.FC<CounterProps> = ({ counter, increment, decrement }) => {
  const [count, setCounter] = useState(counter);
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => increment(setCounter)}>increment</button>
      <button onClick={() => decrement(setCounter)}>decrement</button>
    </div>
  );
};

export default Counter;
