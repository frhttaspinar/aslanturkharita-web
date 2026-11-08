import type { Metadata } from "next";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HomeFaq from "@/components/HomeFaq";
import Insights from "@/components/Insights";
import JsonLd from "@/components/JsonLd";
import Process from "@/components/Process";
import Services from "@/components/Services";
import { homeFaq } from "@/lib/content";
import { faqPageNode, jsonLdGraph, webPageNode } from "@/lib/schema";
import { canonicalFor } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  ...canonicalFor("/"),
};

const graph = jsonLdGraph([
  webPageNode({
    path: "/",
    name: `${site.name} | ${site.tagline}`,
    description: site.description,
  }),
  faqPageNode(homeFaq),
]);

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Process />
      <Insights />
      <HomeFaq />
      <CallToAction />
      <Contact />
      <JsonLd data={graph} />
    </>
  );
}
