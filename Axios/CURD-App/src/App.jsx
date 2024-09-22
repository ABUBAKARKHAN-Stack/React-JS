import { useEffect, useState } from 'react'
import './App.css'
import { getPost } from './API/PostApi';
import AddPost from './components/AddPost';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([])



  return (
    <div className="flex flex-col h-full w-full  bg-zinc-900">

      <Posts />
    </div>
  )
}

export default App
