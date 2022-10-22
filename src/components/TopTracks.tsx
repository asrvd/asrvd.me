import type { TopTracksResponse } from "../lib/types";
import fetcher from "../lib/fetcher";
import useSWR from "swr";

export default function TopTracks() {
  const { data } = useSWR<TopTracksResponse[]>("/api/top-tracks", fetcher);
  
  return (
    <div className="bg-gradient-to-r from-neutral-800 to-zinc-800 rounded-lg shadow-xl p-4 flex flex-col justify-between gap-2">
      <div>
        <h2 className="m-0 text-zinc-200">Top Tracks</h2>
        <p className="m-0 text-zinc-400 text-sm">according to last 4 weeks</p>
      </div>
      <div className="flex flex-col ">
        {data?.map((track, index) => (
          <div
            key={index}
            className="flex justify-between items-center hover:bg-zinc-900/60 rounded-lg p-2 hover:shadow-lg cursor-pointer duration-200"
            onClick={() => window.open(track.url, "_blank")}
          >
            <p className="text-zinc-200 m-0 flex flex-col">
              {track.name}{" "}
              <span className="text-xs text-zinc-400">{track.artist}</span>
            </p>
            <p className="text-zinc-200 m-0">
              {track.playcount} <span className="text-zinc-500">plays</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
