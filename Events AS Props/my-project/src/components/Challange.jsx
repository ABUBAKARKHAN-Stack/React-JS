import { useState } from "react"
// export const DerivedState = () => {
//     return (<>
//         <div className="grid place-content-center place-items-center h-[100vh] gap-2 text-3xl font-sans font-[500] text-white">
//             {
//                 users.map((currVal, index) => {
//                     return (<>

//                         <div>
//                             NAME : {currVal.name} - AGE : {currVal.Age}
//                         </div>
//                     </>)
//                 })
//             }
//         </div>
//     </>)
// }

export const DerivedState = () => {
    const [users, setUsers] = useState([
        { name: 'Abubakar', Age: 17 },
        { name: 'Anas', Age: 21 },
        { name: 'Okasha', Age: 20 },
        { name: 'Osama', Age: 24 }
    ])
    return (<>
        <div className="grid place-content-center place-items-center gap-2 h-screen text-3xl text-white font-mono font-light">
            <h1 className="text-4xl uppercase font-[400] mb-3">Final merit List</h1>
            {
                users.map((currVal, index) => {
                    return (<>
                        <div>
                            {currVal.name} is {currVal.Age} Years Old Selected as a Front End Engineer {':)'}.
                        </div>
                    </>)
                })
            }
        </div>
    </>)
}
 
