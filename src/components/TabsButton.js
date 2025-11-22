import { useState } from "react";

const TabsButton = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabContent = [
    "All",
    "Available",
    "Simulator",
    "Action",
    "Obby",
    "Tycoon",
    "Fighting",
    "Shooter",
  ];
  return (
    <div className="flex flex-wrap gap-3 my-8">
      {tabContent.map((i) => {
        const isActive = activeTab === i;

        return (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`
              mt-1 h-11 rounded-[8px] px-[20px] flex justify-center items-center text-white text-sm
              ${
                isActive
                  ? "bg-gradient-to-t from-[#9333EA] to-[#7A59FF] shadow-[0px_0px_18.8px_-3px_rgba(147,51,234,1)]"
                  : "bg-[rgba(122,89,255,0.49)]"
              }
            `}
          >
            {i}
          </button>
        );
      })}
    </div>
  );
};

export default TabsButton;