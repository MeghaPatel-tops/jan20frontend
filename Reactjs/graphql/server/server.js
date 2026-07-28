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
        addProduct(pname:String!,price:Float!,desc:String!):Product,
        updateProduct(pname:String!,price:Float!,desc:String!,id:ID!):Product,
        deleteProduct(id:ID!):Boolean
    }

`

const resolvers ={
    Query:{
        Products:async()=>{
              let res = await axios.get('http://localhost:3000/product')
              //console.log(res);
              
              return res.data;
        }
    },
    Mutation:{
        addProduct:async(_,{pname,price,desc})=>{
            let res = await axios.post('http://localhost:3000/product',{pname,price,desc});
            return res.data.product;
        },
        updateProduct:async(_,{pname,price,desc,id})=>{
           try {
             let upProduct={
                pname,price,desc
            }
            let res = await axios.put(`http://localhost:3000/product/${id}`,upProduct);
            return res.data.product
           } catch (error) {
                console.log(error);
                
           }
        }
        ,
        deleteProduct:async(_,{id})=>{
            try {
                let res  = await axios.delete(`http://localhost:3000/product/${id}`); 
                return true
            } catch (error) {
                return false
            }
        }

    }
}

async function ServerStart(){
    const server = new ApolloServer({typeDefs,resolvers});
    console.log(typeDefs.loc.source.body);
    await server.start();
    server.applyMiddleware({app});

    app.listen(4000,()=>{
        console.log('Server running at http://localhost:4000/graphql');
    })
}

ServerStart();