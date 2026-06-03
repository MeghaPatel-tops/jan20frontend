import React, { useContext } from 'react'
import Child from './Child'
import { ThemeContext } from './ThemeContext'

function Parent(props) {
  const userid = props.userid
  const {theme,setTheme}= useContext(ThemeContext)
  return (

    <div>
      <div style={{
        backgroundColor: theme == 'light' ? 'white' : 'black',
        color: theme == "light" ? 'black' : 'white',
        marginBottom:'50px'
      }}>
        parent
        <Child userid={userid} />
      </div>
    </div>
  )
}

export default Parent