import { useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0)
  const handleIncrement = ()=>{
    setCount((prev)=>{
      console.log(prev);
   return prev + 1
    })
  }
  console.log(count, "Outer");
  return (
    <>
      <div style={{ backgroundColor:'white', padding:'20px', display: "flex", flexDirection : 'column' , justifyContent: 'center', alignItems: "center", marginTop: '10rem' }}>
        <p>Count : {count}</p>
        <button onClick={handleIncrement} style={{padding: "8px  20px" , borderRadius: "5px", background:'#00000090', color: "wheat"}}>Increment</button>
      </div>
    </>
  )
}