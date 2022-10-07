import Layout from "../components/Layout";

export default function Guestbook() {
  return (
    <Layout>
      <div className="w-full min-h-full h-full p-8 flex flex-col">
        <section className="flex flex-col w-full justify-between gap-6 mt-16 lg:mt-0 md:mt-0 prose">
          <h1 className="text-zinc-100">Guestbook</h1>
        </section>
      </div>
    </Layout>
  );
}
