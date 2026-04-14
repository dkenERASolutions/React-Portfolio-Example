import Image from 'next/image';
import Link from 'next/link';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: 'ERA Solutions Platform',
    description:
      'Cloud-based platform serving veteran-owned businesses. Built scalable architecture with AWS and managed a team of 37 developers to deliver impactful solutions.',
    image: '/images/blog/blog-01.png',
    tags: ['React', 'Node.js', 'AWS', 'MongoDB'],
    link: '#',
  },
  {
    id: 2,
    title: 'Veteran Services Portal',
    description:
      'Full-stack web application providing resources and services for veteran-owned businesses. RESTful APIs with Express.js and responsive React front-end.',
    image: '/images/blog/blog-02.png',
    tags: ['MERN Stack', 'REST API', 'Azure'],
    link: '#',
  },
  {
    id: 3,
    title: 'CI/CD Pipeline Automation',
    description:
      'Designed and implemented automated deployment pipelines using Docker, GitHub Actions, and Jenkins, reducing deployment time by 60% across multiple projects.',
    image: '/images/blog/blog-03.png',
    tags: ['Docker', 'GitHub Actions', 'Jenkins', 'DevOps'],
    link: '#',
  },
  {
    id: 4,
    title: 'Mobile App - React Native',
    description:
      'Cross-platform mobile application built with React Native and Firebase, delivering a seamless experience for both iOS and Android users.',
    image: '/images/blog/blog-01.png',
    tags: ['React Native', 'Firebase', 'JavaScript'],
    link: '#',
  },
  {
    id: 5,
    title: 'Cloud Migration Project',
    description:
      'Led the migration of legacy on-premise systems to a multi-cloud architecture spanning AWS, Azure, and Google Cloud with zero downtime.',
    image: '/images/blog/blog-02.png',
    tags: ['AWS', 'Azure', 'Google Cloud', 'Docker'],
    link: '#',
  },
  {
    id: 6,
    title: 'Developer Apprenticeship Program',
    description:
      'Built and launched a Registered Apprenticeship Program platform to mentor and train aspiring developers, tracking progress and curriculum delivery.',
    image: '/images/blog/blog-03.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className='pb-20'>
      <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        <div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className='group overflow-hidden rounded-[25px] border border-white/[0.12] bg-white/[0.05] transition-all duration-300 hover:border-purple-500/50'
            >
              {/* Image */}
              <div className='relative aspect-[16/10] w-full overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='mb-3 text-xl font-semibold text-white'>
                  {project.title}
                </h3>
                <p className='mb-5 text-sm text-gray-400'>
                  {project.description}
                </p>

                {/* Tags */}
                <div className='mb-5 flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={project.link}
                  className='inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300'
                >
                  View Project
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='h-4 w-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
