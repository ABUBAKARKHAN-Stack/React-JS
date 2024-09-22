import { createContext, useContext } from "react"
export const BioContext = createContext()
export const BioProvider = ({ children }) => {
    const user = {
        name: 'Abubakar',
        age: 16
    }
    return (
        <BioContext.Provider value={{ user }}>
            {children}
        </BioContext.Provider>
    )
}
// export const useBioContext = () => {
//     const context = useContext(BioContext)
//     return context;
// }