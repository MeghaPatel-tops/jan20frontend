import { useState } from 'react'
import Aside from './Components/Template/Aside'
import Header from './Components/Template/Header'
import Home from './Components/Home'
import Product from './Components/Product'
import {Routes,Route} from 'react-router-dom'
import ProductCreate from './Components/ProductCreate'


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
            <Route path="/" element={<Home/>}></Route>
             <Route path="/product" element={<Product/>}></Route>
             <Route path="/product/create" element={<ProductCreate/>}></Route>
          </Routes>
          
        </main>
      </div>
    </div>
    </>
  )
}

export default App
