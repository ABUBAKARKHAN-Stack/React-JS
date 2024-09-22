import { useState } from "react"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [user , setUser] = useState('')
  
  return (<>
    <div className="section">
      <h1>Welcome To Short Circuit Evaluation</h1>
      {isLoggedIn && <p>You Are Logged In!</p>} 
      {!isLoggedIn && <p>Please Log in</p>}
      {user ? `Hello ${user} ` : 'Please Log in '}
      <div className="btns">
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
        <button onClick={() => setUser('Abubakar Khan')}>Set User</button>
        <button onClick={() => setUser('')}>Clear User</button>
      </div>
    </div>
  </>)
}
export default App