"use client";
import React, { useEffect, useState } from 'react'

function page() {
    const [product,setProduct]=useState([]);

    useEffect(async()=>{
        const res = await fetch('https://dummyjson.com/products');
        const productData = await res.json();
       
        setProduct(productData.products)
        
    },[])
  return (
    <div>
         <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-indigo-600">
            Product Management
          </h2>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg">
            + Add Product
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-5 py-3 text-left">#</th>
                <th className="px-5 py-3 text-left">Product Name</th>
                <th>Images</th>
                <th className="px-5 py-3 text-left">Price</th>
                <th className="px-5 py-3 text-left">Description</th>
                <th className="px-5 py-3 text-left">Category</th>
                <th className="px-5 py-3 text-center">Stock</th>
                <th className="px-5 py-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {product && product.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-5 py-4">{index + 1}</td>

                  <td className="px-5 py-4 font-medium text-gray-700">
                    {item.title}
                  </td>
                  <td>
                    <img src={item.thumbnail} alt="" height={'50px'} width={'50px'} />
                  </td>

                  <td className="px-5 py-4 text-green-600 font-semibold">
                    ₹{item.price}
                  </td>

                  <td className="px-5 py-4">{item.desc}</td>

                  <td className="px-5 py-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.stock > 10
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.stock}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-center gap-2">
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
                        Edit
                      </button>

                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {product.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-8 text-gray-500"
                  >
                    No Products Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
    </div>
  )
}

export default page