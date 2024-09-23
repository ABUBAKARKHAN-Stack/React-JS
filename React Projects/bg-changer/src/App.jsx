import { useState, useEffect } from "react"



export const App = () => {
  const bgColors = [
    'Red',
    'Green',
    'Blue',
    'Olive',
    'Lavender',
    'Wheat',
    'Black',
    'Crimson'
  ]; const [color, setColor] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => {
      setColor((prevIndex) => (prevIndex + 1) % bgColors.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [bgColors]);
  return (<>
    <div className="h-screen w-full transition-colors duration-500 grid place-content-center place-items-center" style={{ backgroundColor: bgColors[color] }}>
      <div className=" w-[95vw] p-20 rounded-full bg-[#00000090] text-white flex flex-wrap justify-center gap-8 object-contain">
        {
          bgColors.map((currVal) => {
            return(<>
            <button key={currVal} className=" animate-bounce  px-6 py-2 rounded-full" style={{ backgroundColor: currVal }}>{currVal}</button>
            </>) 
          })
        }
      </div>
    </div>
  </>)
}
