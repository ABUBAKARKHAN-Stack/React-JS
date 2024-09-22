import { ForwardRef } from "./ForwardRef"
// import { UseRef } from "./UseRef"
export const App = () => {
  return <div className="h-screen w-full flex flex-col gap-2 justify-center items-center text-blue-500 bg-[#000017]">
    {/* <UseRef /> */}
    <ForwardRef />
  </div>
}
