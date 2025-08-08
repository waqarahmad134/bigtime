"use client"

import React, { useState } from "react"
import Image from "next/image"
import bgImage from "@/assets/Images/referralbg.png" // Assuming this is the correct background for desktop
import bgImageWallet from "@/assets/Images/referralbg.png"
import gamesData from "@/app/games.json"

// For demonstration purposes, I'll use placeholders for icons and images
// In a real application, these would be imported from your assets folder
const userProfileImage =
  "http://googleusercontent.com/file_content/user_avatar_placeholder"

const purchaseOptions = [
  { tokens: 11000, bonus: 1800, price: 99.99 },
  { tokens: 10000, bonus: 900, price: 89.99 },
  { tokens: 9500, bonus: 750, price: 69.99 },
  { tokens: 5000, bonus: 500, price: 49.99 },
  { tokens: 3000, bonus: 400, price: 20.99 },
  { tokens: 1000, bonus: 150, price: 10.99 },
]

export default function TokenWalletPage() {
  const { casinoSlots } = gamesData

  const [activeMainTab, setActiveMainTab] = useState("Token Operations")
  const [activeSubTab, setActiveSubTab] = useState("Add Tokens")

  const mainTabs = ["Token Operations", "Games", "Transactions"]
  const subTabs = ["Add Tokens", "Transfer to User", "Game Transfer"]

  return (
    <div className="relative min-h-screen pb-10">
      <Image
        src={bgImageWallet}
        alt="Background Desktop"
        fill
        className="object-cover pointer-events-none select-none -z-10 "
        priority
      />
      <div className="max-w-3/4 m-auto text-white p-6">
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
            <div className="text-center col-span-3 border border-[#818CF8] px-10 py-3">
              <div className="text-lg font-semibold text-gray-300">
                BTX Balance
              </div>

              <div className="text-4xl font-bold text-[#FFB800]">9,753.00</div>
            </div>
          </div>
        </div>
        
        <div className="flex-inline justify-start space-x-4 mb-4 p-2 bg-[#1a0d2e]">
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
                  className={`flex-1 px-4 py-2 rounded-md transition-colors duration-200 ${
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
              <div>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold">Add BTX Tokens</h2>   
                  <p className="text-gray-400 mt-2">
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
                      className="w-full bg-[#1a0d2e] border border-[#52388E] rounded-md px-4 py-3 pr-28 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7A59FF]"
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
                      className="relative flex justify-between items-center bg-[#1a0d2e] border border-[#52388E] rounded-md p-4 cursor-pointer hover:border-[#7A59FF] transition-all duration-200"
                    >
                      {/* Left side: Tokens and Bonus */}
                      <div className="flex flex-col">
                        <span className="text-lg font-bold">
                           {option.tokens.toLocaleString()}
                        </span>

                        <span className="text-xs text-gray-400 mt-1">
                          +{option.bonus.toLocaleString()} Sweep Tokens
                        </span>
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
          {/* Other tab content would go here, e.g., for "Games" and "Transactions" */}
           
        </div>
      </div>{" "}
    </div>
  )
}
