import React, { useState, useCallback } from 'react'

const CounterButton = () => {
  const [count, setCount] = useState(0)

  // useCallback is used to memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, []) // Empty dependency array means this callback doesn't depend on any props or state

  return (
    <div>
      <p>Count: {count}</p>
      {/* The increment function is passed as a prop */}
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default CounterButton
