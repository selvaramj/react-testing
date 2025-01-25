import { useState } from "react";

type useCounterProps = {
  initialState: number | 0;
};

const useCounter = ({ initialState }: useCounterProps) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => setCounter((preValue) => preValue + 1);
  const decrement = () => setCounter((preValue) => preValue - 1);

  return { counter, increment, decrement };
};

export default useCounter;
