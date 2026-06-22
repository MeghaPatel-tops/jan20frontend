import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <div className="text-2xl font-bold text-blue-600">
            MyLogo
          </div>

         <NavLink to={'/login'} className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Login</NavLink>
         
        </header>

  )
}

export default Header