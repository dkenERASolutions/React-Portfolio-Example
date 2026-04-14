import Breadcrumb from '@/components/Breadcrumb';
import Projects from '@/components/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Danny — Full Stack Developer',
  description:
    'Browse my portfolio of full-stack web and mobile applications built with the MERN stack, cloud technologies, and modern DevOps practices.',
};

const ProjectsPage = () => {
  return (
    <>
      <Breadcrumb pageTitle='Projects' />
      <Projects />
    </>
  );
};

export default ProjectsPage;
