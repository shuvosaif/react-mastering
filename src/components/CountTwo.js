import React from 'react'

const CountTwo = ({ count }) => {
  console.log(`Rendering CountTwo`)
  return <div>CountTwo - {count}</div>
}

export default React.memo(CountTwo)
