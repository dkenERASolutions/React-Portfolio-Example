import AboutSection from '@/components/About/AboutSection';
import Team from '@/components/About/Team';
import Video from '@/components/About/Video';
import Breadcrumb from '@/components/Breadcrumb';
import CallToAction from '@/components/CallToAction';
import Clients from '@/components/Home/Clients';
import Features from '@/components/Home/Features';
import Reviews from '@/components/Home/Reviews';
import Newsletter from '@/components/Newsletter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Danny — Full Stack Developer & Tech Leader',
  description:
    "Learn about Danny's journey from U.S. Air Force veteran to Director of Software Development, specializing in MERN stack, cloud architecture, and team leadership.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageTitle='About Me' />
      <AboutSection />
      <Features />
      <Video />
      <Team />
      <section className='relative z-20 overflow-hidden pb-20'>
        <Reviews />
      </section>
      <Clients />
      <CallToAction />
      <Newsletter />
    </>
  );
};

export default AboutPage;
