"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gamesData from "@/app/games.json";
import marketPlaceItems from "@/app/marketPlaceItems.json";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import GameCard from "@/components/GameCard";

export default function Shop() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  // console.log(marketPlaceItems);
  return (
    <>
      <div className="relative container mx-auto p-6">
        <div className="text-white flex justify-between gap-2">
          <p className="font-bebas-neue font-medium text-5xl tracking-wide my-5">
            MarketPlace
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#7A59FF4D] px-3 py-2 rounded-xl w-full md:w-72">
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
            <div className="flex gap-4">
              <div className="text-center">
                <Link href="/sellbtx">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-[#7A59FF] hover:bg-[#6c4fe0] rounded-md transition-colors duration-200"
                  >
                    Sell BTX
                  </motion.button>
                </Link>
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#7A59FF] hover:bg-[#6c4fe0] rounded-md transition-colors duration-200"
                >
                  Buy BTX
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* == BUTTONS == */}
        <div className="flex gap-4">
          <button className="bg-[rgba(122,89,255,0.86)] w-[120px] h-10 rounded-xl">
            BTX
          </button>
          <button className="bg-[rgba(122,89,255,0.86)] w-[120px] h-10 rounded-xl">
            Avatar
          </button>
        </div>

        {/* == GAMES == */}
        <section className="grid grid-cols-5 gap-5 bg-[#1F1339] text-white rounded-xl p-4 md:p-6 space-y-4 w-full my-10">
          {marketPlaceItems?.map((data, index) => (
            <div
              onClick={() => {
                const slug = data?.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9\-]/g, "");
                router.push(`/shop/${slug}`);
              }}
              className="cursor-pointer"
              key={index + data?.id}
            >
              <GameCard
                title={data.title}
                rating={data.rating}
                image={data.image || "/assets/images/marketplace/1.png"}
              />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
