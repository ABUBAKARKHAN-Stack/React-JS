import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(1)

  const MultipliedValue = value * 5
  const handleMultiply = () => {
    setValue((prevValue) => prevValue + 1)
  }
  return (
    <>
      <h1>Main Value: {value}</h1>
      <button onClick={handleMultiply}>Click To Mulitply by 5</button>
      <h2>Multiplied Value: {MultipliedValue}</h2>

    </>
  )
}

export default App
