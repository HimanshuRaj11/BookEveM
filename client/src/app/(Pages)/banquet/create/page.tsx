"use client"
import React, { useState } from 'react';
import axios from "axios"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
import Loader from '@/components/Loader';
import { toast } from "react-toastify"
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

function Page() {
    const [loading, setLoading] = useState(false)
    const [Files, setFiles] = useState<string[]>([])
    const initialInputData = {
        Name: "",
        Description: "",
        contactNumber: "",
        State: "",
        City: "",
        Address: "",
        PinCode: "",
        Landmark: "",
        MinPrice: "",
        MaxPrice: "",
    }
    const [InputData, setInputData] = useState(initialInputData)


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setFiles((prevFiles) => [...prevFiles, reader.result as string]);
            };
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInputData((preValue) => {
            return { ...preValue, [name]: value }
        })
    }

    const OnSubmit = async (e: any) => {
        console.log(InputData);

        setLoading(true)
        e.preventDefault();
        try {
            const { data } = await axios.post(`${baseUrl}/api/v1/banquet/create-banquet`, { InputData, Files })
            if (data.success) {
                toast.success(data.message)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            return error;
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-5">
            {
                loading &&
                <div className="w-full h-screen flex justify-center items-center fixed backdrop-blur-sm top-0 ">
                    <Loader />
                </div>
            }
            <h2 className="text-2xl font-bold mb-6 text-center">Register Your Banquets</h2>
            <div className="mb-5 w-full flex flex-col justify-center items-center ">

                <div className="w-full flex justify-center items-center ">
                    <div className=" w-[70vw] md:w-[35vw] aspect-video flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition duration-300">
                        <input
                            type="file"
                            name="BanquetImage"
                            id="BanquetImage"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                        <label
                            htmlFor="BanquetImage"
                            className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-blue-500"
                        >
                            <FaCloudUploadAlt className="text-4xl mb-2" />
                            <span className="text-lg">Upload an Image</span>
                            <span className="text-sm text-gray-400"> click to select</span>
                            {/* <span className="text-sm text-gray-400">Drag and drop or click to select</span> */}
                        </label>
                    </div>
                </div>


                {
                    Files.length > 0 && (
                        <div className="flex justify-center items-center ">
                            <Carousel
                                opts={{
                                    align: "start",
                                }}
                                className="w-full max-w-sm"
                            >
                                <CarouselContent>
                                    {

                                        Files?.map((file, i) => {
                                            return (
                                                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                                                    <div className="p-1">
                                                        <Card>
                                                            <CardContent className="flex aspect-square items-center justify-center p-1">
                                                                <div className="aspect-video overflow-hidden flex justify-center items-center">
                                                                    <img className=' object-cover' src={file} alt="" />
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </div>

                                                </CarouselItem>
                                            )
                                        })

                                    }

                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>



                        </div>
                    )
                }
            </div>


            <form onSubmit={OnSubmit} className=" shadow-md rounded-lg p-8 w-full md:w-[80%]">

                <div className="flex-col md:flex-row w-full flex justify-between">
                    <div className="mb-4 w-full md:w-[48%]">
                        <label className="block  text-sm font-bold mb-2" htmlFor="name">Banquet Name</label>
                        <input name='Name' className="bg-light shadow appearance-none border rounded  w-full  py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Banquet name" onChange={handleInputChange} />
                    </div>

                    <div className="mb-4 w-full md:w-[48%] ">
                        <label className="block  text-sm font-bold mb-2" htmlFor="contactNumber">Contact Number</label>
                        <input name='contactNumber' className="bg-light shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="contactNumber" type="text" placeholder="Enter contact number" onChange={handleInputChange} />
                    </div>

                </div>

                <div className="flex-col md:flex-row w-full flex justify-between">
                    <div className="mb-4 w-full md:w-[48%]">
                        <label className="block  text-sm font-bold mb-2" htmlFor="minPrice">Min Price</label>
                        <input name='MinPrice' className="bg-light shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="minPrice" type="number" placeholder="Enter minimum price" onChange={handleInputChange} />
                    </div>
                    <div className="mb-4 w-full md:w-[48%]">
                        <label className="block  text-sm font-bold mb-2" htmlFor="maxPrice">Max Price</label>
                        <input name='MaxPrice' className="bg-light shadow appearance-none border rounded w-full  py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="maxPrice" type="number" placeholder="Enter maximum price" onChange={handleInputChange} />
                    </div>
                </div>
                {/* Location */}
                <div className="flex-col md:flex-row w-full flex justify-between">

                    <div className="mb-4 w-full md:w-[48%]">
                        <label className="block  text-sm font-bold mb-2" htmlFor="state">State</label>
                        <input name='State' className="bg-light shadow appearance-none border rounded w-full  py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="state" type="text" placeholder="Enter state" onChange={handleInputChange} />
                    </div>
                    <div className="mb-4 w-full md:w-[48%]">
                        <label className="block  text-sm font-bold mb-2" htmlFor="City">City</label>
                        <input name='City' className="bg-light shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="City" type="text" placeholder="Enter City" onChange={handleInputChange} />
                    </div>
                </div>
                <div className="flex-col md:flex-row w-full flex justify-between">

                    <div className="mb-4 w-full md:w-[48%]">
                        <label className="block  text-sm font-bold mb-2" htmlFor="PinCode">PinCode</label>
                        <input name='PinCode' className="bg-light shadow appearance-none border rounded w-full  py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="PinCode" type="text" placeholder="Enter PinCode" onChange={handleInputChange} />
                    </div>
                    <div className="mb-4 w-full md:w-[48%]">
                        <label className="block  text-sm font-bold mb-2" htmlFor="landmark">Landmark</label>
                        <input name='Landmark' className="bg-light shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="landmark" type="text" placeholder="Enter Landmark" onChange={handleInputChange} />
                    </div>
                </div>

                <div className="mb-4 w-full ">
                    <label className="block  text-sm font-bold mb-2" htmlFor="address">Address</label>
                    <textarea name='Address' className="bg-light shadow appearance-none border rounded w-full  py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="address" placeholder="Enter Area & Street" onChange={handleInputChange}></textarea>
                </div>
                <div className="mb-4 w-full ">
                    <label className="block  text-sm font-bold mb-2" htmlFor="description">Description</label>
                    <textarea name='Description' className="bg-light shadow appearance-none border rounded w-full  py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Enter about Your banquet" onChange={handleInputChange}></textarea>
                </div>
                {/* <div className="mb-4 w-full md:w-[48%]">
        <label className="block  text-sm font-bold mb-2" htmlFor="isParking">Is Parking Available</label>
        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="isParking">
            <option value="true">Yes</option>
            <option value="false">No</option>
        </select>
    </div> */}
                <div className="flex items-center justify-between">
                    <button onClick={OnSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    );
}

export default Page;