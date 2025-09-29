import React from 'react';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon">
          <path d="M25.1094 12.6719C25.1094 5.98242 19.6895 0.5625 13 0.5625C6.31055 0.5625 0.890625 5.98242 0.890625 12.6719C0.890625 18.7158 5.31885 23.7256 11.1079 24.6348V16.1724H8.03174V12.6719H11.1079V10.0039C11.1079 6.96924 12.9146 5.29297 15.6816 5.29297C17.0068 5.29297 18.3926 5.5293 18.3926 5.5293V8.50781H16.8652C15.3613 8.50781 14.8921 9.44141 14.8921 10.3989V12.6719H18.2505L17.7134 16.1724H14.8921V24.6348C20.6812 23.7256 25.1094 18.7158 25.1094 12.6719Z" fill="white"/>
        </svg>
      ),
      bgColor: 'bg-[#3B5998]'
    },
    {
      name: 'Twitter',
      icon: (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon">
          <path d="M19.5039 2.51562H22.9512L15.4219 11.1191L24.2793 22.8281H17.3457L11.9111 15.7285L5.7002 22.8281H2.24805L10.2998 13.624L1.80859 2.51562H8.91797L13.8252 9.00488L19.5039 2.51562ZM18.293 20.7676H20.2021L7.87793 4.46875H5.82715L18.293 20.7676Z" fill="white"/>
        </svg>
      ),
      bgColor: 'bg-black'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon">
          <path d="M22.375 1.73438H3.62012C2.76074 1.73438 2.0625 2.44238 2.0625 3.31152V22.0322C2.0625 22.9014 2.76074 23.6094 3.62012 23.6094H22.375C23.2344 23.6094 23.9375 22.9014 23.9375 22.0322V3.31152C23.9375 2.44238 23.2344 1.73438 22.375 1.73438ZM8.67383 20.4844H5.43164V10.0449H8.67871V20.4844H8.67383ZM7.05273 8.61914C6.0127 8.61914 5.17285 7.77441 5.17285 6.73926C5.17285 5.7041 6.0127 4.85938 7.05273 4.85938C8.08789 4.85938 8.93262 5.7041 8.93262 6.73926C8.93262 7.7793 8.09277 8.61914 7.05273 8.61914ZM20.8271 20.4844H17.585V15.4062C17.585 14.1953 17.5605 12.6377 15.9004 12.6377C14.2109 12.6377 13.9521 13.9561 13.9521 15.3184V20.4844H10.71V10.0449H13.8203V11.4707H13.8643C14.2988 10.6504 15.3584 9.78613 16.9355 9.78613C20.2168 9.78613 20.8271 11.9492 20.8271 14.7617V20.4844Z" fill="white"/>
        </svg>
      ),
      bgColor: 'bg-[#0077B5]'
    },
    {
      name: 'Instagram',
      icon: (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon">
          <path d="M13.0046 7.0564C9.89917 7.0564 7.39429 9.56128 7.39429 12.6667C7.39429 15.7722 9.89917 18.2771 13.0046 18.2771C16.1101 18.2771 18.615 15.7722 18.615 12.6667C18.615 9.56128 16.1101 7.0564 13.0046 7.0564ZM13.0046 16.3142C10.9978 16.3142 9.35718 14.6785 9.35718 12.6667C9.35718 10.655 10.9929 9.01929 13.0046 9.01929C15.0164 9.01929 16.6521 10.655 16.6521 12.6667C16.6521 14.6785 15.0115 16.3142 13.0046 16.3142ZM20.1531 6.8269C20.1531 7.55444 19.5671 8.1355 18.8445 8.1355C18.1169 8.1355 17.5359 7.54956 17.5359 6.8269C17.5359 6.10425 18.1218 5.51831 18.8445 5.51831C19.5671 5.51831 20.1531 6.10425 20.1531 6.8269ZM23.8689 8.15503C23.7859 6.4021 23.3855 4.84937 22.1013 3.57007C20.822 2.29077 19.2693 1.89038 17.5164 1.80249C15.7097 1.69995 10.2947 1.69995 8.48804 1.80249C6.73999 1.8855 5.18726 2.28589 3.90308 3.56519C2.6189 4.84448 2.22339 6.39722 2.1355 8.15015C2.03296 9.95679 2.03296 15.3718 2.1355 17.1785C2.21851 18.9314 2.6189 20.4841 3.90308 21.7634C5.18726 23.0427 6.73511 23.4431 8.48804 23.531C10.2947 23.6335 15.7097 23.6335 17.5164 23.531C19.2693 23.448 20.822 23.0476 22.1013 21.7634C23.3806 20.4841 23.781 18.9314 23.8689 17.1785C23.9714 15.3718 23.9714 9.96167 23.8689 8.15503ZM21.5349 19.1169C21.1541 20.074 20.4167 20.8113 19.4548 21.197C18.0144 21.7683 14.5964 21.6365 13.0046 21.6365C11.4128 21.6365 7.98999 21.7634 6.55444 21.197C5.59741 20.8162 4.86011 20.0789 4.47437 19.1169C3.90308 17.6765 4.03491 14.2585 4.03491 12.6667C4.03491 11.075 3.90796 7.6521 4.47437 6.21655C4.85522 5.25952 5.59253 4.52222 6.55444 4.13647C7.99487 3.56519 11.4128 3.69702 13.0046 3.69702C14.5964 3.69702 18.0193 3.57007 19.4548 4.13647C20.4119 4.51733 21.1492 5.25464 21.5349 6.21655C22.1062 7.65698 21.9744 11.075 21.9744 12.6667C21.9744 14.2585 22.1062 17.6814 21.5349 19.1169Z" fill="white"/>
        </svg>
      ),
      bgColor: 'bg-neutral-800'
    }
  ];

  const footerSections = [
    {
      title: 'Company',
      links: ['About', 'Services', 'Contact Us']
    },
    {
      title: 'Resources',
      links: ['Webinars', 'Career', 'Blog']
    },
    {
      title: 'Support',
      links: ['Partners', 'Support portals', 'Contact us']
    },
    {
      title: 'Policy',
      links: ['Privacy Policy', 'Cookies Policy', 'Terms and Conditions']
    }
  ];

  return (
    <footer className="flex w-full flex-col justify-center items-start gap-2.5 bg-[#0A0919] pt-10 pb-[110px] px-20 max-md:pt-10 max-md:pb-20 max-md:px-10 max-sm:pt-[30px] max-sm:pb-[60px] max-sm:px-5">
      <div className="flex justify-between items-center self-stretch max-md:flex-col max-md:gap-10 max-md:items-start">
        <div className="flex w-[323px] flex-col items-start gap-[17px] max-md:w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ff82a3d23a64f9499af0d6e694b7238a148aab2b?width=330"
            alt="VonTech Group Logo"
            className="w-[165px] h-[45px]"
          />
          <div className="flex items-start gap-5 self-stretch max-sm:gap-[15px]">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href="#"
                className={`flex w-[50px] justify-center items-center cursor-pointer px-0 py-[12.5px] rounded-[25px] max-sm:w-10 max-sm:px-0 max-sm:py-2.5 hover:scale-110 transition-transform ${social.bgColor}`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="self-stretch text-white text-base font-normal leading-6">
            VonTech Group is a cloud consulting company dedicated to helping businesses achieve their cloud goals with innovative solutions.
          </p>
        </div>
        
        <div className="flex h-[186px] items-start gap-[60px] max-md:flex-wrap max-md:gap-[30px] max-md:h-auto max-sm:flex-col max-sm:gap-5">
          {footerSections.map((section, index) => (
            <div key={index} className="flex flex-col justify-between items-start self-stretch max-md:min-w-[150px] max-sm:w-full">
              <h3 className="text-white text-xl font-normal leading-[30px] mb-5 max-sm:mb-[15px]">
                {section.title}
              </h3>
              {section.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="text-white text-base font-normal leading-6 cursor-pointer mb-3 max-sm:mb-2 hover:text-[#FFE21B] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex w-full justify-between items-center p-5 border-t-[#191919] border-t border-solid">
        <div className="flex-[1_0_0] text-white text-center text-sm font-normal leading-[19.6px]">
          Copywrite © 2025 VonTech Group. All Right Reserved.
        </div>
      </div>
    </footer>
  );
};
