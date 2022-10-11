/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";

export async function getPinnedRepos() {
  const res = await axios.get(
    "https://gh-pinned-repos.egoist.sh/?username=asrvd"
  );
  const repos = res.data;

  return repos.map((repo: any) => {
    return {
      name: repo.repo,
      description: repo.description,
      url: repo.link,
      stars: repo.stars,
      forks: repo.forks,
    };
  });
}
