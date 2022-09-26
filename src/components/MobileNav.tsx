import {
  FiHome,
  FiPenTool,
  FiClock,
  FiPhoneCall,
  FiPaperclip,
  FiHeadphones,
  FiUser,
  FiGlobe,
} from "react-icons/fi";
import { useRouter } from "next/router";

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
    name: "Projects",
    slug: "/projects",
    icon: FiPaperclip,
  },
  {
    name: "Spotify",
    slug: "/spotify",
    icon: FiHeadphones,
  },
];

export default function MobileNavBar({ path }: { path: string }) {
  const router = useRouter();
  return (
    <div className="w-full min-h-full h-full flex bg-zinc-800/50 justify-center items-center py-1 rounded-lg shadow-xl">
      <div className="flex justify-evenly gap-4">
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
    </div>
  );
}
