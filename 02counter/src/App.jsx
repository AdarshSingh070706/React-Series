import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 5

  const addValue = () => {

    if (counter >= 20) {
      setCounter(counter)
    }
    else {
      setCounter(counter + 1)

    }

  }

  const removeValue = () => {
if (counter <= 0) {
      setCounter(counter)
  
}
else{
    setCounter(counter - 1)

}

  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value : {counter}</h2>

      <button
        onClick={addValue}
      >Add value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
