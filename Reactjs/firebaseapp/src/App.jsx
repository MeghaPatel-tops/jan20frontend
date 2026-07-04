import { useContext, useState } from 'react'
import Aside from './Components/Template/Aside'
import Header from './Components/Template/Header'
import Home from './Components/Home'
import Product from './Components/Product'
import {Routes,Route} from 'react-router-dom'
import ProductCreate from './Components/ProductCreate'
import User from './Components/User'
import ProductEdit from './Components/ProductEdit'
import Login from './Components/Login'
import Profile from './Components/Template/Profile'
import AuthProvide, { AuthContext } from './Components/AuthContext'
import Counterapp from './Components/Counterapp'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
       <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Aside/>

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
       <Header/>
        {/* Main Content */}
        <main className="flex-1 p-6">
          <Routes>
          
             <Route path="/product" element={<Product/>}></Route>
             <Route path="/product/create" element={<ProductCreate/>}></Route>
              <Route path="/product/edit/:id" element={<ProductEdit/>}></Route>
             <Route path='/user' element={<User/>}></Route>


           
              
                <Route path="/" element={<Home/>}></Route>
             <Route path='/login' element={<Login/>}></Route>
             <Route path='/profile' element={<Profile/>}></Route>
           <Route path='/counter' element={<Counterapp/>}></Route>

          </Routes>
          
        </main>
      </div>
    </div>
    </>
  )
}

export default App
