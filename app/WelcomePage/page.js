"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaBell } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { MdOutlineDoubleArrow } from "react-icons/md";
import Footer from '../Footer/page';


const WelcomePage = () => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const router = useRouter();
  const controls = useAnimation();
  const constraintsRef = useRef(null);


  // Rings the Notifaction Bell continuously
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        rotate: [0, -15, 15, -10, 10, 0],
        transition: { duration: 0.6, ease: "easeInOut" }
      });
    }, 2000); // Shake every 1 seconds

    return () => clearInterval(interval);
  }, [controls]);

  const handleOnClick = () => {
    router.push("/TimerPage");
  };

  const handleService = () => {
    router.push("/CustomerCare");
  };


  return (
    <div className='shadow-2xl max-w-md mx-auto min-h-screen'>
      {/* Notification Menu */}
      <AnimatePresence>
        {isNotifOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-orange-200 shadow-2xl rounded-l-2xl z-60 flex flex-col p-6"
          >
            {/* Clear's the Notification Menu */}
            <span >
              <button onClick={() => setIsNotifOpen(false)} className="text-start text-xl mb-2 font-bold rounded-xl text-orange-600">
                ✕
              </button>
            </span>
            <h1 className='text-center font-extrabold bg-orange-400 rounded-lg text-white p-1'>Notifaction</h1>
            <div className="mt-8 space-y-5 text-yellow-700">
              <p className="font-semibold">🔔 Login Notifaction</p>
              <p className='bg-yellow-100 rounded-md text-sm font-semibold p-1'>Your account has just been logged in. If you have any questions, please contact online customer service for consultation! I wish you happy gaming and lots of profits!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/*Navbar*/}
      <div className='max-w-md mx-auto bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600  px-4 py-2 flex items-center justify-between rounded-b-xl'>
        <h1 className='text-4xl font-serif text-white font-extrabold'>TC</h1>

        <motion.div animate={controls}>
          <FaBell
            onClick={() => setIsNotifOpen(true)}
            className="text-3xl border rounded-full text-orange-700 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-400 border-orange0-500 p-1 cursor-pointer"
          />
        </motion.div>
      </div>

      {/*Main Section*/}
      <div className="relative w-full max-w-md mx-auto p-3 mt-2">
        <img src="/casino_game1.webp" alt="Background" className="w-full h-auto shadow-xl/20 rounded-md" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center ">
          <p className="text-3xl text-white bg-orange-300 rounded-xl p-1 font-semibold">Welcome to TC Games</p>
          <button onClick={() => { router.push("/Deposite") }}>
            <h1 className="text-xl font-bold mt-2 bg-white p-1 rounded-xl">Join Now</h1>
          </button>
        </div>
      </div>

      <div className='p-4 max-w-md mx-auto'>
        <h1 className='text-center mt-3 font-bold bg-amber-100 p-1 rounded-md shadow'>Lottery</h1>
        <section onClick={handleOnClick} className='bg-gradient-to-t from-orange-200 via-orange-300 to-orange-500 rounded-xl mt-4 p-3'>
          <span className='text-xl font-bold text-white bg-amber-300 rounded-md p-1'>Win Go</span>
          <img src='Istockphoto.jpg'
            className='w-30 h-30 mx-auto rounded-full' />
          <p className='text-center font-bold flex items-center justify-center bg-gradient-to-r from-amber-400 via-amber-300 to-amber-100 rounded-md p-1 mt-2 text-white'>Click to Enter <FaAnglesRight /></p>
        </section>
      </div>

      {/* Withdrawal Section */}
      <div className='max-w-md mx-auto px-4'>
        <h1 className='text-center mt-3 font-bold bg-amber-100 p-1 rounded-md shadow'>Withdraw</h1>
        <section onClick={() => router.push('/Withdraw')}
          className='bg-gradient-to-t from-orange-200 via-orange-300 to-orange-500 rounded-xl mt-4 p-3'>
          <h1 className='text-center font-semibold font-serif text-white mb-2 bg-amber-300 rounded-md p-1'>Withdraw Money Seamlessly</h1>
          <img src='/ewallet.png' className='rounded-full' />
          <div className='flex justify-center items-center bg-gradient-to-r from-amber-400 via-amber-300 to-amber-100 rounded-md p-1 mt-2 text-white'>
            <h2 className=''>Click for Withdrawal</h2>
            <MdOutlineDoubleArrow className='text-xl' />
          </div>
        </section>

      </div>

      {/* CustomerCare Circle */}
      <div ref={constraintsRef} className="fixed inset-0 z-50 pointer-events-none">
        <motion.button
          drag
          dragMomentum={true}
          dragConstraints={constraintsRef}
          initial={{ x: 0, y: 0 }}
          className="absolute cursor-pointer pointer-events-auto"
          style={{ bottom: '6rem', right: '1rem' }}
          onClick={handleService}
        >
          <img
            src="/support-icon.webp"
            alt="Support"
            className="w-16 h-16 rounded-full shadow-xl border border-orange-400 mb-3 hover:scale-105 transition-transform duration-300"
          />
        </motion.button>
      </div>

      <Footer />
    </div>
  );
};

export default WelcomePage;
