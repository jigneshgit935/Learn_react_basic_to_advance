import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputValueShow, setInputValueHide] = useState(false);

  const handleChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
    setInputValueHide(false);
  };
  return (
    <div className="App">
      <h1>Get Input Box Value</h1>

      <h3>{inputValueShow ? inputValue : ''}</h3>
      <input type="text" onChange={handleChange} />
      <button onClick={() => setInputValueHide(true)}>Submit</button>
    </div>
  );
};

export default App;
