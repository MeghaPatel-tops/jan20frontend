"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function page() {
    const [posts,setPosts]=useState([])
  const getPost = async()=>{
        try {
            let res = await axios.get('http://localhost:3000/posts');
            if(res){
                console.log(res.data);
                
                setPosts(res.data)
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    const delPost = async(id)=>{
        try {
            let res = await axios.delete(`http://localhost:3000/posts/${id}`);
            if(res){
                alert('post deleted')
                getPost();
            }
        } catch (error) {
            
        }
    }
  useEffect(()=>{
        getPost();
  },[])
  return (
    <div  className='p-20'>
        <h2 className='text-4xl m-5'>Post data</h2>
        <Link href={'/Post/New'} className='px-5 py-3 bg-blue-700 text-white'>Add new</Link>
         <div className="overflow-x-auto mt-10">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Post Name</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {posts && posts.map((post, index) => (
                <tr
                  key={post.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">{index + 1}</td>

                  <td className="px-4 py-3 font-semibold">
                    {post.postname}
                  </td>

                  <td className="px-4 py-3 text-gray-600">
                    {post.description}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-2">
                      <Link href={`/Post/${post.id}/Edit`} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-md">
                        Edit
                      </Link>

                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md" onClick={()=>{
                        delPost(post.id)
                      }}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {posts.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-6 text-gray-500"
                  >
                    No Posts Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        
    </div>
    
  )
}

export default page