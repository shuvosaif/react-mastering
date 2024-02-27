import React from 'react'

const Title = () => {
  console.log(`Rendering Title ....`)
  return <div>This is Title</div>
}

export default React.memo(Title)
