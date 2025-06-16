"use client"
import React from 'react';
import { GrLanguage } from "react-icons/gr";
import { AiFillNotification } from "react-icons/ai";
import { MdEventRepeat } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Footer = () => {
    const router = useRouter();
    return (
        <>
            {/* Header and Info Section */}
            <div className="max-w-md mx-auto p-5 space-y-4">

                {/* Header */}
                <div className="flex justify-between items-center bg-amber-50 p-1 rounded">
                    <h1 className="text-2xl font-serif font-bold text-orange-500 tracking-wide">
                        TC
                    </h1>
                    <div className="text-xs font-bold rounded-full bg-orange-400 text-white px-4 py-1 border border-white shadow">
                        18+
                    </div>
                </div>

                {/* Info List */}
                <div className="bg-orange-50 p-4 rounded-md shadow-sm space-y-3">
                    <h2 className="text-orange-500 font-semibold text-lg mb-2">Platform Highlights</h2>
                    <ul className="list-disc px-3 text-gray-700 space-y-2 text-sm">
                        <li>
                            The platform advocates <span className="font-medium text-black">fairness, justice, and openness</span>. We mainly operate fair lottery, blockchain games, live casinos, and slot machine games.
                        </li>
                        <li>
                            Partnered with over <span className="font-medium text-black">10,000+ verified</span> live game dealers and slot game providers.
                        </li>
                        <li>
                            Supports <span className="font-medium text-black">instant deposits and withdrawals</span>. We look forward to your visit.
                        </li>
                    </ul>
                </div>

                {/* Warning */}
                <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded text-red-600 text-sm font-medium">
                    ⚠️ Gambling can be addictive. Please play responsibly. This platform is strictly for users aged 18 and above.
                </div>
            </div>


            {/* Footer Section */}
            <footer className="bg-orange-300 text-white py-6 mt-4 rounded-t-xl max-w-md mx-auto">
                <div className="px-4 space-y-4">
                    {/* Language Selector */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <GrLanguage />
                            <span className="font-bold cursor-pointer">Language</span>
                        </div>
                        <select className="text-orange-800 text-sm px-2 py-1 rounded cursor-pointer bg-white">
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                    </div>

                    {/* Notification */}
                    <div
                    onClick={() => router.push('/Announcement')}
                    className="flex items-center gap-2">
                        <AiFillNotification />
                        <span className="font-bold cursor-pointer">Notification</span>
                        <FaRegArrowAltCircleRight className='cursor-pointer'/>
                    </div>

                    {/* Customer Service */}
                    <div  onClick={() => router.push('/CustomerCare')}
                     className="flex items-center gap-2">
                        <MdEventRepeat />
                        <span className="font-bold cursor-pointer">24/7 Customer Service</span>
                        <FaRegArrowAltCircleRight className='cursor-pointer'/>
                    </div>

                    {/* About Us */}
                    <div 
                    onClick={() => router.push('/AboutUs')}
                    className="flex items-center gap-2">
                        <VscOrganization />
                        <span className="font-bold cursor-pointer">About Us</span>
                        <FaRegArrowAltCircleRight className='cursor-pointer'/>
                    </div>

                    {/* Copyright */}
                    <p className="text-center text-xs font-bold pt-2">
                        © 2025 YourCompany. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
