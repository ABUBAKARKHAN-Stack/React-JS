import { useContext } from "react"
import { BioContext } from "./BioData"
function Home() {
    const {user} = useContext(BioContext)
    return (
        <div>My Name is {user.name}. I am {user.age} Years Old.</div>
    )
}
export default Home