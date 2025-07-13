"use client"

import ThemeBackground from "@/components/ThemeBackground"
import ShopCard from "@/components/Shop/ShopCard"
import ShopSidebar from "@/components/Shop/ShopSidebar"
import ShopTabs from "@/components/Shop/ShopTabs"
import { useState } from "react"

export default function shop() {
  const [tab, setTab] = useState(0)
  return (
    <>
      <ThemeBackground />
      <div className="relative min-h-[calc(100vh-64px)] flex flex-col p-10 max-w-7xl mx-auto">
        <div className="font-bebas-neue text-white text-center">
          <p className="font-medium text-6xl tracking-wide">COSMIC STORE</p>
          <p className="font-poppins text-lg uppercase">
            Premium Gaming Cosmetics & <br /> Power-Ups!
          </p>
        </div>
        <div className="my-5">
          <ShopTabs
            tabs={["AVATARS", "SKINS", "EMOTES", "POWER-UPS"]}
            onChange={(i) => {
              console.log("Selected Tab:", i)
              setTab(i)
            }}
          />
        </div>
        <section className="grid grid-cols-4 my-5">
          <div className="col-span-1">
            <ShopSidebar />
          </div>
          <div className="col-span-3">
            {/* Avatars Section  */}
            {tab === 0 ? (
              <div>
                <div className="border border-[#A855F766] rounded-2xl bg-[#3B206380] px-20 py-5">
                  <h2 className="text-center text-white text-2xl mb-5">
                    LIMITED TIME OFFERS
                  </h2>
                  <div className="grid grid-cols-2 gap-10">
                    <ShopCard
                      title="Cyber Warrior"
                      rarity="LEGENDARY"
                      rarityColor="bg-purple-500"
                      price={400}
                    />
                    <ShopCard
                      title="Space Explorer"
                      rarity="LEGENDARY"
                      rarityColor="bg-purple-500"
                      price={250}
                    />
                  </div>
                </div>
                <div className="my-10">
                  <h2 className="text-center text-white text-2xl my-5">
                    All Items
                  </h2>
                  <div className="grid grid-cols-3 gap-5">
                    <ShopCard
                      title="Cyber Warrior"
                      rarity="LEGENDARY"
                      rarityColor="bg-[#6B7280]"
                      price={400}
                      btnColor="bg-[#059669]"
                      btnText="Owned"
                    />
                    <ShopCard
                      title="Cyber Warrior"
                      rarity="LEGENDARY"
                      rarityColor="bg-[#6B7280]"
                      price={400}
                      btnColor="bg-[#059669]"
                      btnText="Owned"
                    />
                    <ShopCard
                      title="Cyber Warrior"
                      rarity="LEGENDARY"
                      rarityColor="bg-[#6B7280]"
                      price={400}
                      btnColor="bg-[#059669]"
                      btnText="Owned"
                    />
                  </div>
                </div>
              </div>
            ) : tab === 1 ? (
              <div>
                <div className="border border-[#A855F766] rounded-2xl bg-[#3B206380] px-20 py-5">
                  <h2 className="text-center text-white text-2xl mb-5">
                    LIMITED TIME OFFERS
                  </h2>
                  <div className="grid grid-cols-2 gap-10">
                    <ShopCard
                      title="Hologrpahic Suite"
                      rarity="LEGENDARY"
                      rarityColor="bg-purple-500"
                      price={400}
                    />
                    <ShopCard
                      title="Crystal Armor"
                      rarity="LEGENDARY"
                      rarityColor="bg-purple-500"
                      price={250}
                    />
                  </div>
                </div>
                <div className="my-10">
                  <h2 className="text-center text-white text-2xl my-5">
                    All Items
                  </h2>
                  <div className="grid grid-cols-3 gap-5">
                    <ShopCard
                      title="Cyber Warrior"
                      rarity="LEGENDARY"
                      rarityColor="bg-[#6B7280]"
                      price={400}
                      btnColor="bg-[#059669]"
                      btnText="Owned"
                    />
                    <ShopCard
                      title="Cyber Warrior"
                      rarity="LEGENDARY"
                      rarityColor="bg-[#6B7280]"
                      price={400}
                      btnColor="bg-[#059669]"
                      btnText="Owned"
                    />
                    <ShopCard
                      title="Cyber Warrior"
                      rarity="LEGENDARY"
                      rarityColor="bg-[#6B7280]"
                      price={400}
                      btnColor="bg-[#059669]"
                      btnText="Owned"
                    />
                  </div>
                </div>
              </div>
            ) : tab === 2 ? (
              <div>
                <div className="border border-[#A855F766] rounded-2xl bg-[#3B206380] px-20 py-5">
                  <h2 className="text-center text-white text-2xl mb-5">
                    LIMITED TIME OFFERS
                  </h2>
                  <div className="grid grid-cols-2 gap-10">
                    <ShopCard
                      title="Victory Dance"
                      rarity="LEGENDARY"
                      rarityColor="bg-purple-500"
                      price={400}
                    />
                    <ShopCard
                      title="Cosmic Salute"
                      rarity="LEGENDARY"
                      rarityColor="bg-purple-500"
                      price={250}
                    />
                  </div>
                </div>
                <div className="my-10">
                  <h2 className="text-center text-white text-2xl my-5">
                    All Items
                  </h2>
                  <div className="grid grid-cols-3 gap-5">
                    <ShopCard
                      title="Cyber Warrior"
                      rarity="LEGENDARY"
                      rarityColor="bg-[#6B7280]"
                      price={400}
                      btnColor="bg-[#059669]"
                      btnText="Owned"
                    />
                    <ShopCard
                      title="Cyber Warrior"
                      rarity="LEGENDARY"
                      rarityColor="bg-[#6B7280]"
                      price={400}
                      btnColor="bg-[#059669]"
                      btnText="Owned"
                    />
                    <ShopCard
                      title="Cyber Warrior"
                      rarity="LEGENDARY"
                      rarityColor="bg-[#6B7280]"
                      price={400}
                      btnColor="bg-[#059669]"
                      btnText="Owned"
                    />
                  </div>
                </div>
              </div>
            ) : tab === 3 ? (
              <div>
                <div className="border border-[#A855F766] rounded-2xl bg-[#3B206380] px-20 py-5">
                  <h2 className="text-center text-white text-2xl mb-5">
                    LIMITED TIME OFFERS
                  </h2>
                  <div className="grid grid-cols-2 gap-10">
                    <ShopCard
                      title="Speed Boost"
                      rarity="LEGENDARY"
                      rarityColor="bg-purple-500"
                      price={400}
                    />
                    <ShopCard
                      title="Shield Matrix"
                      rarity="LEGENDARY"
                      rarityColor="bg-purple-500"
                      price={250}
                    />
                  </div>
                </div>
                <div className="my-10">
                  <h2 className="text-center text-white text-2xl my-5">
                    All Items
                  </h2>
                  <div className="grid grid-cols-3 gap-5">
                    <ShopCard
                      title="Cyber Warrior"
                      rarity="LEGENDARY"
                      rarityColor="bg-[#6B7280]"
                      price={400}
                      btnColor="bg-[#059669]"
                      btnText="Owned"
                    />
                    <ShopCard
                      title="Cyber Warrior"
                      rarity="LEGENDARY"
                      rarityColor="bg-[#6B7280]"
                      price={400}
                      btnColor="bg-[#059669]"
                      btnText="Owned"
                    />
                    <ShopCard
                      title="Cyber Warrior"
                      rarity="LEGENDARY"
                      rarityColor="bg-[#6B7280]"
                      price={400}
                      btnColor="bg-[#059669]"
                      btnText="Owned"
                    />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    </>
  )
}
