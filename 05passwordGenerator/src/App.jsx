import { useState, useCallback, useEffect ,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false) // Fixed typo here
  const [characterAllowed, setCharacterAllowed] = useState(false) // Fixed setter function name
  const [Password, setPassword] = useState("")
  const passwordref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*-_+=[]{}"
    
    // Fixed: changed 'array.length' to just 'length'
    for (let i = 1; i <= length; i++) {
      // Fixed: removed '+ 1' to avoid index out of bounds string errors
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char)
    }
    setPassword(pass);
    
  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard= useCallback(()=>{
    window.navigator.clipboard.writeText(Password)
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,9999)
  },[Password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, characterAllowed ])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-10 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3 text-xl'>Password Generator</h1>
        
        {/* Fixed nested className string here 👇 */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type="text"
            value={Password}
            className='outline-none w-full py-2 px-3 bg-white text-gray-800'
            placeholder='password'
            readOnly
            ref={passwordref}
          />
          <button  
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-4 py-0.5 shrink-0 hover:bg-blue-800 transition-colors'>
            copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2 justify-between'>
          {/* Range Slider */}
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(Number(e.target.value)) }}
            />
            <label>Length: {length}</label>
          </div>

          {/* Numbers Checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed} // Use checked instead of defaultChecked for fully controlled components
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="cursor-pointer">Numbers</label>
          </div>

          {/* Characters Checkbox */}
          <div className="flex items-center gap-x-1">
            <input
               type="checkbox"
               checked={characterAllowed} // Fixed variable mapping here 👇
               id="characterInput"
               onChange={() => {
                 setCharacterAllowed((prev) => !prev )
               }}
             />
            <label htmlFor="characterInput" className="cursor-pointer">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App