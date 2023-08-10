import React from 'react';
import './App.css';
import { Alert, Button } from 'react-bootstrap';
const App = () => {
  return (
    <div className="App ">
      <h1 className="">Bootstrap</h1>
      <Button variant="primary">button</Button>
      <Alert variant="danger">This is a alert—check it out!</Alert>s
    </div>
  );
};

export default App;
