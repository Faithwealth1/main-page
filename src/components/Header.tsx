import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex w-[1280px] justify-between items-center z-[1000] backdrop-blur-2xl bg-[rgba(8,8,8,0.90)] px-8 py-4 rounded-[30px] mx-auto mt-[60px] max-md:w-[90%] max-md:px-6 max-md:py-3 max-sm:w-[95%] max-sm:px-5 max-sm:py-3">
      <div className="flex w-[100px] h-[22px] justify-center items-center shrink-0">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/e7f40f8988e21342395919c69b43c88e03cac139?width=200"
          alt="VonTech Logo"
          className="w-[100px] h-[22px] shrink-0 max-sm:w-20 max-sm:h-[18px]"
        />
      </div>
      
      <nav className="flex items-center gap-9 max-md:hidden">
        <a href="#home" className="text-white text-xl font-medium leading-[30px] cursor-pointer hover:text-[#FFE21B] transition-colors">
          Home
        </a>
        <a href="#about" className="text-white text-xl font-medium leading-[30px] cursor-pointer hover:text-[#FFE21B] transition-colors">
          About
        </a>
        <a href="#services" className="text-white text-xl font-medium leading-[30px] cursor-pointer hover:text-[#FFE21B] transition-colors">
          Services
        </a>
        <div className="flex items-center gap-[5px] relative">
          <a href="#resources" className="text-white text-xl font-medium leading-[30px] cursor-pointer hover:text-[#FFE21B] transition-colors">
            Resources
          </a>
          <div className="flex w-[26px] flex-col justify-center items-center gap-2.5 pt-1">
            <div className="w-6 h-6">
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="dropdown-arrow">
                <path d="M6.00078 6.9748C5.86745 6.9748 5.74245 6.95397 5.62578 6.9123C5.50911 6.87064 5.40078 6.7998 5.30078 6.6998L0.700781 2.0998C0.517448 1.91647 0.425781 1.68314 0.425781 1.3998C0.425781 1.11647 0.517448 0.883138 0.700781 0.699805C0.884115 0.516471 1.11745 0.424805 1.40078 0.424805C1.68411 0.424805 1.91745 0.516471 2.10078 0.699805L6.00078 4.5998L9.90078 0.699805C10.0841 0.516471 10.3174 0.424805 10.6008 0.424805C10.8841 0.424805 11.1174 0.516471 11.3008 0.699805C11.4841 0.883138 11.5758 1.11647 11.5758 1.3998C11.5758 1.68314 11.4841 1.91647 11.3008 2.0998L6.70078 6.6998C6.60078 6.7998 6.49245 6.87064 6.37578 6.9123C6.25911 6.95397 6.13411 6.9748 6.00078 6.9748Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
        <a href="#career" className="text-white text-xl font-medium leading-[30px] cursor-pointer hover:text-[#FFE21B] transition-colors">
          Career
        </a>
        <a href="#events" className="text-white text-xl font-medium leading-[30px] cursor-pointer hover:text-[#FFE21B] transition-colors">
          Events
        </a>
      </nav>

      <Button className="max-md:hidden">
        Login
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
          <path d="M15.1875 8.25014H1.25C0.895833 8.25014 0.598958 8.13035 0.359375 7.89076C0.119792 7.65118 0 7.3543 0 7.00014C0 6.64597 0.119792 6.3491 0.359375 6.10951C0.598958 5.86993 0.895833 5.75014 1.25 5.75014H15.1875L11.625 2.18764C11.375 1.93764 11.2552 1.64597 11.2656 1.31264C11.276 0.979303 11.3958 0.687637 11.625 0.437637C11.875 0.187637 12.1719 0.0574284 12.5156 0.0470117C12.8594 0.0365951 13.1562 0.156387 13.4062 0.406387L19.125 6.12514C19.25 6.25014 19.3385 6.38555 19.3906 6.53139C19.4427 6.67722 19.4688 6.83347 19.4688 7.00014C19.4688 7.1668 19.4427 7.32305 19.3906 7.46889C19.3385 7.61472 19.25 7.75014 19.125 7.87514L13.4062 13.5939C13.1562 13.8439 12.8594 13.9637 12.5156 13.9533C12.1719 13.9428 11.875 13.8126 11.625 13.5626C11.3958 13.3126 11.276 13.021 11.2656 12.6876C11.2552 12.3543 11.375 12.0626 11.625 11.8126L15.1875 8.25014Z" fill="#181818"/>
        </svg>
      </Button>

      {/* Mobile menu button */}
      <button 
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[rgba(8,8,8,0.95)] backdrop-blur-2xl rounded-[20px] p-6 md:hidden">
          <nav className="flex flex-col gap-4">
            <a href="#home" className="text-white text-lg font-medium cursor-pointer hover:text-[#FFE21B] transition-colors">
              Home
            </a>
            <a href="#about" className="text-white text-lg font-medium cursor-pointer hover:text-[#FFE21B] transition-colors">
              About
            </a>
            <a href="#services" className="text-white text-lg font-medium cursor-pointer hover:text-[#FFE21B] transition-colors">
              Services
            </a>
            <a href="#resources" className="text-white text-lg font-medium cursor-pointer hover:text-[#FFE21B] transition-colors">
              Resources
            </a>
            <a href="#career" className="text-white text-lg font-medium cursor-pointer hover:text-[#FFE21B] transition-colors">
              Career
            </a>
            <a href="#events" className="text-white text-lg font-medium cursor-pointer hover:text-[#FFE21B] transition-colors">
              Events
            </a>
            <Button className="mt-4">
              Login
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                <path d="M15.1875 8.25014H1.25C0.895833 8.25014 0.598958 8.13035 0.359375 7.89076C0.119792 7.65118 0 7.3543 0 7.00014C0 6.64597 0.119792 6.3491 0.359375 6.10951C0.598958 5.86993 0.895833 5.75014 1.25 5.75014H15.1875L11.625 2.18764C11.375 1.93764 11.2552 1.64597 11.2656 1.31264C11.276 0.979303 11.3958 0.687637 11.625 0.437637C11.875 0.187637 12.1719 0.0574284 12.5156 0.0470117C12.8594 0.0365951 13.1562 0.156387 13.4062 0.406387L19.125 6.12514C19.25 6.25014 19.3385 6.38555 19.3906 6.53139C19.4427 6.67722 19.4688 6.83347 19.4688 7.00014C19.4688 7.1668 19.4427 7.32305 19.3906 7.46889C19.3385 7.61472 19.25 7.75014 19.125 7.87514L13.4062 13.5939C13.1562 13.8439 12.8594 13.9637 12.5156 13.9533C12.1719 13.9428 11.875 13.8126 11.625 13.5626C11.3958 13.3126 11.276 13.021 11.2656 12.6876C11.2552 12.3543 11.375 12.0626 11.625 11.8126L15.1875 8.25014Z" fill="#181818"/>
              </svg>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
