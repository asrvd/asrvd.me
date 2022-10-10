import Layout from "../components/Layout";
import fs from "fs";
import showdown from "showdown";
import Footer from "../components/Footer";

export default function Now(props: {
  html: string;
  metadata: { publish_date: string };
}) {
  return (
    <Layout>
      <div className="w-full min-h-screen h-full p-8 flex flex-col items-center relative">
        <section className="flex flex-col w-full justify-between gap-6 mt-16 lg:mt-0 md:mt-0 prose">
          <div
            className="prose w-full prose-zinc dark:prose-invert leading-none prose-h1:mb-1 prose-h2:mt-0 prose-h3:mt-0 prose-h1:text-zinc-200 prose-h4:font-normal prose-p:text-sm prose-h2:text-zinc-300 prose-h3:text-zinc-400 prose-h4:mt-0 prose-h4:text-zinc-400 "
            dangerouslySetInnerHTML={{ __html: props.html }}
          />
          <p className="text-zinc-400 text-[0.6rem]">
            Last Updated{" "}
            <span className="text-zinc-300 underline decoration-dotted underline-offset-4 text-[0.6rem]">
              {props.metadata.publish_date}
            </span>
          </p>
        </section>
        <Footer />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const markdown = fs.readFileSync("src/content/now.md", "utf8");
  const converter = new showdown.Converter({ metadata: true });
  const html = converter.makeHtml(markdown);
  const metadata = converter.getMetadata();

  return {
    props: {
      html,
      metadata,
    },
  };
}
