import React, { useState } from 'react'

function Category() {
    const [singleCat,setSingleCat]=useState({})
    const handleChange= (e)=>{
        const {name,value}=e.target;
        setSingleCat({
            ...singleCat,
            [name]:value
        })
    }
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
                    name='categoryname'
                    onChange={handleChange}
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
                    class="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"/>
            </div>

            <div>
                <label class="font-medium">Category Image</label>
                <input
                    type="file"
                    class="w-full mt-2 border rounded-lg p-2"/>
            </div>

          

        </div>

        <div class="mt-6">
            <label class="font-medium">Description</label>

            <textarea
                rows="4"
                name='description'
                onChange={handleChange}
                placeholder="Category Description..."
                class="w-full mt-2 border rounded-lg px-4 py-3 resize-none"></textarea>
        </div>

        <div class="mt-6">

            <button
                class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg">
                Save Category
            </button>

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
                        Status
                    </th>

                    <th class="px-6 py-4 text-left">
                        Action
                    </th>

                </tr>

                </thead>

                <tbody>

                <tr class="border-t hover:bg-gray-50">

                    <td class="px-6 py-4">1</td>

                    <td class="px-6 py-4">

                        <img
                            src="https://picsum.photos/60"
                            class="rounded-lg h-14 w-14 object-cover"/>

                    </td>

                    <td class="px-6 py-4 font-medium">
                        Adventure
                    </td>

                    <td class="px-6 py-4">
                        adventure
                    </td>

                    <td class="px-6 py-4">

                        <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            Active
                        </span>

                    </td>

                    <td class="px-6 py-4 space-x-2">

                        <button
                            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                            Edit
                        </button>

                        <button
                            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                            Delete
                        </button>

                    </td>

                </tr>

                <tr class="border-t hover:bg-gray-50">

                    <td class="px-6 py-4">2</td>

                    <td class="px-6 py-4">

                        <img
                            src="https://picsum.photos/61"
                            class="rounded-lg h-14 w-14 object-cover"/>

                    </td>

                    <td class="px-6 py-4 font-medium">
                        Beach Tours
                    </td>

                    <td class="px-6 py-4">
                        beach-tours
                    </td>

                    <td class="px-6 py-4">

                        <span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                            Inactive
                        </span>

                    </td>

                    <td class="px-6 py-4 space-x-2">

                        <button
                            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                            Edit
                        </button>

                        <button
                            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                            Delete
                        </button>

                    </td>

                </tr>

                </tbody>

            </table>

        </div>

    </div>
    </div>
  )
}

export default Category