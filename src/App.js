import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'jingesh',
      count: 0,
    };
    console.log('Constructor called');
  }
  // example1

  componentDidUpdate(prevProps, prevState) {
    // example1
    if ((this.state.count, prevState.count)) {
      alert('working');
      console.log('Component Did update', prevState.count, this.state.count);
    }
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <h1>React Component Did Update</h1>

        {/* example2 */}
        <h3>{this.state.name}</h3>

        <button onClick={() => this.setState({ name: 'Jignesh Sharma' })}>
          UpdateState
        </button>

        {/* example 3 */}
        <h6>{this.state.count}</h6>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Upsate Button
        </button>
      </div>
    );
  }
}

export default App;
