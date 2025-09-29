import React from 'react';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="flex items-center gap-[75px] self-stretch bg-[#FBFBFB] pt-20 pb-20 px-20 max-md:pt-16 max-md:pb-[60px] max-md:px-10 max-sm:pt-12 max-sm:pb-10 max-sm:px-5">
      <div className="flex justify-center items-center gap-[90px] flex-[1_0_0] max-md:flex-col max-md:gap-[60px]">
        <div className="flex w-[557px] flex-col justify-center items-start gap-[60px] max-md:w-full">
          <div className="flex flex-col items-start gap-5 self-stretch">
            <h1 className="self-stretch text-[#181818] text-5xl font-bold leading-[57.6px] max-md:text-4xl max-sm:text-[28px]">
              Our Case Studies
            </h1>
            <p className="self-stretch text-[#181818] text-xl font-normal leading-[30px] max-md:text-lg max-sm:text-base">
              Explore inspiring success stories that showcase the transformational impact of our solutions, backed by data, driven by results, and powered by partnership
            </p>
          </div>
          <Button className="max-sm:px-6 max-sm:py-2.5 max-sm:text-base">
            Get Free Consultation
            <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-arrow-icon">
              <path d="M15.8125 9.08559H1.875C1.52083 9.08559 1.22396 8.96579 0.984375 8.72621C0.744792 8.48663 0.625 8.18975 0.625 7.83559C0.625 7.48142 0.744792 7.18454 0.984375 6.94496C1.22396 6.70538 1.52083 6.58559 1.875 6.58559H15.8125L12.25 3.02309C12 2.77309 11.8802 2.48142 11.8906 2.14809C11.901 1.81475 12.0208 1.52309 12.25 1.27309C12.5 1.02309 12.7969 0.892878 13.1406 0.882461C13.4844 0.872044 13.7812 0.991836 14.0312 1.24184L19.75 6.96059C19.875 7.08559 19.9635 7.221 20.0156 7.36684C20.0677 7.51267 20.0938 7.66892 20.0938 7.83559C20.0938 8.00225 20.0677 8.1585 20.0156 8.30434C19.9635 8.45017 19.875 8.58559 19.75 8.71059L14.0312 14.4293C13.7812 14.6793 13.4844 14.7991 13.1406 14.7887C12.7969 14.7783 12.5 14.6481 12.25 14.3981C12.0208 14.1481 11.901 13.8564 11.8906 13.5231C11.8802 13.1898 12 12.8981 12.25 12.6481L15.8125 9.08559Z" fill="#181818"/>
            </svg>
          </Button>
        </div>
        <div className="w-[566px] h-[528px] relative max-md:w-full max-md:h-auto max-sm:w-full max-sm:h-[300px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7e927f83840b132b12883c957c843d0335054299?width=829"
            alt="Case study visualization"
            className="flex w-[414px] h-[393px] flex-col items-start shrink-0 absolute rounded-[30px] left-[152px] top-0 max-md:w-[300px] max-md:h-[280px] max-md:left-[100px] max-sm:w-[250px] max-sm:h-[200px] max-sm:left-[50px]"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d205d804eae73bcbfa64497e5c5479e92f993926?width=521"
            alt="Analytics dashboard"
            className="flex w-[261px] h-[335px] flex-col items-start shrink-0 absolute rounded-[30px] border-[10px] border-solid border-white left-0 top-[193px] max-md:w-[200px] max-md:h-[250px] max-md:left-0 max-md:top-[150px] max-sm:w-[150px] max-sm:h-[180px] max-sm:left-0 max-sm:top-[120px]"
          />
        </div>
      </div>
    </section>
  );
};
