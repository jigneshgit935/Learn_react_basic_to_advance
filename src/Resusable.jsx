import React from 'react';

const Resusable = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Resusable;
