"use client"
import { useRouter, usePathname } from "next/navigation"
import { SidebarProvider } from "@/context/SidebarContext"
import LayoutContent from "@/components/LayoutContent"
import { useEffect } from "react"

export default function LayoutWrapper({ children }) {
  const router = useRouter()
  const pathname = usePathname()

  const excludedPrefixes = ["/", "/login", "/otp", "/signup", "/gameinfo"]
  const isExcluded =
    excludedPrefixes.includes(pathname) || pathname.startsWith("/bigtimeadmin")

  useEffect(() => {
    const role = localStorage.getItem("role")
    if (pathname === "/home" && role === "admin") {
      router.replace("/newhome")
    }
    if(pathname === "/newhome" && role === "user"){
      router.replace("/home")
    }

    console.log("role" , role , "from layout")
  }, [pathname, router])

  if (isExcluded) {
    return <>{children}</>
  }

  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  )
}
