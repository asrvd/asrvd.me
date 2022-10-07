import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import NavBar from "./Nav";
import MobileNavBar from "./MobileNav";
import UtilNavBar from "./UtilityNav";
import { KBarProvider } from "kbar";
import Palette from "./CMD";
// import CommandMenu from "./CMD";

const actions = [
  {
    id: "blog",
    name: "Blog",
    shortcut: ["b"],
    keywords: "writing words",
    perform: () => (window.location.pathname = "blog"),
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email",
    perform: () => (window.location.pathname = "contact"),
  },
];

export default function Layout({ children }: { children: ReactElement }) {
  const currentRoute = useRouter().pathname;
  return (
    <div className="dark">
      <Head>
        <title>Next.js + tRPC</title>
      </Head>
      <KBarProvider actions={actions}>
        <main className="flex selection:bg-zinc-200/30 flex-col overflow-x-hidden min-h-screen items-center bg-zinc-900 font-epilogue max-h-auto relative">
          <Palette />

          <div className="flex w-full h-full lg:w-[60%] md:w-2/3">
            <div className="w-[6%] fixed left-0 h-full z-50 hidden lg:block md:block">
              <NavBar path={currentRoute} />
            </div>
            <div className="w-[6%] fixed right-0 h-full z-50 hidden lg:block md:block">
              <UtilNavBar />
            </div>
            <div className="fixed top-0 w-full z-50 block lg:hidden md:hidden px-8 pt-4">
              <MobileNavBar path={currentRoute} />
            </div>
            {children}
          </div>
          <footer className="flex justify-start text-sm items-center w-full lg:w-[60%] md:w-2/3 px-8 py-4 absolute bottom-0">
            <p className="text-zinc-400 ">
              <a
                className="text-zinc-300 hover:text-zinc-200 duration-300 underline decoration-dotted underline-offset-4"
                href="https://opensource.org/licenses/MIT"
              >
                MIT
              </a>{" "}
              2022-present &#169;{" "}
              <a
                className="text-zinc-300 hover:text-zinc-200 duration-300 underline decoration-dotted underline-offset-4"
                href="https://opensource.org/licenses/MIT"
              >
                ashish
              </a>
            </p>
          </footer>
        </main>
      </KBarProvider>
    </div>
  );
}
