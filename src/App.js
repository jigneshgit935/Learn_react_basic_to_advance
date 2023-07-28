import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log('Constructor called');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should Component Update', this.state.count);

    if (nextState.count < 5) {
      return true;
    }
    return false;
  }
  render() {
    console.log('render');
    return (
      <div className="App">
        <h1>React Component Should Update</h1>

        {/* example1 */}

        <h3>{this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          UpdateState
        </button>
      </div>
    );
  }
}

export default App;
