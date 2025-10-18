"use client";

import { useState } from "react";

export default function Active() {
  return (
    <div className="mt-10 flex flex-col gap-7 font-poppins text-white w-full">
      {/* COL 1 */}
      <SellCard />
      <SellCard />
      <SellCard />
    </div>
  );
}

const SellCard = () => {
  return (
    <div className="flex justify-between gap-4 p-6 rounded-xl backdrop-blur-sm bg-[rgba(122,89,255,0.28)] text-white">
      {/* --- COL 1 --- */}
      <div className="flex flex-col justify-end gap-2 px-6 py-4 flex-1">
        <div className="flex gap-3 items-end">
          <span className="text-4xl font-semibold">1,000</span>
          <span className="text-xl text-[rgba(209,213,219,1)]">BTX</span>
          <span className="inline-block mt-1 mr-2 px-3 py-[2px] text-[12px] font-poppins text-[rgba(248,250,252,1)] bg-emerald-600 rounded-md shadow-sm">
            Active
          </span>
        </div>

        <div className="text-sm font-light text-gray-300">Price / BTX</div>

        <div className="text-xl font-semibold">$0.165</div>
      </div>

      {/* --- COL 2 --- */}
      <div className="flex flex-col justify-center items-center flex-1">
        <p className="text-gray-300 text-sm font-light">Total Value</p>
        <p className="text-xl font-semibold">$165.00</p>
      </div>

      {/* --- COL 3 --- */}
      <div className="flex flex-col justify-center flex-1">
        <p className="text-gray-300 text-sm text-left font-light">Listed</p>
        <p className="text-xl font-semibold">2025-10-01</p>
      </div>
    </div>
  );
};
