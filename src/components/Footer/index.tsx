import { Separator } from '@/components/ui/separator';
import { Mail } from 'lucide-react';
import Link from 'next/link';

const GithubIcon = () => (
  <svg
    viewBox='0 0 24 24'
    className='size-3.5 fill-current'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox='0 0 24 24'
    className='size-3.5 fill-current'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
  </svg>
);

const TwitterIcon = () => (
  <svg
    viewBox='0 0 24 24'
    className='size-3.5 fill-current'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.264 5.634 5.9-5.634zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
  </svg>
);

const footerLinks = {
  Work: [
    { title: 'Projects', href: '/projects' },
    { title: 'Blog', href: '/blog' },
    { title: 'AI Examples', href: '/ai-examples' },
    { title: 'Docs', href: '/docs' },
  ],
  Connect: [
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
    { title: 'Pricing', href: '/pricing' },
  ],
};

const socialLinks = [
  { href: 'https://github.com', label: 'GitHub', Icon: GithubIcon },
  { href: 'https://linkedin.com', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: 'https://twitter.com', label: 'Twitter', Icon: TwitterIcon },
  { href: 'mailto:hello@example.com', label: 'Email', Icon: Mail },
];

const Footer = () => {
  return (
    <footer className='relative z-10 border-t border-slate-800/60 bg-[#030712]'>
      {/* Gradient top accent */}
      <div className='h-px w-full bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent' />

      <div className='mx-auto max-w-[1170px] px-4 py-14 sm:px-8 xl:px-0'>
        <div className='flex flex-wrap justify-between gap-10'>
          {/* Brand */}
          <div className='w-full max-w-xs'>
            <Link
              href='/'
              className='group mb-4 flex w-fit items-center gap-2.5'
            >
              <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-sm'>
                <span className='text-sm font-black text-white'>D</span>
              </div>
              <span className='text-lg font-bold tracking-tight text-white transition-colors group-hover:text-indigo-300'>
                Danny
              </span>
            </Link>

            <p className='mb-6 text-sm leading-relaxed font-medium text-slate-500'>
              Full Stack Developer & technology leader. U.S. Air Force veteran
              building scalable solutions with the MERN stack and cloud
              technologies.
            </p>

            <div className='flex items-center gap-2.5'>
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    href.startsWith('http') ? 'noopener noreferrer' : undefined
                  }
                  aria-label={label}
                  className='flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-500 transition-all duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400'
                >
                  <Icon className='size-3.5' />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className='flex gap-14'>
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className='mb-4 text-xs font-semibold tracking-widest text-white uppercase'>
                  {section}
                </h4>
                <ul className='space-y-2.5'>
                  {links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className='text-sm font-medium text-slate-500 transition-colors hover:text-indigo-400'
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className='my-8 bg-slate-800/60' />

        {/* Bottom bar */}
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <p className='text-xs font-medium text-slate-600'>
            © {new Date().getFullYear()} Danny. All rights reserved.
          </p>
          <div className='flex items-center gap-5'>
            <Link
              href='/privacy'
              className='text-xs font-medium text-slate-600 transition-colors hover:text-slate-400'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms'
              className='text-xs font-medium text-slate-600 transition-colors hover:text-slate-400'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
