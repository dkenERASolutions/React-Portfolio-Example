import { Feature } from '@/types/feature';

const featuresData: Feature[] = [
  {
    id: 1,
    title: 'MERN Stack',
    description:
      'Building full-stack applications with MongoDB, Express.js, React, and Node.js — from REST APIs and microservices to dynamic, responsive front-ends.',
    icon: '/images/features/icon-01.svg',
  },
  {
    id: 2,
    title: 'Cloud & DevOps',
    description:
      'Architecting scalable cloud-native solutions on AWS, Azure, and Google Cloud with CI/CD pipelines using Docker, GitHub Actions, and Jenkins.',
    icon: '/images/features/icon-02.svg',
  },
  {
    id: 3,
    title: 'Frontend Development',
    description:
      'Crafting responsive, performant UIs with React, React Native, Next.js, and modern JavaScript — optimized for smooth user experiences across devices.',
    icon: '/images/features/icon-03.svg',
  },
  {
    id: 4,
    title: 'Backend & APIs',
    description:
      'Designing RESTful APIs and microservices architecture with Node.js, Express, Java, and Spring MVC for scalable, maintainable backend solutions.',
    icon: '/images/features/icon-04.svg',
    rotate: true,
  },
  {
    id: 5,
    title: 'Database Management',
    description:
      'Working with SQL, MongoDB, Firebase, and MySQL to design efficient schemas, optimize queries, and manage data at scale.',
    icon: '/images/features/icon-05.svg',
    rotate: true,
  },
  {
    id: 6,
    title: 'Leadership & Agile',
    description:
      'Leading development teams of 37+ developers using Agile, Kanban, and Waterfall methodologies with a focus on mentorship and process optimization.',
    icon: '/images/features/icon-06.svg',
    rotate: true,
  },
];

export default featuresData;
