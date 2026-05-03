import { useState } from "react";
import {
  Code2, ShoppingBag, Search, Wrench, PenTool, Gauge,
  Sparkles, ArrowRight, Check, Star, Award, ShieldCheck, Rocket, Globe2, Users, Trophy,
  Mail, Phone, MessageCircle, Calendar, MapPin, Send,
} from "lucide-react";
import { Portfolio } from "./Portfolio";
import { Counter } from "./Counter";

const services = [
  { icon: Code2, title: "Website Design", desc: "Custom-built marketing sites and web apps engineered for speed and conversion." },
  { icon: ShoppingBag, title: "Shopify Development", desc: "Premium Shopify storefronts with custom themes, apps, and conversion-led UX." },
  { icon: Search, title: "SEO Services", desc: "Technical SEO, content strategy, and authority building that drives qualified traffic." },
  { icon: Wrench, title: "Website Maintenance", desc: "Ongoing care: security, backups, updates, and performance monitoring 24/7." },
  { icon: PenTool, title: "UI/UX Design", desc: "Research-driven design systems and interfaces users actually love to use." },
  { icon: Gauge, title: "Performance Optimization", desc: "Core Web Vitals, Lighthouse 95+, and CDN-grade architecture for instant loads." },
];

const stats: { n: number; suffix: string; l: string; sub: string; icon: any }[] = [
  { n: 500, suffix: "+", l: "Projects Delivered", sub: "Across 6 industries", icon: Rocket },
  { n: 150, suffix: "+", l: "Happy Clients",      sub: "Repeat & referral led", icon: Users },
  { n: 99,  suffix: "%", l: "Client Satisfaction", sub: "Based on post-project surveys", icon: Trophy },
  { n: 25,  suffix: "+", l: "Countries Served",    sub: "From New York to Dubai",  icon: Globe2 },
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
  { name: "Aiden Carter", initials: "AC", color: "oklch(0.72 0.18 250)", role: "Founder, Castle Home Goods", when: "2 weeks ago", rating: 5, quote: "Scalex Studio rebuilt our Shopify store and revenue jumped 38% in 60 days. Pure craft and clarity — communication was outstanding throughout." },
  { name: "Maya Iqbal", initials: "MI", color: "oklch(0.7 0.2 320)", role: "CMO, Narimaan Traders", when: "1 month ago", rating: 5, quote: "From strategy to launch — the most professional team we've worked with. Our site finally matches the brand and the conversion uplift is real." },
  { name: "Jordan Lee", initials: "JL", color: "oklch(0.7 0.18 160)", role: "CEO, Windsor Home Buyers", when: "3 weeks ago", rating: 5, quote: "Organic leads doubled within a quarter. Their SEO and CRO playbook is the real deal. Highly recommend to any growth-stage business." },
  { name: "Sara Khan", initials: "SK", color: "oklch(0.7 0.2 30)", role: "Operations, Elite Gleam Cleaning", when: "2 months ago", rating: 5, quote: "Beautiful, fast, and easy to manage. They actually understand small-business growth and built exactly what we needed." },
  { name: "Daniel Romero", initials: "DR", color: "oklch(0.7 0.18 200)", role: "Founder, Vemac", when: "5 weeks ago", rating: 5, quote: "Polished work, on time, and the team genuinely cares. They iterated until everything felt right — very rare these days." },
  { name: "Emma Wallace", initials: "EW", color: "oklch(0.72 0.2 60)", role: "Marketing Lead, Furnitome", when: "6 weeks ago", rating: 5, quote: "Our Lighthouse score went from 52 to 98 and bounce rate dropped by 40%. The new design is gorgeous on every device." },
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
        <h1 className="reveal in mt-6 text-4xl sm:text-5xl md:text-7xl lg:text-[5.25rem] font-bold leading-[1.05]">
          <span className="block">We build</span>
          <span className="word-rotator block my-1 md:my-2">
            <span style={{ animationDelay: "0s" }}>high-performance</span>
            <span style={{ animationDelay: "1.8s" }}>conversion-led</span>
            <span style={{ animationDelay: "3.6s" }}>award-winning</span>
            <span style={{ animationDelay: "5.4s" }}>lightning-fast</span>
            <span style={{ animationDelay: "7.2s" }}>SEO-ready</span>
          </span>
          <span className="block">digital experiences that grow businesses</span>
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
            <div key={s.l} className="stat-card group glass rounded-2xl p-5 text-left gradient-border tilt">
              <div className="flex items-center justify-between">
                <s.icon className="size-5 text-[color:var(--brand)]" />
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Verified</span>
              </div>
              <div className="mt-3 text-3xl md:text-4xl font-bold text-gradient tabular-nums">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="text-sm font-medium mt-1">{s.l}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">{s.sub}</div>
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
              <div className="text-4xl font-bold text-gradient tabular-nums">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
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
  const avgRating = 5.0;
  const totalReviews = 187;
  return (
    <section className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Client reviews</p>
            <h2 className="mt-2 text-4xl md:text-6xl font-bold">Loved by <span className="text-gradient">founders</span></h2>
          </div>
          <div className="glass gradient-border rounded-2xl px-5 py-4 flex items-center gap-4">
            <GoogleG />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tabular-nums">{avgRating.toFixed(1)}</span>
                <div className="flex text-[#fbbc04]">
                  {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="size-4 fill-current" />))}
                </div>
              </div>
              <div className="text-xs text-muted-foreground">Based on {totalReviews} Google reviews</div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal glass gradient-border rounded-2xl p-6 glow-hover flex flex-col"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <header className="flex items-center gap-3">
                <div
                  className="size-11 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0"
                  style={{ background: t.color }}
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-sm truncate">{t.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{t.role}</div>
                </div>
                <GoogleG className="size-5 shrink-0" />
              </header>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex text-[#fbbc04]">
                  {Array.from({ length: t.rating }).map((_, j) => (<Star key={j} className="size-4 fill-current" />))}
                </div>
                <span className="text-xs text-muted-foreground">{t.when}</span>
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
              <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <GoogleG className="size-3.5" /> Posted on Google
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function GoogleG({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}


const CONTACT = {
  email: "hello@scalexstudio.com",
  phone: "+1 (555) 010-2024",
  phoneHref: "tel:+15550102024",
  whatsapp: "https://wa.me/15550102024?text=Hi%20Scalex%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  calendly: "https://calendly.com/scalexstudio/30min",
  location: "Remote · Serving clients worldwide",
};

export function CTA() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Get in touch</p>
          <h2 className="mt-2 text-4xl md:text-6xl font-bold">
            Ready to <span className="text-gradient">scale</span> your business online?
          </h2>
          <p className="mt-5 text-muted-foreground">
            Book a free 30-minute strategy call, message us on WhatsApp, or send a brief — we typically reply within a few hours.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          {/* Left: contact channels */}
          <div className="lg:col-span-2 space-y-4 reveal">
            <a href={CONTACT.calendly} target="_blank" rel="noreferrer"
               className="block premium-surface gradient-border rounded-2xl p-6 glow-hover">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-text)" }}>
                  <Calendar className="size-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Book a free consultation</div>
                  <div className="text-sm text-muted-foreground">30-min strategy call · via Calendly</div>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-foreground">
                Open Calendly <ArrowRight className="size-4" />
              </div>
            </a>

            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer"
               className="flex items-center gap-3 glass gradient-border rounded-2xl p-5 glow-hover">
              <div className="size-10 rounded-xl flex items-center justify-center bg-[oklch(0.72_0.18_150)]">
                <MessageCircle className="size-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-medium">WhatsApp us</div>
                <div className="text-xs text-muted-foreground">Fastest response · chat now</div>
              </div>
              <ArrowRight className="size-4 text-muted-foreground" />
            </a>

            <a href={`mailto:${CONTACT.email}`}
               className="flex items-center gap-3 glass gradient-border rounded-2xl p-5 glow-hover">
              <div className="size-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-text)" }}>
                <Mail className="size-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-medium">Email</div>
                <div className="text-xs text-muted-foreground">{CONTACT.email}</div>
              </div>
            </a>

            <a href={CONTACT.phoneHref}
               className="flex items-center gap-3 glass gradient-border rounded-2xl p-5 glow-hover">
              <div className="size-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-text)" }}>
                <Phone className="size-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-medium">Call us</div>
                <div className="text-xs text-muted-foreground">{CONTACT.phone}</div>
              </div>
            </a>

            <div className="flex items-center gap-3 text-sm text-muted-foreground px-2">
              <MapPin className="size-4" /> {CONTACT.location}
            </div>
          </div>

          {/* Right: contact form */}
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 relative premium-surface gradient-border rounded-3xl p-8 md:p-10 reveal noise"
          >
            <h3 className="text-2xl font-semibold">Tell us about your project</h3>
            <p className="text-sm text-muted-foreground mt-1">We'll get back within 24 hours with next steps.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
              <Field label="Company" name="company" placeholder="Company / brand" />
              <Field label="Budget" name="budget" placeholder="$2,500 – $10,000+" />
            </div>

            <div className="mt-4">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Service</label>
              <select name="service" className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]">
                <option>Website Design & Development</option>
                <option>Shopify Store Development</option>
                <option>SEO Services</option>
                <option>UI/UX Design</option>
                <option>Performance Optimization</option>
                <option>Website Maintenance</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Project details</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="A few lines about your goals, timeline, and any references…"
                className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)] resize-none"
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition"
              >
                {sent ? "Message sent ✓" : "Send message"} <Send className="size-4" />
              </button>
              <a href={CONTACT.calendly} target="_blank" rel="noreferrer"
                 className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                or book a call directly <ArrowRight className="size-3.5" />
              </a>
            </div>
            {sent && (
              <p className="mt-3 text-sm text-[color:var(--brand)]">Thanks! We'll be in touch shortly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]"
      />
    </div>
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
