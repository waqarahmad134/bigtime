"use client";
import { useState } from "react";
import {
  Home,
  User,
  Trophy,
  Wallet,
  Gift,
  Sparkles,
  Settings,
  HelpCircle,
  Gamepad2,
} from "lucide-react";
import bgImageWallet from "@/assets/Images/referralbg.png";
import hogwarts from "@/assets/Images/hogwarts.jpg";
import spiderman from "@/assets/Images/spiderman.jpeg";
import mortal from "@/assets/Images/mortal.jpg";
import forza from "@/assets/Images/forza.jpg";
import pubg from "@/assets/Images/pubg.jpg";
import hitman from "@/assets/Images/hitman.jpg";
import minecraft from "@/assets/Images/minecraft.jpg";
import forza1 from "@/assets/Images/forza1.jpg";
import gta from "@/assets/Images/gta.jpg";
import roblox from "@/assets/Images/roblox.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaDatabase, FaStarHalfAlt } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdStorage } from "react-icons/md";

const stats = [
  {
    value: "4.8",
    label: "Rating",
    icon: <FaStar className="text-yellow-400 text-lg" />,
  },
  {
    value: "2.5M",
    label: "Players",
    icon: <FaUserGroup className="text-pink-400 text-lg" />,
  },
  {
    value: "13+",
    label: "Age",
    icon: <FaDatabase className="text-green-400 text-lg" />,
  },
  {
    value: "85GB",
    label: "Size",
    icon: <MdStorage className="text-blue-400 text-lg" />,
  },
];
export default function Homes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const images = [roblox, spiderman, hogwarts, gta];
  const links = [
    { name: "Home", icon: <Home size={16} />, href: "/" },
    { name: "Profile & Avatar", icon: <User size={16} />, href: "/profile" },
    { name: "leaderboard", icon: <Trophy size={16} />, href: "/leaderboard" },
    { name: "Wallet", icon: <Wallet size={16} />, href: "/wallet" },
    { name: "Referral Program", icon: <Gift size={16} />, href: "/referral" },
    { name: "Sweepstake", icon: <Sparkles size={16} />, href: "/sweepstakes" },
    { name: "Payment", icon: <Wallet size={16} />, href: "/payment" },
    { name: "Rewards", icon: <Sparkles size={16} />, href: "/rewards" },

    // { name: "Settings", icon: <Settings size={16} />, href: "/settings" },
    // { name: "Help", icon: <HelpCircle size={16} />, href: "/help" },
  ];

  const actualGames = [
    {
      title: "Marvel Spiderman 2",
      price: "$39.00",
      rating: 4.5,
      image: spiderman,
    },
    {
      title: "MORTAL KOMBAT",
      price: "$67.00",
      rating: 4.5,
      image: mortal,
    },
    {
      title: "FORZA HORIZON",
      price: "$54.00",
      rating: 4.5,
      image: forza,
    },
  ];
  const popularGames = [
    {
      title: "Pubg Mobile by krafton",
      price: "$69.00",
      rating: 4.5,
      image: pubg,
    },
    {
      title: "Hitman World of Assassination",
      price: "$67.99",
      rating: 4.5,
      image: hitman,
    },
    {
      title: "Minecraft",
      price: "$54.00",
      rating: 4.5,
      image: minecraft,
    },
  ];
  const mostPopularGames = [
    {
      title: "forza horizon",
      price: "$69.00",
      rating: 4.5,
      image: forza1,
    },
    {
      title: "GTA 6",
      price: "$67.99",
      rating: 4.5,
      image: gta,
    },
    {
      title: "Roblox",
      price: "$54.00",
      rating: 4.5,
      image: roblox,
    },
  ];

  const friends = [
    { name: "CrimsonTiger67", game: "Resident Evil 4" },
    { name: "st3alth_sniper", game: "Fortnite" },
    { name: "IceDragon", game: "ROBLOX" },
    { name: "BlitzkriegG6", game: "EA Sports FC 24" },
    { name: "phoenix_rising", game: "Rocket League" },
    { name: "neonNova", game: "GTA V" },
  ];

  const recentlyPlayed = [
    {
      name: "Hitman World of Assassination",
      color: "bg-[#2f3b49]",
      percent: 72,
    },
    {
      name: "Forza Horizon 5",
      color: "bg-[#209be5]",
      percent: 47,
    },
  ];

  const reviews = [
    {
      user: "Hermione_Granger",
      house: "Gryffindor",
      houseColor: "bg-red-600",
      stars: 5,
      text: "The attention to detail in recreating the wizarding world is absolutely magical! The spell-casting mechanics feel incredibly immersive.",
    },
    {
      user: "Draco_Malfoy",
      house: "Slytherin",
      houseColor: "bg-green-600",
      stars: 4.5,
      text: "Even someone of my refined taste can appreciate the dark arts implementation. The graphics are simply superior, as expected.",
    },
    {
      user: "Luna_Lovegood",
      house: "Ravenclaw",
      houseColor: "bg-blue-500",
      stars: 5,
      text: "The magical creatures are beautifully rendered! I spent hours just observing the Nargles… I mean, the fantastic beasts.",
    },
  ];
  return (
    <div className="relative min-h-screen flex flex-col pb-10 items-center">
      <Image
        src={bgImageWallet}
        alt="Background Desktop"
        fill
        className="object-cover pointer-events-none select-none -z-10 "
        priority
      />

      {/* PAGE CONTENT */}
      <div className="w-full max-w-5xl mt-5">
        {/* Your page content goes here */}
        <div className="bg-gradient-to-r from-[#1f093a] to-[#1f093a] border border-purple-500/30 rounded-lg p-4 text-center shadow-lg">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
            HOGWARTS LEGACY
          </h1>
          <p className="mt-2 text-sm sm:text-base text-purple-200">
            ⚡ Developed by Portkey Games • Published by Warner Bros. Games ⚡
          </p>
        </div>
      </div>
      <main className="min-h-screen  text-white p-4 md:p-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Image + Play Button + Price */}
          <div className="lg:col-span-2 flex flex-col space-y-4 ">
            {/* Game Image */}
            <div className="flex flex-col gap-5 bg-[#1A0B2EF2] p-5 border border-2 border-[#6A0DAD] rounded-xl">
              <div className=" rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={hogwarts}
                  alt="hogwarts"
                  className="h-[200px] md:h-[300px]"
                />
                {/* Play Button */}
              </div>
              <div className="flex justify-between">
                <button className="  bg-[#8A2BE2] px-10 py-2 rounded-md text-sm font-semibold">
                  Play
                </button>
                {/* Price Overlay */}
                <span className=" text-lg font-bold">59$</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1b003a] to-[#240451] rounded-xl p-6 border border-purple-700">
              <h2 className="text-lg font-bold flex items-center gap-2 mb-6">
                🏰 Game Statistics
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#2f095a] rounded-lg p-4 text-center flex flex-col items-center justify-center"
                  >
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-2 text-sm text-gray-300">
                      {stat.icon}
                      <span>{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#1b003a] to-[#240451] rounded-xl p-6 border border-purple-700">
              <h2 className="text-lg font-bold mb-4">About This Game</h2>
              <p className="text-gray-300 text-sm mb-6">
                Experience the wizarding world like never before in this
                immersive, open-world action RPG. Set in the 1800s, you are a
                student who holds the key to an ancient secret that threatens to
                tear the wizarding world apart.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    className="rounded-lg object-cover w-full h-24  hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Pricing + Galleon Economy + Buttons */}
          <div className="flex flex-col space-y-6">
            {/* Pricing */}
            <div className="bg-[#1d0a44] rounded-xl p-6">
              <h2 className="text-lg font-bold mb-2">💰 Pricing</h2>
              <p>
                <span className="font-semibold">Base Game:</span> $59.99
              </p>
              <p>
                <span className="font-semibold">Deluxe Edition:</span> $79.99
              </p>
              <p className="text-xs text-gray-300 mt-2">
                In-Game Purchases Available
              </p>
            </div>

            {/* Galleon Economy */}

            <div className="bg-gradient-to-r from-[#1b003a] to-[#240451] border border-purple-700 rounded-xl p-6">
              <h2 className="text-lg font-bold mb-4">Galleon Economy</h2>

              {/* Progress Bar */}
              <div className="w-full bg-[#3e0a64] rounded-full h-3 mb-4">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
                  style={{ width: "70%" }} // adjust this % as needed
                ></div>
              </div>

              <p className="text-sm text-gray-300">
                Earn Galleons through quests, exploration, and magical
                achievements. Use them for premium spells, cosmetics, and
                exclusive content.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col space-y-3">
              <button className="border border-[#FFD700] bg-[#3B2063] py-2 rounded text-sm font-semibold">
                Add to Favorites
              </button>
              <button className="border border-[#FFD700] bg-[#3B2063] py-2 rounded text-sm font-semibold">
                Share This Game
              </button>
              <button className="border border-[#FFD700] bg-[#3B2063] py-2 rounded text-sm font-semibold">
                Follow Developer
              </button>
              <button className="border border-[#FFD700] bg-[#3B2063] py-2 rounded text-sm font-semibold">
                Dark Magic Mode
              </button>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-[#1b003a] to-[#240451] border border-purple-700 rounded-xl p-4 sm:p-6 mt-5">
          <h2 className="text-base sm:text-lg font-bold flex items-center gap-2 mb-4 sm:mb-6">
            ✨ WIZARD REVIEWS
          </h2>

          <div className="space-y-4">
            {reviews.map((r, index) => (
              <div
                key={index}
                className="bg-[#2f095a] rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4"
              >
                {/* Avatar */}
                <div className="flex-shrink-0 flex justify-center sm:justify-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-base sm:text-lg font-bold">
                    {r.user[0]}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                    {/* Username + House */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-sm sm:text-base">
                        {r.user}
                      </span>
                      <span
                        className={`text-xs text-white px-2 py-1 rounded ${r.houseColor}`}
                      >
                        {r.house}
                      </span>
                    </div>

                    {/* Stars */}
                    <div className="flex text-yellow-400">
                      {Array.from({ length: Math.floor(r.stars) }).map(
                        (_, i) => (
                          <FaStar key={i} className="w-4 h-4" />
                        )
                      )}
                      {r.stars % 1 !== 0 && (
                        <FaStarHalfAlt className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 text-xs sm:text-sm mt-2">
                    "{r.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
