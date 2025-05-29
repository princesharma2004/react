import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card songName="Pal Pal" singerName="Afusic"/>
      <Card songName="SADQAY" singerName=" AASHIR WAJAHAT"/>
    </>
  )
}

export default App
