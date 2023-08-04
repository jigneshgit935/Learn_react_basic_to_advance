import React, { useEffect, useState } from 'react';
import './App.css';
import UserTotal from './UserTotal';
const App = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(100);

  useEffect(() => {
    console.log('After Render!!');
  }, [count]);

  return (
    <div className="App">
      <h1>useEffect with conditon hooks</h1>

      <UserTotal count={count} total={total} />

      <br />
      <br />
      <br />
      {/* <h2>Count: {count}</h2> */}
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <br />
      <br />
      <br />
      {/* <h2>Total: {total}</h2> */}
      <button onClick={() => setTotal(total + 1)}>Update Total</button>
    </div>
  );
};

export default App;
