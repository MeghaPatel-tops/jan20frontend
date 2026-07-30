"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';


 function page({params}) {
 
  
  const router = useRouter();
 const [post, setPost] = useState({
    postname: "",
    description: "",
  });

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {id}  = await params;
      try {
         let res = await axios.put('http://localhost:3000/posts/'+id,post);
         if(res){
            alert("post update")
            router.push('/Post')
         }
      } catch (error) {
           console.log(error);
           
      }
  };

   const getPostById = async()=>{
     const {id}  = await params;
  console.log(id);
        try {
            let res = await axios.get('http://localhost:3000/posts/'+id);
            if(res){
                console.log(res.data);
                
                setPost(res.data)
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
      getPostById()
    },[])
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100 flex items-center justify-center p-5">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Create Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Post Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Post Name
            </label>
            <input
              type="text"
              name="postname"
              value={post.postname}
              onChange={handleChange}
              placeholder="Enter post name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={post.description}
              onChange={handleChange}
              rows="5"
              placeholder="Enter post description"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Create Post
            </button>

          
          </div>
        </form>
      </div>
    </div>
  )
}

export default page