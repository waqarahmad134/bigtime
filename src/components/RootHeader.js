"use client";
import {
  Settings,
  Search,
  Bell,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "@/assets/Images/Logo2.png";
import { useSidebar } from "@/context/SidebarContext";

export default function RootHeader() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <header className="fixed top-0 z-99 w-full px-4 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 bg-[#2b0a59]">
        {/* LEFT GROUP */}
        <div className="flex items-center gap-3 flex-grow md:flex-grow-0 w-full md:w-auto">
          <div className="w-[50px] mx-auto flex items-center justify-center gap-3">
            <button
              onClick={toggleSidebar}
              className="w-8 h-8 rounded flex flex-col items-center justify-center hover:bg-[#5d37a2] transition"
            >
              <span className="block w-6 h-1 rounded-2xl bg-white mb-1"></span>
              <span className="block w-6 h-1 rounded-2xl bg-white mb-1"></span>
              <span className="block w-6 h-1 rounded-2xl bg-white"></span>
            </button>
          </div>

          <div className="ml-5">
          <Link href="/home">
            <Image src={Logo} alt="Big Time Logo" width={42} />
          </Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-[#4c2d80] px-3 py-2 rounded-full w-full md:w-72">
            <span className="text-purple-300 mr-2">
              <Search />
            </span>
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
        <div className="hidden md:flex items-center gap-2 md:gap-4 ml-auto ">
          {/* Action Buttons */}
          <button className="w-8 h-8 p-5 bg-[#4c2d80] rounded flex items-center justify-center hover:bg-[#5d37a2]">
            <span className="text-white">
              <Bell />
            </span>
          </button>
          <button className="w-8 h-8 p-5 bg-[#4c2d80] rounded flex items-center justify-center hover:bg-[#5d37a2]">
            <span className="text-white">
              <Settings />
            </span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
              QS
            </div>
            <div className="hidden sm:block text-white text-sm leading-tight">
              <p className="font-medium">QuantumSpectra55</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
