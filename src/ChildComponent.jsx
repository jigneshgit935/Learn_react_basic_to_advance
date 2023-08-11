import React from 'react';

function ChildComponent({ sharedData, handleChange }) {
  // exampple 1
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    handleChange(newValue);
  };
  return (
    <div>
      <input type="text" value={sharedData} onChange={handleInputChange} />
    </div>
  );
}

export default ChildComponent;
