import React from 'react'
import PropTypes from 'prop-types'


function UserCard({ user }) {
    return (
        <div>
            <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">

                <div class="flex flex-col items-center">
                    <img
                        class="w-24 h-24 rounded-full border-4 border-gray-200"
                        src={user.image}
                        alt="User"
                    />

                    <h2 class="mt-4 text-xl font-semibold text-gray-800">
                        {user.name}
                    </h2>

                    <p class="text-gray-500 text-sm">
                        {user.des}
                    </p>
                </div>

                <div class="mt-6 space-y-3">
                    <div class="flex justify-between">
                        <span class="text-gray-500">Email</span>
                        <span class="text-gray-700">{user.email}</span>
                    </div>

                    <div class="flex justify-between">
                        <span class="text-gray-500">Phone</span>
                        <span class="text-gray-700">{user.contact}</span>
                    </div>

                    <div class="flex justify-between">
                        <span class="text-gray-500">City</span>
                        <span class="text-gray-700">Surat</span>
                    </div>
                </div>

                <div class="mt-6 flex gap-3">
                    <button class="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                        View
                    </button>

                    <button class="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300">
                        Edit
                    </button>
                </div>

            </div>
        </div>
    )

    UserCard.propTypes = {
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            contact: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            image: PropTypes.string,
            des: PropTypes.string
        }).isRequired
    
}
}

export default UserCard