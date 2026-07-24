import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import db from "../Firebase/db";

export default function Register() {
    const [user,setUser]=useState({});

    const navigate = useNavigate();
    const handleChange= (e)=>{
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleClick = async(e)=>{
        e.preventDefault();
         try {
            const docRef = collection(db,"users");
            const res = await addDoc(docRef,user);
            if(res){
                alert("User created")
                navigate('/login')
            }
         } catch (error) {
            console.log(error);
            
         }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Register
        </h2>

        <form className="space-y-4" onSubmit={handleClick}>

          <input
            type="text"
            placeholder="Full Name"
            name="username"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

        
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-6">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-600 font-semibold ml-1"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}