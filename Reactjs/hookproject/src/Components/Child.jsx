import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { ThemeContext } from './ThemeContext'

function Child(props) {
  const userId = useContext(UserContext)
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div style={{
      backgroundColor: theme == 'light' ? 'white' : 'black',
      color: theme == "light" ? 'black' : 'white'
    }}>
      <div>Userid:{props.userid}
        <h1>Userid by context{userId}</h1>
        <h2>{theme}</h2>
      </div>

      <button onClick={()=>{
        const  newTheme = theme =="light"?'dark':'light'
          setTheme(newTheme)
      }}>{theme=='light'?'Dark':"Light"}</button>
    </div>


  )
}

export default Child