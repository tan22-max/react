import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App /> // custom tag (like html tag) 
  
); 
// 
// createroot is used to create a root for our React application, and then we render the App component inside that root. 
// This is the entry point of our React application, where we tell React to render our App component into the DOM element with the id of 'root'.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
