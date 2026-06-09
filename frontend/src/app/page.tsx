'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Truck,
  ArrowRight,
  ChefHat,
  PackageCheck,
  Activity,
  Shield,
  BarChart3,
  CheckCircle2,
  Circle,
} from 'lucide-react';

const features = [
  {
    title: 'Real-Time Tracking',
    description:
      'Live GPS tracking on every order from kitchen to doorstep. Sub-second status refresh so your team always knows exactly where things stand.',
    icon: Truck,
    stat: '< 1s',
    statLabel: 'Update Latency',
  },
  {
    title: 'Operations Dashboard',
    description:
      'A unified command view for all active orders, delivery zones, and rider status. Built for teams that manage volume at scale.',
    icon: BarChart3,
    stat: '245+',
    statLabel: 'Orders Managed',
  },
  {
    title: 'SLA Compliance',
    description:
      'Automated alerts for orders approaching breach. Built-in escalation workflows keep delivery promises intact.',
    icon: Shield,
    stat: '99.2%',
    statLabel: 'On-Time Rate',
  },
];

const statusSteps = [
  { label: 'Order Confirmed', done: true },
  { label: 'Preparing', done: true },
  { label: 'Quality Check', done: true },
  { label: 'Out for Delivery', done: false, active: true },
  { label: 'Delivered', done: false },
];

// Palette
const C = {
  bg: '#F8FAFC',          // near-white cool grey page bg
  white: '#FFFFFF',
  text: '#0F172A',        // slate-900 — deep but not pure black
  textMid: '#475569',     // slate-600
  textLight: '#94A3B8',   // slate-400
  border: '#E2E8F0',      // slate-200
  borderLight: '#F1F5F9', // slate-100
  accent: '#10B981',      // emerald-500 — used sparingly
  accentLight: '#D1FAE5', // emerald-100
  accentMid: '#059669',   // emerald-600
  cardBg: '#1E293B',      // slate-800 — replaces dark green for the dashboard card
  cardInner: '#0F172A',   // slate-900
  cardBorder: '#334155',  // slate-700
};

export default function Home() {
  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{ background: C.bg, fontFamily: "'Inter', sans-serif" }}
    >

      {/* ── Hero ── */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ background: C.accentLight, color: C.accentMid }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: C.accent, boxShadow: `0 0 6px ${C.accent}` }}
            />
            All Systems Operational
          </div>

          <h1
            className="text-5xl font-black leading-[1.08] tracking-tight md:text-6xl xl:text-[68px]"
            style={{ color: C.text }}
          >
            Food Delivery,
            <br />
            <span style={{ color: C.accent }}>Operated</span>
            <br />
            Precisely.
          </h1>

          <p
            className="mt-6 max-w-[420px] text-[17px] leading-relaxed"
            style={{ color: C.textMid }}
          >
            End-to-end order management for restaurants and dark kitchens. One dashboard, from ticket to doorstep.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/create-order"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ background: C.text, boxShadow: '0 4px 14px rgba(15,23,42,0.18)' }}
            >
              Place an Order
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/orders"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border px-7 py-3.5 text-sm font-semibold transition-all hover:bg-slate-50"
              style={{ background: C.white, color: C.text, borderColor: C.border }}
            >
              <Activity size={15} style={{ color: C.accent }} />
              View Live Orders
            </Link>
          </div>

          {/* Stats */}
          <div
            className="mt-12 grid grid-cols-3 rounded-2xl border"
            style={{ background: C.white, borderColor: C.border }}
          >
            {[
              { val: '10K+', label: 'Orders Delivered' },
              { val: '99.2%', label: 'On-Time Rate' },
              { val: '24 / 7', label: 'Live Monitoring' },
            ].map((s, i) => (
              <div
                key={s.label}
                className="px-5 py-5 text-center"
                style={{
                  borderRight: i < 2 ? `1px solid ${C.border}` : 'none',
                }}
              >
                <p className="text-2xl font-black" style={{ color: C.text }}>{s.val}</p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wide" style={{ color: C.textLight }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Dashboard Card (slate, not dark green) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative"
        >
          <div
            className="relative rounded-3xl p-6 shadow-2xl"
            style={{ background: C.cardBg, border: `1px solid ${C.cardBorder}` }}
          >
            {/* Card header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: C.textLight }}>
                  Active Order · #ORD-4821
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">Burger Combo × 2</h3>
              </div>
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{ background: C.cardInner }}
              >
                <ChefHat size={20} style={{ color: C.accent }} />
              </div>
            </div>

            {/* Status steps */}
            <div
              className="mb-5 space-y-2.5 rounded-2xl p-4"
              style={{ background: C.cardInner }}
            >
              {statusSteps.map((step) => (
                <div key={step.label} className="flex items-center gap-3">
                  {step.done ? (
                    <CheckCircle2 size={15} style={{ color: C.accent, flexShrink: 0 }} />
                  ) : step.active ? (
                    <motion.div
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                    >
                      <Circle size={15} style={{ color: C.accent, flexShrink: 0 }} fill={C.accent} />
                    </motion.div>
                  ) : (
                    <Circle size={15} style={{ color: C.cardBorder, flexShrink: 0 }} />
                  )}
                  <span
                    className="text-sm"
                    style={{
                      color: step.done ? '#94A3B8' : step.active ? '#F8FAFC' : '#334155',
                      fontWeight: step.active ? 600 : 400,
                    }}
                  >
                    {step.label}
                  </span>
                  {step.active && (
                    <span
                      className="ml-auto rounded-full px-2 py-0.5 text-[11px] font-bold"
                      style={{ background: C.accent, color: '#fff' }}
                    >
                      ~15 min
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mb-5">
              <div
                className="mb-2 flex justify-between text-[11px] font-medium"
                style={{ color: C.textLight }}
              >
                <span>Preparation Progress</span>
                <span style={{ color: C.accent }}>75%</span>
              </div>
              <div
                className="h-1.5 overflow-hidden rounded-full"
                style={{ background: C.cardInner }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: C.accent }}
                />
              </div>
            </div>

            {/* Total */}
            <div
              className="flex items-center justify-between rounded-2xl px-5 py-4"
              style={{ background: C.accent }}
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: '#d1fae5' }}>
                  Total
                </p>
                <h4 className="text-2xl font-black text-white">₹ 998</h4>
              </div>
              <ShoppingBag size={24} color="white" />
            </div>
          </div>

          {/* Floating pill */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-5 -left-8 flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-xl"
            style={{ background: C.white, borderColor: C.border }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ background: C.accentLight }}
            >
              <PackageCheck size={17} style={{ color: C.accentMid }} />
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: C.text }}>245 Active</p>
              <p className="text-xs" style={{ color: C.textLight }}>Orders right now</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px" style={{ background: C.border }} />
      </div>

      {/* ── Features ── */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-3 text-center">
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: C.accent }}
          >
            Platform Capabilities
          </span>
        </div>
        <h2
          className="mb-4 text-center text-4xl font-black tracking-tight"
          style={{ color: C.text }}
        >
          Built for Operational Teams
        </h2>
        <p
          className="mx-auto mb-14 max-w-md text-center text-base leading-relaxed"
          style={{ color: C.textMid }}
        >
          A complete operations layer for food businesses that need precision at scale.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ background: C.white, borderColor: C.border }}
              >
                <div className="mb-6 flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: C.accentLight }}
                  >
                    <Icon size={22} style={{ color: C.accentMid }} />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black" style={{ color: C.text }}>{feature.stat}</p>
                    <p className="text-[11px] font-medium" style={{ color: C.textLight }}>{feature.statLabel}</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold" style={{ color: C.text }}>
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: C.textMid }}>
                  {feature.description}
                </p>

                <div
                  className="mt-5 flex items-center gap-1 text-xs font-semibold"
                  style={{ color: C.accent }}
                >
                  Learn more <ArrowRight size={12} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div
          className="flex flex-col items-center justify-between gap-8 rounded-2xl border px-10 py-12 md:flex-row"
          style={{ background: C.white, borderColor: C.border }}
        >
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: C.accent }}
            >
              Get Started
            </span>
            <h3 className="mt-2 text-2xl font-black" style={{ color: C.text }}>
              Ready to streamline your operations?
            </h3>
            <p className="mt-1.5 text-sm" style={{ color: C.textMid }}>
              Join hundreds of restaurants already using OrderOps.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Link
              href="/create-order"
              className="rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: C.text }}
            >
              Start Free Trial
            </Link>
            <Link
              href="/orders"
              className="rounded-xl border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-slate-50"
              style={{ borderColor: C.border, color: C.text }}
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}