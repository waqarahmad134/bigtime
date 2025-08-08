"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import bgImage from "@/assets/Images/referralbg.png" // Assuming this is the correct background for desktop
import bgImageWallet from "@/assets/Images/referralbg.png"
import gamesData from "@/app/games.json"
import { ChevronDown, FilterIcon, RefreshCcw, ArrowDown } from "lucide-react"

const purchaseOptions = [
  { tokens: 11000, bonus: 1800, price: 99.99 },
  { tokens: 10000, bonus: 900, price: 89.99 },
  { tokens: 9500, bonus: 750, price: 69.99 },
  { tokens: 5000, bonus: 500, price: 49.99 },
  { tokens: 3000, bonus: 400, price: 20.99 },
  { tokens: 1000, bonus: 150, price: 10.99 },
]

const transactions = [
  {
    id: 1,
    type: "credit",
    description: "Added BTX tokens to wallet",
    subDescription: null,
    amount: "+39 BTX",
    time: "Just now",
    status: "Completed",
  },
  {
    id: 2,
    type: "credit",
    description: "Reward from Space Miners",
    subDescription: "Game: Space Miners",
    amount: "+86 BTX",
    time: "Just now",
    status: "Completed",
  },
  {
    id: 3,
    type: "credit",
    description: "Added BTX tokens to wallet",
    subDescription: null,
    amount: "+62 BTX",
    time: "1m ago",
    status: "Completed",
  },
  {
    id: 4,
    type: "credit",
    description: "Added BTX tokens to wallet",
    subDescription: null,
    amount: "+12 BTX",
    time: "6m ago",
    status: "Completed",
  },
]

export default function TokenWalletPage() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
  const { casinoSlots } = gamesData

  const [friendsData, setFriendsData] = useState(null)
  const [activeMainTab, setActiveMainTab] = useState("Token Operations")
  const [activeSubTab, setActiveSubTab] = useState("Add Tokens")

  const mainTabs = ["Token Operations", "Games", "Transactions"]
  const subTabs = ["Add Tokens", "Transfer to User", "Game Transfer"]

  const getFriends = async () => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken")
          : null
      const response = await fetch(`${API_BASE_URL}/friends`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()
      setFriendsData(data)
    } catch (err) {
      console.error("Friends fetch error:", err)
    }
  }

  useEffect(() => {
    getFriends()
  }, [])

  return (
    <div className="relative min-h-screen pb-10">
      <Image
        src={bgImageWallet}
        alt="Background Desktop"
        fill
        className="object-cover pointer-events-none select-none -z-10 "
        priority
      />
      <div className="container m-auto text-white p-6">
        <div className="mt-3 mb-5">
          <h2 className="font-bebas-neue tracking-wide text-5xl">
            BTX Token Wallet
          </h2>
        </div>
        <div className="bg-[#2b0a59] text-white rounded-xl p-4 md:p-6 space-y-4 w-full my-10">
          <div className="grid md:grid-cols-12 gap-5">
            <div className="userProfile col-span-9">
              <div className="flex gap-2 items-center">
                <Image
                  src="https://i.ibb.co/DDjcBkFG/Border.png"
                  alt="Background Desktop"
                  width={64}
                  height={64}
                  unoptimized
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl">CryptoGamer</h4>
                    <bagde className="px-2 py-1 border border-[#818CF8] rounded">
                      BTX-2458
                    </bagde>
                  </div>
                  <div className="flex items-center gap-2">
                    <bagde className="px-2 py-1 bg-[#059669] border border-[#059669] rounded">
                      Active
                    </bagde>
                    <bagde className="px-2 py-1 border border-[#818CF8] rounded">
                      Playing: Battle Arena (Lvl 42)
                    </bagde>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center col-span-3 rounded-xl border border-[#818CF8] px-10 py-3">
              <div className="text-lg font-semibold text-gray-300">
                BTX Balance
              </div>

              <div className="text-4xl font-bold text-[#FFB800]">9,753.00</div>
            </div>
          </div>
        </div>
        <div className="inline-flex rounded-xl justify-start space-x-4 mb-4 p-2 bg-[#1a0d2e]">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveMainTab(tab)}
              className={`px-6 py-2 rounded transition-colors duration-200 cursor-pointer ${
                activeMainTab === tab
                  ? "bg-[#7A59FF] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
           
        </div>
          {/* Main Content Wrapper */} 
        <div className="bg-[#2b0a59] p-6 rounded-xl shadow-xl min-h-[500px]">
          {/* Sub-tab Navigation for "Token Operations" */}
          {activeMainTab === "Token Operations" && (
            <div className="flex space-x-4 mb-6 p-1 bg-[#1a0d2e] rounded-lg">
              {subTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSubTab(tab)}
                  className={`flex-1 px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer ${
                    activeSubTab === tab
                      ? "bg-[#7A59FF] text-white"
                      : "text-gray-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
          {/* Content of "Add Tokens" Sub-tab */}
          {activeMainTab === "Token Operations" &&
            activeSubTab === "Add Tokens" && (
              <div className="border border-[#52388E] rounded-2xl p-4">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold">Add BTX Tokens</h2>
                  <p className="text-lg">
                    Purchase BTX to use in marketplace or transfer to games or
                    friends
                  </p>
                </div>
                {/* Input and Next Button */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative w-full max-w-md">
                    <input
                      type="number"
                      placeholder="Enter Tokens Amount to Buy"
                      className="w-full bg-[#1a0d2e] rounded-md px-4 py-3 pr-28 text-white placeholder-gray-500  border border-[#52388E] focus:outline-none focus:ring-2 focus:ring-[#7A59FF]"
                    />

                    <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#7A59FF] hover:bg-[#6c4fe0] text-white font-semibold rounded-md transition-colors duration-200">
                      Next
                    </button>
                  </div>
                </div>
                {/* Purchase Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {purchaseOptions.map((option) => (
                    <div
                      key={option.tokens}
                      className="relative flex justify-between items-center rounded-md p-4 cursor-pointer border border-[#52388E]  hover:border-[#7A59FF] transition-all duration-200"
                    >
                      {/* Left side: Tokens and Bonus */}
                      <div className="">
                        <span className="flex items-center justify-center gap-3 border boder-white rounded-xl text-lg font-bold py-2 px-4">
                          <span className="text-white flex items-center gap-1">
                            <svg
                              width="20"
                              height="21"
                              viewBox="0 0 20 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.07812 0.99707C9.26674 0.334695 10.7332 0.334781 11.9219 0.99707L17.5918 4.15723C18.7784 4.81865 19.4999 6.03387 19.5 7.33984V13.6602C19.4999 14.9661 18.7784 16.1814 17.5918 16.8428L11.9219 20.0029C10.7332 20.6652 9.26674 20.6653 8.07812 20.0029L2.40918 16.8428C1.22227 16.1813 0.500052 14.966 0.5 13.6602V7.33984C0.500052 6.03395 1.22227 4.81871 2.40918 4.15723L8.07812 0.99707ZM11.6895 1.31445C10.6432 0.731866 9.3567 0.731746 8.31055 1.31445L2.63184 4.48047C1.58386 5.06419 0.928889 6.14972 0.928711 7.33398V13.666C0.92889 14.8503 1.58386 15.9358 2.63184 16.5195L8.31055 19.6855C9.3567 20.2683 10.6432 20.2681 11.6895 19.6855L17.3691 16.5195C18.4172 15.9357 19.0711 14.85 19.0713 13.666V7.33398C19.0711 6.22391 18.4962 5.2004 17.5605 4.5957L17.3691 4.48047L11.6895 1.31445Z"
                                fill="white"
                                stroke="white"
                              />
                              <path
                                d="M7.27072 11.652L9.75186 13.9555C9.81766 14.0165 9.90688 14.0508 9.99991 14.0508C10.0929 14.0508 10.1822 14.0165 10.248 13.9555L12.7291 11.652C12.7949 11.591 12.8841 11.5566 12.9771 11.5566C13.0702 11.5566 13.1594 11.591 13.2252 11.652L14.317 12.6653C14.3828 12.7264 14.4197 12.8092 14.4197 12.8956C14.4197 12.982 14.3828 13.0649 14.317 13.126L10.248 16.9046C10.1822 16.9657 10.0929 17 9.99991 17C9.90688 17 9.81766 16.9657 9.75186 16.9046L5.68351 13.126C5.61774 13.0649 5.58079 12.982 5.58079 12.8956C5.58079 12.8092 5.61774 12.7264 5.68351 12.6653L6.77533 11.652C6.84112 11.591 6.93034 11.5566 7.02337 11.5566C7.1164 11.5566 7.20562 11.591 7.27142 11.652H7.27072ZM15.7569 9.2183L15.8053 9.25609L16.8971 10.2693C16.9552 10.3232 16.9911 10.3944 16.9986 10.4703C17.006 10.5463 16.9845 10.6223 16.9378 10.6851L16.8971 10.7307L15.8053 11.7439C15.7472 11.7979 15.6706 11.8312 15.5888 11.8381C15.507 11.845 15.4252 11.8251 15.3576 11.7817L15.3092 11.7439L14.2174 10.73C14.1595 10.6761 14.1239 10.605 14.1166 10.5292C14.1093 10.4534 14.1308 10.3776 14.1774 10.3149L14.2174 10.2693L15.3092 9.25609C15.3598 9.20905 15.4248 9.17753 15.4953 9.16577C15.5657 9.154 15.6384 9.16256 15.7035 9.19028L15.7569 9.2183ZM4.69133 9.25609L5.78315 10.2693C5.84892 10.3304 5.88587 10.4133 5.88587 10.4997C5.88587 10.5861 5.84892 10.6689 5.78315 10.73L4.69133 11.7446C4.62554 11.8056 4.53632 11.84 4.44329 11.84C4.35026 11.84 4.26103 11.8056 4.19524 11.7446L3.10272 10.73C3.03695 10.6689 3 10.5861 3 10.4997C3 10.4133 3.03695 10.3304 3.10272 10.2693L4.19454 9.25609C4.26033 9.19501 4.34955 9.1607 4.44258 9.1607C4.53561 9.1607 4.62554 9.19501 4.69133 9.25609ZM10.1995 9.2183L10.2487 9.25609L11.3398 10.2693C11.3979 10.3232 11.4338 10.3944 11.4412 10.4703C11.4487 10.5463 11.4272 10.6223 11.3805 10.6851L11.3398 10.7307L10.2487 11.7439C10.1906 11.7979 10.114 11.8312 10.0322 11.8381C9.95039 11.845 9.86856 11.8251 9.80098 11.7817L9.75186 11.7439L8.66075 10.73C8.60281 10.6761 8.56701 10.6051 8.55958 10.5293C8.55214 10.4535 8.57354 10.3776 8.62005 10.3149L8.66075 10.2693L9.75186 9.25609C9.8025 9.20905 9.86743 9.17753 9.93793 9.16577C10.0084 9.154 10.0811 9.16256 10.1462 9.19028L10.1995 9.2183ZM10.2487 4.09539L14.317 7.87339C14.3828 7.93448 14.4197 8.01734 14.4197 8.10373C14.4197 8.19012 14.3828 8.27297 14.317 8.33407L13.2252 9.34797C13.1594 9.40904 13.0702 9.44336 12.9771 9.44336C12.8841 9.44336 12.7949 9.40904 12.7291 9.34797L10.2487 7.04455C10.2161 7.01421 10.1773 6.99013 10.1347 6.97371C10.0921 6.95729 10.0464 6.94883 10.0003 6.94883C9.95411 6.94883 9.90842 6.95729 9.86579 6.97371C9.82317 6.99013 9.78445 7.01421 9.75186 7.04455L7.27142 9.34797C7.20562 9.40904 7.1164 9.44336 7.02337 9.44336C6.93034 9.44336 6.84112 9.40904 6.77533 9.34797L5.68351 8.33407C5.61774 8.27297 5.58079 8.19012 5.58079 8.10373C5.58079 8.01734 5.61774 7.93448 5.68351 7.87339L9.75186 4.09539C9.81766 4.03431 9.90688 4 9.99991 4C10.0929 4 10.1829 4.03431 10.2487 4.09539Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          {option.tokens.toLocaleString()}
                        </span>
                      </div>
                      <div className="text-xs bg-[#FFDE67] rounded-4xl text-black py-1 px-3">
                        +{option.bonus.toLocaleString()} Sweep Tokens
                      </div>
                      {/* Right side: Price */}
                      <div className="text-xl font-bold">${option.price}</div>
                    </div>
                  ))}
                </div>
                {/* View More Button */}
                <div className="text-center mt-8">
                  <button className="px-6 py-3 bg-[#7A59FF] hover:bg-[#6c4fe0] font-semibold rounded-md transition-colors duration-200">
                    View More
                  </button>
                </div>
              </div>
            )}
          {activeMainTab === "Token Operations" &&
            activeSubTab === "Transfer to User" && (
              <div className="border border-[#52388E] rounded-2xl p-4">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">Add BTX Tokens</h2>
                  <p className="text-lg">
                    Purchase BTX to use in marketplace or transfer to games or
                    friends
                  </p>
                </div>

                <div>
                  <label className="block text-base text-gray-200 mt-5 mb-2">
                    Recipient Username
                  </label>
                  <select
                    id="transfer_type"
                    required
                    className="px-6 py-4 w-full text-white rounded-lg border border-[#52388E] focus:outline-none focus:ring-2 focus:ring-[#7A59FF]"
                  >
                    <option value="" disabled selected>
                      Enter Username
                    </option>
                    {friendsData?.map((frd, index) => (
                      <option
                        className="text-black"
                        key={index}
                        value={frd?.friend_username}
                      >
                        {frd?.friend_username}
                      </option>
                    ))}
                  </select>

                  <label className="block text-base text-gray-200 mt-5 mb-2">
                    Amount (BTX)
                  </label>
                  <div className="relative">
                    <input
                      id="transfer_amount"
                      type="number"
                      placeholder="10"
                      required
                      className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-3 w-full py-3 text-white rounded-lg border border-[#52388E] focus:outline-none focus:ring-2 focus:ring-[#7A59FF]"
                    />
                  </div>
                </div>
                <div className="text-center mt-8">
                  <button className="cursor-pointer w-full px-6 py-3 bg-[#7A59FF] hover:bg-[#6c4fe0] font-semibold rounded-md transition-colors duration-200">
                    Add tokens
                  </button>
                </div>
              </div>
            )}

          {/* Transfer To Game  */}
          {activeMainTab === "Token Operations" &&
            activeSubTab === "Game Transfer" && (
              <div className="border border-[#52388E] rounded-2xl p-4">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">Transfer to Game</h2>
                  <p className="text-lg">
                    Add BTX tokens to your game account.
                  </p>
                </div>

                <div>
                  <label className="block text-base text-gray-200 mt-5 mb-2">
                    Select a Game
                  </label>
                  <select
                    id="transfer_type"
                    required
                    className="px-6 py-4 w-full text-white rounded-lg border border-[#52388E] focus:outline-none focus:ring-2 focus:ring-[#7A59FF]"
                  >
                    <option value="" disabled selected>
                      Enter a Game Name
                    </option>
                    {casinoSlots?.map((game, index) => (
                      <option
                        className="text-black"
                        key={index}
                        value={game?.id}
                      >
                        {game?.title}
                      </option>
                    ))}
                  </select>

                  <label className="block text-base text-gray-200 mt-5 mb-2">
                    Amount (BTX)
                  </label>
                  <div className="relative">
                    <input
                      id="transfer_amount"
                      type="number"
                      placeholder="10"
                      required
                      className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-3 w-full py-3 text-white rounded-lg border border-[#52388E] focus:outline-none focus:ring-2 focus:ring-[#7A59FF]"
                    />
                  </div>
                </div>
                <div className="text-center mt-8">
                  <button className="cursor-pointer w-full px-6 py-3 bg-[#7A59FF] hover:bg-[#6c4fe0] font-semibold rounded-md transition-colors duration-200">
                    Transfer Tokens
                  </button>
                </div>
              </div>
            )}

          {/* Main tab block  */}
          {activeMainTab === "Transactions" && (
            <div className=" p-8 font-sans antialiased flex items-center justify-center">
              <div className="w-full rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md bg-gradient-to-br from-indigo-900 to-purple-900 border border-indigo-700">
                {/* Header section with title and action buttons */}
                <div className="flex justify-between items-center pb-6 border-b border-indigo-700 mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    Transaction History
                  </h2>
                  <div className="flex items-center space-x-4">
                    {/* Filter button */}
                    <button className="flex items-center text-white text-base py-2 px-4 border border-[#E2E8F0] rounded-lg">
                      <span className="flex items-center gap-2">
                        <FilterIcon className="h-5 w-5" />
                        All Transactions
                      </span>
                    </button>

                    {/* Refresh button */}
                    <button className="text-white p-2 rounded-full hover:bg-opacity-70 transition-colors">
                      <RefreshCcw className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 rounded-2xl bg-indigo-800 bg-opacity-30 border border-indigo-700 border-opacity-50 hover:bg-opacity-40 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-white bg-opacity-20 p-2 rounded-full">
                          <ArrowDown className="text-green-400 h-6 w-6" />
                        </div>

                        <div>
                          <p className="text-white font-medium">
                            {transaction.description}
                          </p>
                          {transaction.subDescription && (
                            <p className="text-slate-400 text-sm">
                              {transaction.subDescription}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-1">
                        <p className="text-white text-base">
                          {transaction.time}
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="text-green-400 font-semibold text-base">
                            {transaction.amount}
                          </p>
                          <span className="bg-[#22C55E] text-white text-xs px-2 py-1 rounded-md">
                            {transaction.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
