/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from "next";
import { getTopArtists } from "../../lib/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const resp = await getTopArtists();

  if (resp.status !== 200) {
    res.status(resp.status).json(resp.data);
  }

  const artists = resp.data.topartists.artist;

  const topArtists = artists.map((artist: any) => {
    return {
      name: artist.name,
      playcount: artist.playcount,
      url: artist.url,
    };
  });

  res
    .status(200)
    .setHeader(
      "Cache-Control",
      "public, s-maxage=86400, stale-while-revalidate"
    )
    .json(topArtists);
  res.end();
}
