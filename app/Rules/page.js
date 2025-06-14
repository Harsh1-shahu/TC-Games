'use client';
import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation';

const Rules = () => {
    const [selectedGame, setSelectedGame] = useState("30sec");
    const router = useRouter();

    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedGame(value);
    };

    return (
        <>
            {/* Navigation Header */}
            <nav className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 p-4 text-white flex items-center justify-between shadow-md rounded-b-xl">
                <button onClick={() => router.back()}>
                    <IoIosArrowBack className='text-3xl'/>
                </button>
                <h1 className="text-xl font-bold">Rules</h1>
                <div className="w-6" /> {/* Spacer to center the title */}
            </nav>
            <div className="max-w-md mx-auto shadow-2xl min-h-screen p-4 bg-white rounded-lg">
                <h1 className="text-center bg-orange-400 text-white rounded-md p-2 text-xl font-bold mb-4">
                   ! Main Rules of Game
                </h1>

                <div className="p-2 bg-gray-100 rounded-md mb-4">
                    <p className="mb-2">1. Please select the game rules you want to view.</p>
                    <p>2. Mastering the rules will double your profits.</p>
                </div>

                <select
                    onChange={handleChange}
                    className='w-full p-2 border rounded-md mb-4'>
                    <option value="30sec">Win Go 30sec</option>
                    <option value="1min">Win Go 1min</option>
                    <option value="3min">Win Go 3min</option>
                    <option value="5min">Win Go 5min</option>
                </select>

                {/* Main Rules Section */}
                <div className="p-2">
                    <h2 className="text-lg font-semibold mb-2">Main Rules - {selectedGame}</h2>

                    {selectedGame === '30sec' && (
                        <p className="text-sm text-gray-700">
                            Every 0.5 minutes a draw is held, with 2880 draws per day. <br />
                            If you spend 100 to trade, after a 2% service fee, the contract amount is 98.
                        </p>
                    )}

                    {selectedGame === '1min' && (
                        <p className="text-sm text-gray-700">
                            Every 1 minute a draw is held, with 1440 draws per day. <br />
                            Betting 100 deducts 2%, resulting in a contract amount of 98.
                        </p>
                    )}

                    {selectedGame === '3min' && (
                        <p className="text-sm text-gray-700">
                            Every 3 minutes a draw is held, with 480 draws per day. <br />
                            Similar rules apply with 2% fee deduction.
                        </p>
                    )}

                    {selectedGame === '5min' && (
                        <p className="text-sm text-gray-700">
                            Every 5 minutes a draw is held, with 288 draws per day. <br />
                            Each bet of 100 is reduced to 98 after service fees.
                        </p>
                    )}
                </div>

                {/* Gameplay Section (Always visible) */}
                <div className="p-2">
                    <h2 className="text-lg font-semibold mb-2">Gameplay</h2>

                    <section className="mb-3">
                        <h3 className="font-semibold text-red-500">※ Single Number:</h3>
                        <p className="text-sm text-gray-700">
                            Choose a single number to bet on. If the drawn number matches the bet number, it's a win.
                        </p>
                    </section>

                    <section className="mb-3">
                        <h3 className="font-semibold text-red-500">※ Red:</h3>
                        <p className="text-sm text-gray-700">
                            Bet on red: numbers 0, 2, 4, 6, 8. If drawn, it's a win. 0 has 1.5x odds.
                        </p>
                    </section>

                    <section className="mb-3">
                        <h3 className="font-semibold text-red-500">※ Green:</h3>
                        <p className="text-sm text-gray-700">
                            Bet on green: numbers 1, 3, 5, 7, 9. 5 has 1.5x odds.
                        </p>
                    </section>

                    <section className="mb-3">
                        <h3 className="font-semibold text-red-500">※ Purple:</h3>
                        <p className="text-sm text-gray-700">
                            Bet on purple: only 0 and 5 are winners.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-semibold text-red-500">※ Big/Small:</h3>
                        <p className="text-sm text-gray-700">
                            "Big" is 5–9, "Small" is 0–4.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Rules;
