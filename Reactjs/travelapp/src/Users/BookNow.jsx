import React, { useContext, useEffect } from 'react'
import { UserLoggedContext } from '../utils/UserLoggedContext'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore';
import db from '../Firebase/db';

function BookNow(props) {

    const {logged,setLogged} = useContext(UserLoggedContext)
    const navigate = useNavigate();
    const loggedUser = JSON.parse(localStorage.getItem('traveluser'))
   

    const handlePayment = () => {

    const options = {
      key: "rzp_test_SmPXYfIfSuLje9", // Your Razorpay Test Key ID
      amount: props.hotel.price, // ₹500 (amount in paise)
      currency: "INR",
      name: "My Company",
      description: "Demo Payment",

      handler: async function (response) {
       
        console.log(response);
        
           const bookData = {hoteid:props.hotel.id,price:props.hotel.price,userid:loggedUser.id,rzp_payment_id:response.razorpay_payment_id}
          const docRef = await addDoc(collection(db,"bookHotelData"),bookData);
          if(docRef){
             alert("Payment Successful");
          }
       
      },

      prefill: {
        name: logged.username,
        email: logged.email,
        contact: "9876543210",
      },

      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

     const bookMyHotel = async()=>{
     try {
          if(!logged){
            navigate('/login')
          }
          else{
             await  handlePayment();
          }
        

         

        
     } catch (error) {
          console.log(error);
          
     }

          
     }

  return (
    
        <button className="w-full mt-6 bg-sky-600 text-white py-3 rounded-xl" onClick={bookMyHotel}>
                  Book Now
                </button>
    
  )
}

export default BookNow