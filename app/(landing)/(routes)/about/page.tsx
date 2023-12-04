import CodeSamples from "@/components/codesamples";
import Information from "@/components/information";

export default function About() {
  return (
    <div className="md:grid md:grid-cols-12 md:h-full md:w-full md:divide-x bg-primary">
      <h1 className="md:hidden p-5 pb-6">_about-me</h1>
      <Information />
      <CodeSamples />
    </div>
  );
}
