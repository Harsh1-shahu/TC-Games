"use client";
import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { LiaCoinsSolid } from "react-icons/lia";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { useRouter } from 'next/navigation';

const Withdraw = () => {
    const router = useRouter();
    const [withdrawType, setWithdrawType] = useState('wallet');
    const [amount, setAmount] = useState('');
    const [upiId, setUpiId] = useState('');
    const [selected, setSelected] = useState('');

    return (
        <div className="w-full max-w-md mx-auto min-h-screen shadow-2xl">
            {/* Navbar section */}
            <nav className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 p-4 text-white flex items-center justify-between shadow-md rounded-b-xl">
                <button onClick={() => router.back()} className="text-3xl">
                    <IoIosArrowBack />
                </button>
                <h1 className="text-xl font-bold">Withdraw</h1>
                <div className="w-6" />
            </nav>

            {/* Main section */}
            <div className="p-5 space-y-6">
                {/* Balance */}
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-white rounded-md shadow-sm">
                    <FaWallet size={20} />
                    <span className="font-semibold">Wallet Balance:</span>
                    <p className="font-bold text-lg">₹0.00</p>
                </div>

                {/* Toggle buttons for withdrawal */}
                <div className='flex items-center justify-evenly gap-2'>
                    {/* Wallet */}
                    <section
                        onClick={() => setSelected('wallet')}
                        className={`cursor-pointer flex flex-col items-center gap-2 rounded-md py-2 px-4 flex-1 transition-transform duration-200 ${selected === 'wallet' ? 'bg-orange-400 text-white scale-109' : 'bg-gray-200'
                            }`}
                    >
                        <img src='/incash3.png' alt='Wallet Icon' className='w-9 h-8' />
                        <h1>Wallet</h1>
                    </section>

                    {/* Bank Card */}
                    <section
                        onClick={() => setSelected('BANK CARD')}
                        className={`cursor-pointer flex flex-col items-center gap-2 rounded-md py-3.5 px-4 flex-1 transition-transform duration-200 ${selected === 'BANK CARD' ? 'bg-orange-400 text-white scale-109' : 'bg-gray-200'
                            }`}
                    >
                        <FaCreditCard size={24} className='text-violet-500' />
                        <h1 className='text-sm'>Bank Card</h1>
                    </section>

                    {/* USDT */}
                    <section
                        onClick={() => setSelected('USDT')}
                        className={`cursor-pointer flex flex-col items-center gap-2 rounded-md py-2 px-4 flex-1 transition-transform duration-200 ${selected === 'USDT' ? 'bg-orange-400 text-white scale-109' : 'bg-gray-200'
                            }`}
                    >
                        <img src='/pay_icon_usdt_red.svg' alt='USDT Icon' className='w-9 h-8' />
                        <h1>USDT</h1>
                    </section>
                </div>

                {/* Initial Heading when nothing is selected */}
                {!selected && (
                    <div className="text-center py-6">
                        <p className="text-sm text-gray-600 font-medium">Please select a withdrawal method to continue</p>
                    </div>
                )}


                {/* Conditional Rendering Based on Selected Method */}
                {selected === 'wallet' && (
                    <>
                        {/* Enter amount section */}
                        <div className='flex items-center bg-gray-200 rounded p-1 gap-2'>
                            <BiRupee />
                            <input type='tel'
                                placeholder='Please enter withdrawal amount'
                                className='w-full px-2' />
                        </div>

                        {/* Wallet Section */}
                        <div className='border-1 border-orange-400 rounded-md p-2'>
                            <img src='/banner_fast.png' />
                            <h1
                                onClick={() => router.push("/AddWallet")}
                                className='text-center mt-3 bg-amber-400 p-1 rounded-md font-extrabold text-white cursor-pointer'>
                                <span className='rounded-full bg-orange-400 px-2'>+</span> Add Wallet
                            </h1>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition duration-200"
                            >
                                Withdraw
                            </button>
                        </div>
                    </>
                )}

                {/* Add Bank Card Section */}

                {selected === 'BANK CARD' && (
                    <>
                        {/* Enter amount section */}
                        <div className='flex items-center bg-gray-200 rounded p-1 gap-2'>
                            <BiRupee />
                            <input type='tel'
                                placeholder='Please enter withdrawal amount'
                                className='w-full px-2' />
                        </div>

                        {/* Bank Section */}
                        <div className='p-2 border-1 border-orange-400 rounded-md'>
                            <img src='/online-withdraw.png' className='w-full h-30' />
                            <h1
                                onClick={() => router.push("/BankAccount")}
                                className='text-center mt-3 bg-amber-400 p-1 rounded-md font-extrabold text-white cursor-pointer'>
                                <span className='rounded-full bg-orange-400 px-2'>+</span> Add Back Account
                            </h1>
                        </div>
                        {/* Submit withdraw Button */}
                        <div className="flex justify-center">
                            <button
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition duration-200"
                            >
                                Withdraw
                            </button>
                        </div>
                    </>

                )}

                {/* Add USDT Section */}

                {selected === 'USDT' && (
                    <>
                        {/* Enter amount section */}
                        <div className='flex items-center bg-gray-200 rounded p-1 gap-2'>
                            <img src='/pay_icon_usdt_red.svg'
                                className='w-5 h-5' />
                            <input type='tel'
                                placeholder='Please enter withdrawal amount'
                                className='w-full px-2' />
                        </div>

                        {/* USDT Section */}
                        <div className='p-2 border-1 border-orange-400 rounded-md'>
                            <img src='/tether-usdt-crypto.webp' className='w-full h-30' />
                            <h1
                                onClick={() => router.push("/AddUSDT")}
                                className='text-center mt-3 bg-amber-400 p-1 rounded-md font-extrabold text-white cursor-pointer'>
                                <span className='rounded-full bg-orange-400 px-2'>+</span> Add USDT
                            </h1>
                        </div>
                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition duration-200"
                            >
                                Withdraw
                            </button>
                        </div>
                    </>

                )}
            </div>
            <div className='p-4'>
                <ul className='border border-orange-400 p-4 rounded-md space-y-4 text-sm text-gray-700'>
                    <li className='flex items-center gap-2 border-b-1 border-orange-400'>
                        <MdOutlineAccountBalanceWallet className='text-orange-400' />
                        Withdrawal Time: 00:00 - 24:00
                    </li>
                    <li className='flex items-center gap-2 border-b-1 border-orange-400'>
                        <LiaCoinsSolid className='text-orange-400' />
                        Withdrawal amount range: ₹110.00 - ₹100,000.00
                    </li>
                    <li className='flex items-center gap-2 border-b-1 border-orange-400'>
                        <MdOutlineNotificationsActive className='text-orange-400' />
                        Remaining withdrawal times today: 3
                    </li>
                    <li className='flex items-center gap-2 border-b-1 border-orange-400'>
                        <LiaCoinsSolid className='text-orange-400' />
                        Need to bet ₹0.00 in order to withdraw
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Withdraw;
