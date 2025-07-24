"use client"
import { useEffect, useState } from "react"
import {
  Home,
  User,
  Wallet,
  Gift,
  Sparkles,
  Settings,
  HelpCircle,
  Gamepad2,
} from "lucide-react"
import { useRouter } from "next/navigation"
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
import Link from "next/link"
import { FaStar, FaDatabase, FaStarHalfAlt } from "react-icons/fa"
import { FaUserGroup } from "react-icons/fa6"
import { MdStorage } from "react-icons/md"
import { Star, ThumbsUp, Eye, Share2 } from "lucide-react"
import { Banknote, ShieldCheck, Trophy, Gem } from "lucide-react" // You can customize icons

import toast from "react-hot-toast"

import gameDetailBG from "@/assets/Images/gameDetailBG.jpg"
import r1 from "@/assets/Images/recommended/r1.png"
import r2 from "@/assets/Images/recommended/r2.png"
import r3 from "@/assets/Images/recommended/r3.png"
import r4 from "@/assets/Images/recommended/r4.png"
import r5 from "@/assets/Images/recommended/r5.png"
import r6 from "@/assets/Images/recommended/r6.png"

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
]

const rewardData = [
  {
    title: "First Spin",
    desc: "Hit the slots for the first time.",
    rarity: "100.0%",
    isFreebie: true,
    wonYesterday: "132,678",
    wonEver: "19,999,423",
    icon: <Banknote size={32} />,
  },
  {
    title: "This is Blackjack",
    desc: "Hit your first natural 21.",
    rarity: "100.0%",
    isFreebie: true,
    wonYesterday: "155,461",
    wonEver: "23,456,619",
    icon: <ShieldCheck size={32} />,
  },
  {
    title: "High Roller",
    desc: "Bet $1000+ in a single hand.",
    rarity: "99%",
    isFreebie: true,
    wonYesterday: "189,678",
    wonEver: "1,449,423",
    icon: <Trophy size={32} />,
  },
  {
    title: "Diamond VIP",
    desc: "Reach VIP Diamond status.",
    rarity: "99%",
    isFreebie: true,
    wonYesterday: "189,678",
    wonEver: "1,449,423",
    icon: <Gem size={32} />,
  },
]

export default function Homes() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("About")

  const tabs = ["About", "Store", "Servers"]

  const recommendedGames = [
    {
      img: r1,
      title: `[NightFury Remodel] Rise of`,
      rating: "91%",
      user_play: "245",
    },
    {
      img: r2,
      title: "How to Train Your Dragon",
      rating: "72%",
      user_play: "387",
    },
    {
      img: r3,
      title: "Steal a Brainrot",
      rating: "90%",
      user_play: "710k",
    },
    {
      img: r4,
      title: "99 Nights in the Forest [ALIENS]",
      rating: "91%",
      user_play: "1.1m",
    },
    // {
    //   img: r5,
    //   title: "Grow a Garden",
    //   rating: "93%",
    //   user_play: "2.3m",
    // },
    // {
    //   img: r6,
    //   title: "Pocket Dragons",
    //   rating: "96%",
    //   user_play: "9bd",
    // },
  ]

  const stats = [
    { label: "Active", value: "2,421" },
    { label: "Favorites", value: "815,965" },
    { label: "Visits", value: `55.3M+` },
    { label: "Voice Chat", value: "Not Supported" },
    { label: "Camera", value: "Not Supported" },
    { label: "Created", value: "3/28/2025" },
    { label: "Updated", value: "7/18/2025" },
    { label: "Server Size", value: "18" },
    { label: "Genre", value: "Casino" },
  ]

  return (
    <div className="relative px-10 py-10  items-center">
      <Image
        src={bgImageWallet}
        alt="Background Desktop"
        fill
        className="object-cover pointer-events-none select-none -z-10 "
        priority
      />
      <div className="max-w-7xl m-auto">
        <button
          onClick={() => router.push("/home1")}
          className="cursor-pointer bg-[#301852] rounded-xl px-3 py-2 text-white flex items-center justify-center gap-1"
        >
          <svg
            width="18"
            height="7"
            viewBox="0 0 18 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.47734 0.300781H5.14531C4.79961 0.992188 4.53887 1.47852 4.36309 1.75977C4.19316 2.03516 3.88262 2.4541 3.43145 3.0166H17.45V3.9043H3.43145C4.04082 4.53711 4.6209 5.44238 5.17168 6.62012H4.48613C3.73027 5.77637 3.07988 5.1377 2.53496 4.7041C1.99004 4.26465 1.42754 3.9043 0.847462 3.62305V3.22754C1.35723 3.01074 1.89629 2.67969 2.46465 2.23438C3.03301 1.78906 3.70391 1.14453 4.47734 0.300781Z"
              fill="white"
            />
          </svg>
          Back
        </button>
        <main className="text-white my-4">
          <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
            {/* Background Image */}
            <Image
              src={gameDetailBG} // Make sure to import this or use your image path
              alt="Royal Blackjack"
              layout="fill"
              objectFit="cover"
              className="brightness-[0.4]"
              priority
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 text-white flex flex-col justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-3">
                  ROYAL BLACKJACK
                </h1>
                <p className="text-sm opacity-90">
                  By Vegas Casino Studios <span className="mx-1">/</span> <br />{" "}
                  Maturity: 18+ <span className="mx-1">•</span> Develop by
                  Invoxi Studio
                </p>
              </div>

              {/* CTA + Footer Info */}
              <div>
                <button className="bg-[#7A59FF] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#6746d6] transition">
                  PLAY NOW
                </button>

                <div className="mt-4 flex gap-6 text-xs opacity-90">
                  <span className="flex flex-col justify-center items-center gap-1">
                    <Star size={24} /> Favorites
                  </span>
                  <span className="flex flex-col justify-center items-center gap-1">
                    <ThumbsUp size={24} /> 10K+
                  </span>
                  <span className="flex flex-col justify-center items-center gap-1">
                    <Eye size={24} /> 4.89B
                  </span>
                  <span className="flex flex-col justify-center items-center gap-1">
                    <Share2 size={24} /> Shares
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs section  */}
          <div className="w-full mt-6 px-2">
            <div className="grid grid-cols-3 p-1 rounded-xl shadow-inner overflow-hidden gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={` w-full cursor-pointer text-sm sm:text-base py-2 px-4 rounded-xl transition-all duration-300 
              ${
                activeTab === tab
                  ? "bg-[#7A59FF] text-white"
                  : "bg-[#301852]  text-gray-300"
              }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeTab == "About" ? (
            <>
              {/* Detail Section  */}
              <div className="bg-[#301852] rounded-xl p-6 my-5">
                <h2 className="text-lg font-bold mb-4">
                  Royal Blackjack - Premium Casino Experience!
                </h2>
                <p className="text-gray-300 text-sm mb-6">
                  Celebrate with our brand-new JACKPOT BONUS UPDATE!
                </p>
                <p className="text-gray-300 text-sm mb-6">
                  Take on the ultimate Blackjack Challenge by accepting the
                  dealer's quest and diving into an action-packed casino
                  experience where every second counts. Grab your cards,
                  navigate through high-stakes obstacles, hit perfect 21s for
                  bonus rewards, and rocket through glowing casino halls at top
                  speed. Check your stats at the finish line and climb the live
                  leaderboard. Are you ready to become a blackjack legend? 🃏⚡
                </p>
                <div className="flex items-center gap-4">
                  <p className="text-gray-300 text-sm mb-6 bg-[#7A59FF82] rounded-full py-2 px-3">
                    Maturity: 18+
                  </p>
                  <p className="text-gray-300 text-sm mb-6 bg-[#7A59FF82] rounded-full py-2 px-3">
                    Suitable for everyone
                  </p>
                </div>
              </div>

              {/* Stats Section  */}
              <div className="rounded-xl my-5 border boder-[#FFFFFF0D] overflow-hidden">
                <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-9 text-white text-center overflow-hidden">
                  {stats.map((stat, index) => (
                    <div
                      key={`label-${index}`}
                      className="bg-[#301852] font-normal text-sm py-2"
                    >
                      {stat.label}
                    </div>
                  ))}
                  {/* Render the values for each statistic */}
                  {stats.map((stat, index) => (
                    <div
                      key={`value-${index}`}
                      className="text-sm py-1 bg-black/[0.6]"
                    >
                      {stat.value}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {rewardData.map((reward, index) => (
                  <div
                    key={index}
                    className="bg-[#301852] text-white rounded-xl p-5 shadow-md text-center"
                  >
                    <div className="inline-flex p-5 rounded-full justify-center mb-3 bg-gradient-to-br from-[#DAA520] to-[#FFD700]">
                      {reward.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{reward.title}</h3>
                    <p className="text-sm opacity-90 mb-2">{reward.desc}</p>
                    <p className="text-sm">
                      <span className="text-green-400 font-semibold">
                        Rarity: {reward.rarity}
                      </span>{" "}
                      {reward.isFreebie && <span>(Freebie)</span>}
                    </p>
                    <div className="mt-3 text-xs text-gray-200 space-y-1">
                      <p>
                        Won Yesterday:{" "}
                        <span className="font-semibold text-white">
                          {reward.wonYesterday}
                        </span>
                      </p>
                      <p>
                        Won Ever:{" "}
                        <span className="font-semibold text-white">
                          {reward.wonEver}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommended Experiences */}
              <div className="bg-[#301852] rounded-xl p-6 my-5">
                <h2 className="text-lg font-bold mb-4">
                  Recommended Experiences
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {recommendedGames?.map((game, index) => (
                    <div>
                      <div>
                        <Image
                          key={index}
                          src={game?.img}
                          alt={`Screenshot R${index + 1}`}
                          className="rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="mt-2">
                        <h4>{game?.title}</h4>
                        <div className="flex items-center gap-3 [&>span]:flex [&>span]:items-center [&>span]:gap-1">
                          <span>
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1045_2503)">
                                <g clipPath="url(#clip1_1045_2503)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.203 7.62206C13.203 7.62206 12.149 7.62706 11.215 7.63006C10.679 7.69606 10.23 8.06906 10.1 8.60506L8.568 14.9501C8.474 15.3431 8.563 15.7511 8.813 16.0681C9.044 16.3621 9.384 16.5331 9.753 16.5591L11.685 16.5561C12.538 16.5561 13.273 15.9531 13.441 15.1161L14.525 9.71006C14.718 8.74906 14.105 7.84706 13.203 7.62206ZM7.306 14.7161L8.838 8.37106C8.903 8.10006 9.017 7.85106 9.165 7.62806L8.067 7.62306L8.885 3.17906C9.116 1.94706 8.171 0.810059 6.918 0.810059C6.561 0.810059 6.251 1.05406 6.166 1.39906L4.941 6.49206C4.762 7.19606 4.425 7.64306 3.789 7.64306C2.801 7.64306 2 8.44406 2 9.43306V14.7761C2 15.7651 2.801 16.5661 3.789 16.5661L7.659 16.5601C7.286 16.0201 7.15 15.3591 7.306 14.7161Z"
                                    fill="white"
                                  />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1045_2503">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0 0.810059)"
                                  />
                                </clipPath>
                                <clipPath id="clip1_1045_2503">
                                  <rect
                                    width="32"
                                    height="64"
                                    fill="white"
                                    transform="translate(0 -31.1899)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>

                            {game?.rating}
                          </span>
                          <span>
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1045_2517)">
                                <g clipPath="url(#clip1_1045_2517)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.0409 14.8101C15.0409 12.8101 13.3309 10.9701 11.8809 9.81007C11.3623 9.37981 10.7738 9.04159 10.1409 8.81007C11.4331 8.42551 12.3195 7.23823 12.3209 5.89007V3.89007C12.321 3.08568 11.9981 2.31494 11.4247 1.75087C10.8512 1.1868 10.0752 0.876659 9.27094 0.890066H7.19094C5.53378 0.917202 4.20158 2.26272 4.19094 3.92007V5.92007C4.17798 7.27943 5.08072 8.47761 6.39094 8.84007C5.77438 9.0734 5.19758 9.40059 4.68094 9.81007C3.19094 10.9401 1.47094 12.8101 1.46094 14.8101V14.9501C1.46094 15.4301 4.87094 16.7601 8.25094 16.7601C11.6309 16.7601 15.0409 15.4301 15.0409 14.9501V14.8101ZM8.04094 15.2301C7.84773 15.3617 7.59814 15.3774 7.38989 15.2712C7.18164 15.165 7.04786 14.9537 7.04094 14.7201V11.0901C7.04786 10.8564 7.18164 10.6451 7.38989 10.5389C7.59814 10.4327 7.84773 10.4485 8.04094 10.5801L11.1909 12.9101L8.04094 15.2301Z"
                                    fill="white"
                                  />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1045_2517">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0.1875 0.810059)"
                                  />
                                </clipPath>
                                <clipPath id="clip1_1045_2517">
                                  <rect
                                    width="32"
                                    height="64"
                                    fill="white"
                                    transform="translate(0.1875 -47.1899)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>

                            {game?.user_play}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : activeTab == "Store" ? (
            <>
              {/* Stats Section  */}
              <div className="rounded-xl my-5 border boder-[#FFFFFF0D] overflow-hidden">
                <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-9 text-white text-center overflow-hidden">
                  {stats.map((stat, index) => (
                    <div
                      key={`label-${index}`}
                      className="bg-[#301852] font-normal text-sm py-2"
                    >
                      {stat.label}
                    </div>
                  ))}
                  {/* Render the values for each statistic */}
                  {stats.map((stat, index) => (
                    <div
                      key={`value-${index}`}
                      className="text-sm py-1 bg-black/[0.6]"
                    >
                      {stat.value}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {rewardData.map((reward, index) => (
                  <div
                    key={index}
                    className="bg-[#301852] text-white rounded-xl p-5 shadow-md text-center"
                  >
                    <div className="inline-flex p-5 rounded-full justify-center mb-3 bg-gradient-to-br from-[#DAA520] to-[#FFD700]">
                      {reward.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{reward.title}</h3>
                    <p className="text-sm opacity-90 mb-2">{reward.desc}</p>
                    <p className="text-sm">
                      <span className="text-green-400 font-semibold">
                        Rarity: {reward.rarity}
                      </span>{" "}
                      {reward.isFreebie && <span>(Freebie)</span>}
                    </p>
                    <div className="mt-3 text-xs text-gray-200 space-y-1">
                      <p>
                        Won Yesterday:{" "}
                        <span className="font-semibold text-white">
                          {reward.wonYesterday}
                        </span>
                      </p>
                      <p>
                        Won Ever:{" "}
                        <span className="font-semibold text-white">
                          {reward.wonEver}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Recommended Experiences */}
              <div className="bg-[#301852] rounded-xl p-6 my-5">
                <h2 className="text-lg font-bold mb-4">
                  Recommended Experiences
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {recommendedGames?.map((game, index) => (
                    <div>
                      <div>
                        <Image
                          key={index}
                          src={game?.img}
                          alt={`Screenshot R${index + 1}`}
                          className="rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="mt-2">
                        <h4>{game?.title}</h4>
                        <div className="flex items-center gap-3 [&>span]:flex [&>span]:items-center [&>span]:gap-1">
                          <span>
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1045_2503)">
                                <g clipPath="url(#clip1_1045_2503)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.203 7.62206C13.203 7.62206 12.149 7.62706 11.215 7.63006C10.679 7.69606 10.23 8.06906 10.1 8.60506L8.568 14.9501C8.474 15.3431 8.563 15.7511 8.813 16.0681C9.044 16.3621 9.384 16.5331 9.753 16.5591L11.685 16.5561C12.538 16.5561 13.273 15.9531 13.441 15.1161L14.525 9.71006C14.718 8.74906 14.105 7.84706 13.203 7.62206ZM7.306 14.7161L8.838 8.37106C8.903 8.10006 9.017 7.85106 9.165 7.62806L8.067 7.62306L8.885 3.17906C9.116 1.94706 8.171 0.810059 6.918 0.810059C6.561 0.810059 6.251 1.05406 6.166 1.39906L4.941 6.49206C4.762 7.19606 4.425 7.64306 3.789 7.64306C2.801 7.64306 2 8.44406 2 9.43306V14.7761C2 15.7651 2.801 16.5661 3.789 16.5661L7.659 16.5601C7.286 16.0201 7.15 15.3591 7.306 14.7161Z"
                                    fill="white"
                                  />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1045_2503">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0 0.810059)"
                                  />
                                </clipPath>
                                <clipPath id="clip1_1045_2503">
                                  <rect
                                    width="32"
                                    height="64"
                                    fill="white"
                                    transform="translate(0 -31.1899)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>

                            {game?.rating}
                          </span>
                          <span>
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1045_2517)">
                                <g clipPath="url(#clip1_1045_2517)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.0409 14.8101C15.0409 12.8101 13.3309 10.9701 11.8809 9.81007C11.3623 9.37981 10.7738 9.04159 10.1409 8.81007C11.4331 8.42551 12.3195 7.23823 12.3209 5.89007V3.89007C12.321 3.08568 11.9981 2.31494 11.4247 1.75087C10.8512 1.1868 10.0752 0.876659 9.27094 0.890066H7.19094C5.53378 0.917202 4.20158 2.26272 4.19094 3.92007V5.92007C4.17798 7.27943 5.08072 8.47761 6.39094 8.84007C5.77438 9.0734 5.19758 9.40059 4.68094 9.81007C3.19094 10.9401 1.47094 12.8101 1.46094 14.8101V14.9501C1.46094 15.4301 4.87094 16.7601 8.25094 16.7601C11.6309 16.7601 15.0409 15.4301 15.0409 14.9501V14.8101ZM8.04094 15.2301C7.84773 15.3617 7.59814 15.3774 7.38989 15.2712C7.18164 15.165 7.04786 14.9537 7.04094 14.7201V11.0901C7.04786 10.8564 7.18164 10.6451 7.38989 10.5389C7.59814 10.4327 7.84773 10.4485 8.04094 10.5801L11.1909 12.9101L8.04094 15.2301Z"
                                    fill="white"
                                  />
                                </g>
                              </g>
                              <defs>
                                <clipPath id="clip0_1045_2517">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0.1875 0.810059)"
                                  />
                                </clipPath>
                                <clipPath id="clip1_1045_2517">
                                  <rect
                                    width="32"
                                    height="64"
                                    fill="white"
                                    transform="translate(0.1875 -47.1899)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>

                            {game?.user_play}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}
