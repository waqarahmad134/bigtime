"use client"
import { Settings, Search, Bell, LogOut } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import Logo from "@/assets/Images/Logo2.png"
import { useSidebar } from "@/context/SidebarContext"
import { toast } from "react-hot-toast"

function AdminLink() {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const role = localStorage.getItem("role")
    if (role === "admin") {
      setIsAdmin(true)
    }
  }, [])

  if (!isAdmin) return null

  return (
    <Link
      href="/bigtimeadmin"
      className="w-8 h-8 p-5 bg-[#4c2d80] rounded flex items-center justify-center hover:bg-[#5d37a2]"
    >
      <span className="text-white">
        <svg
          width="22"
          height="25"
          viewBox="0 0 22 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.9974 15.3334V24.6667H0.664062C0.664062 22.1914 1.64739 19.8174 3.39773 18.0671C5.14807 16.3167 7.52204 15.3334 9.9974 15.3334ZM9.9974 14.1667C6.1299 14.1667 2.9974 11.0342 2.9974 7.16675C2.9974 3.29925 6.1299 0.166748 9.9974 0.166748C13.8649 0.166748 16.9974 3.29925 16.9974 7.16675C16.9974 11.0342 13.8649 14.1667 9.9974 14.1667ZM20.4974 18.8334H21.6641V24.6667H12.3307V18.8334H13.4974V17.6667C13.4974 16.7385 13.8661 15.8483 14.5225 15.1919C15.1789 14.5355 16.0691 14.1667 16.9974 14.1667C17.9257 14.1667 18.8159 14.5355 19.4723 15.1919C20.1286 15.8483 20.4974 16.7385 20.4974 17.6667V18.8334ZM18.1641 18.8334V17.6667C18.1641 17.3573 18.0411 17.0606 17.8224 16.8418C17.6036 16.623 17.3068 16.5001 16.9974 16.5001C16.688 16.5001 16.3912 16.623 16.1724 16.8418C15.9536 17.0606 15.8307 17.3573 15.8307 17.6667V18.8334H18.1641Z"
            fill="white"
          />
        </svg>
      </span>
    </Link>
  )
}

export default function RootHeader() {
  const { isSidebarOpen, toggleSidebar } = useSidebar()
  const [searchQuery, setSearchQuery] = useState("")
  const [role, setRole] = useState("")

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRole = localStorage.getItem("role")
      setRole(storedRole || "Guest")
    }
  }, [])

  const logOutFunc = async () => {
    try {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      localStorage.removeItem("role")
      window.location.href = "/login"
    } catch (err) {
      toast.error("Something went wrong")
      console.error("❌ Logout error:", err)
    }
  }

  return (
    <header className="fixed top-0 z-99 w-full px-4 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 bg-[#2b0a59]">
      {/* LEFT GROUP */}
      <div className="flex items-center gap-3 flex-grow md:flex-grow-0 w-full md:w-auto">
        <div className="w-[50px] mx-auto flex items-center justify-center gap-3 ml-3">
          <button
            onClick={toggleSidebar}
            className="w-8 h-8 rounded flex flex-col items-center justify-center hover:bg-[#5d37a2] transition cursor-pointer"
          >
            <span className="block w-6 h-1 rounded-2xl bg-white mb-1"></span>
            <span className="block w-6 h-1 rounded-2xl bg-white mb-1"></span>
            <span className="block w-6 h-1 rounded-2xl bg-white"></span>
          </button>
        </div>

        <div className="ml-5">
          <Link href="/home1">
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
        <button className="w-8 h-8 p-5 bg-[#4c2d80] rounded flex items-center justify-center hover:bg-[#5d37a2]">
          <span className="text-white">
            <Bell />
          </span>
        </button>
        <Link
          href="/settings"
          className="w-8 h-8 p-5 bg-[#4c2d80] rounded flex items-center justify-center hover:bg-[#5d37a2]"
        >
          <span className="text-white">
            <Settings />
          </span>
        </Link>

        <AdminLink />

        <button
          onClick={logOutFunc}
          className="cursor-pointer w-8 h-8 p-5 bg-[#4c2d80] rounded flex items-center justify-center hover:bg-[#5d37a2]"
        >
          <span className="text-white">
            <LogOut />
          </span>
        </button>

        {/* User Profile */}
        <Link
          href="/profile"
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
            QS
          </div>
          <div className="hidden sm:block text-white text-sm leading-tight">
            <p className="font-medium capitalize">{role}</p>
          </div>
        </Link>
      </div>
    </header>
  )
}
