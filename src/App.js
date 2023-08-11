import React, { useState } from 'react';
import './App.css';
import ChildComponent from './ChildComponent';
import ComponentB from './ComponentB';

// children to parent data shared
const App = () => {
  // example 1
  const [sharedData, setSharedData] = useState('');

  const handleChange = (newValue) => {
    console.log(newValue);
    setSharedData(newValue);
  };

  // example 2
  const parent = (data) => {
    alert(data.name);
    console.log(data);
  };
  return (
    <div className="App">
      <h1>React Lifting State Up</h1>

      <br />
      <br />
      <br />

      <ChildComponent sharedData={sharedData} handleChange={handleChange} />
      <ComponentB sharedData={sharedData} alert={parent} />
    </div>
  );
};

export default App;
