/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import NowPlaying from "../components/NowPlaying";
import TopArtists from "../components/TopArtists";
import TopTracks from "../components/TopTracks";
import Footer from "../components/Footer";

export default function About() {
  return (
    <Layout emoji="🎶" description="all of my spotify stats in one place">
      <div className="w-full min-h-screen h-full p-8 flex flex-col items-center relative">
        <section className="flex flex-col w-full justify-between mt-16 lg:mt-0 md:mt-0 prose gap-6 mb-12">
          <div>
            <h1 className="dark:text-zinc-200 text-zinc-900 leading-none mb-3">Spotify Stats</h1>
            <p className="dark:text-zinc-400 text-zinc-800 m-0 leading-tight">
              My Spotify stats, updated every 24 hours.
            </p>
          </div>
          <NowPlaying />
          <TopArtists />
          <TopTracks />
        </section>
        <Footer />
      </div>
    </Layout>
  );
}
