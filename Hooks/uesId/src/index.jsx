import { useId } from 'react'
export const Form = () => {
    const id = useId()
    // const usernameId = useId()
    // const passwordId = useId()
    // const emailId = useId()
    return (
        // <form className='flex flex-col gap-2 text-white'>
        //     <label htmlFor={usernameId}>Username</label>
        //     <input className="text-black py-2 px-2" type="text" id={usernameId} />
        //     <label htmlFor={emailId}>Email</label>
        //     <input className="text-black py-2 px-2" type="text" id={emailId} />
        //     <label htmlFor={passwordId}>Password</label>
        //     <input className="text-black py-2 px-2" type="password" name="pass" id={passwordId} />
        //     <button type="submit">Submit</button>
        // </form>

        <form className='flex flex-col gap-2 text-white'>
            <label htmlFor={id + 'usernameId'}>Username</label>
            <input className="text-black py-2 px-2" type="text" id={id + 'usernameId'} />
            <label htmlFor={id + 'emailId'}>Email</label>
            <input className="text-black py-2 px-2" type="text" id={id + 'emailId'} />
            <label htmlFor={id + 'passwordId'}>Password</label>
            <input className="text-black py-2 px-2" type="password" name="pass" id={id + 'passwordId'} />
            <button type="submit">Submit</button>
        </form>
    )
}