import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div>
      <Button
        label="Button 1"
        backgroundColor="blue"
        color="white"
        borderColor="black"
        height="200px"
      />
      <Button
        label="Button 2"
        backgroundColor="green"
        color="black"
        borderColor="red"
        height="100px"
      />
    </div>
  );
}

export default App;

//thay đổi width,height,background,color,text
