// import { Event } from "./components/Event"
// import { EventPropagation } from "./components/EventPropagation";
// import { State } from "./components/hooks/State"
// import { Sibling } from "./components/hooks/State"
// import { DerivedState } from "./components/DerivedState"
import { LiftStateUp } from "./components/LiftStateUp"
export const App = (props) => {
  // const {users}  = props
  // const {onClick} = props
  return (
    <>
      {/* <EventPropagation onButtonClick={onClick}/> */}
      {/* <State /> */}
      {/* <Sibling /> */}
      {/* <DerivedState users={users} /> */}
      <LiftStateUp />
    </>
  )
}