/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

type Repository = {
  stargazers_count: number;
  fork: boolean;
};

type User = {
  public_repos: number;
  followers: number;
};

export default async function handler(req: NextRequest) {
  const me = await fetch("https://api.github.com/users/asrvd");
  const repos = await fetch(
    "https://api.github.com/users/asrvd/repos?per_page=100"
  );

  const meJson = (await me.json()) as User;
  const reposJson = (await repos.json()) as Repository[];

  const mine = reposJson.filter((repo) => !repo.fork);
  const stars = mine.reduce((acc, curr) => acc + curr.stargazers_count, 0);

  return new Response(
    JSON.stringify({
      stars,
      repos: meJson.public_repos,
      followers: meJson.followers,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "cache-control": "public, s-maxage=3600, stale-while-revalidate=1800",
      },
    }
  );
}
