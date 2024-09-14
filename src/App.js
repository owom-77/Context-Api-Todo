import { useEffect, useState } from 'react';
import './App.css';
import { TodoProvider } from './context/TodoContext';
import TodoForm from './component/TodoForm';
import TodoItems from './component/TodoItems';


function App() {
  
  let [todos,setTodos] = useState([])

  let addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  let updateTodo = (id,todo)=>{
    setTodos((prev)=>prev.map((val)=>(val.id === id ? {...val,todo: todo} : val)))
  }
  
  let deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((val)=>(val.id !== id)))
  }

  let toggleStatus = (id)=>{
    setTodos((prev)=>prev.map((val)=>(val.id === id ? {...val,status : !val.status} : val)))
  }

  useEffect(()=>{
    let todos = JSON.parse(localStorage.getItem('todos'))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  return (

    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleStatus}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((val)=>(
              <div className='w-full' key={val.id} >
                <TodoItems todo = {val}/>
              </div>
            ))}

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App;
