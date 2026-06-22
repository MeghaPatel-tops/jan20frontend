import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import db, { Auth, provider } from '../firebase/db';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const loginWithGoogleId  = async()=>{
        try {
            const res = await signInWithPopup(Auth,provider);
            console.log((res.user));

            const UserTokenData = {
                   username:res.user.displayName,
                   email:res.user.email,
                   token:res.user.accessToken,
                   uid:res.user.uid
            }

            const result = await addDoc(collection(db,'user_token'),UserTokenData)

            localStorage.setItem('loggedUser',JSON.stringify(UserTokenData))

            // alert("Login successfully")
            // navigate('/profile')
            
            

        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div>
        <div class="min-h-screen flex items-center justify-center bg-gray-100">
  <form class="bg-white p-6 rounded-lg shadow-md w-80">
    <h2 class="text-2xl font-bold text-center mb-4">Login</h2>

    <input
      type="email"
      placeholder="Email"
      class="w-full border p-2 rounded mb-3 outline-none focus:border-blue-500"
    />

    <input
      type="password"
      placeholder="Password"
      class="w-full border p-2 rounded mb-4 outline-none focus:border-blue-500"
    />

    <button
      type="submit"
      class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
    >
      Login
    </button>
    
  </form>
   <button
       type='button'
      onClick={loginWithGoogleId}
      class="w-full bg-blue-500 text-white my-2 py-2 rounded hover:bg-blue-600"
    >
      Login with google
    </button>
</div>
    </div>
  )
}

export default Login