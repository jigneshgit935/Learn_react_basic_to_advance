import React, { Component } from 'react';
import './App.css';
class App extends Component {
  // example1
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log('Constructor called');
  }

  // example2
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // example1
  componentDidMount() {
    console.log('Component DidMount called');
  }
  render() {
    console.log('Render');
    return (
      <div className="App">
        <h1>React Component DidMount</h1>

        {/* example 2 */}
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.incrementCount}> Increment</button>
      </div>
    );
  }
}

export default App;
