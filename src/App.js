import React, { useState } from 'react';
import './App.css';
import User from './User';

const App = () => {
  // example 1
  const buttonClick = () => {
    console.log('Button Clicked');
  };

  // example2
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Passing Function as Props</h1>
      <User
        buttonClick={buttonClick}
        count={count}
        incrementCount={incrementCount}
      />
    </div>
  );
};

export default App;
