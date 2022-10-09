import { env } from "../env/server.mjs";
import axios from "axios";

export async function getNpOrRpSong() {
  return axios.get(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=asheeshh&api_key=${env.LASTFM_API_KEY}&format=json&limit=2`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function getTopArtists() {
  return axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=asheeshh&api_key=${env.LASTFM_API_KEY}&format=json&limit=10&period=1month`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function getTopTracks() {
  return axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=asheeshh&api_key=${env.LASTFM_API_KEY}&format=json&limit=10&period=1month`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
