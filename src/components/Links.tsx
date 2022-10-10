import { links } from "../lib/links";

export default function LinksComponent() {
  return (
    <div className="bg-gradient-to-r from-neutral-800 to-zinc-800 rounded-lg shadow-xl p-4 flex justify-between gap-2">
      <div className="flex flex-col w-full gap-2">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-zinc-900/60 duration-200 p-2 rounded-lg hover:shadow-lg cursor-pointer w-full hover:-translate-y-1"
            onClick={() => window.open(link.url, "_blank")}
          >
            <p className="text-zinc-300 m-0">
              {link.name} <span className="text-zinc-600">{" // "}</span>{" "}
              {link.value}
            </p>
            <p className="text-zinc-300 m-0">{link.icon({})}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
