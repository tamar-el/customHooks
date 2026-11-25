import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Toggle from './components/Toggle.jsx'
import Counter from './components/Counter.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toggle></Toggle>
      <Counter></Counter>
    </>
  )
}

export default App
