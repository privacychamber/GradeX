import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  className?: string;
}

export const Button = ({ children, as = 'button', href, className = '', ...props }: ButtonProps) => {
  const Component = as as any;
  
  return (
    <Component
      href={href}
      className={`relative inline-flex items-center justify-center px-8 py-4 overflow-hidden tracking-widest text-navy bg-primary rounded-full group cursor-pointer ${className}`}
      {...props}
    >
      <span
        className="absolute w-0 h-0 transition-all duration-700 ease-out bg-white rounded-full group-hover:w-[400px] group-hover:h-[400px]"
      ></span>
      <span className="absolute bottom-0 left-0 h-full -ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-auto h-full opacity-20 object-stretch"
          viewBox="0 0 487 487"
        >
          <path
            fillRule="nonzero"
            fill="#0B132B"
            d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
          ></path>
        </svg>
      </span>
      <span className="absolute top-0 right-0 w-12 h-full -mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="object-cover w-full h-full opacity-20"
          viewBox="0 0 487 487"
        >
          <path
            fillRule="nonzero"
            fill="#0B132B"
            d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
          ></path>
        </svg>
      </span>
      <span
        className="absolute inset-0 w-full h-full -mt-1 rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-navy/10"
      ></span>
      <span className="relative z-10 text-sm font-bold flex items-center gap-2 group-hover:text-navy transition-colors">
        {children}
      </span>
    </Component>
  );
};
