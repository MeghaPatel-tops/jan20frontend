import { Star } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotel } from "../feature/HotelSlice";
import BookNow from "./BookNow";

// const hotels = [
//   {
//     name: "Luxury Resort",
//     city: "Maldives",
//     price: "$250",
//     img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
//   },
//   {
//     name: "Ocean View",
//     city: "Bali",
//     price: "$180",
//     img: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
//   },
//   {
//     name: "Royal Palace",
//     city: "Dubai",
//     price: "$320",
//     img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
//   },
// ];

export default function Hotels() {
  const dispatch = useDispatch();
  const {hotelArray} = useSelector((state)=>state.hotel);
 

  useEffect(()=>{
      dispatch(getHotel())
  },[])
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Featured Hotels
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">

          {hotelArray && hotelArray.map((hotel) => (
            <div
              key={hotel.name}
              className="rounded-3xl overflow-hidden shadow-xl bg-white"
            >

              <img
                src={hotel.destImg[0]}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <div className="flex justify-between">

                  <h3 className="text-2xl font-bold">
                    {hotel.hotelname}
                  </h3>

                  <span className="text-sky-600 font-bold">
                    {hotel.price}
                  </span>

                </div>

                <p className="text-gray-500 mt-2">
                  {hotel.city}
                </p>

                <div className="flex mt-4 text-yellow-500">
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                </div>

                <BookNow hotel={hotel}/>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}