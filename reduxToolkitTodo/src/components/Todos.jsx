import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

return (
    <section className="max-w-xl mx-auto mt-8 p-6 bg-zinc-900 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Your Todos</h2>
        <ul className="space-y-4">
            {todos.length === 0 ? (
                <li className="text-zinc-400 text-center">No todos yet. Add one!</li>
            ) : (
                todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center bg-zinc-800 px-5 py-3 rounded-lg transition hover:bg-zinc-700"
                    >
                        <span className="text-lg text-white">{todo.text}</span>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="p-2 rounded-full bg-red-500 hover:bg-red-600 transition focus:outline-none"
                            aria-label="Delete todo"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </li>
                ))
            )}
        </ul>
    </section>
)
}

export default Todos
