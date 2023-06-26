import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>Counter Update</button>
    </>
  );
};

export default Counter;
