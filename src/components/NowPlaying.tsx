/* eslint-disable @next/next/no-img-element */
import type { NowPlayingResponse } from "../lib/types";
import fetcher from "../lib/fetcher";
import useSWR from "swr";
import clsx from "clsx";
import { SiSpotify } from "react-icons/si";

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingResponse>("/api/now-playing", fetcher);
  return (
    <div className="bg-gradient-to-r from-neutral-800 to-zinc-800 rounded-lg shadow-xl p-4 flex justify-between gap-2">
      <div className="flex flex-col justify-between gap-2">
        <p
          className={clsx({
            "text-zinc-400 m-0 text-xs lg:text-sm md:text-sm": !data?.isPlaying,
            "text-green-400 m-0 text-xs lg:text-sm md:text-sm": data?.isPlaying,
          })}
        >
          <SiSpotify className="inline-block mr-2 w-4 h-4" />{" "}
          {data?.isPlaying ? "Currently Playing" : "Last Played"}
        </p>
        <div className="flex gap-2 lg:gap-4 md:gap-3 text-sm lg:text-base md:text-base text-zinc-200 w-full">
          <a
            className="m-0 text-zinc-200 cursor-pointer underline-offset-4"
            href={data?.songURL}
            target="_blank"
            rel="noreferrer"
          >
            {data?.songName}
          </a>
          <span className="text-zinc-500">{"//"}</span>
          <a
            className="m-0 text-zinc-200 cursor-pointer underline-offset-4"
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
      <div className="h-20 w-20 justify-center items-center hidden lg:flex md:flex">
        <img
          className="rounded-lg object-fit"
          src={data?.imageURL}
          alt={data?.songName}
        />
      </div>
    </div>
  );
}
