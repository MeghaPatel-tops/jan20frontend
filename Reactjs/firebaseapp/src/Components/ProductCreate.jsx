import React, { useState } from 'react'
import db from '../firebase/db';
import { addDoc, collection } from 'firebase/firestore';

function ProductCreate() {
    const [product,setProduct]= useState({});

    const handleChange = (e)=>{
        const {name,value} = e.target
        setProduct({
            ...product,
            [name]:value
        })
    }
    const handleFile =(e)=>{
        const file = e.target.files[0];
        console.log(file);
       const reader = new FileReader();
       reader.onloadend = ()=>{
         const base64String = reader.result; 
         console.log(base64String);
         setProduct({
            ...product,
            ['pimage']:base64String
         })
         
       }
       if (file) {
        reader.readAsDataURL(file); 
        }
        
    } 
    const handleClick = async(e)=>{
        e.preventDefault();
       try {
           let docref = collection(db,'products');
           let res = await addDoc(docref,product);
           if(res){
              alert("Product added")
              setProduct({})
           }
       } catch (error) {
            console.log(error);
            
       }
         e.target.reset(); 
    }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
      Add Product
    </h2>

    <form className="space-y-5" method="post" onSubmit={handleClick}>
      {/* Product Name */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Product Name
        </label>
        <input
          type="text"
          placeholder="Enter product name"
          name='pname'
          value={product.pname ??''}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Price */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type="number"
          placeholder="Enter product price"
          name='price'
          value={product.price ?? ''}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          rows="4"
          placeholder="Enter product description"
          name='description'
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={product.description ?? ''}
        ></textarea>
      </div>

      {/* Image */}
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Product Image
        </label>
        <input
          type="file"
          name='pimage'
          onChange={handleFile}
          className="w-full border border-gray-300 rounded-lg p-2 file:bg-blue-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-md file:cursor-pointer"
          
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Add Product
      </button>
    </form>
  </div>
</div>
  )
}

export default ProductCreate