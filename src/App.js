import React from 'react';
import './App.css';
// examppl 2
import './style.css';

// example 4
import Styles from './style.module.css';

// example 5
import './style.scss';
const App = () => {
  // example 3
  const headline = {
    color: '#000',
    backgroundColor: 'red',
  };
  return (
    <div className="App">
      <h1>React Style Methods</h1>

      {/* example 1 {inline css} */}
      <h1 style={{ color: 'white', backgroundColor: 'green' }}>Inline Css</h1>

      {/* example 2 Normal css */}
      <h1 className="primary">Normal Css</h1>

      {/* example 3 css in js */}
      <h1 style={headline}> Css in js</h1>

      {/* example 4 css module */}
      <h1 className={Styles.title}> Css Module</h1>

      {/* example 5 sass and scss */}
      <h1 className="primary-sass">
        Sass and <span>Scss</span>
      </h1>
    </div>
  );
};

export default App;
