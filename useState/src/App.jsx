import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className='counterBlock'>
        <h1>Counter: {count}</h1>
        {/* Conditionally render the Increment button */}
        {count <= 10 && (
          <button className='button' onClick={() => setCount(count + 1)}>Increment</button>
        )}
        {count >= -10 && (
          <button className ="button"onClick={() => setCount(count - 1)}>Decrement</button>

        )}
      </div>
    </>
  )
}

export default App
