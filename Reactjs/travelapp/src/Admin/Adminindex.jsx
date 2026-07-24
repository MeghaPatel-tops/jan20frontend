import React from 'react'
import SideBar from './Partials/SideBar'
import Header from './Partials/Header'
import Dashbord from './Dashbord'
import { Route, Routes } from 'react-router-dom'
import Category from './Category'
import Destination from './Destination'
import Hotel from './Hotel'

function Adminindex() {
  return (
    <div className="bg-gray-100">
           <div class="flex min-h-screen">
                <SideBar/>

                  <div class="flex-1">
                    <Header/>
                    <main class="p-8">
                        
                        <Routes>
                            <Route path='/' element={<Dashbord/>}></Route>
                             <Route path='/category' element={<Category/>}></Route>
                             <Route path='/destination' element={<Destination/>}></Route>
                             <Route path='/hotel' element={<Hotel/>}></Route>
                        </Routes>
                    </main>
                  </div>
           </div>
    </div>
  )
}

export default Adminindex