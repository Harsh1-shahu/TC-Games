"use client"
import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [timeLeft, setTimeLeft] = useState(0);
    const [selectedTimer, setSelectedTimer] = useState(null);
    const [bets, setBets] = useState([]); // {option: 'Big'|'Small', amount: number}
    const [visualWinnerColor, setVisualWinnerColor] = useState(null);
    const [winners, setWinners] = useState([]);
    const [currentWinner, setCurrentWinner] = useState(null);
    const [visualWinnerNumber, setVisualWinnerNumber] = useState(null);
    const [history, setHistory] = useState([]);

    const placeBet = (option, amount) => {
        setBets(prev => [...prev, { option, amount }]);
    };

    const addRoundToHistory = (newRound) => {
        setHistory((prev) => {
            const updated = [newRound, ...prev];
            return updated.slice(0, 5); // Keep last 5 rounds
        });
    };

    const generateRoundId = () => {
        return Math.floor(1000000000 + Math.random() * 9000000000).toString();
    };

    const resetGame = () => {
        setBets([]);

        const roundId = generateRoundId();

        // Randomly determine Big or Small
        const winner = Math.random() < 0.5 ? 'Big' : 'Small';
        setCurrentWinner(winner);

        // Random color
        const colorOptions = ['Red', 'Green', 'Violet'];
        const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        setVisualWinnerColor(randomColor);

        // Random winner number (0–9)
        const randomNumber = Math.floor(Math.random() * 10);
        setVisualWinnerNumber(randomNumber);

        // Store winning bets
        const winnersList = bets
            .filter(bet => bet.option === winner)
            .map(bet => ({ ...bet, result: 'Win' }));

        setWinners(prev => [winner, ...prev.slice(0, 4)]);

        // ✅ Add round to history
        addRoundToHistory({
            period: roundId,
            number: randomNumber,
            bs: winner,
            color: randomColor
        });
    };

    return (
        <GameContext.Provider value={{
            timeLeft, setTimeLeft,
            selectedTimer, setSelectedTimer,
            bets, placeBet,
            resetGame, winners,
            currentWinner, visualWinnerColor,
            visualWinnerNumber, history
        }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => useContext(GameContext);
