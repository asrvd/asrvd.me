import Layout from "../components/Layout";
import GuestbookComponent from "../components/Guestbook";

export default function Guestbook() {
  return (
    <Layout>
      <div className="w-full min-h-full h-full p-8 flex flex-col">
        <section className="flex flex-col w-full justify-between mt-16 lg:mt-0 md:mt-0 prose">
          <h1 className="text-zinc-200 leading-none mb-3">Guestbook</h1>
          <p className="text-zinc-400 m-0 leading-tight">
            Leave a message for me and other visitors here! It can be anything -
            appreciation, criticism, or just a random message. Just be nice!
          </p>
          <GuestbookComponent />
        </section>
      </div>
    </Layout>
  );
}
