import React, { useState } from 'react'
import { useTodos } from '../context/TodoContext';

export default function TodoForm() {

    let {addTodo} = useTodos()
    let [todo,setTodo] = useState('')

    let add = (e)=>{

        if(!todo) return 

        addTodo({todo,status : false})
        setTodo('')

        e.preventDefault()
    }

    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
