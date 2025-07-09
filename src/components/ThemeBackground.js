import Image from "next/image";
import bgImage from "@/assets/Images/BackgroundImage.png";

export default function ThemeBackground() {
  return (
    <div className="before:content-[''] before:absolute before:inset-0 before:bg-[#160430]/60 before:z-[-5]">
      <Image
        src={bgImage}
        alt="Background"
        fill
        className="object-cover pointer-events-none select-none -z-10"
        priority
      />
    </div>
  );
}
