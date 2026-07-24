import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import db from "../Firebase/db";
import { UserLoggedContext } from "../utils/UserLoggedContext";

export default function Login() {
     const [user,setUser]=useState({});
     const {logged,setLogged}= useContext(UserLoggedContext)
  
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
               const docRef = collection(db,'users');
               const q = query(docRef,where('email',"==",user.email),where('password','==',user.password));
                const querySnapshot = await getDocs(q);
                let userData ={};
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                  userData ={
                        ...doc.data(),
                      id:doc.id,
                      
                  }
                  
                });
                if(userData){
                    alert('login success');
                    setLogged(true)
                    localStorage.setItem('traveluser',JSON.stringify(userData))
                    navigate('/')
                }
                
           } catch (error) {
              console.log(error);
              
           }
      }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleClick}>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
               name="password"
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6">
          Don't have an account?
          <Link
            to="/register"
            className="text-blue-600 font-semibold ml-1"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}