import React, { useEffect, useState } from 'react';
import './App.css';
import RenderMethod from './RenderMethod';

const App = () => {
  const [name, setName] = useState('Jignesh');
  return (
    <div className="App">
      <h1>React Render Life</h1>

      <RenderMethod name={name} />

      {/* example 2 */}
      <button onClick={() => setName('Jignesh Sharma')}> Update Name </button>
    </div>
  );
};

export default App;
