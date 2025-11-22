import Image from "next/image";
import { GoThumbsup } from "react-icons/go";

const GameCard = ({ image, title, rating, isLaunch }) => {
  return (
    <div className="overflow-hidden rounded-2xl font-poppins border-t-[0.8px] border-t-[rgba(255,255,255,0.1)] bg-gradient-to-b from-[rgba(122,89,255,0.6)] to-[rgba(73,53,153,0.6)] backdrop-blur-[47px]">
      <img
        src={image}
        width={250}
        height={160}
        className="w-full object-cover h-[160px]"
      />
      <div className="p-4 flex flex-col gap-3">
        <h5 className="truncate">{title}</h5>
        <div className="flex gap-2 items-center">
          <GoThumbsup />
          <p className="text-sm">{rating}% Rating</p>
        </div>

        <button
          className={`${
            isLaunch
              ? "text-black bg-[rgba(45,216,107,1)] shadow-[0px_0px_23.4px_-3px_rgba(74,222,128,1)]"
              : "text-white from-[#9333EA] to-[#7A59FF] bg-gradient-to-t"
          } mt-1 h-9 rounded-[8px] w-full flex justify-center items-center shadow-[0px_0px_18.8px_-3px_rgba(147,51,234,1)]`}
        >
          Launch Game
        </button>
      </div>
    </div>
  );
};

export default GameCard;
