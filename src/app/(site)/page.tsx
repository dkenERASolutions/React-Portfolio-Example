import CallToAction from '@/components/CallToAction';
import Features from '@/components/Home/Features';
import FeaturesList from '@/components/Home/FeaturesList';
import Hero from '@/components/Home/Hero';
import Reviews from '@/components/Home/Reviews';
import Newsletter from '@/components/Newsletter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Danny — Full Stack Developer & Technology Leader',
  description:
    'Versatile Full Stack Developer with expertise in the MERN stack, cloud architectures (AWS, Azure, Google Cloud), and DevOps. Former Director of Software Development and U.S. Air Force veteran.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesList />
      <section className='relative z-20 overflow-hidden pt-20 pb-20 lg:pt-28'>
        <Reviews />
      </section>
      <CallToAction />
      <Newsletter />
    </>
  );
}
