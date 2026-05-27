import React from 'react'

function Card(props) {
    const product = props.product;
    console.log(product);
    
    return (
        <div>
            <div class="card" style={{width: "18rem"}}>
                <img src={product.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{product.pname}</h5>
                        <p class="card-text"><b>Price:{product.price}</b></p>
                        <a href="#" class="btn btn-primary">Add To Cart</a>
                    </div>
            </div>
        </div>
    )
}

export default Card