import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
    query {
        Products {
        pname,
        price,
        desc
        
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