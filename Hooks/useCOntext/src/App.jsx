import './App.css'
import { BioProvider } from './BioData'
import Home from './Home'
function App() {


  return (
    <BioProvider>
      <Home />
    </BioProvider>
  )
}

export default App
