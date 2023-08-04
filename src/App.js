import React, { useEffect, useState } from 'react';
import './App.css';
const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // alert('useEffect Hooks');
    console.log('useEffect Hooks');

    console.log('Updating');
  });
  return (
    <div className="App">
      <h1>useEffect</h1>

      <br />
      <br />
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
};

export default App;
