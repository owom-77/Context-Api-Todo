import { createContext, useContext } from "react";

export let TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo : 'Hello',
            complete : false
        }
    ],
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{},
})

export let TodoProvider = TodoContext.Provider;

export function useTodo(){
    return useContext(TodoContext)
}
