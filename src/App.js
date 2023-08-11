import React from 'react';
import './App.css';
import Resusable from './Resusable';
import ReusableList from './ReusableList';
const App = () => {
  const handleButton = () => {
    alert('button clicked');
  };
  const handleButtonAgain = () => {
    alert('Click again clicked');
  };
  const handleButtonSubmit = () => {
    alert('Submit clicked');
  };

  // exampe 2
  const countries = ['USA', 'India', 'Canada', 'Austrailia', 'SriLanka'];
  return (
    <div className="App">
      <h1>Resuable components</h1>
      <Resusable text="Click Me" onClick={handleButton} />
      <Resusable text="Click Again" onClick={handleButtonAgain} />
      <Resusable text="Submit" onClick={handleButtonSubmit} />

      <br />
      <br />
      <br />

      <ReusableList items={countries} />
    </div>
  );
};

export default App;
