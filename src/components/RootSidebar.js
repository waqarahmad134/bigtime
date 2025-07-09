"use client";
import {
  Home,
  User,
  Trophy,
  Wallet,
  Gift,
  Sparkles,
  Settings,
  LogIn,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Discount from "./Discount";
import FriendsOnline from "./FriendsOnline";
import RecentlyPlayed from "./recentlyPlayed";
import { useSidebar } from "@/context/SidebarContext";

export default function RootSidebar() {
  const { isSidebarOpen } = useSidebar();
  const [active, setActive] = useState("Home");

  const links = [
    { name: "Home", icon: <Home size={20} />, href: "/home" },
    { name: "Profile & Avatar", icon: <User size={20} />, href: "/profile" }, // Need more revamp
    { name: "leaderboard", icon: <Trophy size={20} />, href: "/leaderboard" },
    { name: "Wallet", icon: <Wallet size={20} />, href: "/wallet" },
    { name: "Referral Program", icon: <Gift size={20} />, href: "/referral" },
    { name: "Sweepstake", icon: <Sparkles size={20} />, href: "/sweepstakes" },
    { name: "Payment", icon: <Wallet size={20} />, href: "/payment" },
    { name: "Rewards", icon: <Sparkles size={20} />, href: "/rewards" },
    { name: "Tournaments", icon: <Trophy size={20} />, href: "/tournaments" }, // Need high revamp
    { name: "Settings", icon: <Settings size={20} />, href: "/settings" }, //Make screen for this // Done just make api call for this
    { name: "Shop", icon: <ShoppingCart size={20} />, href: "/shop" }, // Make screen for this
    { name: "login", icon: <LogIn size={20} />, href: "/login" },
  ];
  return (
    <>
      {isSidebarOpen ? (
        <div className="scrollbar-hide fixed left-0 w-64 h-screen bg-[#2b0a59] text-white z-50 overflow-y-auto">
          <aside className="w-full p-4 text-white flex flex-col">
            <nav className="flex flex-col gap-2 flex-grow overflow-y-auto">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActive(link.name);
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
            <Discount />
            <FriendsOnline />
            <RecentlyPlayed />
          </aside>
        </div>
      ) : (
        <div className="scrollbar-hide fixed w-20 h-screen bg-[#2b0a59]  text-white z-50 overflow-y-auto">
          <aside className="w-full p-4 text-white flex flex-col">
            <nav className="flex flex-col gap-2 flex-grow overflow-y-auto">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActive(link.name);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                    active === link.name
                      ? "bg-[#7A59FF] text-white"
                      : "hover:bg-[#5d37a2] text-white/80"
                  }`}
                >
                  {link.icon}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
