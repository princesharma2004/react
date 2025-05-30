import { useState } from 'react'
import Bar from './components/Bar'
import './App.css'

function App()
{
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-screen bg-gradient-to-br from-teal-500 to-teal-800 pt-8 pb-32">

      <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-rose-500 to-rose-800 text-transparent bg-clip-text drop-shadow-lg mb-8">
        Password Generator
      </h1>
      <Bar/>

    </div>
  )
}

export default App
