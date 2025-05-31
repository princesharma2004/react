import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Login()
{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleLogin = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

return (
    <div className="max-w-[350px] mx-auto mt-16 p-8 rounded-xl shadow-lg bg-white font-sans">
        <h2 className="text-center mb-6 text-2xl font-semibold text-gray-800">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="p-3 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="p-3 rounded-md border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="p-3 rounded-md border-none bg-gradient-to-r from-blue-400 to-blue-800 text-white font-bold text-base cursor-pointer transition-colors duration-200 hover:from-blue-500 hover:to-blue-900"
            >
                Login
            </button>
        </form>
    </div>
)
}
