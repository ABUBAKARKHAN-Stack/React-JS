import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  const getJokes = async () => {
    try {
      const res = await axios.get('/api/jokes')
      setJokes(res.data)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getJokes()
  }, [])

  return (
    <div>
      <h1>Chai and Full Stack</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map(joke => {
          return (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
