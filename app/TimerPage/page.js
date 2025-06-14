"use client"
import React, { useEffect } from 'react';
import { RiTimerFlashFill } from "react-icons/ri";
import Navbar from '../Navbar/page';
import ColorBox from '../ColorBox/page';
import { useGame } from '../Context/GameContext';
import GameHistory from '../GameHistory/page';


const Timer = () => {
    const { timeLeft, setTimeLeft, selectedTimer, setSelectedTimer, resetGame } = useGame();

    // Timer durations in seconds
    const timerData = [
        { label: "30-sec", value: 30 },
        { label: "1-min", value: 60 },
        { label: "3-min", value: 180 },
        { label: "5-min", value: 300 },
    ];

    // Countdown logic
    useEffect(() => {
        if (!selectedTimer) return;

        setTimeLeft(selectedTimer.value);
        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    resetGame(); // trigger winner + clear bets
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [selectedTimer]);

    // Format time as MM:SS
    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60).toString().padStart(2, '0');
        const sec = (seconds % 60).toString().padStart(2, '0');
        return `${min}:${sec}`;
    };

    return (
        <div className='max-w-md mx-auto shadow-2xl min-h-screen' >
            <Navbar />

            <h1 className='text-center mt-2 text-orange-500 font-semibold'>Color Prediction Game</h1>

            {/* Timer Options */}
            <div className="mt-2 bg-gray-100 max-w-md mx-auto flex p-2 justify-center">
                {timerData.map((timer, index) => {
                    const isSelected = selectedTimer?.value === timer.value;
                    return (
                        <section
                            key={index}
                            onClick={() => setSelectedTimer(timer)}
                            className={`cursor-pointer w-28 px-4 py-2 rounded-lg shadow-sm flex flex-col items-center transition-colors duration-200 ${isSelected ? 'bg-orange-500 text-white' : 'bg-white text-orange-600 hover:bg-orange-100'
                                }`}
                        >
                            <RiTimerFlashFill size={24} />
                            <h1 className="font-bold text-sm">Win Go</h1>
                            <h2 className="text-sm">{timer.label}</h2>
                        </section>
                    );
                })}
            </div>

            {/* Image and Overlay Content */}
            <div className="mt-2 relative w-full max-w-md mx-auto">
                <img src="/images.png" alt="Timer background" className="w-full h-auto px-2 rounded-lg" />

                {/* Overlay texts */}
                <p className="absolute top-18 left-6 text-sm font-semibold text-white">2506021525</p>

                {/* Centered "Win Go" */}
                <p className="absolute top-12 left-1/2 transform -translate-x-1/2 text-2xl font-semibold text-white">
                    Win Go
                </p>

                {/* Centered current timer */}
                <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-lg font-bold text-white mt-3">
                    {selectedTimer && timeLeft > 0 ? selectedTimer.label : <RiTimerFlashFill size={28} />}
                </h1>


                {/* Right side timer display */}
                <p className="absolute top-16 right-5 text-xs text-white">Time Remaining</p>
                <p className="absolute top-20 right-8 text-lg font-bold text-white">
                    {selectedTimer ? formatTime(timeLeft) : '00:00'}
                </p>
            </div>
            <ColorBox />
            <GameHistory/>
        </div>
    );
};

export default Timer;
