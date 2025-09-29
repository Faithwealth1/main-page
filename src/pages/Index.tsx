import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CaseStudies } from '@/components/CaseStudies';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex w-full flex-col items-center relative bg-white">
      <Header />
      
      <main className="w-full">
        <Hero />
        <CaseStudies />
        <Testimonials />
        
        <section className="bg-[#0A0919]">
          <CTA />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
