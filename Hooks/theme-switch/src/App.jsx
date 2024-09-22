import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import LightDark from './components/LightDark'

function App() {
  return (
    <ThemeProvider>
      <LightDark />
    </ThemeProvider>
  )
}

export default App