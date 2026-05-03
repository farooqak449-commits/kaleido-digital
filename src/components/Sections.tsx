import { useState } from "react";
import {
  Code2, ShoppingBag, Search, Wrench, PenTool, Gauge,
  Sparkles, ArrowRight, Check, Quote, Star,
  Mail, Phone, MessageCircle, Calendar, MapPin, Send,
} from "lucide-react";
import { Portfolio } from "./Portfolio";

const services = [
  { icon: Code2, title: "Website Design", desc: "Custom-built marketing sites and web apps engineered for speed and conversion." },
  { icon: ShoppingBag, title: "Shopify Development", desc: "Premium Shopify storefronts with custom themes, apps, and conversion-led UX." },
  { icon: Search, title: "SEO Services", desc: "Technical SEO, content strategy, and authority building that drives qualified traffic." },
  { icon: Wrench, title: "Website Maintenance", desc: "Ongoing care: security, backups, updates, and performance monitoring 24/7." },
  { icon: PenTool, title: "UI/UX Design", desc: "Research-driven design systems and interfaces users actually love to use." },
  { icon: Gauge, title: "Performance Optimization", desc: "Core Web Vitals, Lighthouse 95+, and CDN-grade architecture for instant loads." },
];

const stats = [
  { v: "100+", l: "Projects Delivered" },
  { v: "50+", l: "Happy Clients" },
  { v: "99%", l: "Satisfaction Rate" },
  { v: "12+", l: "Countries Served" },
];

const process = [
  { n: "01", t: "Discovery", d: "We dig into your goals, audience, and competition to define a winning brief." },
  { n: "02", t: "Strategy", d: "Information architecture, content plan, and KPIs aligned to measurable growth." },
  { n: "03", t: "Design", d: "Beautiful, on-brand interfaces prototyped and validated before a single line of code." },
  { n: "04", t: "Development", d: "Performance-first build with modern stacks — clean code, accessible, scalable." },
  { n: "05", t: "Optimization", d: "Launch, measure, iterate. Continuous CRO, SEO, and performance gains." },
];

const pricing = [
  {
    name: "Starter",
    price: "$999",
    tag: "For new brands launching online",
    timeline: "2–3 week delivery",
    features: [
      "Up to 5-page custom website",
      "Mobile-first responsive design",
      "On-page SEO setup",
      "Contact / lead capture forms",
      "Google Analytics + Search Console",
      "1 month post-launch support",
    ],
  },
  {
    name: "Growth",
    price: "$2,499",
    tag: "Most popular — built to convert",
    featured: true,
    timeline: "3–5 week delivery",
    features: [
      "Up to 12 pages or full Shopify store",
      "Premium UI/UX system + custom illustrations",
      "Advanced SEO (technical + on-page)",
      "CMS / Shopify integration & training",
      "Speed optimization (Lighthouse 95+)",
      "Conversion tracking & A/B test ready",
      "3 months priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    tag: "Scale without limits",
    timeline: "Quoted per scope",
    features: [
      "Custom web app / headless build",
      "Dedicated team & project manager",
      "Performance & uptime SLAs",
      "Ongoing CRO + SEO retainer",
      "Multi-region CDN & security hardening",
      "Quarterly strategy reviews",
    ],
  },
];

const testimonials = [
  { name: "Aiden Carter", role: "Founder, Castle Home Goods", quote: "Scalex Studio rebuilt our Shopify store and revenue jumped 38% in 60 days. Pure craft and clarity." },
  { name: "Maya Iqbal", role: "CMO, Narimaan Traders", quote: "From strategy to launch — the most professional team we've worked with. Our site finally matches the brand." },
  { name: "Jordan Lee", role: "CEO, Windsor Home Buyers", quote: "Organic leads doubled within a quarter. Their SEO and CRO playbook is the real deal." },
  { name: "Sara K.", role: "Operations, Elite Gleam Cleaning", quote: "Beautiful, fast, and easy to manage. They actually understand small-business growth." },
];

const logos = [
  "Valhalla", "Castle", "MMM", "ASG", "Zimart", "Narimaan",
  "Furnitome", "Vemac", "Medix", "AAA Nexus", "Universal", "Joy Restored",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-28 px-4 noise">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-20 -left-20 size-[480px] rounded-full bg-[oklch(var(--brand)/0.25)] blur-3xl animate-blob" style={{ background: "color-mix(in oklab, var(--brand) 30%, transparent)" }} />
      <div className="absolute -bottom-32 -right-20 size-[520px] rounded-full blur-3xl animate-blob" style={{ background: "color-mix(in oklab, var(--brand-2) 30%, transparent)", animationDelay: "-6s" }} />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="reveal in inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground">
          <Sparkles className="size-3.5 text-[color:var(--brand)]" />
          A premium digital studio · Available for new projects
        </div>
        <h1 className="reveal in mt-6 text-5xl md:text-7xl lg:text-[5.25rem] font-bold leading-[1.02]">
          We build{" "}
          <span className="word-rotator h-[1.1em]">
            <span style={{ animationDelay: "0s" }}>high-performance</span>
            <span style={{ animationDelay: "1.8s" }}>conversion-led</span>
            <span style={{ animationDelay: "3.6s" }}>award-winning</span>
            <span style={{ animationDelay: "5.4s" }}>lightning-fast</span>
            <span style={{ animationDelay: "7.2s" }}>SEO-ready</span>
          </span>
          <br className="hidden md:block" />
          digital experiences that grow businesses
        </h1>
        <p className="reveal in mt-6 mx-auto max-w-2xl text-lg text-muted-foreground">
          Web Design · Shopify · SEO · Development · Maintenance — delivered by a senior team obsessed with craft and conversion.
        </p>
        <div className="reveal in mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium bg-primary text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]">
            Get Free Strategy Call
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium glass gradient-border glow-hover">
            View Our Work
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          {stats.map((s) => (
            <div key={s.l} className="glass rounded-2xl p-5 text-left gradient-border">
              <div className="text-3xl md:text-4xl font-bold text-gradient">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Trust() {
  const row = [...logos, ...logos];
  return (
    <section className="relative py-12 border-y border-border/60">
      <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">Trusted by founders & teams worldwide</p>
      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee flex gap-12 w-max">
          {row.map((l, i) => (
            <div key={i} className="font-display text-2xl md:text-3xl text-muted-foreground/70 whitespace-nowrap">
              {l}.
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl reveal">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">What we do</p>
          <h2 className="mt-2 text-4xl md:text-6xl font-bold">
            Services engineered for <span className="text-gradient">growth</span>
          </h2>
          <p className="mt-4 text-muted-foreground">End-to-end design, development, and optimization — under one roof.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={s.title} className="reveal glass gradient-border rounded-2xl p-7 glow-hover" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="inline-flex size-12 items-center justify-center rounded-xl" style={{ background: "var(--gradient-text)" }}>
                <s.icon className="size-6 text-white" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-5 inline-flex items-center text-sm text-foreground/80 gap-1">
                Learn more <ArrowRight className="size-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Who we are</p>
          <h2 className="mt-2 text-4xl md:text-6xl font-bold">
            A studio built for the <span className="text-gradient">next era</span> of the web
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Scalex Studio is a digital agency helping businesses scale through design, development, and performance-driven strategies. We partner with founders and marketing teams to ship beautiful, fast, and measurable digital products.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Senior-only team — no juniors handed your project",
              "Conversion-first thinking baked into every pixel",
              "Modern stack: Shopify, Next.js, TanStack, Headless CMS",
              "Transparent process, weekly demos, fixed timelines",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <Check className="size-4 mt-1 text-[color:var(--brand)]" /> <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="glass gradient-border rounded-2xl p-6">
              <div className="text-4xl font-bold text-gradient">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
          <div className="col-span-2 glass gradient-border rounded-2xl p-6">
            <div className="flex items-center gap-1 text-[color:var(--brand)]">
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="size-4 fill-current" />))}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">"Easily one of the best agencies we've worked with — process, quality, and outcomes."</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">How we work</p>
          <h2 className="mt-2 text-4xl md:text-6xl font-bold">A proven <span className="text-gradient">process</span></h2>
        </div>
        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-10">
            {process.map((p, i) => (
              <div key={p.n} className={`reveal relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                  <div className="text-sm text-muted-foreground">{p.n}</div>
                  <h3 className="text-2xl font-semibold mt-1">{p.t}</h3>
                  <p className="text-muted-foreground mt-2">{p.d}</p>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 size-3 rounded-full" style={{ background: "var(--gradient-text)" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Investment</p>
          <h2 className="mt-2 text-4xl md:text-6xl font-bold">Simple, <span className="text-gradient">transparent</span> pricing</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {pricing.map((p) => (
            <div key={p.name} className={`reveal relative rounded-2xl p-8 glass gradient-border ${p.featured ? "md:-translate-y-2 shadow-[var(--shadow-glow)]" : ""}`}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full text-primary-foreground" style={{ background: "var(--gradient-text)" }}>
                  Most popular
                </div>
              )}
              <div className="text-sm text-muted-foreground">{p.tag}</div>
              <h3 className="text-2xl font-semibold mt-1">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight">{p.price}</span>
                {p.price !== "Custom" && <span className="text-sm text-muted-foreground">one-time</span>}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{p.timeline}</div>
              <div className="my-6 h-px bg-border" />
              <ul className="space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="size-4 mt-0.5 shrink-0 text-[color:var(--brand)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 font-medium ${
                  p.featured ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]" : "glass gradient-border glow-hover"
                }`}
              >
                {p.price === "Custom" ? "Request a quote" : "Book a call"}
                <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Kind words</p>
          <h2 className="mt-2 text-4xl md:text-6xl font-bold">Loved by <span className="text-gradient">founders</span></h2>
        </div>
        <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee flex gap-5 w-max">
            {[...testimonials, ...testimonials].map((t, i) => (
              <figure key={i} className="w-[360px] shrink-0 glass gradient-border rounded-2xl p-6">
                <Quote className="size-5 text-[color:var(--brand)]" />
                <blockquote className="mt-3 text-sm leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="contact" className="relative py-28 px-4">
      <div className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden p-12 md:p-20 text-center glass gradient-border noise">
        <div className="absolute inset-0 bg-hero opacity-80" />
        <div className="relative reveal">
          <h2 className="text-4xl md:text-6xl font-bold">
            Ready to <span className="text-gradient">scale</span> your business online?
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Book a free 30-minute strategy call. Walk away with a clear roadmap — even if we never work together.
          </p>
          <a
            href="mailto:hello@scalexstudio.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition"
          >
            Book Free Consultation <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12 px-4">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-display font-bold text-foreground">Scalex<span className="text-gradient">Studio</span></div>
        <div>© {new Date().getFullYear()} Scalex Studio. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#work" className="hover:text-foreground">Work</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export { Portfolio };
