import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Employee from './Employee'
import Create from './Create'
import Edit from './Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
       <Routes>
        
           <Route path='/' element={<Employee/>}></Route>
           <Route path='/create' element={<Create/>}></Route>
           <Route path='/edit/:id' element={<Edit/>}></Route>
       </Routes>
    </>
  )
}

export default App
