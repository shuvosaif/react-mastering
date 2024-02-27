import React, { useContext } from 'react'
import { WebsiteContext } from '../App'

export default function Main() {
  const { count, setCount } = useContext(WebsiteContext)

  return (
    <div>
      <h1>Main Section</h1>
      Cont Value: {count}
      <hr />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
