import React from 'react'

export default class HoverCOunter extends React.Component {
  render() {
    const { count, incrementCount } = this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Clicked {count} times</h1>
      </div>
    )
  }
}
