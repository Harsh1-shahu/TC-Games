"use client";
import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation';

const BankAccount = () => {
    const [banks, setBanks] = useState([]);
    const [selectedBank, setSelectedBank] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Simulated API call — replace with real one when needed
        const fetchBanks = async () => {
            try {
                setLoading(true);
                const response = await new Promise((resolve) =>
                    setTimeout(() => resolve([
                        { name: 'State Bank of India', code: 'SBI' },
                        { name: 'HDFC Bank', code: 'HDFC' },
                        { name: 'ICICI Bank', code: 'ICICI' },
                        { name: 'Axis Bank', code: 'AXIS' }
                    ]), 1000)
                );
                setBanks(response);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch bank list.');
                setLoading(false);
            }
        };

        fetchBanks();
    }, []);

    return (
        <div className="max-w-md mx-auto min-h-screen shadow-2xl">

            {/* Navbar section */}
            <nav className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 p-4 text-white flex items-center justify-between shadow-md rounded-b-xl">
                <button onClick={() => router.back()} className="text-3xl">
                    <IoIosArrowBack />
                </button>
                <h1 className="text-xl font-bold">Add Bank Account</h1>
                <div className="w-6" />
            </nav>

            {/* Select Bank list Section */}
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Select Your Bank</h2>

                {loading && <p>Loading banks...</p>}
                {error && <p className="text-red-500">{error}</p>}

                {!loading && !error && (
                    <select
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                        className="w-full p-2 border rounded-md shadow-sm bg-gray-50"
                    >
                        <option value="">-- Choose Bank --</option>
                        {banks.map((bank) => (
                            <option key={bank.code} value={bank.code}>
                                {bank.name}
                            </option>
                        ))}
                    </select>
                )}

                {selectedBank && (
                    <p className="text-sm text-gray-700 mt-2">
                        Selected Bank Code: <span className="font-bold">{selectedBank}</span>
                    </p>
                )}
            </div>

            {/* Bank Details Form */}
            <div className="flex flex-col p-4 space-y-3">
                <input type="text" placeholder="Cardholder name" className="p-2 border rounded-md" />
                <input type="text" placeholder="Bank account number" className="p-2 border rounded-md" />
                <input type="text" placeholder="IFSC code" className="p-2 border rounded-md" />
                <input type="email" placeholder="Email address" className="p-2 border rounded-md" />
                <input type="tel" placeholder="Phone number" className="p-2 border rounded-md" />
                <input type="text" placeholder="State" className="p-2 border rounded-md" />
                <input type="text" placeholder="City" className="p-2 border rounded-md" />
                <input type="text" placeholder="Branch name" className="p-2 border rounded-md" />
            </div>

            {/* Confirm Button */}
            <div className="px-4 mb-4">
                <button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition duration-200"
                >
                    Confirm
                </button>

                <p className="text-xs text-red-500 text-center mt-2">
                    Warm reminder: Please fill in the withdrawal bank card information carefully. Once submitted, this information will be your only withdrawal bank.
                </p>
            </div>
        </div>
    );
};

export default BankAccount;
