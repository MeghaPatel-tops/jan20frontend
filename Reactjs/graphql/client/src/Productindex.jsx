import React from 'react'
import { DELTE_PRODUCT, GET_PRODUCT } from './util'
import {useMutation, useQuery} from '@apollo/client/react'
import { NavLink } from 'react-router-dom';

function Productindex() {
    const {loading,data,error} = useQuery(GET_PRODUCT);
   console.log(data);
   const [ delPro] = useMutation(DELTE_PRODUCT,{
  refetchQueries: [{ query: GET_PRODUCT }],
})

   const delProd = async(id)=>{
    alert(id)
       await delPro({
        variables: { id }
       })
   }
   
    if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger text-center">
          <strong>Error!</strong> {error}
        </div>
      </div>
    );
  } 
  return (
    <div>  <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-primary text-white d-flex gap-3">
          <h4 className="mb-0">Product List</h4>
          
        </div>

        <div className="card-body">
          <NavLink to={'/create'} className={'btn btn-primary'}>Add new</NavLink>
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              { data && data.Products.length > 0 ? (
                data.Products.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.pname}</td>
                    <td>₹{item.price}</td>
                    <td>{item.desc}</td>
                    <td>
                      <NavLink to={'/edit/'+item.id} className="btn btn-success">Edit</NavLink>
                    </td>
                    <td>
                      <button className='btn btn-danger' onClick={()=>{
                        delProd(item.id)
                      }}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-danger">
                    No Products Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div></div>
  )
}

export default Productindex