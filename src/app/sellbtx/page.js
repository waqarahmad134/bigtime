"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProfileCard from "@/components/SellBtx/ProfileCard";
import SellTabs from "@/components/SellBtx/SellTabs";
import SellForm from "@/components/SellBtx/SellForm";
import Active from "@/components/SellBtx/Active";
import History from "@/components/SellBtx/History";

export default function SellBTXPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("SELL BTX");

  return (
    <>
      <div className="max-w-[1200px] mx-auto py-16 px-4 text-white">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-5xl font-bebas-neue mb-8"
        >
          SELL BTX
        </motion.h4>

        <ProfileCard />

        <div className="mt-8 backdrop-blur-sm bg-[rgba(75,56,150,0.52)] rounded-xl px-14 py-7 border border-[rgba(255,255,255,0.1)]">
          <SellTabs setActiveTab={setActiveTab} activeTab={activeTab} />
          {activeTab === "ACTIVE" ? (
            <Active />
          ) : activeTab === "HISTORY" ? (
            <History />
          ) : (
            <SellForm setIsModalOpen={setIsModalOpen} />
          )}
        </div>
      </div>

      {/* ===  MODAL === */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] bg-opacity-10 flex items-center justify-center z-50">
          <div className="max-w-[625px] w-full bg-[linear-gradient(180deg,rgba(122,89,255,0.5)_1.44%,rgba(73,53,153,0.5)_100%)] backdrop-blur-[50px] rounded-lg px-16 py-10">
            <h3 className="text-4xl text-white font-bebas-neue">List BTX!</h3>
            <p className="font-poppins text-xl mt-8">
              Are you sure you want to list 100 BTX
            </p>
            <p className="font-poppins my-8 text-center">Are you sure ?</p>
            <div className="justify-center flex gap-4">
              <button className="bg-[rgba(44,44,44,1)] font-poppins text-white w-full max-w-[131px] h-[40px] rounded-lg">
                List
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[rgba(156,163,175,1)] font-poppins text-black w-full max-w-[131px] h-[40px] rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
