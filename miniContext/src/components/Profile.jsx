import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Profile()
{
    const { user } = useContext(UserContext)

    if (!user)
        return (
            <div className="flex items-center justify-center h-40 text-gray-600 bg-gray-100 rounded shadow">
                Please log in to view your profile.
            </div>
        );

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Welcome</h2>
            <p className="text-gray-700">
                <span className="font-medium">Username:</span> {user.username}
            </p>
        </div>
    );
}
