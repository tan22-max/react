// kis chise ka content :??

import React from 'react';
import { createContext , useContext } from 'react';

export const TodoContext = createContext({
   todos:[{
      id:1,
    todo : "todo message",
    completed : "false"
   }],
   addtodo = (todo)=>{}
   updatetodo =(todo,id)=>{}
   deletetodo = (todo,id)=>{}
   togglecomplete = (id)=>{}
})

export const usetodo=()=>{
    return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider;


