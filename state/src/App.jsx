import { useState } from "react"
export const App = () => {
  const [counter, setCounter] = useState(0)
  const addVal = () => {

    if (counter >= 20) {
      return  setCounter(0)
    } else {
      return setCounter(counter + 1)
    }
  }
  const removeVal = () => {

    if (counter <= 0) {
      returnl
    } else {
      return setCounter(counter - 1)
    }
  }
  return (<>
   
      <h1>The Current Value is : {counter}</h1> 
      <div style={{display : 'grid', placeContent: 'center'}}>
      <button onClick={addVal} style={{outline: 'none'}}>Add Value {counter}</button>
      <br />
      <button onClick={removeVal} style={{outline: 'none'}}>Decrease Value {counter} </button>
    </div>
  </>)
}
export default App