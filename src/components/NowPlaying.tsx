/* eslint-disable @next/next/no-img-element */
import type { NowPlayingResponse } from "../lib/types";
import fetcher from "../lib/fetcher";
import useSWR from "swr";
import clsx from "clsx";
import { SiSpotify } from "react-icons/si";

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingResponse>("/api/now-playing", fetcher);
  return (
    <div className="dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 rounded-lg shadow-xl p-4 flex justify-between gap-2">
      <div className="flex flex-col justify-between gap-2">
        <p
          className={clsx({
            "dark:text-zinc-400 text-zinc-600 m-0 text-xs lg:text-sm md:text-sm": !data?.isPlaying,
            "dark:text-green-400 text-green-600 m-0 text-xs lg:text-sm md:text-sm": data?.isPlaying,
          })}
        >
          <SiSpotify className="inline-block mr-2 w-4 h-4" />{" "}
          {data?.isPlaying ? "Currently Playing" : "Last Played"}
        </p>
        <div className="flex gap-2 lg:gap-4 md:gap-3 text-sm lg:text-base md:text-base dark:text-zinc-200 text-zinc-900 w-full">
          <a
            className="m-0 dark:text-zinc-200 text-zinc-900 cursor-pointer underline-offset-4"
            href={data?.songURL}
            target="_blank"
            rel="noreferrer"
          >
            {data?.songName}
          </a>
          <span className="dark:text-zinc-500 text-zinc-600">{"//"}</span>
          <a
            className="m-0 dark:text-zinc-200 text-zinc-900 cursor-pointer underline-offset-4"
            href={data?.songURL.substring(
              0,
              data?.songURL.split("/").slice(0, 5).join("/").length + 1
            )}
            target="_blank"
            rel="noreferrer"
          >
            {data?.artistName}
          </a>
        </div>
      </div>
      <div className="h-16 w-16 lg:h-20 lg:w-20 md:w-20 md:h-20 justify-center items-center flex">
        <img
          className="rounded-lg object-fit shadow-lg"
          src={data?.imageURL}
          alt={data?.songName}
        />
      </div>
    </div>
  );
}
