export default function Footer() {
  return (
    <footer className="flex w-full prose absolute bottom-0 py-4 lg:px-0 md:px-8 px-8">
      <p className="text-zinc-400 m-0 text-sm">
        <a
          className="text-zinc-300 hover:text-zinc-200 duration-300 underline decoration-dotted underline-offset-4"
          href="https://opensource.org/licenses/MIT"
        >
          MIT
        </a>{" "}
        2022-present &#169;{" "}
        <a
          className="text-zinc-300 hover:text-zinc-200 duration-300 underline decoration-dotted underline-offset-4"
          href="https://opensource.org/licenses/MIT"
        >
          ashish
        </a>
      </p>
    </footer>
  );
}
