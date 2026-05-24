import { createRoot } from 'react-dom/client'
import App from './App.jsx' 
import React from 'react'
// since app is an function , so can we declear it hear and run??

// function MyApp(){
//     return(
//         <div>
//             <h1>custom app</h1>
//         </div>
//     )
// }
const ReactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to vist google'
} // why not working -> becuse has this own perameter to pass , but this is my . must folow convention

const anotherElement = (
    <a href="https://google.com" target = '_blank'>visit google</a>
)
const reactelement = React.createElement(
    'a',
    {href: 'https://google.com',target:'_blank'},
    'click me to visit google'
)

createRoot(document.getElementById('root')).render(
  
    <App />
    // ReactElement
    // MyApp() // do run but should not 
    // anotherElement
    // reactelement

  
)
