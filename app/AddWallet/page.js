"use client"
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation';

const AddWallet = () => {
    const router = useRouter();
    return (
        <div className='max-w-md mx-auto shadow-2xl min-h-screen'>
            {/* Navigation Header */}
            <nav className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 p-4 text-white flex items-center justify-between shadow-md rounded-b-xl">
                <button onClick={() => router.back()} className="text-3xl">
                    <IoIosArrowBack />
                </button>
                <h1 className="text-xl font-bold">Add Wallet</h1>
                <div className="w-6" /> {/* Spacer to center the title */}
            </nav>

            {/* Main Section */}
            <div className="max-w-md mx-auto bg-white p-4 space-y-4">
                <h1 className="text-xl font-semibold">Add Wallet</h1>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="walletType">Wallet Type</label>
                    <input
                        type="text"
                        id="walletType"
                        placeholder="Enter wallet type (e.g., USDT, BTC)"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="walletAddress">Wallet Address</label>
                    <input
                        type="text"
                        id="walletAddress"
                        placeholder="Enter wallet address"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition duration-300">
                    Add Wallet
                </button>
            </div>

        </div>
    )
}

export default AddWallet