import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Jignesh Sharma',
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Class Component Props</h1>
        {/* <UserList name="jinu" email="jinu@gmail.com" /> */}

        {/* Exmaple 2 */}
        <UserList name={this.state.name} email="jinu@gmail.com" />
        <button
          onClick={() => this.setState({ name: 'Name is Sharma jignesh' })}
        >
          Update
        </button>
      </div>
    );
  }
}

export default App;
