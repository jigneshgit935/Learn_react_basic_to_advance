import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // example1
  constructor() {
    super();
    console.log('Contructor is called');
  }
  render() {
    console.log('Render is called');
    return (
      <div className="App">
        <h1>React LifeCycle</h1>
      </div>
    );
  }
}

export default App;
