import { useState } from "react"

export const ToggleButton = () => {
    return <ToggleBody />
}
const ToggleBody = () => {
    const [isOn, setIsOn] = useState(false)
    const logicStyle = isOn ? "on" : "off"
    const toggleStyle = isOn ? 'bg-[#4caf50]' : 'bg-[#fff]'
    return (<>
        <div className={`h-20 cursor-pointer w-48 rounded-full flex justify-start items-center px-2 transition-all duration-500 ${toggleStyle}`} onClick={handleButton}>
            <button className={`outline-none h-16 w-16 rounded-full flex justify-center items-center transition-all duration-500 ${logicStyle}`}>
                <p className="uppercase font-bold ">{logicStyle}</p>
            </button>
        </div>
    </>)
    function handleButton() {
        setIsOn(!isOn)
    }
}

