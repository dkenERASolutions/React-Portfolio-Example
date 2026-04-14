import Breadcrumb from '@/components/Breadcrumb';
import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Danny — Full Stack Developer',
  description:
    'Get in touch with Danny for full-time software development opportunities',
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageTitle='Contact' />
      <Contact />
    </>
  );
};

export default ContactPage;
