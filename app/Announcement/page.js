"use client";
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { AiFillNotification } from "react-icons/ai";
import { useRouter } from 'next/navigation';

const Announcement = () => {
    const router = useRouter();

    return (
        <div className="max-w-md mx-auto shadow-2xl min-h-screen">
            {/* Navigation Header */}
            <nav className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 p-4 text-white flex items-center justify-between shadow-md rounded-b-xl">
                <button onClick={() => router.back()} className="text-2xl">
                    <IoIosArrowBack />
                </button>
                <h1 className="text-xl font-bold">Announcement</h1>
                <div className="w-6" /> {/* Spacer to center the title */}
            </nav>

            {/* Main Content */}
            <main className="p-5 space-y-6 text-sm text-gray-800">
                {/* Announcement Header */}
                <div className="flex items-center gap-2 text-orange-500 font-semibold text-lg">
                    <AiFillNotification className="text-xl" />
                    <span>Announcement</span>
                </div>

                {/* Announcement Message */}
                <div className="bg-orange-50 p-4 rounded-md border-l-4 border-orange-400 shadow-sm space-y-2">
                    <p>🎁 <strong>Join our official Telegram channels and claim the gifts!</strong></p>

                    <div className="space-y-1">
                        <p className="font-medium text-gray-900">🏆 Official Telegram Channel</p>
                        <button
                            onClick={() => router.push('https://t.me/TCofficialschannel')}
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            @TCofficialschannel
                        </button>
                    </div>

                    <div className="space-y-1">
                        <p className="font-medium text-gray-900">🥇 1 Minute Wingo Winning Prediction</p>
                        <button
                            onClick={() => router.push('https://t.me/EarningGroupFamily')}
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            @EarningGroupFamily
                        </button>
                    </div>

                    <div className="space-y-1">
                        <p className="font-medium text-gray-900">🚀 1 Minute Aviator Winning Signal</p>
                        <button
                            onClick={() => router.push('https://t.me/tcaviator_official')}
                            className="text-blue-600 underline hover:text-blue-800"
                        >
                            @tcaviator_official
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Announcement;
