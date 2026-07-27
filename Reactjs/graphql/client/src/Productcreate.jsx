import React, { useState } from 'react'
import { ADD_PRODUCT, GET_PRODUCT } from './util';
import { useMutation } from '@apollo/client/react';
import { useNavigate } from 'react-router-dom';

function Productcreate() {
  const [product,setProduct]=useState({})
  const [addPro] = useMutation(ADD_PRODUCT,{
    refetchQueries:[{query:GET_PRODUCT}]
  })
  const navigate = useNavigate();

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
    
      await addPro({
        variables:product
      })
      alert('added')
      navigate('/')
      
  }
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

export default Productcreate