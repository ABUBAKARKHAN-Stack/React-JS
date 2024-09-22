import { useState } from 'react'
import './App.css'
import Count from './Count'
function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Click Me
      </button>
      <Count />
    </>
  )
}

export default App
