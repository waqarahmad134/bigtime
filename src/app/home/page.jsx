"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouting } from "@/context/RoutingContext";
import hogwarts from "@/assets/Images/hogwarts.jpg";
import gamesData from "@/app/games.json";
import { GoThumbsup } from "react-icons/go";
import GameCard from "@/components/GameCard";
import { useState } from "react";
import TabsButton from "@/components/TabsButton";

export default function Homes() {
  const router = useRouter();
  const { navigateWithLoading } = useRouting();

  const fadeSlide = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container mx-auto relative">
      <motion.div
        className="w-full text-white p-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="2xl:text-[60px] text-5xl font-medium font-bebas-neue mt-4">
          Home
        </h1>

        <TabsButton />

        {/* All Games Section */}
        <h3 className="xl:text-xl text-lg font-bold font-poppins my-4">
          All Games
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-2 md:gap-4">
          {gamesData?.casinos?.map((game, gameIdx) => (
            <GameCard
              isLaunch={game.isLaunchGame}
              title={game?.title}
              image={game?.image}
              rating={game?.rating}
              key={gameIdx}
            />
          ))}
        </div>

        {/* Available Games Section */}
        <h3 className="xl:text-xl text-lg font-bold font-poppins my-4">
          Available Games
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-2 md:gap-4">
          {gamesData?.casinoGames?.map((game, gameIdx) => (
            <GameCard
              isLaunch={game.isLaunchGame}
              title={game?.title}
              image={game?.image}
              rating={game?.rating}
              key={gameIdx}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

