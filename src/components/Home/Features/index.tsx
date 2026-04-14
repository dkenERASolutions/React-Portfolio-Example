import SectionTitle from '@/components/Common/SectionTitle';
import SingleFeature from './SingleFeature';
import featuresData from './featuresData';

const Features = () => {
  return (
    <section
      id='skills'
      className='relative scroll-mt-20 overflow-hidden py-20 lg:py-28'
    >
      {/* Background accent */}
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-indigo-600/5 blur-[100px]' />
        <div className='absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[80px]' />
      </div>

      {/* Top divider */}
      <div className='section-divider absolute top-0 right-0 left-0' />

      <div className='mx-auto max-w-[1222px] px-4 sm:px-8 xl:px-0'>
        <SectionTitle
          subTitle='Skills & Expertise'
          title='Technologies I Work With'
          paragraph='A battle-tested toolkit spanning the full stack — from cloud infrastructure and DevOps to modern front-end frameworks and database management.'
        />

        {/* Tech pills */}
        <div className='mb-12 flex flex-wrap justify-center gap-2'>
          {[
            'React',
            'Node.js',
            'MongoDB',
            'Express.js',
            'AWS',
            'Azure',
            'Google Cloud',
            'Docker',
            'Java',
            'Spring MVC',
            'React Native',
            'JavaScript',
            'MySQL',
            'Firebase',
            'GitHub Actions',
            'Jenkins',
          ].map((tech) => (
            <span
              key={tech}
              className='skill-badge rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Feature cards */}
        <div className='-mx-3 flex flex-wrap'>
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className='section-divider absolute right-0 bottom-0 left-0' />
    </section>
  );
};

export default Features;
