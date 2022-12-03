import type { RecentBlogs } from "../lib/types";
import { FiHeart, FiArrowRight } from "react-icons/fi";

export default function RecentBlogs(props: { recentBlogs: RecentBlogs }) {
  return (
    <section className="flex flex-col w-full gap-6 mb-20 prose prose-a:no-underline">
      <h2
        className="dark:text-zinc-200 text-zinc-900 text-[2.5rem] font-extrabold leading-none m-0"
        id="blogs"
      >
        Recent Blogs
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 w-full gap-6">
        {props.recentBlogs.map((post) => (
          <a
            key={post.slug}
            href={`${post.url}`}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-zinc-500 to-stone-500 w-full p-1 rounded-lg shadow-lg dark:shadow-zinc-200/10 shadow-zinc-800/10 hover:shadow-xl hover:scale-[103%] dark:hover:shadow-zinc-200/10 hover:shadow-zinc-800/10 duration-300"
          >
            <div className="flex flex-col cursor-pointer justify-between gap-4 p-4 dark:bg-zinc-800 bg-zinc-200 rounded-lg h-full">
              <div>
                <h3 className="dark:text-zinc-300 text-zinc-800 mb-6 text-lg font-semibold w-full tracking-tight m-0 no-underline">
                  {post.title}
                </h3>
              </div>
              <div className="flex dark:text-zinc-400 text-zinc-700 gap-2 text-base items-center font-semibold">
                <FiHeart />
                <p className="m-0">{post.public_reactions_count}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <a
        href="https://dev.to/asheeshh"
        target="_blank"
        rel="noreferrer"
        className="flex group gap-2 items-center duration-200 text-zinc-500 cursor-pointer no-underline dark:hover:text-zinc-400 hover:text-zinc-700"
      >
        Read More{" "}
        <span className="group-hover:translate-x-1 duration-200">
          <FiArrowRight />
        </span>
      </a>
    </section>
  );
}
