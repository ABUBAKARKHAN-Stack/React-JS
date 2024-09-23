import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // State variables
  const [length, setLength] = useState(8) // Length of the password
  const [numberAllowed, setNumberAllowed] = useState(false) // Whether numbers are allowed in the password
  const [charAllowed, setCharAllowed] = useState(false) // Whether special characters are allowed in the password
  const [password, setPassword] = useState('') // The generated password
 
  // useRef for the password input
  const passwordRef = useRef(null)

  // Function to generate the password
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' // Base string with alphabets
    if (numberAllowed) str += '0123456789' // Add numbers if allowed
    if (charAllowed) str += '!@#$%^&*(){}:"?></' // Add special characters if allowed
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length) // Generate a random index
      pass += str.charAt(char) // Append the character at the random index to the password
      setPassword(pass) // Update the password state
    }
  }, [length, numberAllowed, charAllowed, setPassword])

  // Function to copy the password to the clipboard
  const copyPassToClipboard = useCallback(()=>{
    passwordRef.current?.select() // Select the password text
    passwordRef.current.setSelectionRange(0, password.length) // Set the selection range
    window.navigator.clipboard.writeText(password) // Write the password to the clipboard
  }, [password])

  // useEffect to generate the password when dependencies change
  useEffect(() => {
    passwordGenerator() // Generate the password
  }, [length, charAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-xl flex  flex-col flex-wrap box-border  mx-auto rounded-lg text-white my-44 py-4 px-4 bg-gray-800 text-center '>
        <h3 className='my-3 text-2xl font-bold'>Password Generator</h3>
        <div className='flex shadow-md overflow-hidden mb-4  font-medium'>
          <input type="text" value={password} className='bg-[#00000090] text-sm rounded-s-md outline-none w-full py-3 px-3 text-orange-500' placeholder='Password' readOnly ref={passwordRef} />
          <button onClick={copyPassToClipboard} className='bg-blue-700  px-6 py-3 rounded-e-md uppercase transition-colors duration-500 hover:bg-blue-100 hover:text-black'>copy</button>
        </div>
        <div className='flex flex-wrap text-sm gap-x-3 '>
          <div className="flex  item-center gap-x-1">
            <input type="range" min={8} max={50} value={length} onChange={(e) => setLength(e.target.value)} className='outline-none cursor-pointer' />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" checked={numberAllowed} id='inputNumber' onChange={(e) => setNumberAllowed(e.target.checked)} />
            <label htmlFor='inputNumber'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" checked={charAllowed} id='inputchar' onChange={(e) => setCharAllowed(e.target.checked)} />
            <label htmlFor='inputchar'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
