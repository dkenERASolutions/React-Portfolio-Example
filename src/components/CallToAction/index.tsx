import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className='py-20 lg:py-28'>
      <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        <div className='relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-slate-900 via-indigo-950/30 to-slate-900 p-12 text-center lg:p-20'>
          {/* Background effects */}
          <div className='pointer-events-none absolute inset-0 overflow-hidden rounded-3xl'>
            <div className='absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent' />
            <div className='absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent' />
            <div className='absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]' />
            <div className='absolute top-1/4 right-1/4 h-[200px] w-[200px] rounded-full bg-cyan-500/8 blur-[80px]' />

            {/* Dot grid */}
            <div
              className='absolute inset-0 opacity-[0.04]'
              style={{
                backgroundImage: `radial-gradient(rgba(99, 102, 241, 0.8) 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
              }}
            />
          </div>

          {/* Content */}
          <div className='relative z-10'>
            <div className='mb-6 flex justify-center'>
              <Badge
                variant='default'
                className='px-4 py-1.5 text-xs font-semibold tracking-widest uppercase'
              >
                <MessageSquare className='size-3' />
                Open to Opportunities
              </Badge>
            </div>

            <h2 className='mb-5 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl xl:text-5xl'>
              Looking for a developer who
              <br />
              <span className='text-gradient-primary'>leads and delivers?</span>
            </h2>

            <p className='mx-auto mb-10 max-w-xl leading-relaxed font-medium text-slate-400'>
              I&apos;m actively seeking full-time opportunities as a Full Stack
              Developer. With experience leading teams of 37+ developers and
              building cloud-native solutions, I&apos;m ready to bring impact to
              your organization.
            </p>

            <div className='flex flex-wrap items-center justify-center gap-4'>
              <Button
                asChild
                size='lg'
                className='hero-button-gradient h-13 border-0 px-8 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:opacity-90 hover:shadow-indigo-500/40'
              >
                <Link href='/contact'>
                  <Mail className='size-4' />
                  Get in Touch
                  <ArrowRight className='size-4' />
                </Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='h-13 px-8 text-base font-semibold'
              >
                <Link href='/projects'>See My Work</Link>
              </Button>
            </div>

            {/* Trust signals */}
            <p className='mt-8 text-xs font-medium text-slate-600'>
              U.S. Air Force Veteran &nbsp;·&nbsp; B.A.S. Computing Technology
              &nbsp;·&nbsp; Open to Remote & On-site
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
