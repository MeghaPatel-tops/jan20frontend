import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, delCategory, getCategory, getCategoryById, updateCategory } from '../feature/CategorySlice';
import { clearMessage,clearSingleCategory } from '../feature/CategorySlice';

function Category() {
    const dispatch = useDispatch();
    const {catMsg,catError,catLoader,categoryArray,singleCategory}=useSelector((state)=>state.category)
    const [edit,setEdit]= useState(null)
    const [singleCat,setSingleCat]=useState({})
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
                setSingleCat({
                    ...singleCat,
                    [name]:reader.result
                })
            };
        }
        else{
             setSingleCat({
                ...singleCat,
                 [name]:value
             })
        }
    }

    const handleSubmit = (e)=>{
        console.log(singleCat);
        dispatch(createCategory(singleCat))

    }

    const editCategory=(id)=>{
        setEdit(id);
        dispatch(getCategoryById(id))
    }

    const handleUpdate = async(e)=>{
         await dispatch(updateCategory({id:edit,cat:singleCat}));
         dispatch(getCategory())
         setEdit(null)
         setSingleCat({})
         dispatch(clearSingleCategory())

         setTimeout(()=>{
            dispatch(clearMessage())
           // alert("mmnmnbmnb")
         },2000)

    }
   useEffect(() => {
    if (edit !== null) {
        setSingleCat(singleCategory);
    }
}, [singleCategory, edit]);

    

    useEffect(()=>{
        dispatch(getCategory())
        
    },[])

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
                Category Management
            </h1>
            <p class="text-gray-500 mt-1">
                Add, Edit and Manage Travel Categories
            </p>
           <div>
             {
         catLoader && <p>Loading...</p>
      }
      {
        catError && <p style={{color:"red"}}>{catLoader.message}</p>
      }
       {
        catMsg && <p style={{color:"green"}} className='text-3xl'>{catMsg ?? ""}</p>
      }
           </div>
        </div>
 <div class="flex justify-between items-center mb-8">
     
 </div>
        <button
            class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium">
            + Add Category
        </button>
    </div>

    
    <div class="bg-white rounded-xl shadow-lg p-6 mb-8">

        <h2 class="text-xl font-semibold mb-6">
            Add New Category
        </h2>

        <div class="grid md:grid-cols-2 gap-6">

            <div>
                <label class="font-medium">Category Name</label>
                <input
                    type="text"
                    name='name'
                    onChange={handleChange}
                    value={singleCat.name ?? ""}
                    placeholder="Adventure"
                    class="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"/>
            </div>

            <div>
                <label class="font-medium">Slug</label>
                <input
                    type="text"
                    name='slug'
                    onChange={handleChange}
                    placeholder="adventure"
                    value={singleCat.slug ?? ""}
                    class="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"/>
            </div>

            <div>
                <label class="font-medium">Category Image</label>
                {
                    edit!=null ?
                    <img src={singleCat.catimg} height={"50px"} width={"50px"}></img>
                    :
                    ''
                }
                <input
                    type="file"
                    name="catimg"
                  
                    class="w-full mt-2 border rounded-lg p-2"
                     onChange={handleChange}/>
            </div>

          

        </div>

      

        <div class="mt-6">

         {
             edit===null ?
                <button
                class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg" onClick={handleSubmit}>
                Save Category
            </button>
            :
            <button
                class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg" onClick={handleUpdate}>
                Update Category
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
                        Category
                    </th>

                    <th class="px-6 py-4 text-left">
                        Slug
                    </th>

                    

                    <th class="px-6 py-4 text-left">
                        Action
                    </th>

                </tr>

                </thead>

                <tbody>

              
                {
                    categoryArray && categoryArray.map((index,i)=>(
                         <tr class="border-t hover:bg-gray-50">

                    <td class="px-6 py-4">{i+1}</td>

                    <td class="px-6 py-4">

                        <img
                            src={index.catimg}  style={{height:'100px',width:'100px'}}/>

                    </td>

                    <td class="px-6 py-4 font-medium">
                       {index.name}
                    </td>

                    <td class="px-6 py-4">
                       {index.slug}
                    </td>

                 
                    <td class="px-6 py-4 space-x-2">

                        <button
                            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={
                                ()=>{
                                    editCategory(index.id)
                                }
                            }>
                            Edit
                        </button>

                        <button
                            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onClick={()=>{
                                dispatch(delCategory(index.id))
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

export default Category