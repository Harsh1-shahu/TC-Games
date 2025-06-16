'use client';

import React, { useState } from 'react';
import { GiSmartphone } from "react-icons/gi";
import { MdOutlineMail, MdAttachEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { useRouter } from 'next/navigation';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const RegisterPage = () => {
    const [registerType, setRegisterType] = useState('phone');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const router = useRouter();

    const validate = () => {
        const newErrors = {};

        if (registerType === 'phone') {
            if (!phone.trim()) {
                newErrors.phone = 'Phone number is required.';
            } else if (!/^\d{10}$/.test(phone)) {
                newErrors.phone = 'Enter a valid 10-digit phone number.';
            }
        } else {
            if (!email.trim()) {
                newErrors.email = 'Email is required.';
            } else if (!/^\S+@\S+\.\S+$/.test(email)) {
                newErrors.email = 'Enter a valid email address.';
            }
        }

        if (!password) {
            newErrors.password = 'Password is required.';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password.';
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        if (!privacyAccepted) {
            newErrors.privacy = 'You must accept the Privacy Policy.';
        }


        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Simulated success logic (replace with actual backend call)
            router.push('/WelcomePage');
        }
    };

    return (
        <div className="min-h-screen bg-white max-w-md mx-auto shadow-xl">
            {/* Header */}
            <nav className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 py-2 px-4 text-white shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold font-serif">TC</h1>
                    <p className="text-xl font-bold ml-8">Register</p>
                    <select className="text-orange-800 text-sm px-2 py-1 rounded cursor-pointer bg-white">
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                </div>
                <div className="text-white p-2 rounded-lg">
                    <span className="text-lg font-bold underline">Create Account</span>
                    <p className="text-sm font-semibold mt-1">
                        Register using your phone number or email.
                        <br />
                        Already have an account? Login now.
                    </p>
                </div>
            </nav>

            {/* Registration Form */}
            <div className="max-w-md mx-auto p-6 mt-6">
                {/* Toggle Buttons */}
                <div className="flex justify-center gap-8 mb-6 items-center">
                    <button
                        type="button"
                        onClick={() => setRegisterType('phone')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full ${registerType === 'phone' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
                    >
                        <GiSmartphone />
                        Phone
                    </button>
                    <button
                        type="button"
                        onClick={() => setRegisterType('email')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full ${registerType === 'email' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
                    >
                        <MdOutlineMail />
                        Email
                    </button>
                </div>

                {/* Form Fields */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {registerType === 'phone' ? (
                        <>
                            <div className="flex items-center gap-2 text-gray-700 font-semibold">
                                <FaSquarePhone className='text-orange-400'/>
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
                                <MdAttachEmail className='text-orange-400'/>
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
                        <RiLockPasswordFill className='text-orange-400'/>
                        <h1>Set Password</h1>
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


                    <div className="flex items-center gap-2 text-gray-700 font-semibold">
                        <RiLockPasswordFill className='text-orange-400'/>
                        <h1>Confirm Password</h1>
                    </div>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm password"
                            className="w-full border border-gray-300 p-2 rounded-md pr-10"
                            onKeyDown={(e) => {
                                if (e.key === ' ') {
                                    e.preventDefault();  // Prevent from space
                                }
                            }}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-500"
                        >
                            {showConfirmPassword ? <IoIosEyeOff /> : <IoIosEye />}
                        </button>
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}


                    {/* Privacy Policy Section */}
                    <div className="mt-4">
                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                id="privacy"
                                checked={privacyAccepted}
                                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                            />
                            <label htmlFor="privacy" className="text-sm text-gray-700">
                                I agree to the{' '}
                                <button
                                    type="button"
                                    onClick={() => router.push('/PrivacyPolicy')}
                                    className="text-blue-500 font-semibold underline"
                                >
                                    Privacy Policy
                                </button>
                            </label>
                        </div>
                        {errors.privacy && <p className="text-red-500 text-sm">{errors.privacy}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition"
                    >
                        Register
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-sm text-center mt-4">
                    Already have an account?{' '}
                    <button
                        onClick={() => router.push('/LoginPage')}
                        className="text-orange-500 font-semibold underline hover:text-orange-600"
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
