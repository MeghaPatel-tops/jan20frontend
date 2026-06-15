import React from 'react'

function Header() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <div className="text-2xl font-bold text-blue-600">
            MyLogo
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </header>

  )
}

export default Header