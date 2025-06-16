'use client'; // Required in Next.js App Router

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AddWindow = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/RegisterPage'); // route to Register Page
        }, 1000); // 1 seconds delay

        return () => clearTimeout(timer); // Cleanup
    }, [router]);

    return (
        <div className='relative max-w-md mx-auto bg-[#C62D06] min-h-screen'>
            <img src='/439.webp' className='w-full h-90' />
            <h1 className='text-4xl font-serif text-white font-extrabold text-center mt-8'>TC</h1>
            <p className='text-center font-serif text-xl font-bold text-white mt-2'>
                Withdraw fast, safe and stable
            </p>
            <img
                src='Betting-image.png'
                className='absolute bg-[#C62D06] right-[20%]'
            />
        </div>
    );
};

export default AddWindow;
