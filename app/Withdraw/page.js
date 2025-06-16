"use client";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { LiaCoinsSolid } from "react-icons/lia";
import {
    MdOutlineNotificationsActive,
    MdOutlineAccountBalanceWallet,
} from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Withdraw = () => {
    const router = useRouter();
    const [selected, setSelected] = useState("");
    const [amount, setAmount] = useState("");

    // Track if user added wallet, bank account, or USDT address
    const [walletAdded, setWalletAdded] = useState(false);
    const [bankAccountAdded, setBankAccountAdded] = useState(false);
    const [usdtAdded, setUsdtAdded] = useState(false);

    const handleAmountChange = (e) => {
        const val = e.target.value;
        if (/^\d*$/.test(val)) {
            setAmount(val);
        }
    };

    const handleWithdraw = () => {
        if (!amount || Number(amount) === 0) {
            alert("Please enter a valid withdrawal amount.");
            return;
        }

        if (selected === "wallet" && !walletAdded) {
            alert("Please add wallet to proceed with withdrawal.");
            return;
        }
        if (selected === "bankcard" && !bankAccountAdded) {
            alert("Please add bank account to proceed with withdrawal.");
            return;
        }
        if (selected === "usdt" && !usdtAdded) {
            alert("Please add USDT to proceed with withdrawal.");
            return;
        }
    };


    return (
        <div className="w-full max-w-md mx-auto min-h-screen shadow-2xl">
            {/* Navbar */}
            <nav className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 p-4 text-white flex items-center justify-between shadow-md rounded-b-xl">
                <button
                    onClick={() => router.back()}
                    aria-label="Go back"
                    className="text-3xl"
                >
                    <IoIosArrowBack />
                </button>
                <h1 className="text-xl font-bold">Withdraw</h1>
                <div className="w-6" />
            </nav>

            {/* Main */}
            <div className="p-5 space-y-6">
                {/* Balance */}
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-white rounded-md shadow-sm">
                    <FaWallet size={20} />
                    <span className="font-semibold">Wallet Balance:</span>
                    <p className="font-bold text-lg">₹0.00</p>
                </div>

                {/* Withdrawal method selector */}
                <div className="flex items-center justify-evenly gap-2">
                    {/* Wallet */}
                    <section
                        onClick={() => setSelected("wallet")}
                        className={`cursor-pointer flex flex-col items-center gap-2 rounded-md py-2 px-4 flex-1 transition-transform duration-200 ${selected === "wallet"
                            ? "bg-orange-400 text-white scale-105"
                            : "bg-gray-200"
                            }`}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && setSelected("wallet")}
                        aria-pressed={selected === "wallet"}
                    >
                        <img src="/incash3.png" alt="Wallet Icon" className="w-9 h-8" />
                        <h2>Wallet</h2>
                    </section>

                    {/* Bank Card */}
                    <section
                        onClick={() => setSelected("bankcard")}
                        className={`cursor-pointer flex flex-col items-center gap-2 rounded-md py-3.5 px-4 flex-1 transition-transform duration-200 ${selected === "bankcard"
                            ? "bg-orange-400 text-white scale-105"
                            : "bg-gray-200"
                            }`}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && setSelected("bankcard")}
                        aria-pressed={selected === "bankcard"}
                    >
                        <FaCreditCard size={24} className="text-violet-500" />
                        <h2 className="text-sm">Bank Card</h2>
                    </section>

                    {/* USDT */}
                    <section
                        onClick={() => setSelected("usdt")}
                        className={`cursor-pointer flex flex-col items-center gap-2 rounded-md py-2 px-4 flex-1 transition-transform duration-200 ${selected === "usdt"
                            ? "bg-orange-400 text-white scale-105"
                            : "bg-gray-200"
                            }`}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && setSelected("usdt")}
                        aria-pressed={selected === "usdt"}
                    >
                        <img src="/pay_icon_usdt_red.svg" alt="USDT Icon" className="w-9 h-8" />
                        <h2>USDT</h2>
                    </section>
                </div>

                {/* Prompt */}
                {!selected && (
                    <div className="text-center py-6">
                        <p className="text-sm text-gray-600 font-medium">
                            Please select a withdrawal method to continue
                        </p>
                    </div>
                )}

                {/* Conditional sections */}
                {selected === "wallet" && (
                    <>
                        <div className="flex items-center bg-gray-200 rounded p-1 gap-2">
                            <BiRupee />
                            <input
                                type="tel"
                                placeholder="Please enter withdrawal amount"
                                className="w-full px-2 bg-transparent outline-none"
                                value={amount}
                                onChange={handleAmountChange}
                                inputMode="numeric"
                            />
                        </div>

                        <div className="border border-orange-400 rounded-md p-2">
                            <img src="/banner_fast.png" alt="Fast withdrawal banner" />
                            <button
                                onClick={() => {
                                    router.push("/AddWallet");
                                    // Simulate wallet added on return, replace with real logic
                                    setWalletAdded(true);
                                }}
                                className="w-full mt-3 bg-amber-400 p-2 rounded-md font-extrabold text-white cursor-pointer hover:bg-amber-500 transition"
                                type="button"
                            >
                                <span className="rounded-full bg-orange-400 px-2 mr-2">+</span>{" "}
                                Add Wallet
                            </button>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button
                                onClick={handleWithdraw}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition duration-200"
                                type="button"
                            >
                                Withdraw
                            </button>
                        </div>
                    </>
                )}

                {selected === "bankcard" && (
                    <>
                        <div className="flex items-center bg-gray-200 rounded p-1 gap-2">
                            <BiRupee />
                            <input
                                type="tel"
                                placeholder="Please enter withdrawal amount"
                                className="w-full px-2 bg-transparent outline-none"
                                value={amount}
                                onChange={handleAmountChange}
                                inputMode="numeric"
                            />
                        </div>

                        <div className="p-2 border border-orange-400 rounded-md">
                            <img
                                src="/online-withdraw.png"
                                alt="Online withdrawal"
                                className="w-full h-30 object-contain"
                            />
                            <button
                                onClick={() => {
                                    router.push("/BankAccount");
                                    setBankAccountAdded(true);
                                }}
                                className="w-full mt-3 bg-amber-400 p-2 rounded-md font-extrabold text-white cursor-pointer hover:bg-amber-500 transition"
                                type="button"
                            >
                                <span className="rounded-full bg-orange-400 px-2 mr-2">+</span>{" "}
                                Add Bank Account
                            </button>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button
                                onClick={handleWithdraw}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition duration-200"
                                type="button"
                            >
                                Withdraw
                            </button>
                        </div>
                    </>
                )}

                {selected === "usdt" && (
                    <>
                        <div className="flex items-center bg-gray-200 rounded p-1 gap-2">
                            <img
                                src="/pay_icon_usdt_red.svg"
                                alt="USDT Icon"
                                className="w-5 h-5"
                            />
                            <input
                                type="tel"
                                placeholder="Please enter withdrawal amount"
                                className="w-full px-2 bg-transparent outline-none"
                                value={amount}
                                onChange={handleAmountChange}
                                inputMode="numeric"
                            />
                        </div>

                        <div className="p-2 border border-orange-400 rounded-md">
                            <img
                                src="/tether-usdt-crypto.webp"
                                alt="USDT Crypto"
                                className="w-full h-30 object-contain"
                            />
                            <button
                                onClick={() => {
                                    router.push("/AddUSDT");
                                    setUsdtAdded(true);
                                }}
                                className="w-full mt-3 bg-amber-400 p-2 rounded-md font-extrabold text-white cursor-pointer hover:bg-amber-500 transition"
                                type="button"
                            >
                                <span className="rounded-full bg-orange-400 px-2 mr-2">+</span>{" "}
                                Add USDT
                            </button>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button
                                onClick={handleWithdraw}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition duration-200"
                                type="button"
                            >
                                Withdraw
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Info list */}
            <div className="p-4">
                <ul className="border border-orange-400 p-4 rounded-md space-y-4 text-sm text-gray-700">
                    <li className="flex items-center gap-2 border-b border-orange-400 pb-1">
                        <MdOutlineAccountBalanceWallet className="text-orange-400" />
                        Withdrawal Time: 00:00 - 24:00
                    </li>
                    <li className="flex items-center gap-2 border-b border-orange-400 pb-1">
                        <LiaCoinsSolid className="text-orange-400" />
                        Withdrawal amount range: ₹110.00 - ₹100,000.00
                    </li>
                    <li className="flex items-center gap-2 border-b border-orange-400 pb-1">
                        <MdOutlineNotificationsActive className="text-orange-400" />
                        Remaining withdrawal times today: 3
                    </li>
                    <li className="flex items-center gap-2">
                        <LiaCoinsSolid className="text-orange-400" />
                        Need to bet ₹0.00 in order to withdraw
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Withdraw;
