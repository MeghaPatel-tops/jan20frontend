import React from 'react'
import { NavLink } from 'react-router-dom'

function Product() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
       
    <div className="row ">
        <NavLink className="bg-blue-900 text-white px-5 py-2 my-5" to={'/product/create'}>Add new</NavLink>    
    </div>    
    </div>
  )
}

export default Product