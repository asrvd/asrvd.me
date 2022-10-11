import Layout from "../components/Layout";
import Footer from "../components/Footer";
import LinksComponent from "../components/Links";

export default function Links() {
  return (
    <Layout emoji="😽" description="all of my links in one place">
      <div className="w-full min-h-screen h-full p-8 flex flex-col items-center relative">
        <section className="flex flex-col w-full justify-between mt-16 lg:mt-0 md:mt-0 prose gap-6 mb-12">
          <div>
            <h1 className="text-zinc-200 leading-none mb-3">Links</h1>
            <p className="text-zinc-400 m-0 leading-tight">
              All my profile links to find me on the web.
            </p>
          </div>
          <LinksComponent />
        </section>
        <Footer />
      </div>
    </Layout>
  );
}
