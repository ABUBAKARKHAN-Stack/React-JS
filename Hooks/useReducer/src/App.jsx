import './App.css'
import React, { useReducer } from 'react'

function App() {
  const reducer = (state, action) => {
    console.log(state , action);
    if(action.type === 'INCREMENT'){
      return state + 1
    }
    if(action.type === 'DECREMENT'){
      return state - 1
    } 
   }
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <h1>{count}</h1>
      <button disabled={count >= 10} onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <br />
      <br />
      <button disabled={count <=0} onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  )
}

export default App