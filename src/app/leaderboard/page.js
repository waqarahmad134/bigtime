"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FiSearch } from "react-icons/fi"

import bgImageWallet from "@/assets/Images/referralbg.png"
import filterIcon from "@/assets/Images/filter.png"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

const tabs = ["daily", "weekly", "monthly"]

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("daily")
  const [searchTerm, setSearchTerm] = useState("")
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchLeaderboard = async () => {
    setLoading(true)
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken")
          : null

      const response = await fetch(
        `${API_BASE_URL}/leaderboard/?limit=5&period=${activeTab}&offset=0`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      )

      if (response.status === 401) {
        alert("Please Login First")
        window.location.href = "/login"
        return
      }

      const data = await response.json()
      console.log(data?.leaders)
      setPlayers(data?.leaders)
    } catch (err) {
      console.error("Leaderboard fetch error:", err)
      setPlayers([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeaderboard()
  }, [activeTab])

  // Filter players based on search term
  const filteredPlayers = players.filter(
    (player) =>
      player?.user__username
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase()) ||
      player?.user__username
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase()),
  )

  return (
    <div className="relative min-h-screen flex flex-col pb-10">
      <Image
        src={bgImageWallet}
        alt="Background"
        fill
        className="object-cover pointer-events-none select-none -z-10"
        priority
      />

      <div className="min-h-screen text-white p-6">
        <div className="max-w-4xl mx-auto rounded-xl p-6 bg-[#312E8133] shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">LEADERBOARD</h1>
          </div>

          {/* Tabs */}
          <div className="overflow-x-auto">
            <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center bg-[#280D50] text-white rounded-xl py-3 px-4 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap px-6 py-2 rounded-full transition-colors duration-200 ${
                    activeTab === tab
                      ? "bg-[#7A59FF]"
                      : "hover:bg-[#7A59FF] bg-[#3f1d6a]"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative flex items-center border border-[#581c87] bg-[#1A0D2E33] bg-opacity-50 rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow-[0px_4px_12px_#52388E33]">
              <FiSearch className="text-white mr-2 sm:mr-3" />
              <input
                type="text"
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent placeholder-white focus:outline-none flex-1 text-sm sm:text-base text-white"
              />
              <Image
                src={filterIcon}
                alt="Filter"
                className="ml-2 w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
          </div>

          {/* Player List */}
          <div className="space-y-3 border-2 border-[#581c87] rounded-xl p-4">
            <h2 className="font-semibold text-xl capitalize">
              {activeTab} Top Players
            </h2>
            {loading ? (
              <p className="text-center text-sm text-white/50">Loading...</p>
            ) : filteredPlayers.length === 0 ? (
              <p className="text-center text-sm text-white/50">
                No players found.
              </p>
            ) : (
              filteredPlayers?.map((player, index) => (
                <div
                  key={player.user__id || index}
                  className={`flex justify-between items-center bg-[#3b1d6c70] p-3 rounded-lg ${
                    player.user__username ? "" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-lg font-bold ${
                        index === 0
                          ? "text-yellow-300"
                          : index === 1
                          ? "text-gray-300"
                          : index === 2
                          ? "text-orange-300"
                          : "text-white/80"
                      }`}
                    >
                      {index + 1}.
                    </span>
                    <div>
                      <p className="text-sm font-medium">
                        {player.user__username}
                      </p>
                      <p className="text-xs text-white/50">
                        @{player.user__username}
                      </p>
                    </div>
                    {player.you && (
                      <span className="ml-2 px-2 py-0.5 bg-pink-600 text-xs rounded-full">
                        You
                      </span>
                    )}
                  </div>
                  <p className="font-bold text-right">
                    {parseFloat(player.rank || 0).toFixed(2)}
                  </p>
                </div>
              ))
            )}
          </div>

          <p className="text-xs text-white/40 mt-6 text-center">
            Rankings update every 24 hours. Keep playing to improve your
            position!
          </p>
        </div>
      </div>
    </div>
  )
}
