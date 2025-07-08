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

export default function Homes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
  return (
    <div className="relative min-h-screen flex flex-col pb-10 items-center">
      <Image
        src={bgImageWallet}
        alt="Background Desktop"
        fill
        className="object-cover pointer-events-none select-none -z-10 "
        priority
      />

      <header className="w-full px-4 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 bg-[#2b0a59]">
        {/* LEFT GROUP */}
        <div className="flex items-center gap-3 flex-grow md:flex-grow-0 w-full md:w-auto">
          {/* Hamburger Button OUTSIDE search bar */}
          <button
            onClick={toggleSidebar}
            className="w-8 h-8 bg-[#7A59FF] rounded flex flex-col items-center justify-center hover:bg-[#5d37a2] transition"
          >
            {/* Hamburger bars */}
            <span className="block w-4 h-0.5 bg-white mb-1"></span>
            <span className="block w-4 h-0.5 bg-white mb-1"></span>
            <span className="block w-4 h-0.5 bg-white"></span>
          </button>

          {/* Search Bar */}
          <div className="flex items-center bg-[#4c2d80] px-3 py-2 rounded-full w-full md:w-72">
            <span className="text-purple-300 mr-2">🔍</span>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none w-full text-sm text-white placeholder-purple-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* RIGHT GROUP */}
        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          {/* Action Buttons */}
          <button className="w-8 h-8 bg-[#4c2d80] rounded flex items-center justify-center hover:bg-[#5d37a2]">
            <span className="text-white">▢</span>
          </button>
          <button className="w-8 h-8 bg-[#4c2d80] rounded flex items-center justify-center hover:bg-[#5d37a2]">
            <span className="text-white">⚙️</span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
              QS
            </div>
            <div className="hidden sm:block text-white text-sm leading-tight">
              <p className="font-medium">QuantumSpectra55</p>
              <p className="text-xs text-purple-300">@quantum@galaxy.com</p>
            </div>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <div className="w-full flex-grow flex items-center justify-center">
        {/* Your page content goes here */}
        <div className="w-full min-h-screen bg-transparent text-white p-4">
          <div className="  grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 space-y-8">
              <div className="relative rounded-lg overflow-hidden">
                <Image src={hogwarts} alt="hogwarts" className="min-h-64" />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h2 className="text-3xl font-bold">HOGWARTS LEGACY</h2>
                  <p className="text-sm mt-1 max-w-lg">
                    Hogwarts Legacy is an immersive, open world action RPG set
                    in the world first introduced in the Harry Potter books.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
                      Buy now
                    </button>
                    <span className="text-lg font-semibold">$24.00</span>
                    <span className="text-sm text-gray-300 line-through">
                      $54.00
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">ACTUAL GAMES</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {actualGames.map((game) => (
                    <div
                      key={game.title}
                      className="rounded bg-[#2b0a59] overflow-hidden"
                    >
                      <div className="relative rounded-t-lg overflow-hidden">
                        <Image
                          src={game.image}
                          alt={game.title}
                          className="w-full h-36"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                          <h2 className="text-lg font-bold max-w-30 leading-5">
                            {game.title}
                          </h2>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm bg-[#9F2427] p-2">
                        <span>{game.price}</span>
                        <span className="flex items-center gap-1">
                          <span className="text-white">★</span> {game.rating}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">POPULAR GAMES</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {popularGames.map((game) => (
                    <div
                      key={game.title}
                      className="rounded bg-[#2b0a59] overflow-hidden"
                    >
                      <div className="relative rounded-t-lg overflow-hidden">
                        <Image
                          src={game.image}
                          alt={game.title}
                          className="w-full h-36"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                          <h2 className="text-lg font-bold max-w-36 leading-5">
                            {game.title}
                          </h2>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm bg-[#9F2427] p-2">
                        <span>{game.price}</span>
                        <span className="flex items-center gap-1">
                          <span className="text-white">★</span> {game.rating}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">MOST POPULAR GAMES</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {mostPopularGames.map((game) => (
                    <div
                      key={game.title}
                      className="rounded bg-[#2b0a59] overflow-hidden"
                    >
                      <div className="relative rounded-t-lg overflow-hidden">
                        <Image
                          src={game.image}
                          alt={game.title}
                          className="w-full h-36"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                          <h2 className="text-lg font-bold max-w-36 leading-5">
                            {game.title}
                          </h2>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm bg-[#9F2427] p-2">
                        <span>{game.price}</span>
                        <span className="flex items-center gap-1">
                          <span className="text-white">★</span> {game.rating}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-[#2b0a59] rounded-lg p-4 w-full">
                <h3 className="text-white text-lg font-semibold mb-4">
                  Friends online
                </h3>
                <ul className="space-y-3">
                  {friends.map((friend) => (
                    <li
                      key={friend.name}
                      className="flex items-center gap-3 text-sm text-purple-100"
                    >
                      {/* Circle avatar with gradient */}
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-800 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-white">
                          {friend.name}
                        </p>
                        <p className="text-xs text-purple-300">
                          Playing {friend.game}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#2b0a59] rounded-lg p-4 w-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white text-lg font-semibold">
                    Recently played
                  </h3>
                  <span className="text-purple-300 text-lg cursor-pointer">
                    •••
                  </span>
                </div>

                <ul className="space-y-4">
                  {recentlyPlayed.map((game) => (
                    <li key={game.name}>
                      <div className="flex items-center gap-3">
                        {/* Color box */}
                        <div
                          className={`w-6 h-6 rounded ${game.color} flex-shrink-0`}
                        ></div>
                        <div className="flex-1">
                          <p className="text-white text-sm font-medium">
                            {game.name}
                          </p>
                          <p className="text-purple-300 text-xs">
                            {game.percent}%
                          </p>
                          <div className="mt-1 h-1 w-full bg-purple-900 rounded">
                            <div
                              className="h-1 rounded bg-purple-500"
                              style={{ width: `${game.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-[#2b0a59]  text-white z-50 overflow-y-auto">
          <aside className="w-full   p-4 text-white flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <button
                className="w-10 h-10 bg-[#7A59FF] rounded-lg flex items-center justify-center hover:bg-[#5d37a2] transition"
                onClick={toggleSidebar}
              >
                <Gamepad2 size={16} className="text-black" />
              </button>
              <span className="text-lg font-bold ml-2">BIG TIME</span>
            </div>

            <nav className="flex flex-col gap-2 flex-grow overflow-y-auto">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActive(link.name);
                    toggleSidebar();
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                    active === link.name
                      ? "bg-[#7A59FF] text-white"
                      : "bg-[#4c2d80] hover:bg-[#5d37a2] text-white/80"
                  }`}
                >
                  {link.icon}
                  <span className="text-sm">{link.name}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-6 bg-[#5d37a2] p-4 rounded text-center text-sm">
              <p className="font-semibold mb-2">50% discount</p>
              <p className="text-xs text-white/70 mb-3">
                on the games in the selection!
              </p>
              <button className="w-full py-2 rounded bg-white text-[#5d37a2] font-semibold hover:bg-purple-100 transition">
                Go to library
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
