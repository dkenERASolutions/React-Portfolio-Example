'use client';
import { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id='contact' className='scroll-mt-17'>
      <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        {/* Contact Info Cards */}
        <div className='mb-16 grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
          {/* Email */}
          <div className='rounded-lg border border-white/[0.12] bg-white/[0.05] p-8 text-center'>
            <div className='mx-auto mb-5 flex h-15 w-15 items-center justify-center rounded-full bg-purple-500/10'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-7 w-7 text-purple-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                />
              </svg>
            </div>
            <h3 className='mb-2 text-lg font-semibold text-white'>Email</h3>
            <p className='text-gray-400'>your-email@example.com</p>
          </div>

          {/* Phone */}
          <div className='rounded-lg border border-white/[0.12] bg-white/[0.05] p-8 text-center'>
            <div className='mx-auto mb-5 flex h-15 w-15 items-center justify-center rounded-full bg-purple-500/10'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-7 w-7 text-purple-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                />
              </svg>
            </div>
            <h3 className='mb-2 text-lg font-semibold text-white'>Phone</h3>
            <p className='text-gray-400'>+1 (555) 123-4567</p>
          </div>

          {/* Location */}
          <div className='rounded-lg border border-white/[0.12] bg-white/[0.05] p-8 text-center sm:col-span-2 lg:col-span-1'>
            <div className='mx-auto mb-5 flex h-15 w-15 items-center justify-center rounded-full bg-purple-500/10'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-7 w-7 text-purple-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                />
              </svg>
            </div>
            <h3 className='mb-2 text-lg font-semibold text-white'>Location</h3>
            <p className='text-gray-400'>Your City, State, Country</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className='bg-dark relative z-999 overflow-hidden rounded-[30px] px-4 pt-25 sm:px-20 lg:px-27.5'>
          {/* bg effects */}
          <div className='absolute -top-30 left-1/2 -z-1 h-60 w-full max-w-[482px] -translate-x-1/2 overflow-hidden'>
            <div className='stars'></div>
            <div className='stars2'></div>
          </div>

          <SectionTitle
            subTitle='Get In Touch'
            title="Let's Connect"
            paragraph="Interested in working together or have a role that could be a good fit? I'd love to hear from you. Fill out the form below and I'll get back to you promptly."
          />

          <div className='form-box-gradient relative overflow-hidden rounded-[25px] p-6 sm:p-8 xl:p-15'>
            <form onSubmit={handleSubmit}>
              <div className='-mx-4 flex flex-wrap xl:-mx-10'>
                <div className='w-full px-4 md:w-1/2 xl:px-10'>
                  <div className='mb-9.5'>
                    <label
                      htmlFor='name'
                      className='mb-2.5 block font-medium text-white'
                    >
                      Name
                    </label>
                    <input
                      id='name'
                      type='text'
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Your name'
                      className='w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-white outline-none focus:border-purple-500'
                    />
                  </div>
                </div>
                <div className='w-full px-4 md:w-1/2 xl:px-10'>
                  <div className='mb-9.5'>
                    <label
                      htmlFor='email'
                      className='mb-2.5 block font-medium text-white'
                    >
                      Email
                    </label>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='your@email.com'
                      className='w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-white outline-none focus:border-purple-500'
                    />
                  </div>
                </div>
                <div className='w-full px-4 xl:px-10'>
                  <div className='mb-9.5'>
                    <label
                      htmlFor='subject'
                      className='mb-2.5 block font-medium text-white'
                    >
                      Subject
                    </label>
                    <input
                      id='subject'
                      type='text'
                      name='subject'
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder='Subject of your message'
                      className='w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-white outline-none focus:border-purple-500'
                    />
                  </div>
                </div>
                <div className='w-full px-4 xl:px-10'>
                  <div className='mb-9.5'>
                    <label
                      htmlFor='message'
                      className='mb-2.5 block font-medium text-white'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='Type your message here...'
                      className='w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-white outline-none focus:border-purple-500'
                    />
                  </div>
                </div>
                <div className='w-full px-4 xl:px-10'>
                  <div className='mb-10'>
                    <button
                      type='submit'
                      className='hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80'
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className='pb-25' />
        </div>
      </div>
    </section>
  );
};

export default Contact;
