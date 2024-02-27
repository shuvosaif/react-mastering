import { createContext, useState } from 'react'
import Footer from './funcComponents/Footer'
import Header from './funcComponents/Header'
import Main from './funcComponents/Main'

export const WebsiteContext = createContext()

function App() {
  const [count, setCount] = useState(0)

  return (
    <WebsiteContext.Provider
      value={{ count, setCount, websiteName: 'My WEbsite sdfkljadl' }}
    >
      <Header />
      <Main />
      <Footer />
    </WebsiteContext.Provider>
  )
}

export default App
