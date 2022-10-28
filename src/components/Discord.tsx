/* eslint-disable @next/next/no-img-element */
import useSWR from "swr";
import type { LanyardResponse } from "../lib/types";
import fetcher from "../lib/fetcher";
import { SiDiscord } from "react-icons/si";
import clsx from "clsx";

export default function Discord() {
  const { data } = useSWR<LanyardResponse>("/api/lanyard", fetcher);

  return (
    <div className="dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 rounded-lg shadow-xl p-4 flex justify-between gap-2">
      <div className="flex flex-col justify-between gap-2">
        <p
          className={clsx({
            "dark:text-zinc-400 text-zinc-600 m-0 text-xs lg:text-sm md:text-sm":
              data?.discord_status === "offline" || !data?.discord_status,
            "dark:text-green-400 text-green-600 m-0 text-xs lg:text-sm md:text-sm":
              data?.discord_status === "online",
            "dark:text-yellow-400 text-yellow-600 m-0 text-xs lg:text-sm md:text-sm":
              data?.discord_status === "idle",
            "dark:text-red-400 text-red-600 m-0 text-xs lg:text-sm md:text-sm":
              data?.discord_status === "dnd",
          })}
        >
          <SiDiscord className="inline-block mr-2 w-4 h-4" />{" "}
          {data?.discord_status || "offline"}
        </p>
        <div className="flex gap-2 lg:gap-4 md:gap-3 text-sm lg:text-base md:text-base dark:text-zinc-200 text-zinc-900 w-full">
          <p className="m-0">
            {data?.discord_user.username}#{data?.discord_user.discriminator}
          </p>
        </div>
      </div>
      <div className="h-16 w-16 lg:h-20 lg:w-20 md:w-20 md:h-20 justify-center items-center flex">
        <img
          className="rounded-lg object-fit shadow-lg"
          src={`https://api.lanyard.rest/${data?.discord_user.id}.jpg`}
          alt={data?.discord_user.username}
        />
      </div>
    </div>
  );
}
