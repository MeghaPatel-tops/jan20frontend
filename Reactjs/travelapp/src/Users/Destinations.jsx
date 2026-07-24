// const places = [
//   {
//     city: "Paris",
//     img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
//   },
//   {
//     city: "Maldives",
//     img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
//   },
//   {
//     city: "Dubai",
//     img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
//   },
//   {
//     city: "Bali",
//     img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
//   },
// ];

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDestination } from "../feature/DestinationSlice";

export default function Destinations() {
 
  const dispatch = useDispatch();

  const {destArray} =useSelector((state)=>state.destination);



  useEffect(()=>{
      dispatch(getDestination())
      
       
  },[dispatch])

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Popular Destinations
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {destArray && destArray.map((item) => (
            <div
              key={item.city}
              className="rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <img
                src={item.destImg}
                className="h-72 w-full object-cover group-hover:scale-110 duration-500"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold">
                  {item.destname}
                </h3>

                <p className="text-gray-500 mt-2">
                  {item.destDesc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}