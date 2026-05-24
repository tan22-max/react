import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App(){
  let [counter,setcounter] = useState(15);

  const addValue = ()=>{
    console.log("clicked",counter);
    if(counter<20){
      setcounter(counter+1)

    }
    
  }
  const removevalue = ()=>{
    if(counter>0){
      setcounter(counter-1)
    }
  }
  return ( 
    <>
     <h1>chai aur code</h1>
     <h2>counter value: {counter}</h2>
     <button
     onClick ={addValue}
     >Add value {counter}</button>
     <br/>
     <button
     onClick={removevalue}
     > remove value {counter}</button>

    </>
    
  )
}

export default App
