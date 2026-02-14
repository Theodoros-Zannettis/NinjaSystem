import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Dot() {
  return (
    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
  );
}

function ValueCard({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-10 py-10 shadow-sm">
      <div className="text-slate-500">{kicker}</div>
      <div className="mt-2 text-2xl font-semibold text-slate-900">{title}</div>
    </div>
  );
}

function CoachCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="mt-1 text-xl" aria-hidden>
          {icon}
        </div>
        <div>
          <div className="text-lg font-semibold text-slate-900">{title}</div>
          <div className="mt-2 text-slate-600">{text}</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className={inter.className}>
      {/* Background glow */}
<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
  <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-400/20 blur-3xl" />
  <div className="absolute left-[10%] top-[20%] h-[420px] w-[420px] rounded-full bg-emerald-400/15 blur-3xl" />
</div>

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-6 sm:pt-16">

        {/* HERO */}
        <section className="text-center">
          <div className="flex justify-center">
            <Pill>
  <span className="inline-flex items-center gap-2">
    <Dot />
    <span>Finish Obstacles</span>
  </span>

  <span className="text-slate-300"></span>

  <span className="inline-flex items-center gap-2">
    <Dot />
    <span>Avoid Injury</span>
  </span>

  <span className="text-slate-300"></span>

  <span className="inline-flex items-center gap-2">
    <Dot />
    <span>Train Smarter</span>
  </span>
</Pill>


          </div>

          <h1 className="mx-auto mt-10 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl sm:leading-[0.95] md:text-7xl">
  <span>The Complete Beginner-to-Pro </span>
<span className="text-red-500">Ninja System</span>
</h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-xl">
  Move past the basics. Learn the professional techniques that build the confidence,
  speed, and consistency you need to finish every run.
</p>
<p className="mx-auto mt-3 max-w-3xl text-pretty text-base text-slate-700 sm:text-lg">
  A complete online course with step-by-step modules, drills, and progressions.
</p>



          <div className="mt-10 flex justify-center">
            <a
              href="#offer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-red-500 px-10 py-5 text-lg font-semibold text-white shadow-md transition hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-red-200"
              aria-label="GET INSTANT ACCESS"
            >
              <span aria-hidden>🔒</span>
              <span>GET INSTAND ACCESS</span>
            </a>
          </div>
          {/* Sticky mobile CTA */}
<div className="fixed bottom-4 left-1/2 z-50 w-[92%] -translate-x-1/2 sm:hidden">
  <a
    href="#offer"
    className="flex items-center justify-center gap-3 rounded-2xl bg-[#E63946] px-6 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg focus:outline-none focus:ring-4 focus:ring-[#E63946]/25"
    aria-label="GET INSTANT ACCESS"
  >
    <span aria-hidden>⚡</span>
    <span>GET INSTANT ACCESS</span>
  </a>
</div>

            <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm text-slate-500 sm:text-base">
          💳 <span className="italic">One-time payment. Instant lifetime access. All future updates included</span>
            </p>

          
        </section>

        {/* VALUE PROPS */}
        <section className="mt-16">
          <div className="rounded-[32px] border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur">
            <div className="grid gap-6 md:grid-cols-3">
              <ValueCard kicker="Step-by-Step Progression" title="Start with foundational movement and progress toward advanced obstacle skills — without skipping levels." />
              <ValueCard kicker="Short, Focused Video Lessons" title="Clear demonstrations. No fluff. Train efficiently." />
              <ValueCard kicker="Built-In Skill Tracking" title="Measure your progress so you know exactly when you’re ready to level up." />

            </div>
          </div>
        </section>

        {/* COACH */}
        <section className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-start" id="offer">
          <div>
            

          

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700">
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700">
  <span className="font-semibold">I</span>’m Theodoros Zannettis — a Sports Scientist and certified Ninja Coach.
  <br /><br />
  I built this course to give beginners a structured, safe, and effective path into ninja obstacle training — without confusion, guesswork, or wasted time.
  <br /><br />
  <span className="font-semibold">I</span>t combines scientific principles with real-world obstacle coaching so you can improve with clarity and confidence.
</p>

            </p>

            <div className="mt-10 space-y-5">
              <CoachCard
                icon="🧠"
                title="The Scientist"
                text="I use my knowledge to help you move smarter — not just harder."
              />
              <CoachCard
                icon="🚀"
                title="The Builder"
                text="I built the Ninja System from scratch. It works because it’s battle-tested on real people, not theory."
              />
              <CoachCard
                icon="🎯"
                title="The Mission"
                text="To help you unlock clean, confident movement — the kind that finishes runs and smacks buzzers."
              />
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex items-center justify-center">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-slate-900 text-4xl font-bold text-white">
                TZ
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
