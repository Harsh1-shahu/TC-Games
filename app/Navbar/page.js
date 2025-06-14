'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { IoChevronBackSharp } from 'react-icons/io5';
import Link from 'next/link';

const Navbar = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back(); // Navigates to the previous page
    };

    return (
        <div className='max-w-md mx-auto bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-white px-4 py-2 flex items-center justify-between rounded-b-xl'>
            <IoChevronBackSharp className='text-3xl cursor-pointer' onClick={handleBack} />

            <div className='flex gap-1 items-center'>
                
                <h1 className='text-4xl font-serif font-extrabold'>TC</h1>
            </div>

            <Link href="/Rules" className='text-sm font-semibold'>Rules</Link>
        </div>
    );
};

export default Navbar;
