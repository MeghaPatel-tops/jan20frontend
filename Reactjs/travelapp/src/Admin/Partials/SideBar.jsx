import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBar() {
    return (
        <aside class="w-64 bg-slate-900 text-white hidden md:block">
            <div class="p-6 text-2xl font-bold border-b border-slate-700">
                Admin Panel
            </div>

            <nav class="mt-6">

                <NavLink to='/admin/' className="flex items-center px-6 py-3 hover:bg-slate-800 bg-slate-800">📊 Dashboard</NavLink>


                <NavLink to='/admin/' className="flex items-center px-6 py-3 hover:bg-slate-800 bg-slate-800"> 👤 Users</NavLink>

                <NavLink to='/admin/' className="flex items-center px-6 py-3 hover:bg-slate-800 bg-slate-800"> Pacakges</NavLink>

                <NavLink to='/admin/' className="flex items-center px-6 py-3 hover:bg-slate-800 bg-slate-800"> Booking</NavLink>

                <NavLink to='/admin/' className="flex items-center px-6 py-3 hover:bg-slate-800 bg-slate-800"> Hotels</NavLink>

                <NavLink to='/admin/destination' className="flex items-center px-6 py-3 hover:bg-slate-800 bg-slate-800"> Destination </NavLink>
                <NavLink to='/admin/hotel' className="flex items-center px-6 py-3 hover:bg-slate-800 bg-slate-800"> Hotel </NavLink>

                <NavLink to='/admin/Category' className="flex items-center px-6 py-3 hover:bg-slate-800 bg-slate-800"> Category</NavLink>

                <a href="#" class="flex items-center px-6 py-3 hover:bg-red-600 mt-10">
                    🚪 Logout
                </a>
            </nav>
        </aside>
    )
}

export default SideBar