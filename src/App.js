import React from 'react';
import './App.css';
import UserCard from './UserCard';
const App = () => {
  return (
    <div className="App">
      <h1>Props</h1>
      <UserCard name="Jignesh" age="22" />
    </div>
  );
};

export default App;
