/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import Discord from "../components/Discord";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <Layout emoji="🏷️" description="random stats and stuff related to me">
      <div className="w-full min-h-screen h-full p-8 flex flex-col items-center relative">
        <section className="flex flex-col w-full justify-between mt-16 lg:mt-0 md:mt-0 prose prose-a:no-underline gap-6 mb-12">
          <div>
            <h1 className="dark:text-zinc-200 text-zinc-900 leading-none mb-3">
              Dashboard
            </h1>
            <p className="dark:text-zinc-400 text-zinc-800 m-0 leading-tight">
              Random stats and stuff related to me.
            </p>
          </div>
          <Discord />
          <Stats />
        </section>
        <Footer />
      </div>
    </Layout>
  );
}
