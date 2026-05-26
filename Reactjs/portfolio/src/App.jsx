import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Experience from './Components/Experience'
import Work from './Components/Work'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="container py-3 mx-auto bg-gray-300">
           <Navbar/>
           <Hero/>
           <About/>
           <Experience/>
           <Work/>
       </div>
    </>
  )
}

export default App
