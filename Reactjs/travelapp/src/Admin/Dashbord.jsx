import React from 'react'

function Dashbord() {
  return (
    <div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div class="bg-white rounded-xl shadow p-6">
                    <p class="text-gray-500">Users</p>
                    <h2 class="text-3xl font-bold mt-2">1,250</h2>
                </div>

                <div class="bg-white rounded-xl shadow p-6">
                    <p class="text-gray-500">Orders</p>
                    <h2 class="text-3xl font-bold mt-2">530</h2>
                </div>

                <div class="bg-white rounded-xl shadow p-6">
                    <p class="text-gray-500">Revenue</p>
                    <h2 class="text-3xl font-bold mt-2">$18,420</h2>
                </div>

                <div class="bg-white rounded-xl shadow p-6">
                    <p class="text-gray-500">Packages</p>
                    <h2 class="text-3xl font-bold mt-2">45</h2>
                </div>

            </div>
    </div>
  )
}

export default Dashbord