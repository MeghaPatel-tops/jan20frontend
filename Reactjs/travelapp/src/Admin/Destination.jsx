import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, delCategory, getCategory, getCategoryById, updateCategory } from '../feature/CategorySlice';
import { clearMessage,clearSingleCategory } from '../feature/CategorySlice';
import { createDestination,getDestination,deldest, getdestById, clearMessageDest, updateDest  } from '../feature/DestinationSlice';

function Destination() {
    const dispatch = useDispatch();
    const {destMsg,destLoader,destError,destArray, dest1}=useSelector((state)=>state.destination)
    const [edit,setEdit]= useState(null)
    const [dest,setDest]=useState({})

    const handleChange= (e)=>{
        const {name,value,type,files}=e.target;
        if(type==='file'){
            const file = e.target.files[0];

           

            const maxSize = 2 * 1024 * 1024; // 2 MB

            if (file.size > maxSize) {
                alert("File size must be less than 2 MB.");
                fileInput.value = ""; // Clear selected file
                return;
            }
            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = () => {
                console.log(reader.result); // Base64 string
                setDest({
                    ...dest,
                    [name]:reader.result
                })
            };
        }
        else{
             setDest({
                ...dest,
                 [name]:value
             })
        }
    }

    const handleSubmit = (e)=>{
        console.log(dest);
         dispatch(createDestination(dest))

    }

    const editdest=(id)=>{
        setEdit(id);
        dispatch(getdestById(id))
    }
    

    const handleUpdate = async(e)=>{
         await dispatch(updateDest({id:edit,dest:dest}));
         dispatch(getDestination())
         setEdit(null)
         setDest({})
        

         setTimeout(()=>{
            dispatch(clearMessageDest())
           // alert("mmnmnbmnb")
         },2000)

    }
   useEffect(() => {
    if (edit !== null) {
        setDest(dest1);
    }
}, [ dest1,edit]);

    

    useEffect(()=>{

        dispatch(getDestination())
        console.log(destArray);
        
    },[deldest])

    useEffect(() => {
    return () => {
        dispatch(clearMessage());
        dispatch(clearSingleCategory());
    };
}, []);
  return (
    <div>
          <div class="flex justify-between items-center mb-8">
        <div>
            <h1 class="text-3xl font-bold text-slate-800">
                Destination Management
            </h1>
            <p class="text-gray-500 mt-1">
                Add, Edit and Manage Travel Categories
            </p>
           <div>
             {
         destLoader && <p>Loading...</p>
      }
      {
        destError && <p style={{color:"red"}}>{destError.message}</p>
      }
       {
        destMsg && <p style={{color:"green"}} className='text-3xl'>{destMsg ?? ""}</p>
      }
           </div>
        </div>
 <div class="flex justify-between items-center mb-8">
     
 </div>
      
    </div>

    
    <div class="bg-white rounded-xl shadow-lg p-6 mb-8">

        <h2 class="text-xl font-semibold mb-6">
            Add New Destination
        </h2>

        <div class="grid md:grid-cols-2 gap-6">

            <div>
                <label class="font-medium">Destination Name</label>
                <input
                    type="text"
                    name='destname'
                    onChange={handleChange}
                    value={dest.destname ?? ""}
                    placeholder="Adventure"
                    class="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"/>
            </div>

            <div>
                <label class="font-medium">City</label>
                <input
                    type="text"
                    name='city'
                    onChange={handleChange}
                    placeholder="adventure"
                     value={dest.city ?? ""}
                    class="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"/>
            </div>
              <div>
                <label class="font-medium">Description</label>
                <textarea
                    type="text"
                    name='destDesc'
                    onChange={handleChange}
                    placeholder="adventure"
                   value={dest.destDesc ?? ""}
                    class="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"/>
            </div>

            <div>
                <label class="font-medium">Destination Image</label>
                {
                    edit!=null ?
                    <img src={dest.destImg} height={"50px"} width={"50px"}></img>
                    :
                    ''
                }
                <input
                    type="file"
                    name="destImg"
                  
                    class="w-full mt-2 border rounded-lg p-2"
                     onChange={handleChange}/>
            </div>

          

        </div>

      

        <div class="mt-6">

         {
             edit===null ?
                <button
                class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg" onClick={handleSubmit}>
                Save Destination
            </button>
            :
            <button
                class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg" onClick={handleUpdate}>
                Update Destination
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
                class="border rounded-lg px-4 py-2 w-72"/>

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
                        Destination
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
                    destArray && destArray.map((index,i)=>(
                         <tr key={i} class="border-t hover:bg-gray-50">

                    <td class="px-6 py-4">{i+1}</td>

                    <td class="px-6 py-4">

                        <img
                            src={index.destImg}  style={{height:'100px',width:'100px'}}/>

                    </td>

                    <td class="px-6 py-4 font-medium">
                       {index.destname}
                    </td>

                    <td class="px-6 py-4">
                       {index.city}
                    </td>
                      <td class="px-6 py-4">
                       {index.destDesc}
                    </td>

                 
                    <td class="px-6 py-4 space-x-2">

                        <button
                            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={
                                ()=>{
                                    editdest(index.id)
                                }
                            }>
                            Edit
                        </button>

                        <button
                            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onClick={()=>{
                                dispatch(deldest(index.id))
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

export default Destination