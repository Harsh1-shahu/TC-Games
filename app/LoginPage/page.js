'use client';

import React, { useState } from 'react';
import { GiSmartphone } from "react-icons/gi";
import { MdOutlineMail, MdAttachEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [loginType, setLoginType] = useState('phone');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const validate = () => {
        const newErrors = {};

        // Phone validation
        if (loginType === 'phone') {
            const trimmedPhone = phone.trim();

            if (!trimmedPhone) {
                newErrors.phone = 'Phone number is required.';
            }
        } else {
            // Email validation
            const trimmedEmail = email.trim();

            if (!trimmedEmail) {
                newErrors.email = 'Email is required.';
            } else if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
                newErrors.email = 'Enter a valid email address.';
            }
        }

        // Password validation
        const trimmedPassword = password.trim();

        if (!trimmedPassword) {
            newErrors.password = "Password is required.";
        } else {
            const passwordErrors = [];

            if (trimmedPassword.length < 8) passwordErrors.push("at least 8 characters");
            if (!/[A-Z]/.test(trimmedPassword)) passwordErrors.push("one uppercase letter");
            if (!/[a-z]/.test(trimmedPassword)) passwordErrors.push("one lowercase letter");
            if (!/[0-9]/.test(trimmedPassword)) passwordErrors.push("one digit");
            if (!/[!@#$%^&*(),.?\":{}|<>]/.test(trimmedPassword)) passwordErrors.push("one special character");
            if (/\s/.test(trimmedPassword)) passwordErrors.push("no spaces");

            if (passwordErrors.length > 0) {
                newErrors.password = `Password must contain ${passwordErrors.join(', ')}.`;
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Simulated success - replace with actual auth logic
            router.push('/WelcomePage');
        }
    };

    return (
        <div className="min-h-screen bg-white max-w-md mx-auto shadow-xl">
            {/* Navigation Bar */}
            <nav className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 py-2 px-4 text-white shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold font-serif">TC</h1>
                    <p className="text-xl font-bold ml-8">Login</p>
                    <select className="text-orange-800 text-sm px-2 py-1 rounded cursor-pointer bg-white">
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                </div>

                {/* Login Instructions */}
                <div className="text-white p-2 rounded-lg">
                    <span className="text-lg font-bold underline">Login</span>
                    <p className="text-sm font-semibold mt-1">
                        Please log in using your phone number or email.
                        <br />
                        If you forget your password, please contact customer service.
                    </p>
                </div>
            </nav>

            {/* Login Form */}
            <div className="max-w-md mx-auto p-6 mt-6">
                {/* Toggle Buttons */}
                <div className="flex justify-center gap-8 mb-8 items-center">
                    <button
                        type="button"
                        onClick={() => setLoginType('phone')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full ${loginType === 'phone' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
                    >
                        <GiSmartphone />
                        Phone
                    </button>

                    <button
                        type="button"
                        onClick={() => setLoginType('email')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full ${loginType === 'email' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
                    >
                        <MdOutlineMail />
                        Email
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {loginType === 'phone' ? (
                        <>
                            <div className="flex items-center gap-2 text-gray-700 font-semibold">
                                <FaSquarePhone className='text-orange-400' />
                                <h1>Phone Number</h1>
                            </div>
                            <input
                                type="tel"
                                value={phone}
                                maxLength={10}
                                pattern="\d{10}"
                                placeholder="Enter phone number"
                                className="w-full border border-gray-300 p-2 rounded-md"
                                onChange={(e) => {
                                    // Allow only digits and limit to 10
                                    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
                                    setPhone(digitsOnly);
                                }}
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </>
                    ) : (
                        <>
                            <div className="flex items-center gap-2 text-gray-700 font-semibold">
                                <MdAttachEmail className='text-orange-400' />
                                <h1>Enter Email Address</h1>
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email address"
                                className="w-full border border-gray-300 p-2 rounded-md"
                                onKeyDown={(e) => {
                                    if (e.key === ' ') {
                                        e.preventDefault();  // Prevent from space
                                    }
                                }}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </>
                    )}

                    <div className="flex items-center gap-2 text-gray-700 font-semibold">
                        <RiLockPasswordFill className='text-orange-400' />
                        <h1>Password</h1>
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="w-full border border-gray-300 p-2 rounded-md pr-10"
                            onKeyDown={(e) => {
                                if (e.key === ' ') {
                                    e.preventDefault();  // Prevent from space
                                }
                            }}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-500"
                        >
                            {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition"
                    >
                        Login
                    </button>
                </form>

                {/* Forgot Password and Customer Service */}
                <p className="text-sm text-center text-gray-500 mt-4">
                    <button
                        onClick={() => router.push('/ForgetPassword')}
                        className="text-red-500 font-semibold underline"
                    >
                        Forgot Password?
                    </button>
                    <span className="mx-2 font-semibold">or</span>
                    <button
                        onClick={() => router.push('/CustomerCare')}
                        className="text-blue-400 font-extrabold underline"
                    >
                        Contact Customer Service
                    </button>
                </p>


                {/* Register */}
                <p className="text-sm text-center mt-4">
                    Don't have an account?{' '}
                    <button
                        onClick={() => router.push('/RegisterPage')}
                        className="text-orange-500 font-semibold underline hover:text-orange-600"
                    >
                        Register
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
