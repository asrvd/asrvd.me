import {
  FiHome,
  FiPenTool,
  FiClock,
  FiPaperclip,
  FiHeadphones,
  FiUser,
  FiGlobe,
  FiMonitor,
  FiBookOpen,
  FiCode,
} from "react-icons/fi";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

const NavbarItems = [
  {
    name: "Home",
    slug: "/",
    icon: FiHome,
  },
  {
    name: "About",
    slug: "/about",
    icon: FiUser,
  },
  {
    name: "Now",
    slug: "/now",
    icon: FiClock,
  },
  {
    name: "Contact",
    slug: "/contact",
    icon: FiGlobe,
  },
  // {
  //   name: "About",
  //   slug: "/about",
  //   icon: FiKey,
  // },
  {
    name: "Guestbook",
    slug: "/guestbook",
    icon: FiBookOpen,
  },
  {
    name: "Spotify",
    slug: "/spotify",
    icon: FiHeadphones,
  },
  {
    name: "Tech᠎  ᠎ Stack",
    slug: "/tech-stack",
    icon: FiCode,
  },
];

export default function NavBar({ path }: { path: string }) {
  const router = useRouter();
  const [tooltipVisibility, setTooltipVisibility] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <div className="w-full min-h-full h-full flex flex-col justify-start items-center pt-6">
      <div className="flex flex-col gap-4">
        {NavbarItems.map((item, index) => {
          return (
            <>
              {path === item.slug ? (
                <button
                  key={index}
                  className="w-full flex justify-center items-center bg-zinc-700 hover:bg-zinc-700 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out focus:bg-zinc-700 relative"
                  onMouseLeave={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = false;
                    setTooltipVisibility(temp);
                  }}
                  onMouseEnter={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = true;
                    setTooltipVisibility(temp);
                  }}
                  onClick={() => router.push(item.slug)}
                >
                  <div className="p-2">
                    <item.icon size="1rem" className="text-zinc-100" />
                  </div>
                  {tooltipVisibility[index] && (
                    <span className="absolute min-w-full text-[0.75rem] leading-none left-10 p-[0.62rem] rounded shadow-xl text-zinc-200 bg-zinc-700">
                      {item.name}
                    </span>
                  )}
                </button>
              ) : (
                <button
                  key={index}
                  className="w-full flex justify-center items-center bg-zinc-800 hover:bg-zinc-700 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out focus:bg-zinc-700 relative"
                  onMouseLeave={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = false;
                    setTooltipVisibility(temp);
                  }}
                  onMouseEnter={() => {
                    const temp = [...tooltipVisibility];
                    temp[index] = true;
                    setTooltipVisibility(temp);
                  }}
                  onClick={() => router.push(item.slug)}
                >
                  <div className="p-2">
                    <item.icon size="1rem" className="text-zinc-100" />
                  </div>
                  {tooltipVisibility[index] && (
                    <span className="absolute text-[0.75rem] leading-none left-10 p-[0.62rem] rounded shadow-xl text-zinc-200 bg-zinc-700">
                      {item.name}
                    </span>
                  )}
                </button>
              )}
            </>
          );
        })}
      </div>
      <div className="border-r-2 border-zinc-800 h-full mt-4"></div>
    </div>
  );
}
