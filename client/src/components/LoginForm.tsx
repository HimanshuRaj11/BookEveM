"use client"
import axios from 'axios';
import React, { useState } from 'react';

const LoginForm = ({ setIsRegister }: { setIsRegister: any }) => {

    const initialInputData = {
        email: "",
        password: ""
    }
    const [InputData, setInputData] = useState(initialInputData)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputData({ ...InputData, [name]: value });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        try {
            const { data } = await axios.post(`http://localhost:3000/api/v1/auth/login`, { InputData })
            console.log(data);

            if (data.success) {
                setInputData(initialInputData);
            }
            return;
        } catch (error) {
            return error
        }
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen dark w-[80vw] md:w-[60vw]">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <input onChange={handleChange} name='email' placeholder="Email address" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />
                    <input onChange={handleChange} name='password' placeholder="Password" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />
                    <div className="flex items-center justify-between flex-wrap">
                        <label className="text-sm text-gray-200 cursor-pointer" htmlFor="remember-me">
                            <input className="mr-2" id="remember-me" type="checkbox" />
                            Remember me
                        </label>
                        <a className="text-sm text-blue-500 hover:underline mb-0.5" href="#">Forgot password?</a>
                        <p className="text-white mt-4"> Don't have an account? <span className="text-sm text-blue-500 font-bold hover:underline cursor-pointer mt-4" onClick={() => setIsRegister(true)}>Signup</span></p>
                    </div>
                    <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Login</button>
                </form>
            </div>
        </div>

    );
};

export default LoginForm;