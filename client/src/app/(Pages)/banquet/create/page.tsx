import React from 'react';

function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 p-5">
            <form className="bg-slate-800 shadow-md rounded-lg p-8 w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Create Banquets</h2>

                <div className="flex-col md:flex-row w-full flex">

                    <div className="mb-4">
                        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input className="bg-light shadow appearance-none border rounded  w-full md:w-[48%] py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="description">Description</label>
                        <textarea className="bg-light shadow appearance-none border rounded w-full md:w-[48%] py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Enter description"></textarea>
                    </div>
                </div>

                <div className="flex-col md:flex-row w-full flex">

                    <div className="mb-4">
                        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="contactNumber">Contact Number</label>
                        <input className="bg-light shadow appearance-none border rounded w-full md:w-[48%] py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="contactNumber" type="text" placeholder="Enter contact number" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="whatsappNumber">WhatsApp Number</label>
                        <input className="bg-light shadow appearance-none border rounded w-full md:w-[48%] py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="whatsappNumber" type="text" placeholder="Enter WhatsApp number" />
                    </div>
                </div>

                <div className="flex-col md:flex-row w-full flex">
                    <div className="mb-4">
                        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="minPrice">Min Price</label>
                        <input className="bg-light shadow appearance-none border rounded w-full md:w-[48%] py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="minPrice" type="number" placeholder="Enter minimum price" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="maxPrice">Max Price</label>
                        <input className="bg-light shadow appearance-none border rounded w-full md:w-[48%] py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="maxPrice" type="number" placeholder="Enter maximum price" />
                    </div>
                </div>
                <div className="flex-col md:flex-row w-full flex">
                    <div className="mb-4">
                        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="minPrice">Min Price</label>
                        <input className="bg-light shadow appearance-none border rounded w-full md:w-[48%] py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="minPrice" type="number" placeholder="Enter minimum price" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="maxPrice">Max Price</label>
                        <input className="bg-light shadow appearance-none border rounded w-full md:w-[48%] py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="maxPrice" type="number" placeholder="Enter maximum price" />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input className="bg-light shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter email" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="isParking">Is Parking Available</label>
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="isParking">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Page;