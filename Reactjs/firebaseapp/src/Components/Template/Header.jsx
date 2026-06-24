import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

function Header() {
  const {isLogged, setIsLogged} = useContext(AuthContext)

  useEffect(() => {
   
  }, [isLogged])
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <div className="text-2xl font-bold text-blue-600">
        MyLogo
      </div>
      {
        isLogged == false ? (<NavLink to={'/login'} className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Login</NavLink>)
          : (<div>
            <NavLink to={'/login'} className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Welcome</NavLink>
          </div>)
      }


    </header>

  )
}

export default Header