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
import { useRouter } from "next/navigation";
import RootHeader from "@/components/RootHeader";
import Discount from "@/components/discount";
import FriendsOnline from "@/components/friendsOnline";
import RecentlyPlayed from "@/components/recentlyPlayed";

export default function Homes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const router = useRouter();
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
    { name: "Tournament", icon: <Trophy size={16} />, href: "/tournaments" },
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

  return (
    <>
      <RootHeader />
      <div className="relative min-h-screen flex flex-col pb-10 items-center">
        <Image
          src={bgImageWallet}
          alt="Background Desktop"
          fill
          className="object-cover pointer-events-none select-none -z-10 "
          priority
        />

        {/* PAGE CONTENT */}
        <div className="w-full flex-grow flex items-center justify-center">
          {/* Your page content goes here */}
          <div className="w-full min-h-screen bg-transparent text-white p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                        className="rounded bg-[#2b0a59] overflow-hidden cursor-pointer"
                        onClick={() => router.push("/gameinfo")}
                      >
                        <div className="relative rounded-t-lg overflow-hidden">
                          <Image
                            src={game.image}
                            alt={game.title}
                            className="w-full h-48 object-cover"
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
                        className="rounded bg-[#2b0a59] overflow-hidden cursor-pointer"
                        onClick={() => router.push("/gameinfo")}
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
                        className="rounded bg-[#2b0a59] overflow-hidden cursor-pointer"
                        onClick={() => router.push("/gameinfo")}
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
              <Discount />
              
              <aside className="space-y-6">
                <FriendsOnline />
                <RecentlyPlayed />
              </aside>
            </aside>
          </div>
        )}
      </div>
    </>
  );
}
