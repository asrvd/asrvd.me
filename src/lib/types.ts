export type NowPlayingResponse = {
  isPlaying: boolean;
  songName: string;
  artistName: string;
  songURL: string;
  imageURL: string;
};

export type TopArtistsResponse = {
  name: string;
  playcount: string;
  url: string;
};

export type TopTracksResponse = {
  name: string;
  playcount: string;
  url: string;
  artist: string;
};

export type Blog = {
  slug: string;
  url: string;
  title: string;
  public_reactions_count: number;
};

export type RecentBlogs = Blog[];

export type Repo = {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
};

export type PinnedRepos = Repo[];

export type GithubStats = {
  stars: number;
  repos: number;
  followers: number;
};

export type LanyardResponse = {
  discord_user: {
    username: string;
    discriminator: string;
    avatar: string;
    id: string;
  };
  discord_status: string;
};

export type LastFmUserResponse = {
  url: string;
  playcount: number;
};

export type UmamiResponse = {
  pageviews: {
    value: number;
  };
  uniques: {
    value: number;
  };
};

export type WakatimeStats = {
  text: string;
  total_seconds: number;
};
