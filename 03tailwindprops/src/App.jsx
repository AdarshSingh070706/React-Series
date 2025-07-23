import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name : 'hitesh',
    age : 21
  }


  return (
    <>
    <h1 className='text-3xl bg-green-400 mb-2 rounded-xl'>Tailwind Test</h1>
       <Card username='chai aur code'  btnText='clicked'/>
       <Card username = 'Adarsh' />
       
    </>
  )
}

export default App
