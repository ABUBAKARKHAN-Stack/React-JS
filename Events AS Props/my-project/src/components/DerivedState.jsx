import { useState } from "react"
// export const DerivedState = () => {
//     return (<>
//         <div className="grid place-content-center place-items-center h-[100vh] gap-2 text-3xl font-sans font-[500] text-white">
//             {
//                 users.map((currVal, index) => {
//                     return (<>

//                         <div>
//                             NAME : {currVal.name} - AGE : {currVal.age}
//                         </div>
//                     </>)
//                 })
//             }
//         </div>
//     </>)
// }

export const DerivedState = () => {
    const [users, setUsers] = useState([
        { name: 'Abubakar', age: 17 },
        { name: 'Anas', age: 21 },
        { name: 'Okasha', age: 20 },
        { name: 'Osama', age: 24 }
    ])
    console.log(users);
    // Dervied State for Total users
    const userCount = users.length
    // Derived State for AVG Age Of Users
    const avgAge = users.reduce((acc , currVal)=> acc + currVal.age ,0) / userCount
    return (<>
        <div className="grid place-content-center place-items-center gap-2 h-screen text-3xl text-white font-mono font-light">
            <h1 className="text-4xl uppercase font-[400] mb-3">Final merit List</h1>
            {
                users.map((currVal, index) => {
                    return (<>
                        <div>
                            {currVal.name} is {currVal.age} Years Old.
                        </div>
                    </>)
                })
            }
            <div>
            <p className="text-[16px]">Total Users : {userCount}</p>
            <p className="text-[16px]">Average age : {avgAge}</p>
            </div>
        </div>
    </>)
}
 
