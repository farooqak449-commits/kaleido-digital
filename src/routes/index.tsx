import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import {
  Hero, Trust, Services, Portfolio, About, Process, Pricing, Testimonials, CTA, Footer,
} from "@/components/Sections";
import { ScrollProgress, WhatsAppFab } from "@/components/ScrollFx";
import { Cursor } from "@/components/Cursor";
import { Interactions } from "@/components/Interactions";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scalex Studio — Premium Web Design, Shopify & SEO Agency" },
      {
        name: "description",
        content:
          "Scalex Studio is a premium digital agency for website design, Shopify development, SEO services, UI/UX, performance optimization and website maintenance.",
      },
      { property: "og:title", content: "Scalex Studio — Premium Digital Agency" },
      { property: "og:description", content: "We build high-performance digital experiences that grow businesses." },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Cursor />
      <Interactions />
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
