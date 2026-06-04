import { useState, useEffect} from 'react'
import { ThemeProvider } from './context/ThemeContext.js'
import './App.css'
import Card from './components/Card.jsx'
import ThemeBtn from './components/ThemeBtn.jsx'

function App() {
  const[themeMode , setthemeMode] = useState("light");

  const lightTheme = ()=>{
    setthemeMode("light")
  }
  const darkTheme =()=>{
    setthemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    <ThemeProvider value={{themeMode ,lightTheme,darkTheme}}>
      
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <Card/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <ThemeBtn/>
            </div>
          </div>
      </div>

    </ThemeProvider>
  )
}

export default App
