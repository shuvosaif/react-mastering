import React from 'react'

const CounterButton = ({ handler, title }) => {
  console.log(` rendering ...... ${title}`)
  return (
    <div>
      <button onClick={handler}>{title}</button>
    </div>
  )
}

export default React.memo(CounterButton)
