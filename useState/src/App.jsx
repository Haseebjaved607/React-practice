import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0); // Tracks the counter value
  const [lastAction, setLastAction] = useState(''); // Tracks the last action
  const [actionTrigger, setActionTrigger] = useState(0); // Triggers useEffect on every click

  useEffect(() => {
    // Trigger alerts based on the last action
    if (lastAction === 'increment') {
      alert('Added one on increment');
    } else if (lastAction === 'decrement') {
      alert('Subtracted one on decrement');
    }
  }, [actionTrigger, lastAction]); // Runs every time `actionTrigger` changes

  const handleIncrement = () => {
    setCount((prev) => prev + 1); // Update the counter
    setLastAction('increment'); // Mark the action
    setActionTrigger((prev) => prev + 1); // Increment the trigger
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1); // Update the counter
    setLastAction('decrement'); // Mark the action
    setActionTrigger((prev) => prev + 1); // Increment the trigger
  };

  return (
    <div className="counterBlock">
      <h1>Counter: {count}</h1>
      {/* Increment button */}
      {count <= 10 && (
        <button className="button" onClick={handleIncrement}>
          Increment
        </button>
      )}
      {/* Decrement button */}
      {count >= -10 && (
        <button className="button" onClick={handleDecrement}>
          Decrement
        </button>
      )}
    </div>
  );
}

export default App;
