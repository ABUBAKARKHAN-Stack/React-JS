import { useEffect, useState } from "react"

export const UseEffect = () => {
    const [counter, setCounter] = useState(0)
    const [user, setUser] = useState('')
    useEffect(()=>{
        document.title = `Count: ${counter}`
    },[counter])
    useEffect(() => {
        console.log('Name is ', user);
    }, [user, counter])
    return (
        <>

            <title>counter {counter}</title>
            <div className="h-screen w-full grid place-content-center place-items-center gap-4 bg-blue-200">
                <h1 className="text-3xl ">UseEffect Challange</h1>
                <p className="text-xl">Count : {counter}</p>
                <button onClick={() => setCounter(counter + 1)} className="className= px-8 py-2 bg-black/80 text-white" >
                    Increment
                </button>
                <p>Name : {user}</p>
                <input type="text" onChange={(e) => setUser(e.target.value)} value={user} className="py-2 px-4 rounded bg-white/50 border border-black" />
            </div>
        </>
    )

}