import React, { Component } from 'react';
import './App.css';
import Unmount from './Unmount';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    console.log('clicked', this.state.show);
    return (
      <div className="App">
        <h1>React Component Will Unmount</h1>
        {this.state.show ? <Unmount /> : <h2>Set Interval Removed</h2>}
        {/* example 2 */}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Removed cop
        </button>
      </div>
    );
  }
}

export default App;
