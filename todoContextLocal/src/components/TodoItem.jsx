import { useState } from 'react';
import useTodo from '../context/TodoContext';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.text);
    const { updateTodo, deleteTodo, toggleTodo } = useTodo();

    const toggleCompleted = () => {
        toggleTodo(todo.id);
    };

    const editTodo = () => {
        if (todoMsg.trim() === "") return;
        updateTodo(todo.id, { text: todoMsg });
        setIsTodoEditable(false);
        setTodoMsg(todoMsg.trim());
    };

    return (
        <div
            className={`flex items-center border border-black/10 rounded-lg px-4 py-2 gap-x-4 shadow-sm shadow-white/50 transition-all text-black w-full ${
                todo.completed ? "bg-green-100" : "bg-purple-100"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer accent-green-500 w-5 h-5"
                checked={todo.completed}
                onChange={toggleCompleted}
                aria-label="Toggle completed"
            />
            <input
                type="text"
                className={`flex-1 border outline-none bg-transparent rounded-lg text-lg transition-all duration-200 ${
                    isTodoEditable ? "border-black/20 px-2 bg-white" : "border-transparent"
                } ${todo.completed ? "line-through text-gray-400" : "text-black"}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
                aria-label="Todo text"
            />
            <button
                className="inline-flex w-9 h-9 rounded-lg text-lg border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-200 transition disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
                aria-label={isTodoEditable ? "Save" : "Edit"}
                title={isTodoEditable ? "Save" : "Edit"}
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>
            <button
                className="inline-flex w-9 h-9 rounded-lg text-lg border border-black/10 justify-center items-center bg-gray-50 hover:bg-red-100 text-red-500 transition"
                onClick={() => deleteTodo(todo.id)}
                aria-label="Delete"
                title="Delete"
            >
                🗑️
            </button>
        </div>
    );
}

export default TodoItem;
