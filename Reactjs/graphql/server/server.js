const { gql, ApolloServer } = require('apollo-server-express');
const express = require('express');
const products = require('./Product.js')

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

`

const resolvers ={
    Query:{
        Products:()=>products
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