/* eslint-disable @typescript-eslint/no-unused-vars */

import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import NavBar from "./Nav";
import MobileNavBar from "./MobileNav";
import { KBarProvider } from "kbar";
import Palette from "./CMD";
import { actions } from "../lib/actions";

export default function Layout({
  children,
  description,
  emoji,
  image,
}: {
  children: ReactElement;
  description: string;
  emoji: string;
  image?: string;
}) {
  const currentRoute = useRouter().pathname;

  return (
    <div className="dark">
      <Head>
        <link rel="icon" href={`https://fmj.asrvd.me/${emoji}`}></link>
        <title>
          asrvd{" "}
          {currentRoute.slice(1).length > 1
            ? `// ${currentRoute.slice(1)}`
            : ``}
        </title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#27272a" />
        <meta property="og:site-name" content="ashish" />
        <meta
          property="og:title"
          content={`asrvd
          ${
            currentRoute.slice(1).length > 1
              ? ` // ${currentRoute.slice(1)}`
              : ``
          }`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta
          property="twitter:title"
          content={`asrvd
          ${
            currentRoute.slice(1).length > 1
              ? ` // ${currentRoute.slice(1)}`
              : ``
          }`}
        />
        <meta property="twitter:description" content={description} />
      </Head>
      <KBarProvider actions={actions}>
        <main className="flex selection:bg-zinc-200/30 flex-col overflow-x-hidden min-h-screen items-center bg-zinc-900 font-epilogue max-h-auto relative">
          <Palette />
          <div className="flex w-full h-full lg:w-[60%] md:w-2/3">
            <div className="w-[6%] fixed left-0 h-full z-50 hidden lg:block md:block">
              <NavBar path={currentRoute} />
            </div>
            <div className="fixed top-0 w-full z-50 block lg:hidden md:hidden px-8 pt-4">
              <MobileNavBar path={currentRoute} />
            </div>
            {children}
          </div>
        </main>
      </KBarProvider>
    </div>
  );
}
