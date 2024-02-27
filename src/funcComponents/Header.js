import React from 'react'
import HeaderItem from './HeaderItem'

export default function Header() {
  return (
    <div>
      {/* <h1>Header</h1>
      Cont Value: {count}
      <hr />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      <hr />
      <HeaderItem />
    </div>
  )
}
