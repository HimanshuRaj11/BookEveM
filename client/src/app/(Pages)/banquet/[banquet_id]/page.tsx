"use client"
import { CarouselPlugin } from '@/components/ImagesCrousel'
import React from 'react'
// import { FaPhone, FaMapMarkerAlt, FaClock, FaDirections, FaCopy, FaEdit, FaEnvelope, FaSms, FaShareAlt, FaStar } from "react-icons/fa";

import { FaPhone, FaStar, FaCheckCircle, FaMapMarkerAlt, FaParking, FaShareAlt, FaEdit, FaDirections, FaCopy, FaClock, FaEnvelope, FaSms } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

function page({ params }: { params: any }) {

    const BanquetImg = [
        "/banquet2.jpg", "/banquet3.jpg", "/banquet4.jpg", "/banquet5.jpg", "/banquet6.jpg"
    ]

    const Banquet_id = params.banquet_id

    return (
        <div className='flex justify-center items-center flex-col'>
            <div className="flex justify-center items-center my-2 bg-white border dark:bg-gray-900 w-[90%] rounded-lg">
                <CarouselPlugin BanquetImg={BanquetImg} />
            </div>
            <div className="w-[90%] bg-white flex justify-center items-center my-2 dark:bg-gray-900">

                <div className="shadow-lg rounded-lg p-4 flex flex-col w-full border">
                    <div className="flex items-center space-x-2">
                        <h2 className="text-lg font-semibold">The Toy Hotel</h2>
                        <span className="flex items-center text-green-600 font-bold bg-green-100 px-2 py-1 rounded-lg text-sm">
                            4.2 <FaStar className="ml-1 text-yellow-500" />
                        </span>
                        <span className="text-blue-600 font-semibold">Verified</span>
                        <FaCheckCircle className="text-black" />
                    </div>

                    <div className="text-gray-600 text-sm flex items-center space-x-2 mt-2">
                        <FaMapMarkerAlt />
                        <span>Chandigarh Sector 34b, Chandigarh</span>
                        <span className="text-green-600">• Open until 11:00 pm</span>
                        <span>• 16 Years in Business</span>
                        <span className="flex items-center text-red-600">• <FaParking className="ml-1" /> Parking Available</span>
                    </div>

                    <div className="flex space-x-3 mt-4">
                        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md">
                            <FaPhone className="mr-2" /> 09036682665
                        </button>
                        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md">
                            Check Availability
                        </button>
                        <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md">
                            <BsWhatsapp className="mr-2" /> WhatsApp
                        </button>
                    </div>

                    <div className="flex items-center space-x-3 mt-4">
                        <FaShareAlt className="text-gray-500 cursor-pointer" />
                        <FaEdit className="text-gray-500 cursor-pointer" />
                    </div>

                    <div className="flex items-center mt-3 space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-gray-300 cursor-pointer" />
                        ))}
                        <span className="text-gray-500 text-sm">Click to Rate</span>
                    </div>
                </div>

            </div>


            <div className=" w-[90%] flex flex-row h-full justify-between items-center my-2 ">
                <div className="rounded-lg border h-full bg-white dark:bg-gray-900 w-[70%]">
                    heloo
                </div>
                <div className="rounded-lg border bg-white dark:bg-gray-900 w-[29%]">

                    <div className="p-4 w-full">
                        <h2 className="text-lg font-semibold">Contact</h2>
                        <div className="flex items-center text-blue-600 font-semibold mt-2">
                            <FaPhone className="mr-2" /> 09036682665
                        </div>

                        <hr className="my-3" />

                        <h2 className="text-lg font-semibold">Address</h2>
                        <p className="text-gray-600 text-sm mt-2">
                            The Toy Hotel, Sco 165 to 167, Sector 34 A, Sector 34, Sector 34, Chandigarh Sector 34b, Chandigarh - 160022 (Near Shyam Fashion Mall)
                        </p>

                        <div className="flex space-x-4 mt-3">
                            <button className="flex items-center text-blue-600 font-semibold">
                                <FaDirections className="mr-2" /> Get Directions
                            </button>
                            <button className="flex items-center text-blue-600 font-semibold">
                                <FaCopy className="mr-2" /> Copy
                            </button>
                        </div>

                        <div className="flex items-center text-green-600 font-semibold mt-4">
                            <FaClock className="mr-2" /> Open until 11:00 pm
                        </div>

                        <button className="flex items-center text-blue-600 font-semibold mt-2">
                            <FaEdit className="mr-2" /> Suggest new hours
                        </button>

                        <button className="flex items-center text-blue-600 font-semibold mt-2">
                            <FaEnvelope className="mr-2" /> Send Enquiry by Email
                        </button>

                        <button className="flex items-center text-blue-600 font-semibold mt-2">
                            <FaSms className="mr-2" /> Get info via SMS/Email
                        </button>

                        <button className="flex items-center text-blue-600 font-semibold mt-2">
                            <FaShareAlt className="mr-2" /> Share
                        </button>

                        <button className="flex items-center text-blue-600 font-semibold mt-2">
                            <FaStar className="mr-2" /> Tap to rate
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default page