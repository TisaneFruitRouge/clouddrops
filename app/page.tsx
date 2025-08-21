"use client"

import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Gift,
  Zap,
  Sparkles,
  ShieldCheck,
  Mail,
  Lock,
  Star,
  Puzzle,
  BookOpen,
  ChefHat,
  Printer,
  CalendarRange,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

// ------------------------------------------------------------
// CloudDrops — Curated Mystery Box Subscriptions (Boilerplate)
// ------------------------------------------------------------
// Notes
// - Tailwind for styling (no imports needed here)
// - shadcn/ui components & lucide-react icons
// - Framer Motion for subtle animations
// - Fully static boilerplate; wire up real auth/payments later
// ------------------------------------------------------------

export default function CloudDropsLanding() {
  const [yearly, setYearly] = React.useState(true);

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

  const testimonials = [
    {
      name: "Mina R.",
      quote: "The surprise + instant delivery gives me something fun to do every month—no waiting!",
    },
    {
      name: "Leo P.",
      quote: "I love the themed puzzles and printable art. It’s like a tiny festival on my desktop.",
    },
    {
      name: "Aïcha D.",
      quote: "Great value. I reuse the recipes and challenges with friends!",
    },
  ];

  const explorerPriceMonthly = 5; // €5/mo
  const collectorPriceMonthly = 12; // €12/mo
  const yearlyDiscount = 0.2; // 20% off

  const formatPrice = (monthly: number) => {
    if (yearly) {
      const perMonth = (monthly * (1 - yearlyDiscount)).toFixed(0);
      const perYear = (monthly * 12 * (1 - yearlyDiscount)).toFixed(0);
      return { label: `€${perMonth}/mo`, sub: `Billed yearly (€${perYear})` };
    }
    return { label: `€${monthly}/mo`, sub: "Billed monthly" };
  };

  const explorerPrice = formatPrice(explorerPriceMonthly);
  const collectorPrice = formatPrice(collectorPriceMonthly);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white text-slate-800">
      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10%] h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-200/60 via-fuchsia-100/60 to-emerald-100/60 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-indigo-100/60 to-pink-100/60 blur-3xl" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-sky-600 text-white shadow-sm shadow-sky-600/30">
              <Cloud className="h-6 w-6" />
            </div>
            <span className="text-xl font-semibold tracking-tight">CloudDrops</span>
            <Badge variant="secondary" className="ml-2">beta</Badge>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#how" className="text-sm hover:opacity-80">How it works</a>
            <a href="#themes" className="text-sm hover:opacity-80">Monthly themes</a>
            <a href="#pricing" className="text-sm hover:opacity-80">Pricing</a>
            <a href="#faq" className="text-sm hover:opacity-80">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">Sign in</Button>
            <Button className="rounded-2xl px-4">Subscribe</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 md:pb-20 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
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
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="rounded-2xl px-6">
              Start your 7‑day preview
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl px-6" asChild>
              <a href="#themes">See a sample box</a>
            </Button>
          </div>
          <div className="mt-5 flex items-center justify-center gap-3 text-sm text-slate-500">
            <div className="flex items-center gap-1"><Lock className="h-4 w-4" /> Cancel anytime</div>
            <div className="flex items-center gap-1"><Cloud className="h-4 w-4" /> No shipping</div>
            <div className="flex items-center gap-1"><Sparkles className="h-4 w-4" /> New theme monthly</div>
          </div>
        </motion.div>

        {/* Hero preview cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Printable Art", icon: Printer },
            { title: "Puzzles", icon: Puzzle },
            { title: "Mini E‑books", icon: BookOpen },
            { title: "Guided Challenges", icon: CalendarRange },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <Card className="rounded-2xl border-slate-200 bg-white/70 shadow-sm">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-600/10">
                    <item.icon className="h-6 w-6 text-sky-700" />
                  </div>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-xs text-slate-500">Included in most boxes</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
            >
              <Card className="rounded-2xl bg-white/70">
                <CardHeader>
                  <Badge className="w-fit rounded-full px-3 py-1">Step {s.step}</Badge>
                  <CardTitle className="mt-2 text-xl">{s.title}</CardTitle>
                  <CardDescription className="text-slate-600">{s.desc}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
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
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
            >
              <Card className="rounded-2xl border-0 p-0">
                <div className={`rounded-2xl bg-gradient-to-br ${t.gradient} p-6`}>
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/70">
                      <t.icon className="h-6 w-6" />
                    </div>
                    <div className="text-lg font-semibold">{t.title}</div>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{t.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                    <Badge variant="secondary">Art</Badge>
                    <Badge variant="secondary">Recipes</Badge>
                    <Badge variant="secondary">Puzzles</Badge>
                    <Badge variant="secondary">E‑book</Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
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
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
            >
              <Card className="rounded-2xl bg-white/70">
                <CardContent className="p-6">
                  <f.icon className="h-6 w-6 text-sky-700" />
                  <div className="mt-3 font-semibold">{f.title}</div>
                  <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Simple, friendly pricing</h2>
          <p className="mt-3 text-slate-600">Try it for a week—cancel anytime. Yearly saves 20%.</p>
        </div>

        <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/70 px-4 py-2">
          <span className={`text-sm ${!yearly ? "font-semibold" : "text-slate-500"}`}>Monthly</span>
          <Switch checked={yearly} onCheckedChange={setYearly} />
          <span className={`text-sm ${yearly ? "font-semibold" : "text-slate-500"}`}>Yearly <span className="ml-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">Save 20%</span></span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Explorer */}
          <Card className="rounded-2xl border-slate-200 bg-white/80">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Starter</Badge>
                <h3 className="text-xl font-bold">Explorer</h3>
              </div>
              <CardDescription>Great for trying monthly surprises.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 p-6">
              <div>
                <div className="text-4xl font-extrabold">{explorerPrice.label}</div>
                <div className="text-xs text-slate-500">{explorerPrice.sub}</div>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• 1 themed box / month</li>
                <li>• Printable art + recipes</li>
                <li>• Light puzzles</li>
                <li>• Email support</li>
              </ul>
              <Button className="rounded-2xl">Get Explorer</Button>
            </CardContent>
          </Card>

          {/* Collector */}
          <Card className="relative rounded-2xl border-slate-200 bg-white/80">
            <Badge className="absolute right-4 top-4">Most popular</Badge>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Premium</Badge>
                <h3 className="text-xl font-bold">Collector</h3>
              </div>
              <CardDescription>Everything in Explorer plus extras.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 p-6">
              <div>
                <div className="text-4xl font-extrabold">{collectorPrice.label}</div>
                <div className="text-xs text-slate-500">{collectorPrice.sub}</div>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• 1 deluxe box / month</li>
                <li>• Extra puzzles + mini e‑book</li>
                <li>• Bonus challenges + print sets</li>
                <li>• Priority support</li>
              </ul>
              <Button className="rounded-2xl">Get Collector</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Loved by curious minds</h2>
          <p className="mt-3 text-slate-600">A few words from CloudDrops fans.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="rounded-2xl bg-white/70">
              <CardContent className="p-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-700">“{t.quote}”</p>
                <div className="mt-4 text-sm font-medium">{t.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <Card className="rounded-3xl border-slate-200 bg-gradient-to-r from-sky-50 to-indigo-50">
          <CardContent className="flex flex-col items-center gap-4 p-8 text-center md:flex-row md:justify-between md:text-left">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-sky-700">
                <Mail className="h-5 w-5" />
                <span className="text-sm font-semibold">Stay in the loop</span>
              </div>
              <h3 className="mt-2 text-2xl font-bold">Get a free mini pack in your inbox</h3>
              <p className="mt-1 text-sm text-slate-600">Join our list and we’ll send you a sampler box. No spam, ever.</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We'll send your sampler soon.");
              }}
              className="flex w-full max-w-md gap-2"
            >
              <Input type="email" required placeholder="you@example.com" className="rounded-2xl" />
              <Button type="submit" className="rounded-2xl">Get it</Button>
            </form>
          </CardContent>
        </Card>
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
              q: "What’s inside a CloudDrops box?",
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
              <li><a href="#how" className="hover:underline">How it works</a></li>
              <li><a href="#themes" className="hover:underline">Monthly themes</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Licensing</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} CloudDrops. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
