import { getApiAboutPage } from "@/services/api";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vibefit | Sobre",
};

async function getContent() {
  const res = await getApiAboutPage();

  return res;
}

export default async function About() {
  const content = await getContent();

  return (
    <section>
      <main>
        <ReactMarkdown className="bg-gray-200 p-10 rounded-xl shadow flex flex-1 flex-col justify-center items-center  prose prose-sm md:prose-lg mx-auto">
          {content.attributes.body}
        </ReactMarkdown>
      </main>
    </section>
  );
}
