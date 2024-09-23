import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Home, About, Contact, Country , ErrorPage, CountryDetails } from './pages'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'country',
        element: <Country />
      },
      {
        path: '/country/:id',
        element: <CountryDetails />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
