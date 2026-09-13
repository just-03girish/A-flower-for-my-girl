import { createFileRoute } from "@tanstack/react-router";
import bouquetJar from "@/assets/bouquet-jar.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "A garden preserved mid-breath | Maison Violet" },
      {
        name: "description",
        content:
          "A digital pressed keepsake of lavender and tulip resting quietly beneath a single pane of glass.",
      },
      {
        property: "og:title",
        content: "A garden preserved mid-breath | Maison Violet",
      },
      {
        property: "og:description",
        content:
          "A digital pressed keepsake of lavender and tulip resting quietly beneath a single pane of glass.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-blush via-cream to-blush font-body text-ink">
      {/* Ambient background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="glow absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-softpurple/40 blur-3xl" />
        <div className="absolute top-1/3 -left-20 h-56 w-56 rounded-full bg-gold/25 blur-3xl" />
        <div className="absolute bottom-0 -right-16 h-64 w-64 rounded-full bg-wine/20 blur-3xl" />
      </div>

      {/* Drifting particles */}
      <div className="pointer-events-none absolute inset-0">
        <span
          className="ptl absolute left-6 top-24 size-2 rounded-full bg-wine/50"
          style={{ animationDuration: "15s" }}
        />
        <span
          className="ptl absolute right-10 top-16 size-1.5 rounded-full bg-softpurple/70"
          style={{ animationDuration: "19s", animationDelay: "3s" }}
        />
        <span
          className="ptl absolute left-1/2 top-0 size-2 rounded-full bg-gold/60"
          style={{ animationDuration: "17s", animationDelay: "6s" }}
        />
        <span
          className="ptl absolute right-6 top-40 size-1.5 rounded-full bg-blush"
          style={{ animationDuration: "21s", animationDelay: "2s" }}
        />
        <span
          className="ptl absolute left-10 top-56 size-2 rounded-full bg-softpurple/60"
          style={{ animationDuration: "18s", animationDelay: "8s" }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[390px] flex-col px-6">
        {/* Header */}
        <div className="flex items-center justify-between pt-6">
          <span className="font-display text-lg italic tracking-wide text-ink/80">
            mrs. Shona ghosh
          </span>
          <span className="text-[10px] uppercase tracking-[0.32em] text-gold">
            No. 02
          </span>
        </div>

        <div className="mt-7 flex items-center justify-center gap-3 text-gold">
          <span className="h-px w-6 bg-gold/50" />
          <span className="text-[10px] uppercase tracking-[0.34em] text-ink/60">
            A digital pressed keepsake
          </span>
          <span className="h-px w-6 bg-gold/50" />
        </div>

        <h1 className="mt-3 text-center font-display text-[2.4rem] leading-[1.05] text-ink text-balance">
          A garden
          <br />
          <span className="italic text-wine">preserved</span> mid-breath
          <br />
          <span className="italic text-wine">for you my love</span>
        </h1>

        {/* The jar */}
        <div className="relative mx-auto mt-6 w-full max-w-[260px]">
          {/* Glass container silhouette */}
          <div className="absolute inset-x-4 top-[8%] bottom-0 rounded-t-[999px] bg-white/40 ring-1 ring-gold/30" />
          <div className="absolute inset-x-4 top-[8%] bottom-0 rounded-t-[999px] ring-1 ring-softpurple/40 ring-offset-4 ring-offset-cream" />

          <div className="spin-slow absolute -right-3 -top-1 z-20 grid size-14 place-items-center rounded-full bg-cream ring-1 ring-gold/50">
            <span className="px-1 text-center font-display text-[7px] uppercase leading-tight tracking-[0.28em] text-gold">
              crafted
              <br />
              for you
            </span>
          </div>

          <div className="jfloat relative z-10 mx-auto mt-6 w-[180px]">
            <div className="absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/30 blur-2xl" />
            <div className="relative">
              <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[28px] bg-white/30 outline outline-1 -outline-offset-1 outline-ink/10">
                <div className="shimmer pointer-events-none absolute -left-6 top-0 h-[140%] w-10 bg-gradient-to-b from-white/70 via-white/10 to-white/0" />
                <img
                  src={bouquetJar}
                  alt="Hand-painted bouquet of lavender and red tulips under a clear glass bell jar"
                  width={1024}
                  height={1152}
                  className="relative aspect-[5/6] w-full rounded-t-[999px] rounded-b-[28px] object-cover"
                />
              </div>
              <span className="glint absolute right-4 top-6 size-1.5 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.7)]" />
              <span
                className="glint absolute left-5 top-16 size-1 rounded-full bg-white/90"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
            <div className="mx-auto -mt-1 h-3 w-[150px] rounded-full bg-ink/10 blur-[2px]" />
          </div>
        </div>

        {/* Personal message */}
        <div className="mt-5 flex flex-col items-center">
          <p className="text-center font-display text-lg italic leading-snug tracking-wide text-wine/90 text-pretty">
            Happy anniversary, my beloved wife
          </p>
          <p className="mt-2 max-w-[32ch] text-center text-sm leading-relaxed text-ink/60 text-pretty">
            Lavender and tulip, resting quietly beneath a single pane of glass.
          </p>
        </div>

        {/* Decorative separator */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1 rounded-full bg-wine/30" />
            <div className="size-1.5 rounded-full bg-wine/50" />
            <div className="size-1 rounded-full bg-wine/30" />
          </div>
          <span className="text-[10px] italic uppercase tracking-[0.4em] text-ink/30">
            Always & Forever
          </span>
        </div>

        {/* Stats footer */}
        <div className="mt-auto grid grid-cols-3 gap-2 border-t border-ink/5 pt-4 pb-6">
          <div className="text-center">
            <p className="font-display text-xl leading-none text-wine">12</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-ink/50">
              stems
            </p>
          </div>
          <div className="text-center">
            <p className="font-display text-xl leading-none text-softpurple">
              06
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-ink/50">
              varieties
            </p>
          </div>
          <div className="text-center">
            <p className="font-display text-xl leading-none text-gold">∞</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-ink/50">
              memories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
