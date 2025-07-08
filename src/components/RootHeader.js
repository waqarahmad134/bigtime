"use client";

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
  LogIn,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function RootHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const links = [
    { name: "Home", icon: <Home size={16} />, href: "/home" },
    { name: "Profile & Avatar", icon: <User size={16} />, href: "/profile" },
    { name: "leaderboard", icon: <Trophy size={16} />, href: "/leaderboard" },
    { name: "Wallet", icon: <Wallet size={16} />, href: "/wallet" },
    { name: "Referral Program", icon: <Gift size={16} />, href: "/referral" },
    { name: "Sweepstake", icon: <Sparkles size={16} />, href: "/sweepstakes" },
    { name: "Payment", icon: <Wallet size={16} />, href: "/payment" },
    { name: "Rewards", icon: <Sparkles size={16} />, href: "/rewards" },
    { name: "Tournaments", icon: <Trophy size={16} />, href: "/tournaments" },
    { name: "Settings", icon: <Settings size={16} />, href: "/settings" },
    { name: "Help", icon: <HelpCircle size={16} />, href: "/help" },
    { name: "login", icon: <LogIn size={16} />, href: "/otp" },
    { name: "login", icon: <LogIn size={16} />, href: "/login" },
    // { name: "logout", icon: <LogOut size={16} />, href: "/logout" },
  ];

  return (
    <div>
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
