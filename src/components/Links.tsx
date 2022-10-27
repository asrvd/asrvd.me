import { links } from "../lib/links";

export default function LinksComponent() {
  return (
    <div className="dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 rounded-lg shadow-xl p-4 flex justify-between gap-2">
      <div className="flex flex-col w-full gap-2">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex justify-between items-center dark:bg-zinc-900/60 bg-zinc-100/60 duration-200 p-2 rounded-lg hover:shadow-lg cursor-pointer w-full hover:-translate-y-1"
            onClick={() => window.open(link.url, "_blank")}
          >
            <p className="dark:text-zinc-300 text-zinc-800 m-0 text-sm lg:text-base md:text-base">
              {link.name} <span className="dark:text-zinc-600 text-zinc-500">{" // "}</span>{" "}
              {link.value}
            </p>
            <p className="dark:text-zinc-300 text-zinc-800 m-0">{link.icon({})}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
