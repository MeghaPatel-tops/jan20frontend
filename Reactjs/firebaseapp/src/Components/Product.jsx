import { collection, deleteDoc, doc, getDocs, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import db from '../firebase/db';



function Product() {
  const [products, setProducts] = useState([]);
  const [msg, setMsg] = useState(null);
   const [err, setErr] = useState(null);
   const [search,setSearch]= useState(null);
   

   const filterProduct = useMemo(()=>{
     let newArray =[];
       if(search == null){
           newArray=products
          
       }
       else{
           newArray= products.filter((index)=>{
               if(index.pname.toLowerCase().includes(search.toLowerCase())){
                   return index
               }
           })
       
       }
        return newArray;   
       
   },[search,products])

  const deleteProduct = async (id) => {
    alert(id)
    try {
      const docRef =  doc(db,"products",id);
      const result = await deleteDoc(docRef);
      setMsg("Product Deleted successfully");
     
    } catch (error) {
        console.log(error);
        setErr(err.message)
        
    }
  }
  const getProduct = async () => {
    try {
      let querySnapshort = await getDocs(collection(db, 'products'));
      let proArray = [];
      querySnapshort.forEach((doc) => {
        proArray.push({ ...doc.data(), id: doc.id })
      })

      setProducts(proArray)

    } catch (error) {
      console.log(error);

    }
  }
   const cleanup = ()=>{
       setMsg(null);
       setErr(null)
   }
  useEffect(() => {
    getProduct();
    setTimeout(cleanup,3000);
  }, [msg,err])
  return (

    <div className="bg-white rounded-lg shadow p-6">
      {
        msg && (<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
          {msg}
        </div>)
      }
       {
        err && (<div class="bg-red-100 border border-green-400 text-red-700 px-4 py-3 rounded-lg">
          {err}
        </div>)
      }
      <div className="row flex">
        <NavLink className="bg-blue-900 text-white px-5 py-2 my-5" to={'/product/create'}>Add new</NavLink>
     
      <div class="mx-auto">
        <input
            type="text"
            placeholder="Search products..."
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e)=>{
                setSearch(e.target.value)
            }}
        />
    </div>
     </div>
      <div class="overflow-x-auto bg-white rounded-lg shadow">
       
        <table class="w-full text-sm text-left">
          <thead class="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th class="px-6 py-4">Image</th>
              <th class="px-6 py-4">Product Name</th>
              <th class="px-6 py-4">Price</th>
              <th class="px-6 py-4">Description</th>
              <th class="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {
              filterProduct && filterProduct.map((index, i) => (
                <tr class="border-b hover:bg-gray-50" key={i}>
                  <td class="px-6 py-4">
                    <img
                      src={index.pimage}
                      alt=""
                      class="w-16 h-16 rounded-lg object-cover"
                    />
                  </td>

                  <td class="px-6 py-4 font-medium">
                    {index.pname}
                  </td>

                  <td class="px-6 py-4">
                    ₹{index.price}
                  </td>

                  <td class="px-6 py-4">
                    {index.description}
                  </td>

                  <td class="px-6 py-4">
                    <div class="flex justify-center gap-2">
                    
                      <NavLink className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" to={`/product/edit/${index.id}`}>Edit</NavLink>

                      <button class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() => {
                        deleteProduct(index.id)
                      }}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            }


          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Product