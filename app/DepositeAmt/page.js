"use client"
import React from 'react';
import { GiWallet } from "react-icons/gi";

// Utility function to convert shorthand to number (as number)
const convertToNumber = (value) => {
    if (typeof value === 'string' && value.includes('K')) {
        return parseInt(value.replace('K', '')) * 1000;
    }
    return parseInt(value);
};

const DepositAmt = ({ amount, setAmount }) => {
    const amounts = ['100', '300', '500', '1K', '3K', '5K', '10K', '30K', '50K', '80K', '100K'];

    // Define offer % for each amount
    const offers = {
        '100': '112%',
        '300': '112%',
        '500': '112%',
        '1K': '112%',
        '3K': '114%',
        '5K': '114%',
        '10K': '114%',
        '30K': '114%',
        '50K': '116%',
        '80K': '116%',
        '100K': '116%'
    };

    // Reverse lookup: get offer key (like '1K') from numeric amount
    const getOfferKey = () => {
        for (let key of Object.keys(offers)) {
            if (convertToNumber(key) === Number(amount)) return key;
        }
        return null;
    };

    // Calculate bonus amount
    const offerKey = getOfferKey();
    const offerPercent = offerKey ? parseInt(offers[offerKey]) : 100;
    const totalWithBonus = Math.floor((amount * offerPercent) / 100);

    return (
        <div className='max-w-md mx-auto mt-8'>
            {/* Header */}
            <div className='flex items-center gap-2 border-b border-orange-400 pb-1'>
                <GiWallet className='text-orange-400 mb-1' />
                <h1 className='mb-1 font-bold text-gray-600'>Deposit Amount</h1>
            </div>

            {/* Amount Selection Grid */}
            <div className='grid grid-cols-3 gap-2 mt-4 text-center'>
                {amounts.map((amt) => {
                    const numericValue = convertToNumber(amt);
                    const offer = offers[amt];

                    return (
                        <section
                            key={amt}
                            onClick={() => setAmount(numericValue)}
                            className={`relative cursor-pointer rounded p-2 text-sm font-semibold transition-transform duration-200 
                            ${Number(amount) === numericValue ? 'bg-orange-400 text-white scale-105' : 'bg-gray-200 text-gray-600'}`}
                        >
                            <h1>{amt}</h1>

                            {offer && (
                                <div className="absolute top-[-5px] right-[1px] w-9 h-5">
                                    <img src="/gift.png" className="w-full h-full" />
                                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-orange-400">
                                        {offer}
                                    </span>
                                </div>
                            )}
                        </section>
                    );
                })}
            </div>

            {/* Amount + Bonus Output */}
            <div className="mt-6 px-2">
                <label className="block mb-2 text-sm font-bold text-orange-500 tracking-wide">
                    🎁 Total with Bonus
                </label>
                <div className="flex items-center justify-center bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-50 border border-orange-300 rounded-lg shadow-inner py-3 px-4">
                    <span className="text-lg font-extrabold text-orange-600 tracking-wider">
                        ₹ {totalWithBonus.toLocaleString()}
                    </span>
                </div>
                <p className="mt-1 text-xs text-gray-500 text-center italic">
                    Includes promotional bonus based on your selected deposit
                </p>
            </div>

        </div>
    );
};

export default DepositAmt;
