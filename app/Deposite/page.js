"use client"
import React, { useState } from 'react';
import { CiWallet } from "react-icons/ci";
import { BsQrCode } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import DepositAmt from '../DepositeAmt/page';

const Deposite = () => {
    const [selected, setSelected] = useState(''); // track selected payment method
    const [amount, setAmount] = useState(''); // track selected deposit amount
    const router = useRouter();

    return (
        <div className="w-full max-w-md mx-auto min-h-screen shadow-2xl bg-white rounded-lg">
            {/* Navigation Header */}
            <nav className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 p-4 text-white flex items-center justify-between shadow-md rounded-b-xl">
                <button onClick={() => router.back()} className="text-3xl">
                    <IoIosArrowBack />
                </button>
                <h1 className="text-xl font-bold">Deposit</h1>
                <div className="w-6" /> {/* Spacer */}
            </nav>

            <div className="p-4">
                {/* Balance */}
                <div className="flex items-center gap-3 p-4 mb-4 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-white rounded-md shadow-sm">
                    <FaWallet size={20} />
                    <span className="font-semibold">Available Balance:</span>
                    <p className="font-bold text-lg">₹0.00</p>
                </div>

                <p className="mb-4 border-b pb-2 text-gray-700 font-medium">Payment Method</p>

                {/* Payment Methods */}
                <div className="flex items-center justify-evenly gap-2">
                    {/* Wallet */}
                    <section
                        onClick={() => setSelected('wallet')}
                        className={`cursor-pointer flex flex-col items-center gap-2 rounded-md py-2 px-4 flex-1 transition-transform duration-200 ${selected === 'wallet' ? 'bg-orange-400 text-white scale-109' : 'bg-gray-200'}`}
                    >
                        <CiWallet size={24} />
                        <h1 className="text-sm">Wallet</h1>
                    </section>

                    {/* UPI */}
                    <section
                        onClick={() => setSelected('upi')}
                        className={`cursor-pointer flex flex-col items-center gap-2 rounded-md py-2 px-4 flex-1 transition-transform duration-200 ${selected === 'upi' ? 'bg-orange-400 text-white scale-109' : 'bg-gray-200'}`}
                    >
                        <img src="/UPI-Image.webp" alt="UPI" className="w-6 h-6 object-contain" />
                        <h1 className="text-sm">UPI</h1>
                    </section>

                    {/* QR */}
                    <section
                        onClick={() => setSelected('qr')}
                        className={`cursor-pointer flex flex-col items-center gap-2 rounded-md py-2 px-4 flex-1 transition-transform duration-200 ${selected === 'qr' ? 'bg-orange-400 text-white scale-109' : 'bg-gray-200'}`}
                    >
                        <BsQrCode size={24} />
                        <h1 className="text-sm">QR</h1>
                    </section>
                </div>

                {/* Initial Heading when nothing is selected */}
                {!selected && (
                    <div className="text-center py-6">
                        <p className="text-sm text-gray-600 font-medium">Please select a Payment method to continue</p>
                    </div>
                )}

                {/* Conditional Rendering Based on Selected Method */}
                {selected === 'wallet' && (
                    <div className="mt-4 bg-orange-50 p-3 rounded-lg border border-orange-200 shadow-sm">
                        <h2 className="text-sm font-semibold text-orange-600 mb-2">Wallet Selected</h2>
                        <p className="text-xs text-gray-600">Please select Amount to make Payment from wallet.</p>
                    </div>
                )}

                {selected === 'upi' && (
                    <div className="mt-4 bg-orange-50 p-3 rounded-lg border border-orange-200 shadow-sm">
                        <h2 className="text-sm font-semibold text-orange-600 mb-2">UPI Selected</h2>
                        <p className="text-xs text-gray-600">Please select Amount to make Payment from UPI. </p>
                    </div>
                )}

                {selected === 'qr' && (
                    <div className="mt-4 bg-orange-50 p-3 rounded-lg border border-orange-200 shadow-sm flex flex-col items-center justify-center gap-2">
                        <h2 className="text-sm font-semibold text-orange-600">Scan QR to Pay</h2>
                        <BsQrCode size={95} />
                        <p className="text-xs text-gray-600">Use any UPI app to scan and complete payment</p>
                    </div>
                )}


                {/* Deposit Amount Section */}
                <DepositAmt amount={amount} setAmount={setAmount} />

                {/* Enter Amount Input */}
                <div className="flex items-center bg-gray-200 rounded-xl mt-4 p-1">
                    <input
                        className="w-full p-1 rounded-lg outline-none"
                        type="tel"
                        placeholder="Enter amount, 100 - 200000"
                        value={amount}
                        onChange={(e) => {
                            const value = e.target.value;

                            // Allow only numbers
                            if (!/^\d*$/.test(value)) return;

                            // Convert to number and check upper limit
                            if (value === '' || parseInt(value, 10) <= 200000) {
                                setAmount(value);
                            }
                        }}
                        maxLength={6}
                    />

                    <MdOutlineCurrencyRupee />
                </div>

                {/* Submit Deposit Button */}
                <div className="flex justify-center mt-4">
                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition duration-200"
                    >
                        Deposit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Deposite;
