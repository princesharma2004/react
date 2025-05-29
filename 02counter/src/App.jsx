import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function increment(counter, setCounter)
{
  if (counter >= 20)
  {
    return;
  }
  setCounter(counter+1);
}

function decrement(counter, setCounter)
{
  if (counter <= 0)
  {
    return;
  }
  setCounter(counter-1);
}

function App()
{
  let [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <button id="increment" onClick={() => increment(counter, setCounter)}>Increment</button>

        <h1 id="counter">Counter : {counter}</h1>

        <button id="decrement" onClick={() => decrement(counter, setCounter)}>Decrement</button>
      </div>
    </>
  )
}

export default App
