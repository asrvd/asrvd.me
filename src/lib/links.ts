import {
  SiDiscord,
  SiGithub,
  SiInstagram,
  SiTwitter,
  SiBuymeacoffee,
  SiKitsu,
  SiNpm,
  SiLastdotfm,
  SiSpotify,
  SiReddit,
  SiDevdotto,
  SiHashnode,
} from "react-icons/si";
import { IconType } from "react-icons";

export type Link = {
  name: string;
  url: string;
  value: string;
  icon: IconType;
};

export type Links = Link[];

export const links: Links = [
  {
    name: "Discord",
    url: "https://discord.com/users/784363251940458516",
    value: "asheeshh#4872",
    icon: SiDiscord,
  },
  {
    name: "GitHub",
    url: "https://github.com/asrvd",
    value: "@asrvd",
    icon: SiGithub,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/asrvd_",
    value: "@asrvd_",
    icon: SiInstagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/_asheeshh",
    value: "@_asheeshh",
    icon: SiTwitter,
  },
  {
    name: "Buy me a coffee",
    url: "https://www.buymeacoffee.com/asheeshh",
    value: "@asheeshh",
    icon: SiBuymeacoffee,
  },
  {
    name: "Kitsu",
    url: "https://kitsu.io/users/asheeshh",
    value: "@asheeshh",
    icon: SiKitsu,
  },
  {
    name: "NPM",
    url: "https://www.npmjs.com/~asheeshh",
    value: "@asheeshh",
    icon: SiNpm,
  },
  {
    name: "Last.fm",
    url: "https://www.last.fm/user/asheeshh",
    value: "@asheeshh",
    icon: SiLastdotfm,
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/user/31ma7274fwzhcig5iibz25thypoi?si=9d5e7e260e63498f",
    value: "@asheeshh",
    icon: SiSpotify,
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com/u/asheeeshh",
    value: "@asheeeshh",
    icon: SiReddit,
  },
  {
    name: "Dev.to",
    url: "https://dev.to/asheeshh",
    value: "@asheeshh",
    icon: SiDevdotto,
  },
  {
    name: "Hashnode",
    url: "https://h.asrvd.me",
    value: "@asheeshh",
    icon: SiHashnode,
  },
];
