/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const resp = await fetch(
    "https://wakatime.com/api/v1/users/current/all_time_since_today",
    {
      headers: {
        Authorization: `Basic ${btoa(process.env.WAKATIME_API_KEY as string)}`,
      },
    }
  );
  const response = await resp.json();

  return new Response(JSON.stringify(response.data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "cache-control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
