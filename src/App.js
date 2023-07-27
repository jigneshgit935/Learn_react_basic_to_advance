import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className="App">
      <h1>Hide and Toggle</h1>
      {status ? <div className="status">Content</div> : ''}

      <button onClick={() => setStatus(false)}>hide</button>
      <button onClick={() => setStatus(true)}>Show</button>

      {/* Using only one button */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => setStatus(!status)}>toggle</button>
    </div>
  );
};

export default App;
