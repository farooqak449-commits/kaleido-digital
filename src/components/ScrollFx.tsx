import { useEffect } from "react";
import { MessageCircle } from "lucide-react";

export function ScrollProgress() {
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      document.documentElement.style.setProperty("--scroll", `${pct}%`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" aria-hidden />;
}

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/12267418726?text=Hi%20Scalex%20Studio%21"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center size-14 rounded-full text-white shadow-[var(--shadow-glow)] animate-float"
      style={{ background: "linear-gradient(135deg, oklch(0.72 0.18 150), oklch(0.65 0.2 160))" }}
    >
      <MessageCircle className="size-6" />
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: "oklch(0.72 0.18 150)" }} />
    </a>
  );
}
