import { createContext, useContext } from "react";
export const UserContext = createContext()
export const UserProvider = ({ children }) => {
    const user = {
        name: 'XYZ',
        age: 2922
    }
    return (
        <UserContext.Provider value={{ user }}  >
            {children}
        </UserContext.Provider>
    )
}
export const useUser = () => {
    const context = useContext(UserContext)
    return context
}
