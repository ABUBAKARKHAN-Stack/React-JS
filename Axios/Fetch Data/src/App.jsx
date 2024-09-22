import './App.css'
import Movie from './pages/Movie'
import { useNavigation } from 'react-router-dom'

function App() {
  const navigation = useNavigation()

  if(navigation.state === 'loading') return <div>Loading...</div>

  return ( 
    <div className='h-screen w-full flex justify-center p-6 bg-zinc-800'>
     <Movie />
    </div>
   )
}

export default App
