"use client";
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex gap-10 bg-gray-800 text-white py-10 px-20'>
        <Link href={'/Product'}>Product</Link>
    </div>
  )
}

export default Navbar