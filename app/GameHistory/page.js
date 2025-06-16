import React from 'react';
import { useGame } from '../Context/GameContext';

const GameHistory = () => {
    const { history } = useGame();

    return (
        <div className="max-w-md mx-auto">
            <h1 className='text-center text-orange-400 bg-gray-200 font-bold'>
                History of winning
            </h1>

            {/* Header Row */}
            <div className="grid grid-cols-4 text-center p-2 font-bold bg-orange-400 text-white">
                <p>Period</p>
                <p>Number</p>
                <p>B/S</p>
                <p>Color</p>
            </div>

            {/* Conditional rendering based on history length */}
            {history.length === 0 ? (
                <div className="text-center py-4 text-gray-500">
                    No history available
                </div>
            ) : (
                history.map((round, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-4 text-center p-2 border-b text-sm">
                        <p>{round.period}</p>
                        <p>{round.number}</p>
                        <p>{round.bs}</p>
                        <p>{round.color}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default GameHistory;
