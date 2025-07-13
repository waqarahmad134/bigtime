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
    { name: "Home", icon: Home, href: "/home" },
    { name: "Profile & Avatar", icon: User, href: "/profile" }, // Need more revamp
    { name: "Tournaments", icon: Trophy, href: "/tournaments" }, // Need high revamp
    { name: "Wallet", icon: Wallet, href: "/wallet" },
    { name: "Referral Program", icon: Gift, href: "/referral" },
    { name: "Sweepstake", icon: Sparkles, href: "/sweepstakes" },
    // { name: "Payment", icon: Wallet, href: "/payment" },
    { name: "Shop", icon: ShoppingCart, href: "/shop" }, // Make screen for this
    { name: "leaderboard", icon: Trophy, href: "/leaderboard" },
    { name: "Rewards", icon: Sparkles, href: "/rewards" },
    // { name: "Settings", icon: Settings, href: "/settings" }, //Make screen for this // Done just make api call for this
    // { name: "login", icon: LogIn, href: "/login" },
  ];
  return (
    <>
      {isSidebarOpen ? (
        <div className="scrollbar-hide fixed left-0 w-64 h-screen bg-[#2b0a59] text-white z-50 overflow-y-auto">
          <aside className="w-full p-4 text-white flex flex-col">
            <nav className="flex flex-col gap-2 flex-grow overflow-y-auto">
              {links?.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  onClick={() => {
                    setActive(name);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                    active === name
                      ? "bg-[#7A59FF] text-white"
                      : "bg-[#4c2d80] hover:bg-[#5d37a2] text-white/80"
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-sm">{name}</span>
                </Link>
              ))}
            </nav>
            <Discount />
            <FriendsOnline />
            <RecentlyPlayed />
          </aside>
        </div>
      ) : (
        <div className="scrollbar-hide fixed w-20 h-screen bg-[#2b0a59]  text-white z-50 overflow-y-auto mobile">
          <aside className="w-full p-2 text-white flex flex-col">
            <nav className="flex flex-col gap-2 flex-grow overflow-y-auto">
              {links.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name+"mobile"}
                  href={href}
                  onClick={() => {
                    setActive(name);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                    active === name
                      ? "bg-[#7A59FF] text-white"
                      : "hover:bg-[#5d37a2] text-white/80"
                  }`}
                >
                  <Icon size={30} />
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
