export function printProduct(){
    let productArray = [  // Fashion
    {
        id:1,
        name:'T-Shirt',
        price:1200,
        category:'Fashion',
        image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
    },
    {
        id:2,
        name:'Jeans',
        price:2200,
        category:'Fashion',
        image:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246'
    },

    // Electronics
    {
        id:3,
        name:'Laptop',
        price:55000,
        category:'Electronics',
        image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853'
    },
    {
        id:4,
        name:'Smart TV',
        price:42000,
        category:'Electronics',
        image:'https://images.unsplash.com/photo-1593784991095-a205069470b6'
    },

    // Mobiles
    {
        id:5,
        name:'iPhone 15',
        price:75000,
        category:'Mobiles',
        image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
    },
    {
        id:6,
        name:'Samsung Galaxy',
        price:65000,
        category:'Mobiles',
        image:'https://images.unsplash.com/photo-1580910051074-3eb694886505'
    },

    // Accessories
    {
        id:7,
        name:'Watch',
        price:3000,
        category:'Accessories',
        image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    },
    {
        id:8,
        name:'Bag',
        price:2500,
        category:'Accessories',
        image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
    },

    // Vegs
    {
        id:9,
        name:'Tomato',
        price:40,
        category:'Vegs',
        image:'https://images.unsplash.com/photo-1546094096-0df4bcaaa337'
    },
    {
        id:10,
        name:'Potato',
        price:30,
        category:'Vegs',
        image:'https://images.unsplash.com/photo-1518977676601-b53f82aba655'
    }];

    let str=""
    productArray.map((index,i)=>{
        str+=`
             <div class="col-md-4">

      <div class="card border-0 shadow-sm product-card">

        <img
          src=${index.image}
        >

        <div class="card-body text-center">

          <h5>${index.name}</h5>

          <p class="text-muted">
            ${index.price}
          </p>

          <button class="btn btn-dark w-100">
            Add To Cart
          </button>

        </div>

      </div>

    </div>
        `
    })
    document.getElementById('productRow').innerHTML=str;
}