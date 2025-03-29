'use client'
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const Page = () => {
    const { User: { user } } = useSelector((state: any) => state.User);
    const registerAsOwner = async () => {
        try {
            const { data } = await axios.post(`${baseUrl}/api/v1/user/registerAsOwner`)
            return
        } catch (error) {
            return error
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <div className="shadow-md rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-semibold text-center text-gray-100">User Profile</h1>
                <div className="mt-4">
                    <img
                        src="/path/to/profile-pic.jpg"
                        alt="Profile Picture"
                        className="w-24 h-24 rounded-full mx-auto"
                    />
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-medium text-gray-200">{user?.name}</h2>
                    <p className="text-gray-300">{user?.email}</p>
                </div>
                {
                    user?.isOwner == true ?
                        <Button><Link href={'/banquet/create'}>Add Your Property</Link> </Button>
                        :
                        <Button onClick={registerAsOwner}>Register as Owner</Button>
                }

                <div className="mt-6">
                    <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;