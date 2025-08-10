"use client"
import { motion, AnimatePresence } from "framer-motion"
import ShopCard from "@/components/Shop/ShopCard"
import ShopSidebar from "@/components/Shop/ShopSidebar"
import ShopTabs from "@/components/Shop/ShopTabs"
import { useState } from "react"

// Animation variants for staggered lists
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Shop() {
  const [tab, setTab] = useState(0)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[calc(100vh-64px)] flex flex-col p-10 max-w-7xl mx-auto"
      >
        <div className="font-bebas-neue text-white text-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-medium text-6xl tracking-wide"
          >
            COSMIC STORE
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-poppins text-lg uppercase"
          >
            Premium Gaming Cosmetics & <br /> Power-Ups!
          </motion.p>
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-1"
          >
            <ShopSidebar />
          </motion.div>
          <div className="col-span-3">
            <AnimatePresence mode="wait">
              {tab === 0 ? (
                <motion.div
                  key="avatars"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="border border-[#A855F766] rounded-2xl bg-[#3B206380] px-20 py-5">
                    <h2 className="text-center text-white text-2xl mb-5">
                      LIMITED TIME OFFERS
                    </h2>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-2 gap-10"
                    >
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
                    </motion.div>
                  </div>
                  <div className="my-10">
                    <h2 className="text-center text-white text-2xl my-5">
                      All Items
                    </h2>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-3 gap-5"
                    >
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
                    </motion.div>
                  </div>
                </motion.div>
              ) : tab === 1 ? (
                <motion.div
                  key="skins"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="border border-[#A855F766] rounded-2xl bg-[#3B206380] px-20 py-5">
                    <h2 className="text-center text-white text-2xl mb-5">
                      LIMITED TIME OFFERS
                    </h2>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-2 gap-10"
                    >
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
                    </motion.div>
                  </div>
                  <div className="my-10">
                    <h2 className="text-center text-white text-2xl my-5">
                      All Items
                    </h2>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-3 gap-5"
                    >
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
                    </motion.div>
                  </div>
                </motion.div>
              ) : tab === 2 ? (
                <motion.div
                  key="emotes"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="border border-[#A855F766] rounded-2xl bg-[#3B206380] px-20 py-5">
                    <h2 className="text-center text-white text-2xl mb-5">
                      LIMITED TIME OFFERS
                    </h2>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-2 gap-10"
                    >
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
                    </motion.div>
                  </div>
                  <div className="my-10">
                    <h2 className="text-center text-white text-2xl my-5">
                      All Items
                    </h2>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-3 gap-5"
                    >
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
                    </motion.div>
                  </div>
                </motion.div>
              ) : tab === 3 ? (
                <motion.div
                  key="power-ups"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="border border-[#A855F766] rounded-2xl bg-[#3B206380] px-20 py-5">
                    <h2 className="text-center text-white text-2xl mb-5">
                      LIMITED TIME OFFERS
                    </h2>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-2 gap-10"
                    >
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
                    </motion.div>
                  </div>
                  <div className="my-10">
                    <h2 className="text-center text-white text-2xl my-5">
                      All Items
                    </h2>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-3 gap-5"
                    >
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
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                ""
              )}
            </AnimatePresence>
          </div>
        </section>
      </motion.div>
    </>
  )
}