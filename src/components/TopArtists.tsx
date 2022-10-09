import type { TopArtistsResponse } from "../lib/types";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function TopArtists() {
  const { data } = useSWR<TopArtistsResponse[]>("/api/top-artists", fetcher);
  return (
    <div className="bg-gradient-to-r from-neutral-800 to-zinc-800 rounded-lg shadow-xl p-4 flex flex-col justify-between gap-2">
      <div>
        <h2 className="m-0 text-zinc-200">Top Artists</h2>
        <p className="m-0 text-zinc-400 text-sm">according to last 4 weeks</p>
      </div>
      <div className="flex flex-col ">
        {data?.map((artist, index) => (
          <div
            key={index}
            className="flex justify-between items-center hover:bg-zinc-900/60 rounded-lg p-2 hover:shadow-lg cursor-pointer duration-200"
            onClick={() => window.open(artist.url, "_blank")}
          >
            <p className="text-zinc-200 m-0">{artist.name}</p>
            {/* <span className="text-zinc-500">{"//"}</span> */}
            <p className="text-zinc-200 m-0">
              {artist.playcount} <span className="text-zinc-500">plays</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
