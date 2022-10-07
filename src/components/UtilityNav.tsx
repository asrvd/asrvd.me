import { FiCommand, FiSun, FiMoon } from "react-icons/fi";
import {
  SiGithub,
  SiTwitter,
  SiInstagram,
  SiSpotify,
  SiDevdotto,
  SiLastdotfm,
  SiBuymeacoffee,
  SiGithubsponsors,
} from "react-icons/si";
import React from "react";
import { useKBar } from "kbar";

const ExtraItems = [
  {
    name: "Github",
    link: "https://github.com/asrvd",
    icon: SiGithub,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/_asheeshh",
    icon: SiTwitter,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/asrvd_",
    icon: SiInstagram,
  },
  {
    name: "Spotify",
    link: "https://open.spotify.com/user/31ma7274fwzhcig5iibz25thypoi?si=b8e4d9aaa0e7425e",
    icon: SiSpotify,
  },
  {
    name: "Dev.to",
    link: "https://dev.to/asheeshh",
    icon: SiDevdotto,
  },
  {
    name: "Buy me a coffee",
    link: "https://www.buymeacoffee.com/asheeshh",
    icon: SiBuymeacoffee,
  },
  {
    name: "Github Sponsors",
    link: "https://github.com/sponsors/asrvd",
    icon: SiGithubsponsors,
  },
];

export default function UtilNavBar() {
  const { query } = useKBar();
  return (
    <div className="w-full min-h-full h-full flex flex-col justify-start items-center ">
      <div className="border-r-2 border-zinc-800 h-full mb-4"></div>
      <div className="flex flex-col gap-4">
        <button
          className="w-full flex justify-center items-center bg-zinc-800 hover:bg-zinc-700 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out"
          //   onClick={() => router.push(item.slug)}
        >
          <div className="p-2">
            <FiSun size="1rem" className="text-zinc-100" />
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
      <div className="border-r-2 border-zinc-800 h-full my-4"></div>
      <div className="flex flex-col gap-4 pb-6">
        {ExtraItems.map((item, index) => {
          return (
            <button
              className="w-full flex justify-center items-center bg-zinc-800 hover:bg-zinc-700 shadow hover:shadow-xl rounded hover:scale-110 duration-300 ease-in-out focus:bg-zinc-700"
              key={index}
              onClick={() => window.open(item.link, "_blank")}
            >
              <div className="p-2">
                <item.icon size="1rem" className="text-zinc-100" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
