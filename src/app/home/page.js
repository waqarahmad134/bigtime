"use client"
import { useState } from "react"
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
} from "lucide-react"
import bgImageWallet from "@/assets/Images/referralbg.png"
import hogwarts from "@/assets/Images/hogwarts.jpg"
import spiderman from "@/assets/Images/spiderman.jpeg"
import mortal from "@/assets/Images/mortal.jpg"
import forza from "@/assets/Images/forza.jpg"
import pubg from "@/assets/Images/pubg.jpg"
import hitman from "@/assets/Images/hitman.jpg"
import minecraft from "@/assets/Images/minecraft.jpg"
import forza1 from "@/assets/Images/forza1.jpg"
import gta from "@/assets/Images/gta.jpg"
import roblox from "@/assets/Images/roblox.jpg"
import Image from "next/image"
import { useRouter } from "next/navigation"
import RootHeader from "@/components/RootHeader"

export default function Homes() {
  const router = useRouter()

  const actualGames = [
    {
      title: "Marvel Spiderman 1",
      price: "$39.00",
      rating: 4.5,
      image: spiderman,
    },
    {
      title: "MORTAL KOMBAT 1",
      price: "$67.00",
      rating: 4.5,
      image: mortal,
    },
    {
      title: "FORZA HORIZON 1",
      price: "$54.00",
      rating: 4.5,
      image: forza,
    },
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
  ]

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
  ]

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
  ]

  return (
    <>
      <div className="relative">
        <Image
          src={bgImageWallet}
          alt="Background Desktop"
          fill
          className="object-cover pointer-events-none select-none -z-10 "
          priority
        />

        {/* PAGE CONTENT */}
        <div className="">
          {/* Your page content goes here */}
          <div className="w-full text-white p-4">
            <div className="">
              <div className="">
                <div
                  onClick={() => router.push("/gameinfo")}
                  className="cursor-pointer relative rounded-lg overflow-hidden"
                >
                  <Image
                    src={hogwarts}
                    alt="hogwarts"
                    className="min-h-64 w-full"
                  />
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
                  <h3 className="text-xl font-bold my-4">ACTUAL GAMES</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-2 md:gap-4">
                    {actualGames.map((game, index) => (
                      <div
                        key={game.title + index}
                        className="rounded bg-[#2b0a59] overflow-hidden cursor-pointer"
                        onClick={() => router.push("/gameinfo")}
                      >
                        <div className="relative rounded-t-lg overflow-hidden">
                          <Image
                            src={game.image}
                            alt={game.title}
                            className="w-full h-20 md:h-48 lg:h-48 xl:h-48 2xl:h-64 3xl:h-92 object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                            <h2 className="text-sm font-bold max-w-30 leading-5">
                              {game.title}
                            </h2>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-sm md:text-base bg-[#9F2427] p-1 md:p-2">
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
                  <h3 className="text-xl font-bold my-4">POPULAR GAMES</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-2 md:gap-4">
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
                            className="w-full h-20 md:h-48 lg:h-48 xl:h-48 2xl:h-64 3xl:h-92 object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                            <h2 className="text-lg font-bold max-w-36 leading-5">
                              {game.title}
                            </h2>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-sm md:text-base bg-[#9F2427] p-1 md:p-2">
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
                  <h3 className="text-xl font-bold my-4">MOST POPULAR GAMES</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-2 md:gap-4">
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
                            className="w-full h-20 md:h-48 lg:h-48 xl:h-48 2xl:h-64 3xl:h-92 object-cover"
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
      </div>
    </>
  )
}
