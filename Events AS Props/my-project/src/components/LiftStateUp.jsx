import { useState } from "react"

export const LiftStateUp  = (props)=>{
    const [inputVal , setInputVal] = useState('')
    return (<>
    <div className="h-screen grid place-content-center place-items-center text-white text-sm gap-2">
    <InputComponent inputVal={inputVal} setInputVal={setInputVal} />
    <DisplayComponent inputVal={inputVal} setInputVal={setInputVal}  />
    </div>
    </>)
}

const InputComponent = ({inputVal , setInputVal})=>{

    return(<>
    <input type="text" className="text-black px-2 py-2 w-64 h-12 text-sm placeholder:text-[#000] outline-1 outline-blue-600" placeholder="Enter Your Name...." value={inputVal} onChange={(e)=> setInputVal(e.target.value)} />
    </>)
}

const DisplayComponent = ({inputVal})=>{

    return <p>The current Input Value is : {inputVal} </p>
}