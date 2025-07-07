"use client";
import { useState } from "react";
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png";
import bgImageWallet from "@/assets/Images/referralbg.png";
import dateIcon from "@/assets/Images/dateIcon.png";
import MariaGarcia from "@/assets/Images/Maria Garcia.png";
import JamesWilson from "@/assets/Images/James Wilson.png";
import SarahLee from "@/assets/Images/svg fill.png";
import DavidBrown from "@/assets/Images/David Brown.png";
import Image from "next/image";
import { FiCopy, FiSearch } from "react-icons/fi";
import filterIcon from "@/assets/Images/filter.png";
import { FaFacebookF, FaLink, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { ArrowDown } from "lucide-react";

const entries = [
  {
    prize: "Steam Gift Card $100",
    username: "steam_collector",
    entries: 4,
    date: "7/5/2023",
    tokens: 7,
    result: "Lost",
  },
  {
    prize: 'Gaming Monitor 32"',
    username: "display_expert",
    entries: 8,
    date: "7/1/2023",
    tokens: 20,
    result: "Won",
  },
  {
    prize: "Wireless Gaming Headset",
    username: "audio_lover",
    entries: 1,
    date: "6/28/2023",
    tokens: 3,
    result: "Pending",
  },
  {
    prize: "Gaming Chair",
    username: "comfort_seeker",
    entries: 2,
    date: "6/29/2023",
    tokens: 5,
    result: "Lost",
  },
  {
    prize: "Xbox Series X",
    username: "xbox_master",
    entries: 7,
    date: "6/22/2023",
    tokens: 12,
    result: "Won",
  },
  {
    prize: "Nintendo Switch OLED",
    username: "nintendo_fan_99",
    entries: 3,
    date: "6/20/2023",
    tokens: 6,
    result: "Pending",
  },
  {
    prize: "Gaming PC Bundle",
    username: "tech_enthusiast",
    entries: 9,
    date: "6/18/2023",
    tokens: 15,
    result: "Lost",
  },
  {
    prize: "PlayStation 5 Giveaway",
    username: "gamer_pro_2023",
    entries: 5,
    date: "6/15/2023",
    tokens: 10,
    result: "Won",
  },
];
  const steps = [
    {
      number: "1",
      title: "Purchase of Virtual coin",
      description:
        "Players buy Coins, which are used in games within platform.",
    },
    {
      number: "2",
      title: "Bonus Sweeps Coins",
      description:
        "In many sweepstakes casinos, purchasing Gold Coins also earns players bonus Sweeps Coins.",
    },
    {
      number: "3",
      title: "Redemption & Prizes",
      description:
        "Players can use Sweeps Coins to play games, and if they win, they can redeem those Sweeps Coins for real cash prizes.",
    },
  ];
export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("All");

  const getBadgeStyle = (status) => {
    switch (status) {
      case "Won":
        return "bg-green-600";
      case "Lost":
        return "bg-red-600";
      case "Pending":
        return "bg-yellow-500 text-black";
      default:
        return "bg-gray-400";
    }
  };
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
                Sweepstakes Entries
              </span>
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto p-4 bg-[#1F1339] rounded-lg text-white w-full">
          {/* Header Controls */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-4">
            <input
              type="text"
              placeholder="🔍 Search prizes..."
              className="bg-[#2c2153] text-white px-4 py-2 rounded-md w-full sm:w-64 focus:outline-none"
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="px-4 py-2 text-sm bg-[#2c2153] rounded-md w-full sm:w-auto">
                All Entries
              </button>
              <button className="px-4 py-2 text-sm bg-white text-black rounded-md w-full sm:w-auto">
                Export CSV
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead className="bg-white text-black">
                <tr>
                  {[
                    "Prize Name",
                    "Username",
                    "Entries",
                    "Date Entered",
                    "Token Cost",
                    "Result",
                  ].map((title, idx, arr) => (
                    <th
                      key={idx}
                      className={`${
                        title === "Result" ? "text-center" : "text-left"
                      } px-4 py-3 font-semibold ${
                        idx === 0
                          ? "rounded-tl-lg"
                          : idx === arr.length - 1
                          ? "rounded-tr-lg"
                          : ""
                      }`}
                    >
                      {title}{" "}
                      <ArrowDown className="inline w-3 h-3 ml-1 opacity-50" />
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="border border-[#E5E7EB]">
                {entries.map((entry, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#2c2153] hover:bg-[#2a1f4a] transition"
                  >
                    <td className="px-4 py-3">{entry.prize}</td>
                    <td className="px-4 py-3">@{entry.username}</td>
                    <td className="px-4 py-3">{entry.entries}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Image
                          src={dateIcon}
                          alt="date icon"
                          className="w-4 h-4"
                        />
                        <span>{entry.date}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">⚡ {entry.tokens}</td>
                    <td className="px-4 py-3">
                      <div className="text-center">
                        <span
                          className={`px-3 py-1  rounded-full text-xs font-semibold ${getBadgeStyle(
                            entry.result
                          )}`}
                        >
                          {entry.result}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className=" py-12 ">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#2C2153] rounded-xl shadow-lg p-6 text-center transition hover:scale-105 duration-300"
          >
            <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-[#9333EA4D] flex items-center justify-center font-bold">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}
