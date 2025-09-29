import React from 'react';
import { Button } from '@/components/ui/Button';

export const CTA: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-2.5 self-stretch px-20 py-10 max-md:p-10 max-sm:px-5 max-sm:py-[30px]">
      <div className="flex flex-col justify-center items-center gap-10 self-stretch">
        <div className="flex flex-col items-center gap-2.5">
          <h2 className="w-[868px] text-white text-center text-4xl font-bold leading-[45px] max-md:w-full max-md:text-[28px] max-sm:text-2xl">
            Ready to take the next step in your career?
          </h2>
          <p className="w-[710px] text-[#C9C7C7] text-center text-base font-normal leading-6 max-md:w-full max-sm:text-sm">
            We're always on the lookout for talented individuals. Submit your resume, and we'll contact you when a suitable opportunity arises.
          </p>
        </div>
        <Button className="max-sm:px-6 max-sm:py-2.5 max-sm:text-base">
          Get In Touch
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="cta-arrow-icon">
            <path d="M15.6875 8.92152H1.75C1.39583 8.92152 1.09896 8.80173 0.859375 8.56215C0.619792 8.32257 0.5 8.02569 0.5 7.67152C0.5 7.31736 0.619792 7.02048 0.859375 6.7809C1.09896 6.54132 1.39583 6.42152 1.75 6.42152H15.6875L12.125 2.85902C11.875 2.60902 11.7552 2.31736 11.7656 1.98402C11.776 1.65069 11.8958 1.35902 12.125 1.10902C12.375 0.859023 12.6719 0.728815 13.0156 0.718398C13.3594 0.707982 13.6562 0.827773 13.9062 1.07777L19.625 6.79652C19.75 6.92152 19.8385 7.05694 19.8906 7.20277C19.9427 7.34861 19.9688 7.50486 19.9688 7.67152C19.9688 7.83819 19.9427 7.99444 19.8906 8.14027C19.8385 8.28611 19.75 8.42152 19.625 8.54652L13.9062 14.2653C13.6562 14.5153 13.3594 14.6351 13.0156 14.6246C12.6719 14.6142 12.375 14.484 12.125 14.234C11.8958 13.984 11.776 13.6924 11.7656 13.359C11.7552 13.0257 11.875 12.734 12.125 12.484L15.6875 8.92152Z" fill="#181818"/>
          </svg>
        </Button>
      </div>
    </section>
  );
};
