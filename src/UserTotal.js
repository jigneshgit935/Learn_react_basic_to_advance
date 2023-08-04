import React, { useEffect } from 'react';
import './App.css';
const UserTotal = (props) => {
  useEffect(() => {
    console.log('Called with props!!!');
  });

  useEffect(() => {
    console.log('Count is :', props.count);
  }, [props.count]);
  useEffect(() => {
    console.log('total is :', props.total);
  }, [props.total]);
  return (
    <div>
      <div className="App">
        <h2>Count: {props.count}</h2>
        <h2>Total: {props.total}</h2>
      </div>
    </div>
  );
};

export default UserTotal;
