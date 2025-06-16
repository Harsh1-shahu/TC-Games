"use client";
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation';

const AddUSDT = () => {
    const router = useRouter();

    return (
        <div className="max-w-md mx-auto min-h-screen shadow-2xl bg-white">
            {/* Navbar section */}
            <nav className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 p-4 text-white flex items-center justify-between shadow-md rounded-b-xl">
                <button onClick={() => router.back()} className="text-3xl">
                    <IoIosArrowBack />
                </button>
                <h1 className="text-xl font-bold">Add USDT</h1>
                <div className="w-6" />
            </nav>

            {/* Add USDT Section */}
            <div className="p-4 space-y-4">
                <div>
                    <label className="block text-sm font-semibold mb-1">USDT Type</label>
                    <input
                        type="text"
                        placeholder="e.g. TRC20"
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-1">Wallet Address</label>
                    <input
                        type="text"
                        placeholder="Enter wallet address"
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <p className="text-xs text-gray-600">
                    USDT (TRC) address consists of 34 characters, starting with the letter T.
                </p>

                {/* Confirm Button */}
                <div>
                    <button
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition duration-200"
                    >
                        Add USDT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddUSDT;
