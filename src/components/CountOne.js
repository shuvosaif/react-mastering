import React from 'react'

const CountOne = ({ count }) => {
  console.log(`Rendering CountOne`)
  return <div>CountOne - {count}</div>
}

export default React.memo(CountOne)
