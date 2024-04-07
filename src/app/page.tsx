import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LogoClouds from "@/components/LogoClouds";
import LogoCloudsV2 from "@/components/LogoCloudsV2";
import Metrics from "@/components/Metrics";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="overflow-y-scroll">
      <Hero />
      <LogoClouds />
      <Features />
      <Testimonial />
      <Metrics />
      <LogoCloudsV2 />
      <CTA />
    </main>
  );
}
