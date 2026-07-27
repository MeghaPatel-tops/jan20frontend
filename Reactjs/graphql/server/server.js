const { gql, ApolloServer } = require('apollo-server-express');
const express = require('express');
const products = require('./Product.js');
const { default: axios } = require('axios');

const app = express();

const typeDefs  = gql `
    type Product{
        id:ID
        pname:String
        price:Float
        desc:String
    }

    type Query{
        Products:[Product]
    }

    type Mutation{
        addProduct(pname:String!,price:Float!,desc:String!):Product
    }

`

const resolvers ={
    Query:{
        Products:async()=>{
              let res = await axios.get('http://localhost:3000/product')
              return res.data;
        }
    },
    Mutation:{
        addProduct:async(_,{pname,price,desc})=>{
            let res = await axios.post('http://localhost:3000/product',{pname,price,desc});
            return res.data.product;
        }
    }
}

async function ServerStart(){
    const server = new ApolloServer({typeDefs,resolvers});
    await server.start();
    server.applyMiddleware({app});

    app.listen(4000,()=>{
        console.log('Server running at http://localhost:4000/graphql');
    })
}

ServerStart();