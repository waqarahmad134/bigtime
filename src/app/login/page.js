"use client"
import Image from "next/image";
import bgImage from "@/assets/Images/BackgroundImage.png";
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png";
import google from "@/assets/Images/google.png";
import facebook from "@/assets/Images/facebook.png";
import Logo from "@/assets/Images/Logo.png";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Home() {
    const router=useRouter()
    const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`${API_BASE_URL}/auth/signin/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Login successful", data);
      localStorage.setItem("accessToken",data.access)
      localStorage.setItem("refreshToken",data.refresh)
      // store token or user data if needed
      router.push("/home"); // or wherever
    } else {
      alert(data?.message || "Invalid credentials");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <div className="relative min-h-screen flex">

     <Image
  src={bgImageMobile}
  alt="Background Mobile"
  fill
  className="object-fill pointer-events-none select-none -z-10 block md:hidden"
  priority
/>


<Image
  src={bgImage}
  alt="Background Desktop"
  fill
  className="object-fill pointer-events-none select-none -z-10 hidden md:block"
  priority
/>

   
      <div className="w-1/2 flex flex-col justify-center px-16 hidden md:flex">
        <div className="mb-8 absolute top-5 left-5">
          <Image src={Logo} alt="Big Time Logo"  />
        </div>
        <h1 className="text-[65px] font-bold text-white leading-tight">
          BIG TIME
        </h1>
        <div className="leading-none">

        <p className="mt-4 text-[25px] md:text-[40px] text-white uppercase">
          Sign in to your
        </p>
        <p className="text-[25px] md:text-[40px] uppercase bg-gradient-to-r from-[#BA83CB] to-[#AE69FF] bg-clip-text text-transparent">
          adventure!
        </p>
        </div>
      </div>

     
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 ">
        <div className="w-full max-w-md text-white  rounded-xl ">
          <h2 className="text-4xl font-semibold text-white mb-6">LOGIN</h2>
          
          <form className="space-y-3">
            <div>
              <label className="block text-sm text-gray-200 mb-1">
                Enter your email address
              </label>
       
                 <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="Yourname@gmail.com"
               value={formData.email}
  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="pl-11 bg-[#190733] w-full py-3 text-white placeholder-gray-400 border-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-200 mb-1">
                Enter your password
              </label>
                  <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                    value={formData.password}
  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="pl-11 bg-[#190733] text-white py-3 w-full placeholder-gray-400 border-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
            </div>

            <button
           
              className="w-full py-3 bg-[#3B2063] text-white rounded-xl uppercase tracking-wide transition-all duration-300 transform hover:scale-105"
               onClick={handleLogin}
            >
              Login
            </button>

            <div className="flex justify-between items-center text-sm text-gray-300">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" />
                <span className="ml-2">Remember me</span>
              </label>
              <label className="inline-flex items-center">
                <span className="ml-2 cursor-pointer">Forget password</span>
              </label>
            </div>
          </form>

          <div className="mt-6 text-center text-gray-300 text-sm border-t-1 pt-3 border-[#727272]">
            Don’t have an account?{" "}
            <Link href="/signup">
              Sign up
            </Link>
          </div>

          <div className="mt-3">
            <p className="text-start text-gray-300 mb-3">Or continue with</p>
            <div className="flex-[1] flex gap-1 justify-center w-full">
              <button className="flex w-full cursor-pointer items-center justify-center gap-2  bg-[#3B2063] hover:bg-opacity-30 transition px-4 py-2 rounded-xl">
              <Image src={google} alt="google"/>
              </button>
              <button className="flex w-full items-center cursor-pointer justify-center gap-2  bg-[#3B2063] hover:bg-opacity-30 transition px-4 py-2 rounded-xl">
                 <Image src={facebook} alt="facebook"/>
              </button>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400 text-start">
            By registering you agree with our{" "}
            <Link href="/terms" className="text-[#9D5CE9]">
              Terms and Conditions
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
