import { useParams } from "react-router-dom"
const User = ()=>{
    const {userid} = useParams()
    return(
        <>
        <h1 className="flex justify-center items-center py-4 bg-slate-500 text-2xl font-bold">User: {userid}</h1>
        </>
    )
}
export default User