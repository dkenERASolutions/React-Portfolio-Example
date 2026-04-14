'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState, useCallback } from 'react';

// ─── Social icon SVGs ─────────────────────────────────────────────────────────

const GithubIcon = () => (
  <svg viewBox='0 0 24 24' className='size-4 fill-current' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox='0 0 24 24' className='size-4 fill-current' xmlns='http://www.w3.org/2000/svg'>
    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
  </svg>
);

const TwitterXIcon = () => (
  <svg viewBox='0 0 24 24' className='size-4 fill-current' xmlns='http://www.w3.org/2000/svg'>
    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.264 5.634 5.9-5.634zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
  </svg>
);

// ─── Rotating phrases ─────────────────────────────────────────────────────────

const PHRASES = [
  'Scalable Software',
  'Cloud-Native Apps',
  'High-Impact Products',
  'Full-Stack Solutions',
  'Mission-Critical Tools',
];

const CHAR_SPEED  = 60;
const ERASE_SPEED = 35;
const HOLD_MS     = 3000;
const PAUSE_MS    = 400;

// ─── Blinking cursor ──────────────────────────────────────────────────────────

const Cursor = () => (
  <motion.span
    aria-hidden
    className='inline-block w-[2px] h-[0.8em] rounded-sm bg-indigo-400 align-middle ml-[2px] -translate-y-[0.05em]'
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 0.85, repeat: Infinity, ease: 'linear' }}
  />
);

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed]     = useState('');
  const [isErasing, setIsErasing]     = useState(false);
  const [showRest, setShowRest]       = useState(false);

  const timeoutRef    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const splineRef     = useRef<HTMLDivElement>(null);

  // While the user is scrolling, disable pointer-events on the Spline canvas
  // so wheel/touch events reach the page scroll handler instead of the WebGL
  // canvas. Re-enable 150 ms after scrolling stops so mouse-tracking resumes.
  const handleScroll = useCallback(() => {
    if (splineRef.current) splineRef.current.style.pointerEvents = 'none';
    if (scrollTimer.current) clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      if (splineRef.current) splineRef.current.style.pointerEvents = 'auto';
    }, 150);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, [handleScroll]);

  const clear = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (!showRest && displayed === PHRASES[0]) setShowRest(true);
  }, [displayed, showRest]);

  useEffect(() => {
    const target = PHRASES[phraseIndex];
    if (!isErasing) {
      if (displayed.length < target.length) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          CHAR_SPEED,
        );
      } else {
        timeoutRef.current = setTimeout(() => setIsErasing(true), HOLD_MS);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          ERASE_SPEED,
        );
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsErasing(false);
          setPhraseIndex((i) => (i + 1) % PHRASES.length);
        }, PAUSE_MS);
      }
    }
    return clear;
  }, [displayed, isErasing, phraseIndex]);

  return (
    <section
      id='home'
      className='relative z-10 pt-28 pb-16 md:pt-36 xl:pt-44 xl:pb-24 min-h-[100svh]'
    >
      {/* ── Spotlight ─────────────────────────────────────────────────────── */}
      <Spotlight className='-top-40 left-0 md:left-60 md:-top-20' fill='white' />

      {/* ── Ambient background ────────────────────────────────────────────── */}
      <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]' />
        <div className='absolute top-1/3 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.07] blur-[100px]' />
        <div className='absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-violet-600/[0.07] blur-[80px]' />
        <div
          className='absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,.5) 1px,transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        <div className='absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent' />
      </div>

      {/* ── 3-D robot — desktop only, mid z-layer ─────────────────────────── */}
      {/* Height is fixed to 100svh — decoupled from section height so the    */}
      {/* Spline canvas never resizes during scroll                            */}
      <div
        ref={splineRef}
        className='absolute top-0 right-0 hidden w-[62%] lg:block'
        style={{ zIndex: 10, height: '100svh', background: 'transparent' }}
      >
        <SplineScene
          scene='https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'
          className='w-full h-full'
        />
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className='relative mx-auto max-w-7xl px-4 sm:px-8 xl:px-12'>
        {/*
          Mobile:  everything centered  (items-center, text-center)
          Desktop: everything left-aligned, capped at ~48% width so it
                   sits clearly left of the robot
        */}
        <div className='flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-[48%]'>

          {/* ── FOREGROUND (z-30): badges, heading, subtitle — in front of robot */}
          <div className='relative w-full' style={{ zIndex: 30 }}>

            {/* Badges */}
            <motion.div
              className='mb-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            >
              <Badge variant='success' className='px-4 py-1.5 text-xs font-semibold tracking-wide'>
                <span className='relative flex h-2 w-2'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
                  <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
                </span>
                Open to Opportunities
              </Badge>
              <Badge variant='default' className='px-4 py-1.5'>
                <Sparkles className='size-3' />
                Full Stack Developer &amp; Tech Leader
              </Badge>
            </motion.div>

            {/* Heading — 3 fixed lines, layout never shifts */}
            <motion.h1
              className='mb-0 text-4xl leading-[1.2] font-black tracking-tight text-white sm:text-5xl xl:text-7xl'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.25 }}
            >
              {/* Line 1 — static */}
              <span className='block'>Building</span>
              {/* Line 2 — typewriter, whitespace-nowrap so it never wraps */}
              <span className='block whitespace-nowrap'>
                <span className='text-gradient-hero'>{displayed}</span>
                <Cursor />
              </span>
              {/* Line 3 — static */}
              <span className='block'>That Drives Results</span>
            </motion.h1>

            {/* Subtitle */}
            <AnimatePresence>
              {showRest && (
                <motion.p
                  className='mt-8 mb-0 text-base sm:text-lg leading-relaxed font-medium text-slate-400'
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  Full Stack Developer and technology leader with expertise in the{' '}
                  <span className='font-semibold text-indigo-400'>MERN stack</span>,{' '}
                  <span className='font-semibold text-indigo-400'>cloud architectures</span>, and{' '}
                  <span className='font-semibold text-cyan-400'>DevOps practices</span>.
                  U.S. Air Force veteran bringing a mission-focused approach to
                  building high-impact software.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* ── BACKGROUND (z-5): CTAs, stats, social ───────────────────── */}
          <div className='relative mt-8 w-full' style={{ zIndex: 5 }}>

            {/* CTAs */}
            <AnimatePresence>
              {showRest && (
                <motion.div
                  className='mb-12 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start'
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
                >
                  <Button
                    asChild
                    size='lg'
                    className='hero-button-gradient w-full sm:w-auto border-0 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:opacity-90 hover:shadow-indigo-500/40'
                  >
                    <Link href='/projects'>
                      View My Work
                      <ArrowRight className='ml-1 size-4' />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant='outline'
                    size='lg'
                    className='w-full sm:w-auto px-8 text-base font-semibold'
                  >
                    <a href='/resume.pdf' download>
                      <Download className='size-4' />
                      Download CV
                    </a>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Stats */}
            <AnimatePresence>
              {showRest && (
                <motion.div
                  className='mb-12 flex flex-wrap justify-center gap-6 sm:gap-8 lg:justify-start'
                  initial='hidden'
                  animate='visible'
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                >
                  {[
                    { value: '4+', label: 'Years in Software Dev' },
                    { value: '37', label: 'Developers Led' },
                    { value: '8',  label: 'Years U.S. Air Force' },
                    { value: '3',  label: 'Cloud Platforms' },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      className='text-center'
                      variants={{
                        hidden:  { opacity: 0, y: 12 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
                      }}
                    >
                      <div className='text-2xl font-black text-gradient-primary'>{stat.value}</div>
                      <div className='mt-0.5 text-xs font-medium tracking-wide text-slate-500 uppercase'>{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Social links */}
            <AnimatePresence>
              {showRest && (
                <motion.div
                  className='flex items-center justify-center gap-4 lg:justify-start'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className='text-sm text-slate-600'>Find me on</span>
                  <div className='h-px w-8 bg-slate-700' />
                  {[
                    { href: 'https://github.com',   label: 'GitHub',   Icon: GithubIcon },
                    { href: 'https://linkedin.com', label: 'LinkedIn', Icon: LinkedinIcon },
                    { href: 'https://twitter.com',  label: 'Twitter',  Icon: TwitterXIcon },
                  ].map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={label}
                      className='flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-400 transition-all duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400'
                    >
                      <Icon />
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {showRest && (
          <motion.div
            className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
            style={{ zIndex: 30 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className='text-xs tracking-widest text-slate-500 uppercase'>Scroll</span>
            <div className='h-8 w-px bg-gradient-to-b from-slate-500 to-transparent' />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
