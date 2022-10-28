import useSWR from "swr";
import fetcher from "../lib/fetcher";
import type {
  GithubStats,
  LastFmUserResponse,
  UmamiResponse,
} from "../lib/types";
import { FiExternalLink } from "react-icons/fi";

export default function Stats() {
  const { data: githubData } = useSWR<GithubStats>(
    "/api/github-stats",
    fetcher
  );
  const { data: lastFmData } = useSWR<LastFmUserResponse>(
    "/api/scrobbles",
    fetcher
  );
  const { data: umamiData } = useSWR<UmamiResponse>("/api/umami", fetcher);
  const statCards = [
    {
      title: "GitHub Stars",
      value: githubData?.stars,
      link: "https://github.com/asrvd",
    },
    {
      title: "GitHub Followers",
      value: githubData?.followers,
      link: "https://github.com/asrvd?tab=followers",
    },
    {
      title: "Spotify Plays",
      value: lastFmData?.playcount,
      link: "https://last.fm/user/asheeshh",
    },
    {
      title: "Lifetime Views",
      value: umamiData?.pageviews.value,
      link: "https://u.asrvd.me/share/DMvDSMzs/personal%20site",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
      {statCards.map((card, index) => {
        return (
          <div
            className="dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 rounded-lg shadow-xl p-4 flex flex-col justify-between gap-2"
            key={index}
          >
            <a
              className="text-zinc-700 dark:text-zinc-400 flex gap-4 m-0"
              href={card.link}
              target="_blank"
              rel="noreferrer"
            >
              {card.title} <FiExternalLink />
            </a>
            <h3 className="text-zinc-900 dark:text-zinc-200 m-0">
              {card.value || "-"}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
