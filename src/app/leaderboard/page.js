"use client";
import { useState } from "react";
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png";
import bgImageWallet from "@/assets/Images/referralbg.png";
import bgImage from "@/assets/Images/BackgroundImage.png";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import filterIcon from "@/assets/Images/filter.png";

const leaderboardData = [
  { rank: 1, name: "CryptoKing", user: "cryptobiz12", score: 970.1 },
  { rank: 2, name: "TokenMaster", user: "mastertag89", score: 930.48 },
  { rank: 3, name: "GalacticGamer", user: "cosmopros", score: 869.27 },
  { rank: 4, name: "CosmicCollector", user: "cosmicjunk22", score: 869.27 },
  { rank: 5, name: "CurrentUser", user: "you@app.io", score: 580.5, you: true },
];

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("Daily");
  const tabs = ["Daily", "Weakly", "Monthly"];
  return (
    <div className="relative min-h-screen flex flex-col pb-10">
      {/* Background Images */}

      <Image
        src={bgImageWallet}
        alt="Background Desktop"
        fill
        className="object-cover pointer-events-none select-none -z-10 "
        priority
      />

      <div className="min-h-screen  text-white p-6">
        <div className="max-w-4xl mx-auto rounded-xl p-6 bg-[#312E8133] shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">LEADERBOARD</h1>
          </div>

          {/* Tabs */}
          {/* <div className="flex gap-4 mb-4 text-sm font-semibold">
          {["Daily", "Weekly", "Monthly"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 rounded-full transition ${
                activeTab === tab
                  ? "bg-purple-600 text-white"
                  : "bg-[#3f1d6a] text-white/60"
              }`}
            >
              {tab}
            </button>
          ))}
        </div> */}
          <div className="overflow-x-auto">
            <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center bg-[#280D50] text-white rounded-xl py-3 px-4 mb-4 ">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap px-6 py-2 rounded-full transition-colors duration-200 ${
                    activeTab === tab
                      ? "bg-[#7A59FF]"
                      : "hover:bg-[#7A59FF] bg-[#3f1d6a]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          {/* <input
          type="text"
          placeholder="Search players..."
          className="w-full mb-6 px-4 py-2 rounded-md bg-[#1c013a] text-sm text-white placeholder-white/40 outline-none"
        /> */}
          <div className="mb-6">
            <div className="relative flex items-center border border-[#FFFFFFD9] bg-[#1A0D2E33] bg-opacity-50 rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow-[0px_4px_12px_#52388E33]">
              <FiSearch className="text-white mr-2 sm:mr-3" />
              <input
                type="text"
                placeholder="Search players..."
                className="bg-transparent placeholder-white focus:outline-none flex-1 text-sm sm:text-base text-white"
              />
              <Image
                src={filterIcon}
                alt="Filter"
                className="ml-2 w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
          </div>

          {/* Player List */}
          <div className="space-y-3 border border-white p-4">
            {leaderboardData.map((player) => (
              <div
                key={player.rank}
                className={`flex justify-between items-center bg-[#3b1d6c] p-3 rounded-lg ${
                  player.you ? "border border-pink-500" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-lg font-bold ${
                      player.rank === 1
                        ? "text-yellow-300"
                        : player.rank === 2
                        ? "text-gray-300"
                        : player.rank === 3
                        ? "text-orange-300"
                        : "text-white/80"
                    }`}
                  >
                    {player.rank}.
                  </span>
                  <div>
                    <p className="text-sm font-medium">{player.name}</p>
                    <p className="text-xs text-white/50">@{player.user}</p>
                  </div>
                  {player.you && (
                    <span className="ml-2 px-2 py-0.5 bg-pink-600 text-xs rounded-full">
                      You
                    </span>
                  )}
                </div>
                <p className="font-bold text-right">
                  {player.score.toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-white/40 mt-6 text-center">
            Rankings update every 24 hours. Keep playing to improve your
            position!
          </p>
        </div>
      </div>
    </div>
  );
}
