"use client"
import { useState } from "react"
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png"
import bgImageWallet from "@/assets/Images/referralbg.png"
import dateIcon from "@/assets/Images/dateIcon.png"
import MariaGarcia from "@/assets/Images/Maria Garcia.png"
import JamesWilson from "@/assets/Images/James Wilson.png"
import SarahLee from "@/assets/Images/svg fill.png"
import DavidBrown from "@/assets/Images/David Brown.png"
import Image from "next/image"
import { FiCopy, FiSearch } from "react-icons/fi"
import filterIcon from "@/assets/Images/filter.png"
import { FaFacebookF, FaLink, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { ArrowDown } from "lucide-react"

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("Tournaments")
  const tournaments = [
    {
      name: "Speed Rush Tournament",
      stage: "Racing Pro",
      date: "2025-07-20",
      time: "15:30",
      prize: "2,500BTX",
      entry: "$25",
      level: "Intermediate",
      progress: "64/128",
      fillingFast: true,
    },
    {
      name: "Conqueror Trophy",
      stage: "Quarter-Final",
      date: "2025-07-20",
      time: "15:30",
      prize: "3700BTX",
      entry: "25BTX",
      level: "Intermediate",
      progress: "64/128",
      fillingFast: true,
    },
  ]
  const tabs = ["Tournaments", "Live Matches", "Results"]
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
        <section className="w-full  px-4 sm:px-8">
          <h2 className="font-bebas-neue tracking-wider text-center text-xl sm:text-5xl font-extrabold mb-2 text-white">
            UPCOMING TOURNAMENTS
          </h2>
          <p className="text-center text-white mb-8 text-sm sm:text-base">
            Join competitive tournaments and win amazing prizes
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 w-[120px] rounded-lg cursor-pointer text-sm font-semibold transition-all duration-300
            ${
              activeTab === tab
                ? "bg-[#9333EA] text-white"
                : "bg-[#14182C] text-gray-300 hover:bg-[#9333EA] hover:text-white"
            }
          `}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-8 max-w-7xl mx-auto">
            {tournaments.map((t, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#111827] to-[#581C87] rounded-xl p-5 relative border border-purple-800"
              >
                {/* Filling Fast badge */}
                {t.fillingFast && (
                  <span className="absolute top-3 right-3 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
                    🔥 Filling Fast
                  </span>
                )}

                {/* Title and Info */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-4">
                  <div>
                    <h3 className="text-white text-lg font-bold flex items-center gap-2">
                      🏆 {t.name}
                    </h3>
                    <div>
                      <p className="text-sm text-gray-400">{t.stage}</p>
                      <p className="text-sm text-gray-300">
                        {t.date} • {t.time}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Prize and Entry Fee */}
                <div className="flex flex-col sm:flex-row justify-between gap-3 mb-4">
                  <div className="flex-1 bg-[#1F293780] border border-[#374151] p-3 rounded text-center">
                    <p className="text-green-400 font-bold">{t.prize}</p>
                    <p className="text-xs text-gray-400 mt-1">Prize Pool</p>
                  </div>
                  <div className="flex-1 bg-[#1F293780] border border-[#374151] p-3 rounded text-center">
                    <p className="text-blue-400 font-bold">{t.entry}</p>
                    <p className="text-xs text-gray-400 mt-1">Entry Fee</p>
                  </div>
                </div>

                {/* Level and Progress */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <span className="text-xs text-white bg-purple-700 px-2 py-1 rounded-full w-max">
                    {t.level}
                  </span>
                  <p className="text-sm text-gray-400">{t.progress}</p>
                </div>

                {/* Join Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded text-sm font-semibold hover:opacity-90">
                  Join Tournament →
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
