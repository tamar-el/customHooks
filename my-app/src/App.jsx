import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Toggle from './components/Toggle.jsx'
import Counter from './components/Counter.jsx'
import CounterWithStep from './components/CounterWithStep.jsx'
import Input from './components/Input.jsx'
import TextareaDemo from './components/TextareaDemo.jsx'
import Previous from './components/Previous.jsx'
import Interval from './components/Interval.jsx'
import Timeout from './components/Timeout.jsx'
function App() {

  return (
    <>
      <Toggle></Toggle>
      <Counter></Counter>
      <CounterWithStep></CounterWithStep>
      <Input></Input>
      <TextareaDemo></TextareaDemo>
      <Previous></Previous>
      <Interval></Interval>
      <Timeout></Timeout>
    </>
  )
}

export default App
