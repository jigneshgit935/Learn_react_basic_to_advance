import React, { Component } from 'react';
import './App.css';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      // data: 'Jignesh',
      data: 1,
    };
  }

  demo() {
    this.setState({
      // data: 'Jinu Sharma',
      data: this.state.data + 1,
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <h1>{this.state.data}</h1>

        <button onClick={() => this.demo()}>Cick me</button>
      </div>
    );
  }
}

export default App;
