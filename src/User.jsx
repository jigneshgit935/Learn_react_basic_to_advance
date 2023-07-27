import React from 'react';

const User = (props) => {
  console.log(props);
  return (
    <>
      <h2>User Components</h2>

      {/* example 1 */}
      <button onClick={props.buttonClick}>Click me</button>

      {/* example2 */}
      <p>Count:{props.count}</p>
      <button onClick={props.incrementCount}>Increment</button>
    </>
  );
};

export default User;
