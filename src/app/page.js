"use client";
import Image from "next/image";
import bgImage from "@/assets/Images/BackgroundImage.png";
import Logo from "@/assets/Images/Logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background image fills the viewport */}
      <Image
        src={bgImage}
        alt="Background"
        fill
        className="object-cover pointer-events-none select-none -z-10"
        priority
      />

      {/* Logo in the top‑left corner */}
      <div className="p-5">
        <Image src={Logo} alt="Logo" />
      </div>

      {/* Centered BIG TIME heading */}
      <div className="flex-1 flex items-center justify-center flex-col gap-10">
        <div className="text-center">
          <div className="text-[50px] md:text-[65px]  tracking-wide text-white">
            BIG TIME
          </div>
          <div className="flex flex-col leading-none">
            <div className="text-[25px] md:text-[40px]  tracking-wide text-white uppercase">
              Wellcome to The
            </div>
            <div className="text-[25px] md:text-[40px] tracking-wide uppercase bg-gradient-to-r from-[#BA83CB] to-[#AE69FF] bg-clip-text text-transparent">
              adventure!
            </div>
          </div>
        </div>
        <button
          className="uppercase bg-gradient-to-r from-[#501794]  to-[#3E70A1] text-white  py-3 px-10 rounded-full cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            router.push("/login");
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
