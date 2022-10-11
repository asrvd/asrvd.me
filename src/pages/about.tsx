import Layout from "../components/Layout";
import fs from "fs";
import showdown from "showdown";
import Footer from "../components/Footer";

export default function About(props: { html: string }) {
  return (
    <Layout emoji="😼" description="things you (maybe) want to know about me">
      <div className="w-full min-h-screen h-full p-8 flex flex-col items-center relative">
        <section className="flex flex-col w-full justify-between gap-6 mt-16 lg:mt-0 md:mt-0 prose">
          <div
            className="prose min-w-full dark:prose-invert leading-none prose-h1:mb-0 prose-h2:mt-0 prose-h3:mt-0 prose-h1:text-zinc-200 prose-h4:font-normal prose-p:text-sm prose-h2:text-zinc-300 prose-h3:text-zinc-400 prose-h4:mt-0 prose-h4:text-zinc-400 prose-a:underline prose-a:decoration-dotted prose-a:underline-offset-4 prose-a:text-zinc-400 prose-li:text-sm prose-h4:mb-4"
            dangerouslySetInnerHTML={{ __html: props.html }}
          />
        </section>
        <Footer />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const markdown = fs.readFileSync("src/content/about.md", "utf8");
  const converter = new showdown.Converter({ metadata: true });
  const html = converter.makeHtml(markdown);

  return {
    props: {
      html,
    },
  };
}
