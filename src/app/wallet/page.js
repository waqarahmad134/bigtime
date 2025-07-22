"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { getApi } from "@/lib/apiClient"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation";


import { FiRefreshCw, FiSearch } from "react-icons/fi"
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs"
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png"
import bgImageWallet from "@/assets/Images/referralbg.png"
import tokkenimg from "@/assets/Images/tokkenimg.png"
import filterIcon from "@/assets/Images/filter.png"

const transactions = [
  {
    id: 1,
    type: "Receive",
    icon: <BsArrowDownCircle className="text-green-400" />,
    title: "Receive BTX",
    desc: "Big Time",
    amount: "1,250.75 BTX",
    change: "+12.5",
    changeColor: "text-green-400",
    date: "6/22/25",
  },
  {
    id: 2,
    type: "Spend",
    icon: <BsArrowUpCircle className="text-red-400" />,
    title: "Spend BTX",
    desc: "Space Adventure",
    amount: "1,250.75 BTX",
    change: "-12.5",
    changeColor: "text-red-400",
    date: "6/22/25",
  },
  {
    id: 3,
    type: "Spend",
    icon: <BsArrowUpCircle className="text-red-400" />,
    title: "Spend BTX",
    desc: "Magic Realm",
    amount: "1,250.75 BTX",
    change: "-12.5",
    changeColor: "text-red-400",
    date: "6/22/25",
  },
  {
    id: 4,
    type: "Receive",
    icon: <BsArrowDownCircle className="text-green-400" />,
    title: "Receive BTX",
    desc: "Big Time",
    amount: "+75 BTX",
    change: "+12.5",
    changeColor: "text-green-400",
    date: "6/22/25",
  },
]

export default function TokenWalletPage() {
  const router = useRouter();

  const [walletBalance, setWalletBalance] = useState(null)
  const fetchWalletBalance = async () => {
    try {
      const data = await getApi("/wallet/balance/")
      console.log("🚀 ~ fetchWalletBalance ~ data:", data)
      setWalletBalance(data || [])
    } catch (error) {
      toast.error(
        error?.response?.data?.detail ||
          error.message ||
          "Failed to fetch flagged reports.",
      )
    }
  }

  useEffect(() => {
    fetchWalletBalance()
  }, [])

  const [activeTab, setActiveTab] = useState("transfer")
  const tabs = ["transfer", "Buy"]

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

      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-4 gap-2 pt-10">
            <Image src={tokkenimg} alt="Token Icon" className="w-10 h-10" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              TOKEN WALLET
            </h1>
          </div>
          <p className="mt-1 text-sm text-[#FFFFFF]">
            Manage your gaming assets
          </p>
        </header>

        {/* Available Tokens Card */}
        <div className="bg-gradient-to-b from-[#2D1B4E33] via-[#1A0D2E33] to-[#0F062033] border border-[#FFFFFFD9] bg-opacity-50 rounded-lg px-4 sm:px-6 py-3 sm:py-4 mb-6 shadow-[0px_4px_12px_#52388E33]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h2 className="text-lg text-white mb-2 sm:mb-0">
              Available Tokens
            </h2>
            <div className="flex flex-col items-start sm:items-end">
              <span className="text-2xl sm:text-3xl font-semibold text-[#FFB800]">
                {walletBalance?.balance}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="overflow-x-auto">
          <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center bg-[#280D50] text-white rounded-xl py-3 px-4 my-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  router.push("/payment");
                }}
                className={`whitespace-nowrap capitalize px-6 py-2 rounded-lg cursor-pointer transition-colors duration-200 w-full ${
                  activeTab === tab
                    ? "bg-[#7A59FF]"
                    : "hover:bg-[#7A59FF] bg-[#3f1d6a]"
                }`}
              >
                {tab} Tokens
              </button>
            ))}
          </div>
        </div>
        <header className="text-start mb-4">
          <h1 className="mt-1 text-sm text-[#FFFFFF] text-[24px]">
            Transaction History
          </h1>
        </header>
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative flex items-center border border-[#FFFFFFD9] bg-[#1A0D2E33] bg-opacity-50 rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow-[0px_4px_12px_#52388E33]">
            <FiSearch className="text-white mr-2 sm:mr-3" />
            <input
              type="text"
              placeholder="Search Transactions"
              className="bg-transparent placeholder-white focus:outline-none flex-1 text-sm sm:text-base text-white"
            />
            <Image
              src={filterIcon}
              alt="Filter"
              className="ml-2 w-5 h-5 sm:w-6 sm:h-6"
            />
          </div>
        </div>

        {/* Transaction List */}
        <section className="space-y-4 mb-6">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#3D1B7D] border border-[#FFFFFFD9] bg-opacity-50 rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow-[0px_4px_12px_#52388E33]"
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-2 sm:mb-0">
                <div className="text-2xl">{tx.icon}</div>
                <div>
                  <h3 className="font-semibold text-white">{tx.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{tx.desc}</p>
                </div>
              </div>
              <div className="flex flex-col items-start sm:items-end space-y-1">
                <p className="font-semibold text-white text-sm sm:text-base">
                  {tx.amount}
                </p>
                <p className={`${tx.changeColor} text-xs sm:text-sm`}>
                  {tx.change}
                </p>
                <p className="text-2xs sm:text-xs text-gray-400">{tx.date}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
