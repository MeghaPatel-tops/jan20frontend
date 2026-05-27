import React from 'react'
import {products} from './product'
import Card from './Card'

function ProductCatalog() {
    
  return (
    <div>
        <div className="container border border-5 mt-5 p-5">
            <h1>Product list</h1>
            <div className="d-flex gap-5 flex-wrap">
               {
                 products && products.map((index,i)=>(
                      <Card product={index}/>
                 ))
               }
            </div>
        </div>
    </div>
  )
}

export default ProductCatalog