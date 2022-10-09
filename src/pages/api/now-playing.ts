import type { NextApiRequest, NextApiResponse } from "next";
import { getNpOrRpSong } from "../../lib/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const resp = await getNpOrRpSong();

  if (resp.status !== 200) {
    res.status(resp.status).json(resp.data);
  }

  const song = resp.data.recenttracks.track[0];

  const isPlaying: boolean = song["@attr"]?.nowplaying || false;
  const songName: string = song.name;
  const artistName: string = song.artist["#text"];
  const songURL: string = song.url;
  const imageURL: string = song.image[3]["#text"];

  res
    .status(200)
    .setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate=30"
    )
    .json({
      isPlaying,
      songName,
      artistName,
      songURL,
      imageURL,
    });
  res.end();
}
