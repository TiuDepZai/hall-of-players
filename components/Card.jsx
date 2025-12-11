import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Card({ player }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full h-[300px] perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`
          relative w-full h-full duration-500 transform-style-preserve-3d
          ${flipped ? "rotate-y-180" : ""}
        `}
      >
        {/* ---------------------------------------- */}
        {/* FRONT OF CARD                            */}
        {/* ---------------------------------------- */}
        <div
          className="
            absolute inset-0 
            backface-hidden 
            cursor-pointer 
            rounded-xl 
            bg-white 
            shadow-md 
            border border-[#D0D0CE]
            p-6 
            flex flex-col items-center 
            transition-transform duration-200
            hover:scale-[1.03]
            hover:shadow-xl
          "
        >
          {/* Pingpong-style circular frame */}
          <div className="w-28 h-28 rounded-full overflow-hidden shadow-inner border-4 border-[#0073BA]/40 bg-[#F2F2F2] mb-4">
            <Image
              src={
                player.Picture
                  ? `/profile-pic/${player.Picture}.jpg`
                  : "/profile-pic/default.jpg"
              }
              alt={player.Name}
              width={120}
              height={120}
              className="object-cover"
            />
          </div>

          <h2 className="text-xl font-bold text-[#333333]">
            {player.Rank} {player.Name}
          </h2>

          {player.ActivePeriod ? (
            <p className="text-sm text-[#666666] mt-1">
              Active from {player.ActivePeriod}
            </p>
          ) : null}
          
          {player.LinkedIn && (
            <a
              href={player.LinkedIn}
              onClick={(e) => e.stopPropagation()} // prevent immediate flip
              target="_blank"
              className="mt-3 text-[#0073BA] hover:text-blue-800"
            >
              <FaLinkedin size={24} />
            </a>
          )}

          <p className="text-xs text-[#0073BA] mt-3 opacity-70">
            Click to flip 🏓
          </p>
        </div>

        {/* ---------------------------------------- */}
        {/* BACK OF CARD (bio + info)                */}
        {/* ---------------------------------------- */}
        <div
          className="
            absolute inset-0 
            backface-hidden 
            rotate-y-180 
            rounded-xl 
            bg-white 
            shadow-md 
            border border-[#D0D0CE]
            p-6 
            flex flex-col justify-center
          "
        >
          <h2 className="text-4xl font-bold text-[#0073BA] mb-2 text-left">
            "
          </h2>

          <p className="text-sm text-[#333333] leading-relaxed mb-4 text-center">
            {player.Bio || "A legend is yet to write their tale."}
          </p>
         {player.LinkedIn && (
            <a
              href={player.LinkedIn}
              onClick={(e) => e.stopPropagation()}
              className="
                bg-[#0073BA] 
                text-white 
                px-4 
                py-2 
                rounded-lg 
                hover:bg-blue-800 
                transition 
                text-center
              "
              target="_blank"
            >
              <FaLinkedin className="inline mr-2" />
              Connect with {player.Rank} {player.Name}
            </a>
          )}

          <p className="text-xs text-[#0073BA] mt-4 text-center opacity-70">
            Click to flip back 🔄
          </p>
        </div>
      </div>
    </div>
  );
}
