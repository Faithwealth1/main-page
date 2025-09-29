import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, company }) => {
  return (
    <article className="flex w-[402px] flex-col items-start gap-10 shrink-0 border px-[22px] py-8 rounded-[20px] border-solid border-[#E0E0E0] max-md:w-full max-md:max-w-[500px] max-sm:px-4 max-sm:py-6">
      <blockquote className="w-[358px] text-[#097484] text-base font-normal leading-6 max-md:w-full">
        {quote}
      </blockquote>
      <div className="flex items-center gap-4 self-stretch">
        <div className="flex items-center gap-4 flex-[1_0_0]">
          <div className="flex flex-col justify-center items-start gap-0.5 flex-[1_0_0]">
            <div className="self-stretch text-[#097484] text-xl font-normal leading-[30px]">
              {name}
            </div>
            <div className="self-stretch text-[#6A6C6B] text-lg font-normal leading-[27px]">
              {company}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Vontech didn't just implement technology, they helped us rethink how we grow. With real-time insights and AWS-powered analytics, we're now operating on a different level. Our farmers are more empowered than ever.",
      name: "CTO",
      company: "Complete Farmer"
    },
    {
      quote: "Partnering with Vontech was one of the best infrastructure decisions we've made. They didn't just build us a scoring engine, they helped us future-proof our lending operations. The system is fast, scalable, and incredibly cost-effective.",
      name: "Senior Engineering Manager",
      company: "Lendsqr"
    },
    {
      quote: "Vontech Group's AWS expertise ensured a smooth, secure, scalable, and reliable infrastructure for our growing mobile money platform. Their invaluable guidance helped us design a platform to meet increasing demands.",
      name: "DevOps Engineer",
      company: "Tusenti"
    }
  ];

  return (
    <section className="flex flex-col items-start gap-20 self-stretch bg-[#FBFBFB] pt-[60px] pb-[120px] px-20 max-md:pt-10 max-md:pb-20 max-md:px-10 max-sm:pt-[30px] max-sm:pb-[60px] max-sm:px-5">
      <div className="flex flex-col items-start gap-[60px] self-stretch">
        <h2 className="self-stretch text-center text-4xl font-bold leading-[45px] bg-clip-text max-sm:text-[28px]">
          Testimonials
        </h2>
        <div className="flex w-[1254px] justify-between items-center max-md:flex-col max-md:w-full max-md:gap-[30px] max-md:items-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
