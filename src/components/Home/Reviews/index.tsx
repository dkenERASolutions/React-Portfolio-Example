'use client';

import SectionTitle from '@/components/Common/SectionTitle';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import SingleReview from './SingleReview';
import reviewsData from './reviewsData';

const Reviews = () => {
  const [showContent, setShowContent] = useState(false);
  const [scrollContent, setScrollContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollContent(window.scrollY >= 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
      <SectionTitle
        subTitle='Testimonials'
        title='What Colleagues & Clients Say'
        paragraph="Feedback from team members, clients, and collaborators I've had the privilege of working with throughout my career."
      />

      <div
        className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${
          !showContent ? 'max-h-[900px] overflow-hidden' : ''
        }`}
      >
        <div className='space-y-5'>
          {reviewsData.slice(0, 9).map((review) => (
            <SingleReview key={review.id} review={review} />
          ))}
        </div>

        <div className='hidden space-y-5 sm:block'>
          {reviewsData.slice(9, 18).map((review) => (
            <SingleReview key={review.id} review={review} />
          ))}
        </div>

        <div className='hidden space-y-5 lg:block'>
          {reviewsData.slice(18, 27).map((review) => (
            <SingleReview key={review.id} review={review} />
          ))}
        </div>
      </div>

      {/* Show more / fade overlay */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-20 flex justify-center bg-gradient-to-t from-[#030712] pt-32 pb-8 ${
          scrollContent ? 'opacity-100' : 'opacity-0'
        } ${
          showContent
            ? 'sticky -mt-52 opacity-0 transition-opacity duration-300'
            : ''
        }`}
      >
        <Button
          type='button'
          onClick={() => setShowContent(!showContent)}
          variant='outline'
          className={`pointer-events-auto relative top-20 mx-auto -mt-7.5 ${
            showContent ? 'translate-y-4 transition-transform' : ''
          } ${scrollContent ? 'translate-y-0' : ''}`}
        >
          {showContent ? 'Show less' : 'Show more'}
          <ChevronDown
            className={`size-4 transition-transform ${showContent ? 'rotate-180' : ''}`}
          />
        </Button>
      </div>
    </div>
  );
};

export default Reviews;
