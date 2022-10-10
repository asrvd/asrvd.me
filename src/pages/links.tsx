import Layout from "../components/Layout";
import fs from "fs";
import showdown from "showdown";
import Footer from "../components/Footer";
import LinksComponent from "../components/Links";

// type ContactProps = {
//   html: string;
// };

export default function Links() {
  return (
    <Layout>
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

export async function getStaticProps() {
  const markdown = fs.readFileSync("src/content/contact.md", "utf8");
  const converter = new showdown.Converter({ metadata: true });
  const html = converter.makeHtml(markdown);

  return {
    props: {
      html,
    },
  };
}
