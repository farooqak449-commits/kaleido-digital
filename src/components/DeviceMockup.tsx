type Props = {
  url: string;
  title: string;
  category: string;
  image: string;
};

export function DeviceMockup({ url, title, category, image }: Props) {
  const display = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group relative block rounded-2xl glass gradient-border overflow-hidden glow-hover"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60">
        <span className="size-2.5 rounded-full bg-red-400/70" />
        <span className="size-2.5 rounded-full bg-yellow-400/70" />
        <span className="size-2.5 rounded-full bg-green-400/70" />
        <div className="ml-3 flex-1 truncate rounded-md bg-muted/60 px-3 py-1 text-[11px] text-muted-foreground">
          {display}
        </div>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[6000ms] ease-linear group-hover:-translate-y-[35%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{category}</div>
            <div className="font-display font-semibold">{title}</div>
          </div>
          <span className="glass rounded-full px-3 py-1 text-xs">View →</span>
        </div>
      </div>
    </a>
  );
}
