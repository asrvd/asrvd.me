export async function getNpOrRpSong() {
  return fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=asheeshh&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=2`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function getTopArtists() {
  return fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=asheeshh&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=10&period=1month`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function getTopTracks() {
  return fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=asheeshh&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=10&period=1month`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
