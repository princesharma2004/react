import { useState } from 'react';
import useTodo from '../context/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState({id: Date.now(), text: '', completed: false});
    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.text.trim() === '') return;

        addTodo(todo);
        setTodo({ id: Date.now(), text: '', completed: false });
    }

    return (
        <form
            className="flex items-center gap-2 bg-white/30 p-2 rounded-lg shadow-md"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Write a new todo..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-green-500 transition duration-200 bg-white/80 text-gray-800"
                value={todo.text}
                onChange={(e) => setTodo({ ...todo, text: e.target.value })}
            />
            <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 transition-colors duration-200 text-white font-semibold px-5 py-2 rounded-lg shadow"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
