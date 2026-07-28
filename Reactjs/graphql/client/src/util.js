import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
    query {
        Products {
        pname,
        price,
        desc,
        id,
    }
}
`

export const ADD_PRODUCT = gql`
    mutation addProduct($pname:String!,$price:Float!,$desc:String!){
        addProduct(pname:$pname,price:$price,desc:$desc){
            id
            pname
            price
            desc
        }
    }
`

export const UPDATE_PRODUCT = gql`
    mutation updateProduct($pname:String!,$price:Float!,$desc:String!,$id:ID!){
        updateProduct(pname:$pname,price:$price,desc:$desc,id:$id){
            id
            pname
            price
            desc
        }
    }
`

export const DELTE_PRODUCT = gql`
    mutation deleteProduct($id:ID!){
        deleteProduct(id:$id)
    }
`