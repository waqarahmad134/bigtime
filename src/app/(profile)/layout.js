// app/layout.js
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import "../globals.css" // TailwindCSS styles
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png"
import bgImageWallet from "@/assets/Images/referralbg.png"
import Image from "next/image"
export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <div className="relative flex w-full">
        {/* Background Images */}

        <Image
          src={bgImageWallet}
          alt="Background Desktop"
          fill
          className="object-cover pointer-events-none select-none -z-10 "
          priority
        />

        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
