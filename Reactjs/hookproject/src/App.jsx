import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Components/Home'
import FormEx from './Components/FormEx'
import Parent from './Components/Parent'
import { UserContext } from './UserContext'
import Users from './Components/Users'

function App() {
  const [count, setCount] = useState(0)
  const userid="megha123"



  return (
    <>
      <UserContext.Provider value={'megha123'}>
            {/* <Home/> 
      <FormEx/>
      <Parent userid={userid}/> */}
      <Users/>
       </UserContext.Provider>
    </>
  )
}

export default App
