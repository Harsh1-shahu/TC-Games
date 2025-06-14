import React from 'react';
import { useGame } from '../Context/GameContext';

const GameHistory = () => {
    const { history } = useGame();

    return (
        <div className="max-w-md mx-auto">
            <h1 className='text-center text-orange-400 bg-gray-200 font-bold'>History of winning</h1>
            {/* Header Row */}
            <div className="flex items-center justify-evenly py-2 font-bold bg-orange-400 text-white">
                <p>Period</p>
                <p>Number</p>
                <p>B/S</p>
                <p>Color</p>
            </div>

            {/* History List */}
            {history.map((round, index) => (
                <div
                    key={index}
                    className="flex justify-evenly py-2 border-b text-sm">
                    <p>{round.period}</p>
                    <p>{round.number}</p>
                    <p>{round.bs}</p>
                    <p>{round.color}</p>
                </div>
            ))}
        </div>
    );
};

export default GameHistory;
