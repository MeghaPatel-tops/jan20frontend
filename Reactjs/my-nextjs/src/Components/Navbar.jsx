
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-gray-800 text-white flex gap-5 py-10 px-20'>
        <Link href={'/About'}>About</Link>
        <Link href={'/Product'}>Product</Link>
        <Link href={'/Post'}>Post</Link>
    </div>
  )
}

export default Navbar