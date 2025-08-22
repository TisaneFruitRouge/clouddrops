"use client"

import React, { MouseEvent as ME } from "react";
import {
  Cloud,
  Gift,
  Zap,
  Sparkles,
  ShieldCheck,
  Lock,
  Puzzle,
  BookOpen,
  ChefHat,
  Printer,
  CalendarRange,
} from "lucide-react";

export default function CloudDropsLanding() {
  const features = [
    {
      icon: Zap,
      title: "Instant delivery",
      desc: "Your digital box lands in your inbox the moment you subscribe.",
    },
    {
      icon: Gift,
      title: "Curated surprise",
      desc: "Each month has a playful theme with fresh, handpicked goodies.",
    },
    {
      icon: Cloud,
      title: "Zero shipping",
      desc: "Digital-only means no waiting, no packaging, and Earth-friendly.",
    },
    {
      icon: ShieldCheck,
      title: "Yours to keep",
      desc: "Reuse, reprint, and revisit content whenever inspiration strikes.",
    },
  ];

  const sampleThemes = [
    {
      icon: CalendarRange,
      title: "Cozy Weekend",
      desc: "Printables + recipes + a mini reading list.",
      gradient: "from-orange-100 to-rose-100",
    },
    {
      icon: Puzzle,
      title: "Brain Tease",
      desc: "Crosswords, logic puzzles, and a micro challenge.",
      gradient: "from-sky-100 to-indigo-100",
    },
    {
      icon: BookOpen,
      title: "Lit Lounge",
      desc: "Short e‑book + discussion prompts + bookmark set.",
      gradient: "from-emerald-100 to-teal-100",
    },
    {
      icon: ChefHat,
      title: "Tasty Bites",
      desc: "5‑ingredient recipes + grocery cheat sheet.",
      gradient: "from-amber-100 to-lime-100",
    },
  ];

  const handleSmoothScroll = (e: any, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white text-slate-800" style={{scrollBehavior: 'smooth'}}>
      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10%] h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-200/60 via-fuchsia-100/60 to-emerald-100/60 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-indigo-100/60 to-pink-100/60 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs text-sky-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Curated Mystery Box Subscriptions — digital only
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Surprise boxes that arrive <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">instantly</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Each month, open a themed bundle of printable art, recipes, puzzles, e‑books, and guided challenges. Zero shipping. Infinite delight.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3 text-sm text-slate-500">
            <div className="flex items-center gap-1"><Lock className="h-4 w-4" /> Cancel anytime</div>
            <div className="flex items-center gap-1"><Cloud className="h-4 w-4" /> No shipping</div>
            <div className="flex items-center gap-1"><Sparkles className="h-4 w-4" /> New theme monthly</div>
          </div>
        </div>

        {/* Hero preview cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Printable Art", icon: Printer },
            { title: "Puzzles", icon: Puzzle },
            { title: "Mini E‑books", icon: BookOpen },
            { title: "Guided Challenges", icon: CalendarRange },
          ].map((item, i) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white/70 shadow-sm">
              <div className="flex items-center gap-4 p-5">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-600/10">
                  <item.icon className="h-6 w-6 text-sky-700" />
                </div>
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-xs text-slate-500">Included in most boxes</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">How CloudDrops works</h2>
          <p className="mt-3 text-slate-600">Three simple steps, a monthly dose of joy.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              step: "1",
              title: "Subscribe",
              desc: "Pick a plan. Your first box is ready instantly.",
            },
            {
              step: "2",
              title: "Open your box",
              desc: "Download your themed bundle: art, recipes, puzzles, and more.",
            },
            {
              step: "3",
              title: "Enjoy & reuse",
              desc: "Reprint and revisit anytime—your content is yours to keep.",
            },
          ].map((s, i) => (
            <div key={s.step} className="rounded-2xl bg-white/70 border border-slate-200">
              <div className="p-6">
                <span className="inline-block rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-medium">Step {s.step}</span>
                <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Monthly themes */}
      <section id="themes" className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Peek at sample themes</h2>
          <p className="mt-3 text-slate-600">New surprises each month, lovingly curated.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sampleThemes.map((t, i) => (
            <div key={t.title} className="rounded-2xl border-0 p-0">
              <div className={`rounded-2xl bg-gradient-to-br ${t.gradient} p-6`}>
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/70">
                    <t.icon className="h-6 w-6" />
                  </div>
                  <div className="text-lg font-semibold">{t.title}</div>
                </div>
                <p className="mt-3 text-sm text-slate-700">{t.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                  <span className="rounded-full bg-slate-100 px-2 py-1">Art</span>
                  <span className="rounded-full bg-slate-100 px-2 py-1">Recipes</span>
                  <span className="rounded-full bg-slate-100 px-2 py-1">Puzzles</span>
                  <span className="rounded-full bg-slate-100 px-2 py-1">E‑book</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Why CloudDrops?</h2>
          <p className="mt-3 text-slate-600">Surprise meets instant gratification. No shipping, no clutter—just pure creativity.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={f.title} className="rounded-2xl bg-white/70 border border-slate-200">
              <div className="p-6">
                <f.icon className="h-6 w-6 text-sky-700" />
                <div className="mt-3 font-semibold">{f.title}</div>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Simple, friendly pricing</h2>
          <p className="mt-3 text-slate-600">Try it for a week—cancel anytime.</p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="rounded-2xl border border-slate-200 bg-white/80 max-w-md w-full">
            <div className="text-center p-6 pb-0">
              <div className="flex items-center justify-center gap-2">
                <span className="rounded-full border border-slate-300 bg-slate-50 px-2 py-1 text-xs text-slate-600">Monthly</span>
                <h3 className="text-xl font-bold">CloudDrops</h3>
              </div>
              <p className="mt-2 text-slate-600">Perfect for monthly creative surprises.</p>
            </div>
            <div className="flex flex-col gap-6 p-6">
              <div className="text-center">
                <div className="text-4xl font-extrabold">€5/mo</div>
                <div className="text-xs text-slate-500">Billed monthly</div>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-600"></div>
                  1 themed box every month
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-600"></div>
                  Printable art & recipes
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-600"></div>
                  Puzzles & mini e-books
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-600"></div>
                  Guided challenges
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-600"></div>
                  Keep everything forever
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-600"></div>
                  Email support
                </li>
              </ul>
              <button className="rounded-2xl py-3 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">
                <a href="https://forms.gle/N8XpgdL43wfUWSNh8" target="_blank">
                  Start now
                </a>
              </button>
              <div className="text-center text-xs text-slate-500">
                No commitment • Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-5xl px-4 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-slate-600">Everything you need to know about CloudDrops.</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {[
            {
              q: "What's inside a CloudDrops box?",
              a: "A themed set of digital goodies: printable art, recipes, puzzles, mini e‑books, and guided challenges. Contents vary by theme.",
            },
            {
              q: "When do I receive my box?",
              a: "Immediately after subscribing, then on the 1st of each month. Everything is digital—no shipping required.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. You can stop your subscription at any time from your account settings.",
            },
            {
              q: "Do I keep the content forever?",
              a: "Yes! Once delivered, your content is yours to keep and reuse for personal purposes.",
            },
          ].map((f, i) => (
            <details key={i} className="group rounded-2xl border border-slate-200 bg-white/70 p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                {f.q}
                <span className="ml-4 select-none rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 group-open:hidden">Show</span>
                <span className="ml-4 hidden select-none rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 group-open:inline">Hide</span>
              </summary>
              <p className="mt-3 text-sm text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-sky-600 text-white">
                <Cloud className="h-6 w-6" />
              </div>
              <span className="text-lg font-semibold">CloudDrops</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">A curated digital mystery box—delivered instantly, refreshed monthly.</p>
          </div>
          <div>
            <div className="font-semibold">Product</div>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><a href="#how" onClick={(e) => handleSmoothScroll(e, 'how')} className="hover:underline cursor-pointer">How it works</a></li>
              <li><a href="#themes" onClick={(e) => handleSmoothScroll(e, 'themes')} className="hover:underline cursor-pointer">Monthly themes</a></li>
              <li><a href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')} className="hover:underline cursor-pointer">Pricing</a></li>
              <li><a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')} className="hover:underline cursor-pointer">FAQ</a></li>
            </ul>
          </div>
          {/*<div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>*/}
          {/*<div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Licensing</a></li>
            </ul>
          </div>*/}
        </div>
        <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} CloudDrops. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
