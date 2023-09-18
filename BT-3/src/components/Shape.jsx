import React from 'react';

const Shape = ({ shape, width, height, text, background }) => {
  const commonStyles = {
    width: width + 'px',
    height: height + 'px',
    background: background,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={{ ...commonStyles, borderRadius: shape === 'circle' ? '50%' : '0%' }}>
      <span>{text}</span>
    </div>
  );
};

export default Shape;
