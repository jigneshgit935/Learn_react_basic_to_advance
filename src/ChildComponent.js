import React, { memo } from 'react';

const ChildComponent = ({ count }) => {
  console.log('child Component rendered');
  return (
    <div>
      <h2>ChildComponent count : {count}</h2>
    </div>
  );
};

export default memo(ChildComponent);
