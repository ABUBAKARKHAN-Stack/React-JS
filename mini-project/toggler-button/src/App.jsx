import { ToggleButton } from "./components/ToggleButton"
export const App = (props)=>{
  return(<>
     <main className="h-screen grid place-content-center place-items-center">
        <ToggleButton onOff={props.onOff} />
     </main>
  </>)
}