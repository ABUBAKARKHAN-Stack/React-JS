import { useState } from "react";
export const State = () => {
    // let value = 0 ;
    const handleClickButton = () => {
        setCount(() => count + 1)
    }
    // console.log(useState);
    const [count, setCount] = useState(0)
    console.log('Parennt Component Rendred');
    // console.log(count);
    return (<>
        <div className=" w-full h-[80vh] grid place-content-center place-items-center gap-3 text-white ">
            <h1 className="text-3xl font-semibold">{count}</h1>
            <button onClick={handleClickButton} className="px-12 py-4 bg-green-500 outline-none  rounded-md text-xl font-[500]">Increment</button>
        <ChildComponent count={count}/>
        </div>
    </>)
}
const ChildComponent = ({count}) => {
    console.log('Child Component Rendred');
    return (<div className="text-center text-2xl font-semibold">Childern Component - {count}</div>)
}

// export const Sibling = () => {
//     console.log('Sibling Component Rendred');
//     return (<div className="text-center text-2xl font-semibold">Sibling Component</div>)
// }

