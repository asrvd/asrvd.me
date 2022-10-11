import {
  FiHome,
  FiClock,
  FiPaperclip,
  FiHeadphones,
  FiUser,
  FiBookOpen,
  FiSun,
  FiCommand,
  FiMoon,
} from "react-icons/fi";
import { useRouter } from "next/router";
import { useKBar } from "kbar";
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
    name: "Links",
    slug: "/links",
    icon: FiPaperclip,
  },
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
];

export default function MobileNavBar({ path }: { path: string }) {
  const { query } = useKBar();
  const router = useRouter();
  const [themeIcon, setThemeIcon] = useState("dark");

  function handleThemeBtnCLick() {
    // console.log("ok")
    themeIcon === "dark" ? setThemeIcon("light") : setThemeIcon("dark");
  }

  return (
    <div className="min-w-full min-h-full h-full flex overflow-x-scroll bg-zinc-800/50 justify-center items-center py-1 rounded-lg shadow-xl gap-4">
      <div className="flex justify-evenly gap-4 pl-24">
        {NavbarItems.map((item, index) => {
          return (
            <button
              key={index}
              className="w-full h-12 flex justify-center items-center"
            >
              {path === item.slug ? (
                <item.icon
                  size="2rem"
                  className="text-zinc-100 rounded bg-zinc-700 hover:bg-zinc-700 py-2 cursor-pointer hover:scale-110 duration-300 ease-in-out shadow hover:shadow-xl"
                  onClick={() => router.push(item.slug)}
                />
              ) : (
                <item.icon
                  size="2rem"
                  className="text-zinc-100 rounded bg-zinc-800 hover:bg-zinc-700 py-2 cursor-pointer hover:scale-110 duration-300 ease-in-out shadow hover:shadow-xl"
                  onClick={() => router.push(item.slug)}
                />
              )}
            </button>
          );
        })}
      </div>
      <div className="flex gap-4 pr-4">
        <button
          className="w-full flex justify-center items-center bg-zinc-800 hover:bg-zinc-700 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out"
          onClick={() => handleThemeBtnCLick()}
        >
          <div className="p-2">
            {themeIcon === "dark" ? <FiSun /> : <FiMoon />}
          </div>
        </button>
        <button
          className="w-full flex justify-center items-center bg-zinc-800 hover:bg-zinc-700 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out"
          //   onClick={() => router.push(item.slug)}
          onClick={query.toggle}
        >
          <div className="p-2">
            <FiCommand size="1rem" className="text-zinc-100" />
          </div>
        </button>
      </div>
    </div>
  );
}
