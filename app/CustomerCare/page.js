'use client';
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineSpeakerNotes, MdMiscellaneousServices  } from "react-icons/md";
import { SiSimplenote } from "react-icons/si";
import { FaRegClock, FaEnvelope, FaPhoneAlt, FaComments } from "react-icons/fa";
import { LuChartNetwork } from "react-icons/lu";
import { PiHandWithdrawFill } from "react-icons/pi";
import { useRouter } from 'next/navigation';

const CustomerCare = () => {
    const router = useRouter();

    return (
        <div className="max-w-md mx-auto bg-gradient-to-b from-orange-100 via-white to-orange-50 min-h-screen shadow-xl overflow-hidden">
             {/* Navbar */}
            <nav className="relative bg-[#FF7600] rounded-b-xl">
                <div className="p-2 flex items-center justify-between bg-amber-700 rounded-b-lg">
                    <button onClick={() => router.back()} className="text-white text-2xl mr-2">
                        <IoIosArrowBack />
                    </button>
                    <h1 className="text-white text-xl font-bold">Customer Care</h1>
                    <div className="w-6" /> {/* Empty space to balance the layout */}
                </div>
                <SiSimplenote className='absolute top-40 left-20 text-white text-lg opacity-90' />
                <img src="/customer-care.png" alt="Customer Care" className=" w-full h-40 object-contain rounded-md" />
                <MdOutlineSpeakerNotes className='absolute top-20 right-20 text-white text-2xl opacity-90' />
            </nav>



            {/* Content */}
            <div className="p-5 space-y-6 text-gray-800">
                <p className="text-base leading-relaxed">
                    Need help? Our support team is available 24/7 to assist you with any queries or concerns.
                </p>

                {/* Contact Info */}
                <div>
                    <div className='flex items-center gap-2 border-b mb-2 border-orange-300'>
                    <LuChartNetwork className='text-blue-900 text-2xl pb-1'/>
                    <h2 className="text-lg font-semibold pb-1"> Contact & Service Information</h2>
                    </div>
                    <ul className="space-y-2 pl-2 text-sm">
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-orange-600" />
                            Email: <a href="mailto:Supportservice@gmail.com" className="text-blue-600 underline">Supportservice@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-orange-600" />
                            Phone: <a href="tel:+1800123456" className="text-blue-600 underline">+1 800 123 456</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaComments className="text-orange-600" />
                            Chat: <a href="https://hghlvxk.caripvkimqghnh.top/am?key=665114ba11c0aa799e27940d1a05a3fd&lang=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Live Chat</a>
                        </li>
                        <li className="flex items-center gap-1">
                            <PiHandWithdrawFill className="text-orange-600 text-lg" />
                            Withdraw: <a href="https://hghlvxk.caripvkimqghnh.top/am?key=665114ba11c0aa799e27940d1a05a3fd&lang=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Withdrawal Issues</a>
                        </li>
                        <li className="flex items-center gap-1">
                            <MdMiscellaneousServices className="text-orange-600 text-lg" />
                            Service-Center: <a href="https://tcsupport.in/#/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">TC Self-Service Center</a>
                        </li>
                    </ul>
                </div>

                {/* Working Hours */}
                <div>
                    <h2 className="text-lg font-semibold mb-2 border-b pb-1 border-orange-300">🕒 Working Hours</h2>
                    <p className="flex items-center gap-2 text-sm">
                        <FaRegClock className="text-orange-600" /> Monday - Sunday: <span className="font-medium">24 Hours Support</span>
                    </p>
                </div>

                {/* Common Issues */}
                <div>
                    <h2 className="text-lg font-semibold mb-2 border-b pb-1 border-orange-300">💡 Common Issues We Handle</h2>
                    <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Login or account-related queries</li>
                        <li>Payment and withdrawal issues</li>
                        <li>Game or technical support</li>
                        <li>Feedback and suggestions</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CustomerCare;
