/* eslint-disable @next/next/no-img-element */
// import Head from "next/head";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import PinnedRepos from "../components/PinnedRepos";
import RecentBlogs from "../components/RecentBlogs";
import { getPinnedRepos } from "../lib/repos";
import { getBlogs } from "../lib/blogs";
import type { Blog, Repo } from "../lib/types";

const Home = (props: { latestPosts: Blog[]; pinnedRepos: Repo[] }) => {
  return (
    <Layout emoji="😺" description="ashish//asrvd, student and web developer from India">
      <div className="w-full h-full p-8 flex flex-col justify-center items-center relative">
        <section className="flex flex-col-reverse lg:flex-row md:flex-row w-full justify-between items-start mb-20 mt-16 lg:mt-0 md:mt-0 gap-4 lg:gap-14 md:gap-8 prose">
          <div className="leading-none">
            <h2 className="text-zinc-200 text-[2.5rem] font-extrabold m-0">
              Ashish
            </h2>
            <p className="text-zinc-300 mb-4 m-0">
              Solo developer kinda student
            </p>
            <p className="text-zinc-400 text-sm m-0">
              Learning about web and trying to help out other devs in the process. I love
              open source and writing about tech occasionally.
            </p>
          </div>
          <div className="min-w-fit">
            <img
              src="https://avatars.githubusercontent.com/u/68690233?v=4"
              alt="avatar"
              className="rounded-full shadow-xl min-w-32 h-32 grayscale m-0"
            />
          </div>
        </section>
        <RecentBlogs recentBlogs={props.latestPosts} />
        <PinnedRepos pinnedRepos={props.pinnedRepos} />
        <Footer />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const latestPosts = await getBlogs();
  const pinnedRepos = await getPinnedRepos();
  return {
    props: {
      latestPosts: latestPosts,
      pinnedRepos: pinnedRepos,
    },
    revalidate: 43200,
  };
}

export default Home;
