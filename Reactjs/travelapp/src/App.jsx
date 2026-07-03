import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Adminindex from './Admin/Adminindex'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
           <Route path='/admin/*' element={<Adminindex/>}>
                
           </Route>
      </Routes>

    </>
  )
}

export default App
