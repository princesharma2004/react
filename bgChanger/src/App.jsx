import { useState } from 'react'
import NevBar from './components/nevBar'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div className='w-screen h-screen duration-200' style={{backgroundColor: color}}>
        <NevBar setColor={setColor}/>
      </div>
    </>
  )
}

export default App
