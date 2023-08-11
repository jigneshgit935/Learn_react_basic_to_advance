import React, { useState } from 'react';
import './App.css';
import ChildComponent from './ChildComponent';
const App = () => {
  // example 1
  const [count, setCount] = useState(0);

  // examplw 1
  console.log('parent rendered');
  return (
    <div className="App">
      <h2>Memo</h2>

      <ChildComponent count={count} />

      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Count+</button>
    </div>
  );
};

export default App;
