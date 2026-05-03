import { useMemo, useState } from "react";
import { DeviceMockup } from "./DeviceMockup";
import { featuredProjects, moreProjects, type Project } from "@/data/projects";

const filters = ["All", "Web Design", "Shopify", "SEO"] as const;
type Filter = (typeof filters)[number];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All");
  const [showMore, setShowMore] = useState(false);

  const items = useMemo(() => {
    const base = showMore ? [...featuredProjects, ...moreProjects] : featuredProjects;
    return filter === "All" ? base : base.filter((p) => p.category === filter);
  }, [filter, showMore]);

  return (
    <section id="work" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Selected Work</p>
            <h2 className="mt-2 text-4xl md:text-6xl font-bold">
              Projects we've <span className="text-gradient">crafted</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-sm transition border ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-transparent"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p: Project, i) => (
            <div key={p.url} className="reveal" style={{ transitionDelay: `${(i % 6) * 60}ms` }}>
              <DeviceMockup {...p} />
            </div>
          ))}
        </div>

        {!showMore && (
          <div className="mt-12 flex justify-center reveal">
            <button
              onClick={() => setShowMore(true)}
              className="group relative rounded-full px-7 py-3 font-medium glass gradient-border glow-hover"
            >
              View More Projects
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
