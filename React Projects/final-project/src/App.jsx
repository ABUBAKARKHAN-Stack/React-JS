import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components'
import Lenis from 'lenis'
import './App.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className='w-full h-full text-white '>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
