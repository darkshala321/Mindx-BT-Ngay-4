import { useState } from 'react'
import './App.css'
import Input from './components/Input'

function App() {
  return (
    <div>
      <h1>Primary Input:</h1>
      <Input typeInput="primary" />

      <h1>Secondary Input:</h1>
      <Input typeInput="secondary" />

    </div>
  )
}

export default App
