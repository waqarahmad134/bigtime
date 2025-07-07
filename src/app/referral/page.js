"use client";
import { useState } from "react";
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png";
import bgImageWallet from "@/assets/Images/referralbg.png";
import AlexJohnson from "@/assets/Images/Alex Johnson.png";
import MariaGarcia from "@/assets/Images/Maria Garcia.png";
import JamesWilson from "@/assets/Images/James Wilson.png";
import SarahLee from "@/assets/Images/svg fill.png";
import DavidBrown from "@/assets/Images/David Brown.png";
import Image from "next/image";
import { FiCopy, FiSearch } from "react-icons/fi";
import filterIcon from "@/assets/Images/filter.png";
import { FaFacebookF, FaLink, FaTwitter, FaWhatsapp } from "react-icons/fa";

const referrals = [
  {
    name: "Alex Johnson",
    date: "2025-06-18",
    status: "Completed",
    reward: 100,
    icon:AlexJohnson
  },
  {
    name: "Maria Garcia",
    date: "2025-06-15",
    status: "Completed",
    reward: 100,
    icon:MariaGarcia
  },
  { name: "James Wilson", date: "2025-06-20", status: "Pending",icon:JamesWilson },
  { name: "Sarah Lee", date: "2025-06-10", status: "Completed", reward: 100,icon:SarahLee },
  { name: "David Brown", date: "2025-06-21", status: "Pending",icon:DavidBrown },
];

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredReferrals =
    activeTab === "All"
      ? referrals
      : referrals.filter((r) => r.status === activeTab);

  const totalRewards = referrals
    .filter((r) => r.status === "Completed")
    .reduce((sum, r) => sum + (r.reward || 0), 0);
  return (
    <div className="relative min-h-screen flex flex-col pb-10">
      {/* Background Images */}
      <Image
        src={bgImageMobile}
        alt="Background Mobile"
        fill
        className="object-cover pointer-events-none select-none -z-10 block md:hidden"
        priority
      />
      <Image
        src={bgImageWallet}
        alt="Background Desktop"
        fill
        className="object-cover pointer-events-none select-none -z-10 hidden md:block"
        priority
      />

      <div className="min-h-screen  text-white p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between rounded-xl px-6 py-4  min-h-[120px] space-y-4 md:space-y-0">
          <div>
            <h2 className="text-lg md:text-xl font-bold">
              <span className="bg-gradient-to-r from-[#C084FC] to-[#3B82F6] bg-clip-text text-transparent text-2xl md:text-[30px]">
                REFERRAL PROGRAM
              </span>
            </h2>
            <p className="text-sm mt-1">
              Invite friends and earn rewards together
            </p>
          </div>
          <button className="bg-gradient-to-r from-[#7F5AF0] to-[#9D4EDD] text-white font-semibold rounded-lg px-4 py-2 shadow-md transition hover:opacity-90 w-full md:w-auto">
            View Rewards
          </button>
        </div>
        <div className="bg-[#1F1339] text-white rounded-xl p-4 md:p-6 space-y-4 w-full">
          {/* Heading */}
          <div>
            <h3 className="text-sm font-semibold">Your Referral link</h3>
            <p className="text-xs text-white/60 mt-1">
              Share this code with friends to earn rewards
            </p>
          </div>

          {/* Referral link box and icons */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="flex-1 flex items-center bg-[#2C1A52] rounded-md px-4 py-2 border border-purple-700">
              <input
                readOnly
                value="https://www.figma.com/"
                className="bg-transparent text-white text-sm flex-1 outline-none"
              />
              <button className="text-purple-400 hover:text-purple-200 transition">
                <FiCopy />
              </button>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-md bg-[#2C1A52] hover:bg-purple-700 transition">
                <FaTwitter size={16} />
              </button>
              <button className="p-2 rounded-md bg-[#2C1A52] hover:bg-purple-700 transition">
                <FaFacebookF size={16} />
              </button>
              <button className="p-2 rounded-md bg-[#2C1A52] hover:bg-purple-700 transition">
                <FaWhatsapp size={16} />
              </button>
              <button className="p-2 rounded-md bg-[#2C1A52] hover:bg-purple-700 transition">
                <FaLink size={16} />
              </button>
            </div>
          </div>

          {/* Bonus message + share button */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            <p className="text-xs text-white/60">
              <span className="font-semibold text-white">Bonus:</span> Both you
              and your friend get 100 tokens when they join
            </p>
            <button className="flex items-center gap-1 bg-gradient-to-r from-[#7F5AF0] to-[#9D4EDD] text-white text-sm font-semibold rounded-lg px-4 py-2 shadow-md transition hover:opacity-90">
              <FaLink size={14} />
              Share Referral
            </button>
          </div>
        </div>
        <div className="min-h-screen text-white py-6 flex flex-col lg:flex-row gap-6">
          {/* Stats */}
          <div className="bg-[#1B123A] rounded-xl p-6 w-full lg:w-1/3 space-y-4 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Referral Stats</h2>
            <div className="grid grid-cols-2 gap-4 text-center text-sm">
              <div className="bg-[#2A1B4F] p-4 rounded-md">
                <p className="font-semibold text-xl">12</p>
                <p>Total Referrals</p>
              </div>
              <div className="bg-[#2A1B4F] p-4 rounded-md">
                <p className="font-semibold text-xl">3</p>
                <p>Pending</p>
              </div>
              <div className="bg-[#2A1B4F] p-4 rounded-md">
                <p className="font-semibold text-xl">9</p>
                <p>Completed</p>
              </div>
              <div className="bg-[#2A1B4F] p-4 rounded-md">
                <p className="font-semibold text-xl">{totalRewards}</p>
                <p>Total Rewards</p>
              </div>
            </div>
            <div className="mt-6 text-sm">
              <p className="mb-1">Next reward tier</p>
              <div className="w-full bg-[#32275F] rounded-full h-2 mb-1">
                <div
                  className="bg-[#7F5AF0] h-2 rounded-full"
                  style={{ width: "90%" }}
                />
              </div>
              <p className="text-xs text-white/70">
                9/10 — 1 more completed referral to unlock bonus rewards
              </p>
            </div>
          </div>

          {/* Referrals List */}
          <div className="bg-[#1B123A] rounded-xl p-6 w-full lg:w-2/3 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Your Referrals</h2>
              <p className="text-sm text-white/50">{referrals.length} Total</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-3 mb-4 text-sm">
              {["All", "Pending", "Completed"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-1 rounded-full font-medium transition ${
                    activeTab === tab
                      ? "bg-white text-black"
                      : "bg-[#2A1B4F] text-white/70 hover:bg-[#3B2B67]"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Referral List */}
            <div className="space-y-3 text-sm">
              {filteredReferrals.map((ref, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-[#2A1B4F] p-4 rounded-lg"
                >
                    <div className="flex items-center gap-3">
                        <div><Image src={ref.icon} alt="AlexJohnson"/></div>
                  <div>
                    <p className="font-semibold">{ref.name}</p>
                    <p className="text-xs text-white/60">{ref.date}</p>
                  </div>
                    </div>
                  <div className="flex items-center gap-3">
                    {ref.reward && (
                      <span className="text-green-400 font-semibold">
                        +{ref.reward}
                      </span>
                    )}
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        ref.status === "Completed"
                          ? "bg-green-600 text-white"
                          : "bg-yellow-500 text-black"
                      }`}
                    >
                      {ref.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="text-sm text-[#7F5AF0] hover:underline">
                View All Referrals
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
