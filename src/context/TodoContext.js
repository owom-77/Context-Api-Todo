import { createContext, useContext } from "react";

let TodoContext = createContext({
    todos : [{
        id : 1,
        todo : 'Hello',
        status : false
    }],
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleStatus : (id)=>{}
})

export let TodoProvider = TodoContext.Provider;

export function useTodos (){
    return useContext(TodoContext)
}