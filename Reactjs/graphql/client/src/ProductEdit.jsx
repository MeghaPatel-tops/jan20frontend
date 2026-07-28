import { useMutation, useQuery } from '@apollo/client/react';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GET_PRODUCT, UPDATE_PRODUCT } from './util';

function ProductEdit() {
    const pid = useParams().pid;
    const navigate = useNavigate();
    const [product,setProduct]=useState({})
    const {data} =useQuery(GET_PRODUCT)
     const [updatePro] = useMutation(UPDATE_PRODUCT,{
        refetchQueries:[{query:GET_PRODUCT}]
      })

      

    const  handleChange= (e)=>{
      const {name,value,type}=e.target;
      setProduct({
        ...product,
        [name]: type=='number' ? Number(value):value
        
      })
  }

  const handleClick=async(e)=>{
    e.preventDefault();
        console.log(product);
       
      await updatePro({
        variables:product
      })
      alert('added')
      navigate('/')
      
  }

    const getUserById = ()=>{
        let singleProduct = data && data.Products.find((index)=>index.id===pid);
        console.log(singleProduct);
        setProduct(singleProduct)
    }

    useEffect(()=>{
        getUserById();
    },[data])

  return (
    <div>
                 <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0 text-center">Create Product</h3>
            </div>

            <div className="card-body">
              <form method='post' onSubmit={handleClick}>
                {/* Product Name */}
                <div className="mb-3">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name='pname'
                    value={product ? product.pname : ''}
                    onChange={handleChange}
                    placeholder="Enter Product Name"
                  />
                </div>

                {/* Price */}
                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name='price'
                    value={product ? product.price : ''}
                    onChange={handleChange}
                    placeholder="Enter Price"
                  />
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Enter Product Description"
                    name='desc'
                     value={product ? product.desc : ''}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Buttons */}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-success" >
                    Create Product
                  </button>

              
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductEdit