import React from 'react';

const Input = ({ typeInput }) => {
  const inputStyle = {
    backgroundColor: typeInput === 'primary' ? 'blue' : 'yellow',
  };

  return (
    <input
      type="text"
      style={inputStyle}
      placeholder={`Enter ${typeInput} input...`}
    />
  );
};

export default Input;
