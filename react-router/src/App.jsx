import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Movie from './pages/Movie'
import Contact from './pages/Contact'
import AppLayout from './components/layout/AppLayout'
import getMoviesData from './components/getMoviesData'

function App() {
  // Way one
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <div className='text-red-500'>Error</div>,
      loader: getMoviesData,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/movie',
          element: <Movie />
        },
        {
          path: '/contact',
          element: <Contact />
        },
      ]
    }

  ])

  return <RouterProvider router={router} />

  //  Way Two
  // const route = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/about' element={<About />} />
  //       <Route path='/movie' element={<Movie />} />
  //       <Route path='/contact' element={<Contact />} />
  //     </Route>
  //   )
  // )
  // return <RouterProvider router={route} />
}

export default App