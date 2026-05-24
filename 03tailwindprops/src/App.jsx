import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './component/card'
function App() {
  let myObj = {
    username:"hitesh",
    age: 21
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>Tailwind test</h1>
     <Card username ="chai" btnText ="click me"/>
     <Card username="chaiaurcode" btnText ="visit me" />
     <Card/>
    </>
   
  )
}

export default App
