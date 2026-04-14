import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className='overflow-hidden'>
      <div className='relative mx-auto max-w-[1170px] px-4 py-20 sm:px-8 lg:py-25 xl:px-0'>
        <div className='about-divider-gradient absolute bottom-0 left-0 h-[1px] w-full'></div>

        <div className='flex flex-wrap justify-between gap-11 xl:flex-nowrap'>
          <div className='wow fadeInLeft w-full max-w-[570px]'>
            <span className='hero-subtitle-text mb-5 block font-semibold'>
              About Me
            </span>

            <h2 className='xl:text-heading-2 mb-5 text-2xl font-extrabold text-white sm:text-4xl'>
              Full Stack Developer &amp; Technology Leader with a Military Edge
            </h2>
            <p className='mb-9 font-medium'>
              With experience spanning hands-on development and leadership
              roles, I specialize in building scalable web and mobile
              applications using the MERN stack, cloud architectures (AWS,
              Azure, Google Cloud), and modern DevOps practices. At ERA
              Solutions, I grew the development team from startup phase to 37
              developers, delivering impactful cloud-based solutions for
              veteran-owned businesses.
            </p>

            <a
              href='/resume.pdf'
              download
              className='hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80'
            >
              Download My Resume
            </a>
          </div>

          <div className='wow fadeInRight relative hidden aspect-556/401 w-full xl:block'>
            <Image src='/images/about/about.svg' alt='about' fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
