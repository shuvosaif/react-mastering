import React, { useCallback, useState } from 'react'
import Title from './components/Title'
import CountOne from './components/CountOne'
import CountTwo from './components/CountTwo'
import CounterButton from './components/CounterButton'

const App = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // useCallback is used to memoize the increment function
  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1)
  }, []) // Empty dependency array means this callback doesn't depend on any props or state

  // useCallback is used to memoize the increment function
  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5)
  }, []) // Empty dependency array means this callback doesn't depend on any props or state

  // const isEvenOrOdd = () => {
  //   let i = 0
  //   while (i < 1000000) i += 1
  //   return count1 % 2 === 0
  // }
  return (
    <div>
      <Title />
      <hr />
      <CountOne count={count1} />
      <CounterButton handler={incrementByOne} title='Count BY ONe' />

      <hr />
      <CountTwo count={count2} />
      <CounterButton handler={incrementByFive} title='Count By Five' />
    </div>
  )
}

export default App
