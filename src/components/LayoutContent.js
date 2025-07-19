"use client";

import RootHeader from "@/components/RootHeader";
import { useSidebar } from "@/context/SidebarContext";
import RootSidebar from "@/components/RootSidebar";


export default function LayoutContent({ children }) {
  const { isSidebarOpen } = useSidebar();
  
  return (
    <>
      <RootHeader />
      <main className={`transition-all duration-300 flex mt-[64px]`}>
        <RootSidebar/>
        <div
          className={`relative float-right ml-auto ${
            isSidebarOpen ? "w-[calc(100%-256px)]" : "w-[calc(100%-80px)]"
          }`}
        >
          <>
          {children}
          </>
        </div>
      </main>
    </>
  );
}
