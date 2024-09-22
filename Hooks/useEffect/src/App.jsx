import { useEffect, useState } from "react"

export const App = () => {
  const [counter, setCounter] = useState(0)
  useEffect(()=>{
    console.log('Count Value is' , counter);
  },[counter])
  return (

    <div className="h-screen w-full flex flex-col justify-center items-center  bg-black/80 text-white" >
      <p>Counter : {counter}</p>
      <button className="px-4 py-2 bg-slate-100/45" onClick={()=> setCounter(counter + 1)}>Increment</button>
    </div>
  )

}

