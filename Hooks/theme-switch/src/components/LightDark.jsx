import React from 'react'
import { useTheme } from '../context/ThemeContext'

function LightDark() {
    const { theme, setTheme } = useTheme()
    const handleThemeSwitch = () => {
        setTheme((prevTheme) => prevTheme === 'dark' ? 'light' : 'dark')
        console.log(theme);
    }
    return (
        <div className={`w-full h-screen flex flex-col gap-5 justify-center items-center transition-colors duration-500 ease-linear ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-yellow-300'}`}>
            <p>Dark Light Mode Toggle Website</p>
            <p>Hello! Here's Student Of Thapa  Techinical & Learning React v19</p>
            <button onClick={handleThemeSwitch} className='px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded text-white'>{theme === 'dark' ? 'Switch To Light Mode' : 'Switch To Dark Mode'}</button>
        </div>
    )
}

export default LightDark
