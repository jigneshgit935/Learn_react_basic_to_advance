import React from 'react';

export default function ComponentB({ sharedData, alert }) {
  //   const data = 'Jinu Sharma';

  const data = { name: 'jinu', email: 'jinu@gmail.com' };
  return (
    <div>
      <h2>SharedData : {sharedData}</h2>
      <button onClick={() => alert(data)}>click me</button>
    </div>
  );
}
