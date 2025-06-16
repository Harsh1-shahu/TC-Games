"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

// Random generator functions (unchanged)
const generateRoundId = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString();
};

export const GameProvider = ({ children }) => {
    const [timeLeft, setTimeLeft] = useState(0);
    const [selectedTimer, setSelectedTimer] = useState(null);
    const [bets, setBets] = useState([]);
    const [visualWinnerColor, setVisualWinnerColor] = useState(null);
    const [visualWinnerNumber, setVisualWinnerNumber] = useState(null);
    const [currentWinner, setCurrentWinner] = useState(null);
    const [winners, setWinners] = useState([]);
    const [history, setHistory] = useState([]);

    // Initially null so SSR and client render match
    const [roundId, setRoundId] = useState(null);

    // On client, set roundId once after mount
    useEffect(() => {
        if (!roundId) {
            setRoundId(generateRoundId());
        }
    }, [roundId]);

    const placeBet = (option, amount) => {
        setBets(prev => [...prev, { option, amount }]);
    };

    const addRoundToHistory = (newRound) => {
        setHistory([newRound]);
    };

    const resetGame = () => {
        setBets([]);

        const newRoundId = generateRoundId();
        setRoundId(newRoundId);

        const winner = Math.random() < 0.5 ? 'Big' : 'Small';
        setCurrentWinner(winner);

        const colorOptions = ['Red', 'Green', 'Violet'];
        const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        setVisualWinnerColor(randomColor);

        const randomNumber = Math.floor(Math.random() * 10);
        setVisualWinnerNumber(randomNumber);

        const winnersList = bets
            .filter(bet => bet.option === winner)
            .map(bet => ({ ...bet, result: 'Win' }));

        setWinners(prev => [winner, ...prev.slice(0, 4)]);

        addRoundToHistory({
            period: newRoundId,
            number: randomNumber,
            bs: winner,  // 'Big' or 'Small'
            color: randomColor  // 'Red', 'Green', or 'Violet'
        });
    };

    return (
        <GameContext.Provider value={{
            timeLeft, setTimeLeft,
            selectedTimer, setSelectedTimer,
            bets, placeBet,
            resetGame, winners,
            currentWinner, visualWinnerColor,
            visualWinnerNumber, history,
            roundId
        }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => useContext(GameContext);
