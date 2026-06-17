import React from 'react'
import { NavLink } from 'react-router-dom'

function Aside() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <nav className="space-y-3">
          <NavLink to={'/'} className="block px-3 py-2 rounded hover:bg-gray-800 transition">Dashboard</NavLink>
           <NavLink to={'/user'} className="block px-3 py-2 rounded hover:bg-gray-800 transition">Users</NavLink>
          

        
          <NavLink to={'/product'} className="block px-3 py-2 rounded hover:bg-gray-800 transition">Products</NavLink>

          <a
            href="#"
            className="block px-3 py-2 rounded hover:bg-gray-800 transition"
          >
            Orders
          </a>

          <a
            href="#"
            className="block px-3 py-2 rounded hover:bg-gray-800 transition"
          >
            Settings
          </a>
        </nav>
      </aside>
  )
}

export default Aside