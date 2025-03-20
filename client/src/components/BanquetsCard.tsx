import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaStar } from 'react-icons/fa'

interface Banquet {
    _id: number;
    Name: string;
    Discription: string;
    Image: string;
    ImageList: string[];
    rating: number;
    contactNumber: string;
    WhatsappNumber: string;
    isVerified: boolean;
    Location: string;
    Minprice: number;
    MaxPrice: number;
    Email: string;
    IsParking: boolean;
}

function BanquetsCard({ Banquet }: { Banquet: Banquet }) {

    return (

        <div className="w-full m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <img className="p-8 rounded-t-lg" src={Banquet.Image} alt="product image" />
            </Link>
            <div className="px-5 pb-5">
                <Link href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{Banquet.Name}</h5>
                </Link>
                <p className="text-sm text-gray-700 dark:text-gray-300">{Banquet.Discription}</p>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <FaStar className="w-4 h-4 text-yellow-300" />
                        <FaStar className="w-4 h-4 text-yellow-300" />
                        <FaStar className="w-4 h-4 text-yellow-300" />
                        <FaStar className="w-4 h-4 text-yellow-300" />
                        <FaStar className="w-4 h-4 text-gray-200 dark:text-gray-600" />
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{Banquet.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${Banquet.Minprice} - ${Banquet.MaxPrice}</span>
                    <Link href={`/banquet/${Banquet._id}?name=${Banquet.Name}`} className="text-white flex flex-row justify-center items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View <FaArrowRight className='ml-1' />
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default BanquetsCard