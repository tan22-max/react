import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [color, setColor] = useState("olive")

  return (
  
    <div className ="w-full h-screen duration-200"
    style={{background:color}}
    >
     <div className="fixed flex-wrap justify-center bottom-12 insert-x-0 px-2"
     >
      <div className='flex flex-wrap  justify-center gp-3 shadow-lgs bg-white px-3 py-2 rounded-3xl '>
        <button
        onClick={()=> setColor("red")}
         className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
        style={{background:"red"}}
        >RED</button>
        <button 
        onClick={()=> setColor("green")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
        style={{background:"green"}}
        >GREEN</button>
        <button
        onClick={()=> setColor("blue")}

         className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
        style={{background:"blue"}}
        >BLUE</button>
        {/* <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
        style={{background:"red"}}
        >RED</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
        style={{background:"red"}}
        >RED</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
        style={{background:"red"}}
        >RED</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
        style={{background:"red"}}
        >RED</button> */}
      </div>
     </div>
    </div>
  
  )
}

export default App
