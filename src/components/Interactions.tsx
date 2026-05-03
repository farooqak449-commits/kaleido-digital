import { useEffect } from "react";

/**
 * Global interactive polish:
 *  - cursor-tracked shine on .stat-card (--mx / --my CSS vars)
 *  - subtle 3D tilt on .tilt elements
 *  - parallax movement on .parallax (data-depth attr, default 20)
 *  - magnetic pull on .magnetic buttons
 *  - scroll-driven --scroll-y CSS var on .float-y blobs
 */
export function Interactions() {
  useEffect(() => {
    const parallaxEls = () => Array.from(document.querySelectorAll<HTMLElement>(".parallax"));

    const onMove = (e: PointerEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const nx = (e.clientX - cx) / cx; // -1..1
      const ny = (e.clientY - cy) / cy;

      // global parallax for decorative elements
      parallaxEls().forEach((el) => {
        const d = Number(el.dataset.depth ?? 24);
        el.style.transform = `translate3d(${(nx * d).toFixed(1)}px, ${(ny * d).toFixed(1)}px, 0)`;
      });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const card = target.closest<HTMLElement>(".stat-card");
      if (card) {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        card.style.setProperty("--mx", `${x}%`);
        card.style.setProperty("--my", `${y}%`);
      }

      const tilt = target.closest<HTMLElement>(".tilt");
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transform = `perspective(900px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg) translateY(-4px)`;
      }

      const mag = target.closest<HTMLElement>(".magnetic");
      if (mag) {
        const r = mag.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        mag.style.transform = `translate(${(mx * 0.18).toFixed(1)}px, ${(my * 0.25).toFixed(1)}px)`;
      }
    };

    const onLeave = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      const tilt = t?.closest<HTMLElement>(".tilt");
      if (tilt) tilt.style.transform = "";
      const mag = t?.closest<HTMLElement>(".magnetic");
      if (mag) mag.style.transform = "";
    };

    const onScroll = () => {
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerout", onLeave, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return null;
}
