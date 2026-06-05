import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Route, Routes,NavLink } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Employeeindex from './Components/Employeeindex'
import EmpCreate from './Components/EmpCreate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
        <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/employee' element={<Employeeindex/>}></Route>
             <Route path='/employee/create' element={<EmpCreate/>}></Route>
        </Routes>
    </>
  )
}

export default App
