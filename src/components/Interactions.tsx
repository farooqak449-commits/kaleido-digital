import { useEffect } from "react";

/**
 * Global interactive polish:
 *  - cursor-tracked shine on .stat-card (--mx / --my CSS vars)
 *  - subtle 3D tilt on .tilt elements
 */
export function Interactions() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
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
    };
    const onLeave = (e: PointerEvent) => {
      const tilt = (e.target as HTMLElement | null)?.closest<HTMLElement>(".tilt");
      if (tilt) tilt.style.transform = "";
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerout", onLeave, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onLeave);
    };
  }, []);
  return null;
}
