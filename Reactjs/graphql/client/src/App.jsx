import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import Productindex from './Productindex'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Productcreate from './Productcreate'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const client = new ApolloClient({
       link:new HttpLink({
         uri:'http://localhost:4000/graphql'
       }),
       cache:new InMemoryCache()
  })
  return (
    
    <>
    
        <ApolloProvider client={client}>
        
          <Routes>
              <Route path='/' element={<Productindex/>}>
              </Route>
              <Route path='/create' element={ <Productcreate/>}></Route>
          </Routes>
        </ApolloProvider>
     </>
  )
}

export default App
