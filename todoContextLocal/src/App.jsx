import { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './components'

function App()
{
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {setTodos((prevTodos) => [...prevTodos, todo])}
  const updateTodo = (id, updatedTodo) => {setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo)))}
  const deleteTodo = (id) => {setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))}
  const toggleTodo = (id) => {setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))}

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || []
    setTodos(storedTodos)
  }, [])
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}>
      <div className="bg-gradient-to-br from-[#172842] to-[#274060] min-h-screen py-10">
        <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-2xl px-8 py-6 bg-white/10 backdrop-blur-md text-white">
          <h1 className="text-3xl font-extrabold text-center mb-10 mt-4 tracking-wide drop-shadow-lg">
            Manage Your <span className="text-blue-400">Todos</span>
          </h1>
          <div className="mb-6">
            <TodoForm />
          </div>
          <div className="flex flex-col gap-4">
            {todos.length === 0 ? (
              <p className="text-center text-gray-300 italic">No todos yet. Add your first one!</p>
            ) : (
              todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
