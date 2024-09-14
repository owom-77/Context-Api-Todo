import './App.css';
import { useEffect, useState } from 'react';
import { TodoProvider } from './context/TodoContetx';
import TodoForm from './component/TodoForm';
import TodoItem from './component/TodoItem';

function App() {

  let [todos, setTodos] = useState([])

  let addTodo = (todo)=>{
    setTodos((pre)=>[{id : Date.now(),...todo},...pre])
  }

  let deleteTodo = (id)=>{
    setTodos((pre)=>pre.filter((val)=>val.id !== id))
  }

  let updateTodo = (id,todo)=>{
    setTodos((pre)=>pre.map((val)=>(val.id === id ? todo : val)))
  }

  let toggleComplete = (id)=>{
    setTodos((pre)=> pre.map((val)=>(val.id === id ? {...val,complete : !val.complete} : pre)))
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

    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}

            {todos.map((val)=>(
              <div key={val.id}
              className='w-full'>
                <TodoItem todo={val}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App;
