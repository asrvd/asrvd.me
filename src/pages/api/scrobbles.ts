/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

type LastFmUser = {
  url: string;
  playcount: number;
};

export default async function handler(req: NextRequest) {
  const resp = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=asheeshh&api_key=${process.env.LASTFM_API_KEY}&format=json`
  );
  const response = await resp.json();
  const user = response.user as LastFmUser;

  return new Response(JSON.stringify(user), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "cache-control": "public, s-maxage=3600, stale-while-revalidate=1800",
    },
  });
}
