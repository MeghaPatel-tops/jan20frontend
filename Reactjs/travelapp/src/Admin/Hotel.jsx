import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { delHotel, getHotel, getHotelById, updateHotel } from '../feature/HotelSlice';
import { getDestination } from '../feature/DestinationSlice';
import { clearMessageHotel, createHotel } from '../feature/HotelSlice';

function Hotel() {
    const dispatch = useDispatch();
    const {destArray}=useSelector((state)=>state.destination)
    const {hotelMsg,hotelLoader,hotelError,hotelArray,singleHotel}=useSelector((state)=>state.hotel)
    const [edit, setEdit] = useState(null)
    // const [hotel, sethotel] = useState({})
    const [hotel, setHotel] = useState({})

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        let imgArray = [];
        if (type === 'file') {
            const file = e.target.files;
            
            for (let i = 0; i < file.length; i++) {
                const maxSize = 2 * 1024 * 1024; // 2 MB

                if (file[i].size > maxSize) {
                    alert("File size must be less than 2 MB.");
                    fileInput.value = ""; // Clear selected file
                    return;
                }
                const reader = new FileReader();

                reader.readAsDataURL(file[i]);

                reader.onload = () => {
                    //console.log(reader.result); // Base64 string
                    imgArray.push(reader.result)
                };
            }
            console.log(imgArray);
            
            setHotel({
                ...hotel,
                [name]: imgArray
            })

        }
        else {
            setHotel({
                ...hotel,
                [name]: value
            })
        }
    }

    const RemoveMsg = ()=>{
          setTimeout(() => {
            dispatch(clearMessageHotel())
            // alert("mmnmnbmnb")
            setHotel({})
        }, 2000)
    }

    const handleSubmit = (e) => {
        console.log(hotel);
       dispatch(createHotel(hotel))
        
    }

    const edithotel = (id) => {
        setEdit(id);
        dispatch(getHotelById(id))
    }


    const handleUpdate = async (e) => {
        await dispatch(updateHotel({ id: edit, hotel: hotel }));
        dispatch(getHotel())
        setEdit(null)
        setHotel({})


        setTimeout(() => {
            dispatch(clearMessageHotel())
            // alert("mmnmnbmnb")
        }, 2000)

    }
    useEffect(() => {
        if (edit !== null) {
            setHotel(singleHotel);
        }
       
        
    }, [edit]);



    useEffect(() => {
        dispatch(getDestination())
        dispatch(getHotel())
        console.log(hotelArray);

    }, [hotelMsg])

    useEffect(() => {
        return () => {
            dispatch(clearMessageHotel());
        };
    }, []);
    return (
        <div>
            <div class="flex justify-between items-center mb-8">
                <div>
                    <h1 class="text-3xl font-bold text-slate-800">
                        Hotel Management
                    </h1>
                    <p class="text-gray-500 mt-1">
                        Add, Edit and Manage Travel Categories
                    </p>
                    <div>
                        {
                            hotelLoader && <p>Loading...</p>
                        }
                        {
                            hotelError && <p style={{ color: "red" }}>{hotelError.message}</p>
                        }
                        {
                            hotelMsg && <p style={{ color: "green" }} className='text-3xl'>{hotelMsg ?? ""}</p>
                        }
                    </div>
                </div>
                <div class="flex justify-between items-center mb-8">

                </div>

            </div>


            <div class="bg-white rounded-xl shadow-lg p-6 mb-8">

                <h2 class="text-xl font-semibold mb-6">
                    Add New hotelination
                </h2>

                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <label class="font-medium">Choose hotelination</label>
                        <select class="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
                            <option value="">Select</option>
                            {
                                destArray && destArray.map((index, i) => (
                                    <option value={index.id}>{index.destname}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label class="font-medium">Hotel Name</label>
                        <input
                            type="text"
                            name='hotelname'
                            onChange={handleChange}
                            value={  hotel.hotelname ?? ""}
                            placeholder="Palm green hotel"
                            class="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>

                    <div>
                        <label class="font-medium">Address</label>
                        <input
                            type="text"
                            name='address'
                            onChange={handleChange}
                            placeholder="Ahemdabad"
                             value={hotel.address ?? ""}
                            class="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div>
                        <label class="font-medium">Description</label>
                        <textarea
                            type="text"
                            name='hotelDesc'
                            onChange={handleChange}
                            placeholder="adventure"
                               value={hotel.hotelDesc ?? ""}
                            class="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>

                    <div>
                        <label class="font-medium">hotelination Image</label>
                        {
                            edit != null ?
                               hotel.destImg && hotel.destImg.map((index1,i)=>(
                                                <img
                            src={index1}  style={{height:'100px',width:'100px'}}/>
                                              ))
                                :
                                ''
                        }
                        <input
                            type="file"
                            name="hotelImg"
                            multiple
                            class="w-full mt-2 border rounded-lg p-2"
                            onChange={handleChange} />
                    </div>
                    <div>
                        <label class="font-medium">Price</label>
                        <input
                            type="text"
                            name='price'
                            onChange={handleChange}
                            placeholder="adventure"
                            value={hotel.hotelDesc ?? ""}
                            class="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>



                </div>



                <div class="mt-6">

                    {
                        edit === null ?
                            <button
                                class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg" onClick={handleSubmit}>
                                Save Hotel
                            </button>
                            :
                            <button
                                class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg" onClick={handleUpdate}>
                                Update Hotel
                            </button>
                    }

                </div>

            </div>


            <div class="bg-white rounded-xl shadow-lg">

                <div class="flex justify-between items-center p-6 border-b">

                    <h2 class="text-xl font-semibold">
                        Category List
                    </h2>

                    <input
                        type="text"
                        placeholder="Search Category..."
                        class="border rounded-lg px-4 py-2 w-72" />

                </div>

                <div class="overflow-x-auto">

                    <table class="min-w-full">

                        <thead class="bg-gray-100">

                            <tr>

                                <th class="px-6 py-4 text-left">#</th>

                                <th class="px-6 py-4 text-left">
                                    Image
                                </th>

                                <th class="px-6 py-4 text-left">
                                    hotelination
                                </th>

                                <th class="px-6 py-4 text-left">
                                    City
                                </th>
                                <th class="px-6 py-4 text-left">
                                    Description
                                </th>


                                <th class="px-6 py-4 text-left">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>


                            {
                                hotelArray && hotelArray.map((index, i) => (
                                    <tr key={i} class="border-t hover:bg-gray-50">

                                        <td class="px-6 py-4">{i + 1}</td>

                                        <td class="px-6 py-4">

                                           {
                                              index && index.destImg.map((index1,i)=>(
                                                <img
                            src={index1}  style={{height:'100px',width:'100px'}}/>
                                              ))
                                           }

                                        </td>

                                        <td class="px-6 py-4 font-medium">
                                            {index.hotelname}
                                        </td>

                                        <td class="px-6 py-4">
                                            {index.address}
                                        </td>
                                        <td class="px-6 py-4">
                                            {index.hotelDesc}
                                        </td>


                                        <td class="px-6 py-4 space-x-2">

                                            <button
                                                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={
                                                    () => {
                                                        edithotel(index.id)
                                                    }
                                                }>
                                                Edit
                                            </button>

                                            <button
                                                class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onClick={() => {
                                                    dispatch(delHotel(index.id))
                                                    RemoveMsg();
                                                }}>
                                                Delete
                                            </button>

                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    )
}

export default Hotel