"use client"
import { usePathname } from "next/navigation"
import { SidebarProvider } from "@/context/SidebarContext"
import LayoutContent from "./LayoutContent"

export default function LayoutWrapper({ children }) {
  const pathname = usePathname()
  const excludedPrefixes = ["/", "/login", "/otp", "/signup"]
  const isExcluded =
    excludedPrefixes.includes(pathname) || pathname.startsWith("/admin")

  if (isExcluded) {
    return <>{children}</>
  }

  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  )
}
