'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Projects', path: '/projects' },
  //   { title: 'Blog', path: '/blog' },
  { title: 'Contact', path: '/contact' },
];

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathUrl = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-[1000] w-full transition-all duration-300',
        scrolled
          ? 'border-b border-slate-800/60 bg-[#030712]/80 py-3 backdrop-blur-xl'
          : 'bg-transparent py-5',
      )}
    >
      <div className='relative mx-auto flex max-w-[1170px] items-center justify-between px-4 sm:px-8 xl:px-0'>
        {/* Logo */}
        <Link href='/' className='group flex items-center gap-2.5'>
          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-sm transition-shadow group-hover:shadow-indigo-500/30'>
            <span className='text-sm font-black text-white'>D</span>
          </div>
          <span className='text-lg font-bold tracking-tight text-white transition-colors group-hover:text-indigo-300'>
            Danny
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden items-center gap-1 lg:flex'>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                'relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
                pathUrl === link.path
                  ? 'border border-indigo-500/25 bg-indigo-500/15 text-white'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-white',
              )}
            >
              {link.title}
              {pathUrl === link.path && (
                <span className='absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-indigo-400' />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className='hidden items-center gap-3 lg:flex'>
          <Button
            asChild
            size='sm'
            className='hero-button-gradient border-0 px-5 font-semibold text-white shadow-sm shadow-indigo-500/20 hover:opacity-90'
          >
            <Link href='/contact'>Hire Me</Link>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setNavigationOpen(!navigationOpen)}
          className='block rounded-lg p-2 text-slate-400 transition-all hover:bg-slate-800 hover:text-white lg:hidden'
          aria-label='Toggle navigation'
        >
          {navigationOpen ? (
            <X className='size-5' />
          ) : (
            <Menu className='size-5' />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {navigationOpen && (
        <div className='border-t border-slate-800/60 bg-[#030712]/95 backdrop-blur-xl lg:hidden'>
          <nav className='mx-auto flex max-w-[1170px] flex-col gap-1 px-4 py-5'>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setNavigationOpen(false)}
                className={cn(
                  'rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200',
                  pathUrl === link.path
                    ? 'border border-indigo-500/25 bg-indigo-500/15 text-white'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-white',
                )}
              >
                {link.title}
              </Link>
            ))}
            <div className='mt-3 border-t border-slate-800/60 pt-3'>
              <Button
                asChild
                className='hero-button-gradient w-full border-0 font-semibold text-white'
              >
                <Link href='/contact' onClick={() => setNavigationOpen(false)}>
                  Hire Me
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
