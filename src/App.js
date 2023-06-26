import React, { useState } from 'react';
import './App.css';
import UserCard from './UserCard';
const App = () => {
  const [name, setName] = useState('Jinu');

  // const userData = [
  //   {
  //     name: 'jinu',
  //     age: 22,
  //     email: 'jinu@gmail.com',
  //   },
  //   {
  //     name: 'Jignesh',
  //     age: 12,
  //     email: 'jignesh@gmail.com',
  //   },
  //   {
  //     name: 'asur',
  //     age: 54,
  //     email: 'asur@gmail.com',
  //   },
  // ];
  return (
    <div className="App">
      <h1>Props</h1>
      <UserCard name={name} />

      <button onClick={() => setName('jignesh sharma')}> Click me</button>

      {/* {userData.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          age={user.age}
          email={user.email}
        />
      ))} */}
    </div>
  );
};

export default App;
