'use client';

import React, { useState } from 'react';
import { MdOutlineMail, MdAttachEmail } from 'react-icons/md';
import { GiSmartphone } from "react-icons/gi";
import { FaSquarePhone } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const ForgetPassword = () => {
    const [method, setMethod] = useState('phone');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (method === 'email') {
            if (!email.trim()) {
                setError('Email is required.');
                return;
            }
            const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
            if (!isValidEmail) {
                setError('Enter a valid email address.');
                return;
            }
        } else {
            if (!phone.trim()) {
                setError('Phone number is required.');
                return;
            }
            const isValidPhone = /^\d{10}$/.test(phone);
            if (!isValidPhone) {
                setError('Enter a valid 10-digit phone number.');
                return;
            }
        }

        setSubmitted(true);
    };

    return (
        <div className="min-h-screen max-w-md mx-auto shadow-2xl bg-white">
            {/* Navbar */}
            <nav className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 p-4 flex items-center justify-between rounded-b-xl shadow-md">
                <button onClick={() => router.back()} className="text-white text-xl">
                    <FaArrowLeft />
                </button>
                <h1 className="text-xl font-bold text-white">Forgot Password</h1>
                <div className="w-6" /> {/* Empty space to balance the layout */}
            </nav>

            {/* Content Section */}
            <div className="flex items-center justify-center px-4 py-6">
                <div className="w-full max-w-md bg-gray-50 shadow-md rounded-lg p-6">
                    <p className="text-center text-sm text-gray-600 mb-6">
                        Reset your password using your registered email or phone number.
                    </p>

                    {/* Method Switch Buttons */}
                    <div className="flex justify-center gap-6 mb-6">
                        <button
                            onClick={() => { setMethod('phone'); setError(''); setSubmitted(false); }}
                            className={`px-4 py-2 rounded-full font-semibold flex items-center gap-2 ${method === 'phone' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
                        >
                            <GiSmartphone /> Phone
                        </button>
                        <button
                            onClick={() => { setMethod('email'); setError(''); setSubmitted(false); }}
                            className={`px-4 py-2 rounded-full font-semibold flex items-center gap-2 ${method === 'email' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
                        >
                            <MdOutlineMail /> Email
                        </button>
                    </div>

                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {method === 'email' ? (
                                <>
                                    <label className="flex items-center gap-2 font-semibold text-gray-700">
                                        <MdAttachEmail />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 p-2 rounded-md"
                                    />
                                </>
                            ) : (
                                <>
                                    <label className="flex items-center gap-2 font-semibold text-gray-700">
                                        <FaSquarePhone />
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        maxLength={10}
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))
                                        }
                                        placeholder="Enter 10-digit phone number"
                                        className="w-full border border-gray-300 p-2 rounded-md"
                                    />
                                </>
                            )}

                            {error && <p className="text-red-500 text-sm">{error}</p>}

                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition"
                            >
                                Send Reset Link
                            </button>
                        </form>
                    ) : (
                        <p className="text-green-600 text-center font-medium mt-4">
                            ✅ A reset link has been sent to your {method === 'email' ? 'email' : 'phone'}.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
