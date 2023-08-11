import React, { Component } from 'react';
import './App.css';
import CounterPureComponent from './CounterPureComponent';
class App extends Component {
  // example 1

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // example 1
  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    console.log('Parent Renedered!');

    return (
      <div className="App">
        <h1>Pure Component</h1>

        <CounterPureComponent
          count={this.state.count}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default App;
