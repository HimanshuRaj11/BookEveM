"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { Button } from './ui/button';

export default function RegisterForm({ setIsRegister }: { setIsRegister: any }) {
    const initialInputData = {
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    };
    const [InputData, setInputData] = useState(initialInputData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputData({ ...InputData, [name]: value });
    };
    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         const file = e.target.files[0];

    //         const reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         reader.onloadend = () => {

    //             setInputData({ ...InputData, image: reader.result as string });
    //         }

    //     }
    // };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`http://localhost:3000/api/v1/auth/register`, { InputData })
            if (data.success) {
                setInputData(initialInputData);
            }
        } catch (error) {
            return error
        }
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen dark w-[80vw] md:w-[60vw]">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-200 mb-4">Register</h2>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <input onChange={handleChange} name='name' placeholder="Name" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                    <input onChange={handleChange} name='email' placeholder="Email address" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />
                    <input onChange={handleChange} name='phone' placeholder="Phone" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
                    <input onChange={handleChange} name='password' placeholder="Password" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />
                    <input onChange={handleChange} name='confirmPassword' placeholder="Confirm Password" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />
                    <div className="flex items-start justify-between flex-col">
                        <label className="text-sm text-gray-200 cursor-pointer" htmlFor="remember-me">
                            <input className="mr-2" id="remember-me" type="checkbox" />
                            Remember me
                        </label>
                        <p className="text-white mt-4"> Already have an Account ? <span className="text-sm text-blue-500 font-bold hover:underline mt-4 cursor-pointer" onClick={() => setIsRegister(false)}>Login</span></p>
                    </div>
                    <Button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Register</Button>
                </form>
            </div>
        </div>
    )
}
