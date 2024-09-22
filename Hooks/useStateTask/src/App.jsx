import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(0)
  function handleIncrement() {
    if (count + step <= 100) {
      setCount(count + step)
    } else {
      setCount(100)
    }

  }
  function handleDecrement() {
    if (count - step >= 0) {
      setCount(count - step)
    } else {
      setCount(0)
    }
  }
  function hanldeReset() {
    setCount(0)
    setStep(0)
  }

  return (<>
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#e6e3fb] font-[arial]">

      <div className="w-2/4 rounded-lg bg-slate-100 shadow-lg shadow-[#00000090] flex flex-col">
        <h1 className="text-3xl font-semibold text-center my-4">useState Challenge</h1>
        <div className="px-4 py-2 space-y-2">
          <p>Count : <span className="text-sky-400 font-bold text-xl">{count}</span> </p>
          <p>Step: <input minLength={0} maxLength={3} type="number" className=" px-1 bg-slate-100 border border-black rounded" value={step} onChange={(e) => setStep(e.target.valueAsNumber)} /> <span className="text-sm">MAX-RANGE From (1-100)</span></p>
        </div>
        <div className="flex justify-between px-4 text-white  my-10  ">
          <button className="bg-sky-400 px-10 py-0.5 rounded-lg" onClick={handleIncrement} disabled={count >= 100}>Increment</button>
          <button className="bg-sky-400 px-10 py-0.5 rounded-lg" onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
          <button className="bg-sky-400 px-10 py-0.5 rounded-lg" onClick={hanldeReset}>Reset</button>
        </div>
      </div>
    </div>
  </>)
}

export default App