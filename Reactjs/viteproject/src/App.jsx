import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import { ComponyName, Details } from './Components/Comman'
import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1>Welcome to vite project</h1>
      <Home />
      <About />
      <h2>Company Name={ComponyName}</h2>
      {/* <Details owner={"Mohit Parekh"}/> */}
      <Details owner={{ name: "Mohit parekh", "created At": "18-05-21026", type: "Dummy artical" }}></Details>
      <fieldset>
          <legend>Counter app</legend>
          <Counter/>
      </fieldset>

    </>
  )
}

export default App
