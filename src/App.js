import React from 'react';
import './App.css';

import GetDataApi from './GetDataApi';
const App = () => {
  return (
    <div className="App">
      <h2>Axios method</h2>
      <div>
        <GetDataApi />
      </div>
    </div>
  );
};

export default App;
