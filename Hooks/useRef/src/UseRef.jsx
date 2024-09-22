import { useRef } from "react"

export const UseRef = () => {
    const username = useRef(null)
    const password = useRef(null)
    const handleFormsubmit = (e) => {
        e.preventDefault()
       console.log(username.current.value);
       console.log(password.current.value);
    }

    return (
        <>
            <form className="flex flex-col justify-center gap-2 text-white w-[40vw]" onSubmit={handleFormsubmit}>
                <h1 className="mx-auto text-2xl">Hey User welcome Please Register Login Form</h1>
                <input type="text" name="userName" id="usernme" className="text-black py-2" ref={username} />
                <input type="password" name="password" id="password" className="text-black py-2" ref={password} />
                <button className="bg-white/50 px-4 py-2 rounded w-fit mx-auto">Register</button>
            </form>
        </>
    )
}