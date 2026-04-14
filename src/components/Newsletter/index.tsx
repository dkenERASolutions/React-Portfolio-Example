'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Rss, Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className='border-t border-slate-800/60 py-16 lg:py-20'>
      <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        <div className='flex flex-wrap items-center justify-between gap-10'>
          {/* Left: Text */}
          <div className='w-full max-w-sm'>
            <div className='mb-4'>
              <Badge variant='default' className='text-xs font-semibold'>
                <Rss className='size-3' />
                Newsletter
              </Badge>
            </div>
            <h3 className='mb-2 text-xl font-bold text-white'>Stay Updated</h3>
            <p className='text-sm leading-relaxed font-medium text-slate-400'>
              Get notified about new projects, technical blog posts, and career
              updates. No spam, ever.
            </p>
          </div>

          {/* Right: Form */}
          <div className='w-full max-w-lg'>
            <form onSubmit={(e) => e.preventDefault()} className='flex gap-3'>
              <Input
                id='newsletterEmail'
                type='email'
                placeholder='your@email.com'
                className='flex-1'
              />
              <Button
                type='submit'
                className='hero-button-gradient shrink-0 border-0 px-6 font-semibold text-white shadow-sm shadow-indigo-500/20 hover:opacity-90'
              >
                <Send className='size-4' />
                Subscribe
              </Button>
            </form>
            <p className='mt-3 text-xs font-medium text-slate-600'>
              By subscribing, you agree to our Privacy Policy. Unsubscribe
              anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
