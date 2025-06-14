"use client";
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation';

const AboutUs = () => {
    const router = useRouter();

    return (
        <div className="max-w-md mx-auto shadow-2xl min-h-screen">
            {/* Navigation Header */}
            <nav className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 text-white flex flex-col items-center justify-between shadow-md rounded-b-xl">
                <div className='w-full mb-4 flex items-center justify-between p-4'>
                    <button onClick={() => router.back()} className="text-2xl">
                        <IoIosArrowBack />
                    </button>
                    <h1 className="text-xl font-bold">About Us</h1>
                    <div className="w-6" /> {/* Spacer to center title */}
                </div>
                {/* Image Section */}
                <div>
                    <img
                        src="/aboutBg.png"
                        alt="About us background"
                        className="w-70 h-35"
                    />
                </div>
            </nav>

            {/* Content */}
            <main className="p-5 space-y-4 text-sm text-gray-800">
                <h2 className="text-lg font-bold text-orange-500">Who We Are</h2>
                <p>
                    We are a dedicated team committed to creating a fair and exciting platform
                    for online gaming enthusiasts. From lotteries and blockchain-based games to
                    live casinos and slots, our goal is to provide the best digital entertainment experience.
                </p>

                <h2 className="text-lg font-bold text-orange-500">What We Do</h2>
                <p>
                    We collaborate with over 10,000 game providers to ensure fairness, speed, and security.
                    Our platform is designed for quick deposits, fast withdrawals, and seamless gameplay.
                </p>

                <h2 className="text-lg font-bold text-orange-500">Our Mission</h2>
                <p>
                    To provide a secure, transparent, and enjoyable gaming environment for adults (18+).
                    We believe in responsible gaming and customer-first support.
                </p>
            </main>
        </div>
    );
};

export default AboutUs;
