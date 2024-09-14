import React, { useState } from 'react'
import { useTodos } from '../context/TodoContext';

export default function TodoItems({todo}) {

    let {toggleStatus,updateTodo,deleteTodo} = useTodos()
    let [msg,setMsg] = useState(todo.todo)
    let [isTodoEditable,setToTodoEditable] = useState(false)

    let toggle = ()=>{
        toggleStatus(todo.id)
    }

    let edit = ()=>{
        updateTodo(todo.id,msg)
        setToTodoEditable(false)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.status ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked = {todo.status}
                onChange={toggle}
                
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.status ? "line-through" : ""}`}
                value={msg}
                onChange={(e)=>setMsg(e.target.value)}
                readOnly = {!isTodoEditable}
                
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={()=>{
                    if(todo.status) return;

                    if(isTodoEditable){
                        edit()
                    }else{
                        setToTodoEditable((prev)=> !prev)
                    }
                }}
                //disabled = {todo.status}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}
