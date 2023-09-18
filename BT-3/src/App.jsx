import { useState } from 'react'
import './App.css'
import Shape from './components/Shape'

function App() {
  return (
    <>
<div>
      <h1>Thay đổi hình dạng</h1>
      <Shape shape="circle" width={100} height={100} text="Circle" background="blue" />
      <Shape shape="square" width={100} height={100} text="Square" background="red" />
    </div>
    </>
  )
}

export default App
