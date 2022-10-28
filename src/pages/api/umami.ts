/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NextApiRequest, NextApiResponse } from "next";
import { getAnalytics } from "../../lib/umami";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const resp = await getAnalytics();
  const analytics = await resp.json();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );
  res.setHeader("Content-Type", "application/json");

  return res.status(200).json(analytics);
}
