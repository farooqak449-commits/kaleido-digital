import { useState } from "react";
import { DeviceMockup } from "./DeviceMockup";
import { featuredProjects, moreProjects } from "@/data/projects";

export function Portfolio() {
  const [showMore, setShowMore] = useState(false);
  const items = showMore ? [...featuredProjects, ...moreProjects] : featuredProjects;

  return (
    <section id="work" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="reveal">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Selected Work</p>
          <h2 className="mt-2 text-4xl md:text-6xl font-bold">
            Projects we've <span className="text-gradient">crafted</span>
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
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
