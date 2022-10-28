/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NextRequest } from "next/server";
import { getAnalytics } from "../../lib/umami";

export const config = {
  runtime: "experimental-edge",
};

type UmamiResponse = {
  pageviews: {
    value: number;
  };
  uniques: {
    value: number;
  };
};

export default async function handler(req: NextRequest) {
  try {
    const resp = await getAnalytics();
    const analytics = (await resp.json()) as UmamiResponse;

    return new Response(JSON.stringify(analytics), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "cache-control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    });
  } catch (e) {
    console.log(e);

    return new Response(JSON.stringify({}));
  }
}
