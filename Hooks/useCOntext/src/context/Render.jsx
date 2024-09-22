import {UserProvider, useUser } from "./Context"
function Context() {
    return (
        <UserProvider>
            <Render />
        </UserProvider>
    )
}
export default Context
export function Render() {
    // const { user } = useContext(UserContext)
    const { user } = useUser()
    return (
        <div >Hello My Name is {user.name} and My Age is {user.age}</div>
    )
}

