import React, { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Destinations from './Destinations'


import Footer from './Footer'
import Hotels from './Hotels'


function Userindex() {
    
  return (
    <div>
        <Navbar />
        
        <Hero/>
        <Destinations/>
        <Hotels/>
        <Footer/>
      
    </div>
  )
}

export default Userindex