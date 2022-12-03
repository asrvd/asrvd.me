import type { TopArtistsResponse } from "../lib/types";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function TopArtists() {
  const { data } = useSWR<TopArtistsResponse[]>("/api/top-artists", fetcher);
  return (
    <div className="dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 rounded-lg shadow-xl p-4 flex flex-col justify-between gap-2">
      <div>
        <h2 className="m-0 dark:text-zinc-200 text-zinc-900 font-semibold">Top Artists</h2>
        <p className="m-0 dark:text-zinc-400 text-zinc-700 text-sm">according to last 4 weeks</p>
      </div>
      <div className="flex flex-col ">
        {data?.map((artist, index) => (
          <div
            key={index}
            className="flex justify-between items-center dark:hover:bg-zinc-900/60 hover:bg-zinc-100/60 rounded-lg p-2 hover:shadow-lg cursor-pointer duration-200"
            onClick={() => window.open(artist.url, "_blank")}
          >
            <p className="dark:text-zinc-200 text-zinc-900 m-0">{artist.name}</p>
            {/* <span className="text-zinc-500">{"//"}</span> */}
            <p className="dark:text-zinc-200 text-zinc-900 m-0">
              {artist.playcount} <span className="dark:text-zinc-500 text-zinc-600">plays</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
