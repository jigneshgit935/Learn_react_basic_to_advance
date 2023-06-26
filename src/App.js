import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [data, setData] = useState('Jignesh');
  const updateName = () => {
    setData('Jinu Sharma');
  };

  console.log('rendr-------');

  return (
    <>
      <div className="App">
        <h1>{data}</h1>

        <button onClick={updateName}>Update name</button>
        <br></br>
        <br></br>
        <Counter />
      </div>
    </>
  );
}

export default App;
