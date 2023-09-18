import React from 'react';

function Button({label, backgroundColor, color, borderColor, height}) {

  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: color,
    border: `2px solid ${borderColor}`,
    padding: '10px 20px',
    cursor: 'pointer',
    height: height,
  };

  return (
    <button style={buttonStyle}>
      {label}
    </button>
  );
}

export default Button;