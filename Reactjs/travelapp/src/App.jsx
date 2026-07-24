import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Adminindex from './Admin/Adminindex'
import Userindex from './Users/Userindex'
import Login from './Users/Login'
import Register from './Users/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

      
        <Route path='/' element={<Userindex/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>


           <Route path='/admin/*' element={<Adminindex/>}>
                
           </Route>
      </Routes>

    </>
  )
}

export default App
