import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

return (
    <form
        onSubmit={addTodoHandler}
        className="flex items-center gap-4 mt-12 bg-gray-900 p-6 rounded-lg shadow-lg max-w-xl mx-auto"
    >
        <input
            type="text"
            className="flex-1 bg-gray-800 rounded-md border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 transition-colors duration-200"
            placeholder="What needs to be done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-md shadow hover:from-indigo-600 hover:to-purple-600 transition-all duration-200"
        >
            Add
        </button>
    </form>
)
}

export default AddTodo
