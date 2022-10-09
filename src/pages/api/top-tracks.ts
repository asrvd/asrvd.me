/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "../../lib/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const resp = await getTopTracks();

  if (resp.status !== 200) {
    res.status(resp.status).json(resp.data);
  }

  const tracks = resp.data.toptracks.track;

  const topTracks = tracks.map((track: any) => {
    return {
      name: track.name,
      playcount: track.playcount,
      url: track.url,
      artist: track.artist.name,
    };
  });

  res
    .status(200)
    .setHeader(
      "Cache-Control",
      "public, s-maxage=86400, stale-while-revalidate"
    )
    .json(topTracks);
  res.end();
}
