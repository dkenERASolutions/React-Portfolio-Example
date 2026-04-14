import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code2, Layers, Rocket, Zap } from 'lucide-react';
import Link from 'next/link';

const highlights = [
  {
    Icon: Code2,
    title: 'Production-Ready Code',
    description:
      'I write clean, well-structured code backed by years of code reviews, mentoring junior developers, and leading engineering teams.',
  },
  {
    Icon: Zap,
    title: 'Cloud-Native Architecture',
    description:
      'Experienced with AWS, Azure, and Google Cloud — building scalable, reliable infrastructure with CI/CD pipelines and containerization.',
  },
  {
    Icon: Layers,
    title: 'True Full-Stack',
    description:
      'From MongoDB schemas and REST APIs to responsive React front-ends and mobile apps with React Native — I own the entire stack.',
  },
  {
    Icon: Rocket,
    title: 'Leadership & Delivery',
    description:
      'Grew a development team from startup phase to 37 developers, delivering high-impact solutions for veteran-owned businesses.',
  },
];

const FeaturesList = () => {
  return (
    <section className='relative py-20 lg:py-28'>
      <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        <div className='grid items-center gap-8 lg:grid-cols-2'>
          {/* Left: Text content */}
          <div>
            <div className='mb-5'>
              <Badge
                variant='default'
                className='px-4 py-1.5 text-xs font-semibold tracking-widest uppercase'
              >
                About Me
              </Badge>
            </div>

            <h2 className='mb-5 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl'>
              From developer to{' '}
              <span className='text-gradient-primary'>
                Director of Engineering
              </span>
            </h2>

            <p className='mb-6 leading-relaxed font-medium text-slate-400'>
              I&apos;m a versatile Full Stack Developer and technology leader
              with a strong foundation in software development and IT strategy.
              At ERA Solutions, I transitioned from a hands-on developer role to
              Director of Software Development, scaling the team from a small
              startup to 37 developers.
            </p>

            <p className='mb-8 leading-relaxed font-medium text-slate-400'>
              As a U.S. Air Force veteran with 8 years of service, I bring a
              disciplined, mission-focused approach to problem-solving and team
              leadership. I specialize in building scalable web and mobile
              applications using the MERN stack, cloud architectures, and modern
              DevOps practices.
            </p>

            <div className='flex flex-wrap gap-3'>
              <Button
                asChild
                size='default'
                className='hero-button-gradient border-0 font-semibold text-white shadow-md shadow-indigo-500/20 hover:opacity-90'
              >
                <Link href='/projects'>
                  View Projects
                  <ArrowRight className='ml-1 size-4' />
                </Link>
              </Button>
              <Button asChild variant='outline' size='default'>
                <Link href='/contact'>Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {highlights.map(({ Icon, title, description }) => (
              <Card
                key={title}
                className='group border-slate-800/60 bg-slate-900/40 transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-900/70 hover:shadow-md hover:shadow-indigo-500/10'
              >
                <CardContent className='p-6'>
                  <div className='mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10 transition-all duration-300 group-hover:bg-indigo-500/15'>
                    <Icon className='size-5 text-indigo-400' />
                  </div>
                  <h3 className='mb-2 text-sm font-bold text-white'>{title}</h3>
                  <p className='text-xs leading-relaxed text-slate-500 transition-colors group-hover:text-slate-400'>
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience timeline strip */}
        <div className='mt-16 border-t border-slate-800/60 pt-12'>
          <div className='grid grid-cols-2 gap-6 sm:grid-cols-4'>
            {[
              { label: 'Current Stack', value: 'MERN + Cloud' },
              { label: 'Industry Focus', value: 'Veteran Services' },
              { label: 'Work Style', value: 'Remote / On-site' },
              { label: 'Open To', value: 'Full-Time Roles' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className='rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 text-center'
              >
                <div className='mb-1 text-sm font-bold text-white'>{value}</div>
                <div className='text-xs font-medium text-slate-500'>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
