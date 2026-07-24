import { Menu, Search } from "lucide-react";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserLoggedContext } from "../utils/UserLoggedContext";

export default function Navbar() {
    const {logged,setLogged}=useContext(UserLoggedContext)
    const loggedUser = JSON.parse(localStorage.getItem('traveluser'))


    const logout = ()=>{
      alert("here")
          setLogged(false);
          localStorage.removeItem('traveluser')
    }

    useEffect(()=>{
        if(loggedUser){
            setLogged(true)
        }
    },[logged])
    
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-sky-600">
          TravelGo
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-sky-600 cursor-pointer">Home</li>
          <li className="hover:text-sky-600 cursor-pointer">Destination</li>
          <li className="hover:text-sky-600 cursor-pointer">Hotels</li>
          <li className="hover:text-sky-600 cursor-pointer">Packages</li>
          <li className="hover:text-sky-600 cursor-pointer">Contact</li>
        </ul>

        <div className="flex gap-4 items-center">
          
          {
               logged==true ? 
               <div>
                  <span>Welcome:{loggedUser.username ?? ''}</span>
                  <button onClick={logout} className="px-6 py-2 border border-sky-600 text-sky-600 rounded-lg hover:bg-sky-50">Logout</button>
               </div>
               :
                <NavLink
             to={'/login'}
              className="px-6 py-2 border border-sky-600 text-sky-600 rounded-lg hover:bg-sky-50"
            >
              Login
            </NavLink>

          }
           
           

          <Menu className="md:hidden" />
        </div>

      </div>
    </nav>
  );
}