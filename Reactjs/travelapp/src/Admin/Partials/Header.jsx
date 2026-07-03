import React from 'react'

function Header() {
  return (
    <div>
         <header class="bg-white shadow px-8 py-4 flex justify-between items-center">
            <h1 class="text-2xl font-bold">
                Dashboard
            </h1>

            <div class="flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Search..."
                    class="border rounded-lg px-4 py-2 outline-none focus:ring w-64"
                />

                <img
                    src="https://i.pravatar.cc/40"
                    class="rounded-full"
                />
            </div>
        </header>
    </div>
  )
}

export default Header