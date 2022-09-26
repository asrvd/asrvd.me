/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
// import Head from "next/head";
import { trpc } from "../utils/trpc";
import Layout from "../components/Layout";
import axios from "axios";
import { FiHeart, FiStar, FiGitBranch } from "react-icons/fi";

const Home: NextPage = (props) => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  console.log(props);
  return (
    <Layout>
      <div className="w-full h-full p-8 flex flex-col">
        <section className="flex w-full justify-between gap-14 mb-20 mt-16 lg:mt-0 md:mt-0">
          <div className="leading-none">
            <h2 className="text-zinc-200 text-[2.5rem] font-extrabold">
              Ashish
            </h2>
            <p className="text-zinc-300 mb-4">Solo developer kinda student</p>
            <p className="text-zinc-400 text-sm">
              Learning about web and trying to make help out other devs. I love
              open source and writing about tech occasionally. I hate people who
              overuse caps and large line heights.
            </p>
          </div>
          <div className="min-w-fit hidden lg:block md:block">
            <img
              src="https://avatars.githubusercontent.com/u/68690233?v=4"
              alt="avatar"
              className="rounded-lg shadow-xl min-w-32 h-32 grayscale"
            />
          </div>
        </section>
        <section className="flex flex-col w-full gap-6 mb-20">
          <h2 className="text-zinc-200 text-[2.5rem] font-extrabold leading-none">
            Recent Blogs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 w-full gap-6">
            {props.latestPosts.map((post) => (
              <a
                key={post.slug}
                href={`${post.url}`}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-zinc-500 to-stone-500 w-full p-1 rounded-lg shadow-lg shadow-zinc-200/10 hover:shadow-xl hover:scale-[103%] hover:shadow-zinc-200/10 duration-300"
              >
                <div className="flex flex-col cursor-pointer justify-between gap-4 p-4 bg-zinc-800 rounded-lg h-full">
                  <div>
                    <h3 className="text-zinc-300 mb-6 text-lg font-bold w-full tracking-tight">
                      {post.title}
                    </h3>
                  </div>
                  <div className="flex text-zinc-400 gap-2 text-base items-center font-semibold">
                    <FiHeart />
                    <p>{post.public_reactions_count}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
        <section className="flex flex-col w-full gap-6 mb-10">
          <h2 className="text-zinc-200 text-[2.5rem] font-extrabold leading-none">
            Top Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full gap-6">
            {props.pinnedRepos.map((repo) => (
              <a
                key={repo.name}
                href={`${repo.link}`}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-zinc-500 to-stone-500 p-1 gap-4 rounded-lg shadow-lg shadow-zinc-200/10 hover:shadow-xl hover:scale-[103%] hover:shadow-zinc-200/10 duration-300"
              >
                <div className="flex flex-col cursor-pointer justify-between h-full bg-zinc-800 p-4 rounded-lg ">
                  <div>
                    <h3 className="text-zinc-200 mb-6 text-lg font-bold w-full tracking-tight leading-none">
                      {repo.repo}
                    </h3>
                    <p className="text-zinc-300 mb-6 text-sm w-full tracking-tight">
                      {repo.description}
                    </p>
                  </div>
                  <div className="gap-6 flex">
                    <div className="flex text-zinc-400 gap-2 text-base items-center font-semibold">
                      <FiStar />
                      <p>{repo.stars}</p>
                    </div>
                    <div className="flex text-zinc-400 gap-2 text-base items-center font-semibold">
                      <FiGitBranch />
                      <p>{repo.forks}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const latestPosts = await axios.get(
    "https://dev.to/api/articles?username=asheeshh"
  );
  const pinnedRepos = await axios.get(
    "https://gh-pinned-repos.egoist.sh/?username=asrvd"
  );
  return {
    props: {
      latestPosts: latestPosts.data.slice(0, 3),
      pinnedRepos: pinnedRepos.data,
    },
  };
}

export default Home;
