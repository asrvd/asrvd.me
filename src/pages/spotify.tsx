/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import NowPlaying from "../components/NowPlaying";
import TopArtists from "../components/TopArtists";
import TopTracks from "../components/TopTracks";

export default function About() {
  return (
    <Layout>
      <div className="w-full min-h-full h-full p-8 flex flex-col">
        <section className="flex flex-col w-full justify-between mt-16 lg:mt-0 md:mt-0 prose gap-6 mb-12">
          <div>
            <h1 className="text-zinc-200 leading-none mb-3">Spotify Stats</h1>
            <p className="text-zinc-400 m-0 leading-tight">
              My Spotify stats, updated every 24 hours.
            </p>
          </div>
          <NowPlaying />
          <TopArtists />
          <TopTracks />
        </section>
      </div>
    </Layout>
  );
}
