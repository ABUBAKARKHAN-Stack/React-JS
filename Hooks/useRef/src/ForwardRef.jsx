import { forwardRef, useId, useRef } from "react"

export const ForwardRef = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const data = {
            username: username.current.value,
            password: password.current.value
        }
        console.log(data);
    }
    const username = useRef(null)
    const password = useRef(null)
    return (<>
        <form className="grid gap-2" onSubmit={handleFormSubmit}>
            {/* <BeforeReact19 label="username" type='text' ref={username} />
            <BeforeReact19 label="password" type='password' ref={password} /> */}
            <AfterReact19 label="username" type='text' ref={username} />
            <AfterReact19 label="password" type='password' ref={password} />
            <button type="submit">Submit</button>
        </form>
    </>
    )
}
const BeforeReact19 = forwardRef((props, ref) => {
    const id = useId()
    return (<div>
        <label htmlFor={id}>{props.label}   </label>
        <input type={props.type} ref={ref} />
    </div>)
});

const AfterReact19 = ({label , ref}) => {
    const id = useId()
    return (<div>
        <label htmlFor={id}>{label}   </label>
        <input type={type} ref={ref} />
    </div>)
}
