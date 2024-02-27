import React, { useContext, useState } from 'react'
import { WebsiteContext } from '../App'

export default function HeaderItem() {
  const { count, setCount } = useContext(WebsiteContext)

  const [text, setText] = useState(null)

  const textHandler = (e) => {
    setText(e.target.value)
    //console.log(e.target.value)
  }

  const incrementFunc = () => {
    setCount((prevState) => prevState + 1)
  }
  const decrementFunc = () => {
    setCount((prevState) => prevState - 1)
  }

  return (
    <div>
      <h1>Header ITem</h1>
      Titlex : {text}
      <br />
      <input type='text' onChange={textHandler} />
      Cont Value: {count}
      <hr />
      <button onClick={incrementFunc}>Increment</button>
      <button onClick={decrementFunc}>DecrementByOne</button>
    </div>
  )
}
