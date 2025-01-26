import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(0);
  return (
    <div>
      <h3>count: {count}</h3>
      <button
        type="button"
        onClick={() => setCount((preValue) => preValue + 1)}
      >
        increment
      </button>
      <div>
        <input
          type="text"
          name="inc-btn"
          value={add}
          onChange={(e) => setAdd(parseInt(e.target.value))}
        />
        <button onClick={() => setCount(add)}>Set</button>
      </div>
    </div>
  );
};

export default Counter;
