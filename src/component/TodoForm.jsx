import React, { useState } from 'react'
import { useTodo } from '../context/TodoContetx';

export default function TodoForm() {

    let [todo,setTodo] = useState('')
    let {addTodo} = useTodo()

    let addHandle = (e)=>{

        if(!todo) return 

        addTodo({todo,complete : false})
        setTodo('')

        e.preventDefault()
    }

    return (
        <form onSubmit={addHandle}  className="flex">
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
