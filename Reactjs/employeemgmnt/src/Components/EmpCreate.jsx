import React from 'react'

function EmpCreate() {
    return (
      
            <div className="bg-gray-100 p-12">
                <h2 className='text-4xl text-center'>Create Employee</h2>
                <div class=" flex items-center justify-center p-4">
                    <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
                        <h2 class="text-2xl font-bold text-center mb-6">
                            Employee Form
                        </h2>

                        <form class="space-y-4">


                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    Employee Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter employee name"
                                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>


                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>


                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter contact number"
                                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>


                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    Address
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Enter address"
                                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>


                            <button
                                type="submit"
                                class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                Save Employee
                            </button>

                        </form>
                    </div>
                </div>
            </div>
       
    )
}

export default EmpCreate