'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../Context/GameContext';
import Link from 'next/link';

const ColorBox = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedBalance, setSelectedBalance] = useState(1);
  const [quantity, setQuantity] = useState(1);      //by default selected 1
  const [activeBtn, setActiveBtn] = useState(null); // "minus" or "plus"
  const [colors, setColors] = useState([]);

  const {
    placeBet,
    timeLeft,
    winners,
    visualWinnerColor,
    visualWinnerNumber,
    roundId,
  } = useGame();

  const handlePlaceBet = () => {
    if (timeLeft <= 0) return alert("Timer expired. Please Select Timer.");
    placeBet(selectedOption, selectedBalance * quantity);
    setShowPopup(false);
  };

  {/* Show Total Amount Balance */ }
  const totalAmount = selectedBalance * quantity;

  {/* Opening of add Money Popup */ }
  const openPopup = (option) => {
    setSelectedOption(option);
    setShowPopup(true);
  };

  {/* Closing of add Money Popup */ }
  const closePopup = () => {
    setShowPopup(false);
    setSelectedOption('');
  };

  {/* Adding Color to dynamically according to text in Popup */ }
  const optionColorMap = {
    Big: 'bg-blue-500',
    Small: 'bg-orange-500',
    Green: 'bg-green-600',
    Red: 'bg-red-600',
    Violet: 'bg-violet-600',
    default: 'bg-gray-500',
  };

  // Map color names to Tailwind bg classes
          const colorMap = {
            Red: 'bg-red-600',
            Green: 'bg-green-600',
            Violet: 'bg-violet-600',
          };

  {/* Function of Quantity + button */ }
  const handleDecrease = () => {
    setActiveBtn("minus");
    setTimeout(() => setActiveBtn(null), 200);
    setQuantity(prev => Math.max(1, prev - 1));
  };

  {/* Function of Quantity - button */ }
  const handleIncrease = () => {
    setActiveBtn("plus");
    setTimeout(() => setActiveBtn(null), 200);
    setQuantity(prev => prev + 1);
  };


  useEffect(() => {
    const colorClasses = ['bg-green-500', 'bg-violet-500', 'bg-red-600'];
    const randomColors = Array.from({ length: 10 }, () =>
      colorClasses[Math.floor(Math.random() * colorClasses.length)]
    );
    setColors(randomColors);
  }, []);


  return (
    <div className='max-w-md p-5 mx-auto shadow-md rounded-lg bg-white'>
      {/* Color Boxes */}
      <div className='flex justify-between gap-2 mb-4'>
        <div
          onClick={() => openPopup('Green')}
          className='flex-1 bg-green-600 rounded-md flex items-center justify-between text-white px-3 py-2 cursor-pointer hover:opacity-90 transition'
        >
          <h1 className='text-sm font-medium'>Green</h1>
          <p className='text-sm'>2</p>
        </div>

        <div
          onClick={() => openPopup('Violet')}
          className='flex-1 bg-violet-600 rounded-md flex items-center justify-between text-white px-3 py-2 cursor-pointer hover:opacity-90 transition'
        >
          <h1 className='text-sm font-medium'>Violet</h1>
          <p className='text-sm'>4.5</p>
        </div>

        <div
          onClick={() => openPopup('Red')}
          className='flex-1 bg-red-600 rounded-md flex items-center justify-between text-white px-3 py-2 cursor-pointer hover:opacity-90 transition'
        >
          <h1 className='text-sm font-medium'>Red</h1>
          <p className='text-sm'>2</p>
        </div>
      </div>

      {/* Color coins with Numbers */}
      <div className="grid grid-cols-5 gap-4 mb-4">
        {Array.from({ length: 10 }).map((_, index) => {
          // Determine if this coin matches the winner's number
          const isWinnerCoin = index === visualWinnerNumber;

          // If it's the winner coin, use the winner color; else fallback to your existing color array or default style
          const coinColorClass = isWinnerCoin
            ? colorMap[visualWinnerColor] || 'bg-gray-400'
            : (colors[index] || 'bg-gray-200');

          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className="relative w-12 h-12 cursor-pointer rounded-full flex items-center justify-center text-white font-bold text-lg"
                onClick={() => openPopup(index)} // pass number as option
              >
                {/* Colored coin background */}
                <div
                  className={`absolute inset-1 rounded-full opacity-80 ${coinColorClass}`}
                ></div>

                {/* The image inside the coin */}
                <img
                  src="/istockphoto.jpg"
                  alt={`img-${index}`}
                  className="w-full h-full object-cover rounded-full opacity-50"
                />

                {/* Number on top */}
                <span className="absolute inset-0 flex items-center justify-center text-black font-bold text-sm">
                  {index}
                </span>
              </div>
            </div>
          );
        })}
      </div>



      {/* Buttons */}
      <div className='flex gap-4'>
        <button
          onClick={() => openPopup('Big')}
          className='w-full flex justify-between items-center bg-blue-500 text-white rounded-md p-2'>
          <p className='text-lg'>Big</p>
          <h1 className='text-sm'>2</h1>
        </button>
        <button
          onClick={() => openPopup('Small')}
          className='w-full flex justify-between items-center bg-orange-500 text-white rounded-md p-2'>
          <p className='text-lg'>Small</p>
          <h1 className='text-sm'>2</h1>
        </button>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed h-72 bottom-0 left-0 right-0 w-full max-w-md mx-auto bg-white border-t p-4 rounded-t-lg shadow-lg z-50"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className='absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm'
            >
              ✕
            </button>

            {/* Balance Update Section */}
            <p className='border-b py-1 mb-4'>
              Balance: 0.00{' '}
              <Link href="/Deposite">
                <span className='bg-orange-400 text-white p-1 rounded text-sm'>Deposit</span>
              </Link>
            </p>

            <h2 className='text-lg font-bold mt-2 flex items-center gap-2'>
              Select:
              <span
                className={`${optionColorMap[selectedOption] || optionColorMap.default} text-white p-1 rounded text-sm`}
              >
                {selectedOption}
              </span>

            </h2>

            {/* Balance Selection */}
            <h1 className="text-base mt-3 font-semibold mb-2">
              Balance:
              {[1, 10, 100, 1000].map((amount) => (
                <span
                  key={amount}
                  onClick={() => setSelectedBalance(amount)}
                  className={`ml-2 px-3 py-1 border rounded-xl cursor-pointer ${selectedBalance === amount ? 'bg-orange-400 text-white' : ''}`}
                >
                  {amount}
                </span>
              ))}
            </h1>

            {/* Quantity Control */}
            <h1 className="text-base mt-3 font-semibold flex items-center gap-2">
              Quantity:
              <span
                onClick={handleDecrease}
                className={`px-3 py-1 border rounded-full cursor-pointer transition-colors duration-150 ${activeBtn === "minus" ? "bg-orange-400 text-white" : ""
                  }`}
              >
                -
              </span>
              <span className="px-3 py-1 border rounded">{quantity}</span>
              <span
                onClick={handleIncrease}
                className={`px-3 py-1 border rounded-full cursor-pointer transition-colors duration-150 ${activeBtn === "plus" ? "bg-orange-400 text-white" : ""
                  }`}
              >
                +
              </span>
            </h1>

            {/* Total Amount */}
            <p className='bg-orange-400 text-white mt-4 rounded-xl p-1 text-center'>
              Total Amount: {totalAmount}
            </p>

            {/* Place bet button */}
            <button
              onClick={handlePlaceBet}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded font-bold"
            >
              Place Bet
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Winner List Section */}
      {timeLeft === 0 && winners.length > 0 && (
        <div className="mt-6 p-4 rounded-lg shadow-md border bg-gray-50 text-center">
          {/* Heading Section */}
          <h2 className="text-xl font-extrabold text-green-600 mb-4">
            🎉 Round Result
          </h2>

          {/* id and current winner text */}
          <div className="text-center mb-2">
            <h2 className="text-xl font-bold">Round ID: {roundId}</h2>

          </div>

          {/* Result Display in 3 Columns */}
          <div className="grid grid-cols-3 gap-4 text-center">
            {/* Winner */}
            <div className="bg-green-100 p-3 rounded shadow">
              <p className="text-sm font-medium text-gray-600">Winner</p>
              <p className="text-lg font-bold text-green-700 underline">{winners[0]}</p>
            </div>

            {/* Color */}
            {visualWinnerColor && (
              <div className={`p-3 rounded shadow ${visualWinnerColor === 'Green'
                ? 'bg-green-100 text-green-700'
                : visualWinnerColor === 'Red'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-violet-100 text-violet-700'
                }`}>
                <p className="text-sm font-medium text-gray-600">Color</p>
                <p className="text-lg font-bold">{visualWinnerColor}</p>
              </div>
            )}

            {/* Number */}
            {visualWinnerNumber !== null && visualWinnerNumber !== undefined && (
              <div className={`p-3 rounded shadow ${visualWinnerColor === 'Green'
                ? 'bg-green-100 text-green-700'
                : visualWinnerColor === 'Red'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-violet-100 text-violet-700'
                }`}>
                <p className="text-sm font-medium text-gray-600">Number</p>
                <p className="text-lg font-bold">{visualWinnerNumber}</p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default ColorBox;
