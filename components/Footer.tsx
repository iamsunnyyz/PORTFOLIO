import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full">
      {/* Sticky Left Section */}
      <div className="fixed bottom-0 flex-col items-center hidden md:flex  left-6 xl:left-12" style={{opacity: '1'}}>
        <ul className="">

        <li><a href="https://github.com/iamsunnyyz" target="_blank" className="block text-sm p-2.5 text-[#94A3B8] hover:text-[#38bdf8] hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--tabler" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"></path></svg></a></li>
        
        <li><a href="https://www.instagram.com/iamsunnyyz" target="_blank" className="block text-sm p-2.5 text-[#94A3B8] hover:text-[#38bdf8] hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--mdi" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg></a></li>
        
        <li><a href="https://twitter.com/iamsunnyyz" target="_blank" className="block text-sm p-2.5 text-[#94A3B8] hover:text-[#38bdf8] hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--pajamas" width="24" height="24" viewBox="0 0 16 16">
        <path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"></path></svg></a></li>
        
        <li><a href="https://www.linkedin.com/in/iamsunnyyz" target="_blank" className="block text-sm p-2.5 text-[#94A3B8] hover:text-[#38bdf8] hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--lucide" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a></li>
        
        <li><a href="https://wa.link/dp615p" target="_blank" className="block text-sm p-2.5 text-[#94A3B8] hover:text-[#38bdf8] hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path></svg></a></li>
        
        </ul>
      <div className="bg-slate-500 h-24 w-0.5 mt-5"></div>
      </div>

      {/* Sticky Right Section */}
      <div className="fixed bottom-0 flex-col items-center hidden md:flex  right-6 xl:right-12" style={{opacity: '1'}}>
        <a href="mailto:sunny170600@gmail.com" target="_blank" className="block text-sm p-2.5 text-[#94A3B8] hover:text-[#38bdf8] hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 [writing-mode:vertical-lr] font-mono tracking-widest text-xs">
          sunny170600@gmail.com
        </a>
        <div className="bg-slate-500 h-24 w-0.5 mt-5"></div>
      </div>

      {/* Bottom Center Section */}
      <div className="absolute bottom-2 w-full flex flex-col items-center">
        <ul className="flex justify-center gap-3 mb-3 md:hidden">
          
          <li><a href="https://github.com/iamsunnyyz" target="_blank" className="block text-sm p-2.5 text-[#94A3B8] hover:text-[#38bdf8] hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--tabler" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"></path>
            </svg></a>
          </li>
          
          <li><a href="https://www.instagram.com/iamsunnyyz" target="_blank" className="block text-sm p-2.5 text-[#94A3B8] hover:text-[#38bdf8] hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--mdi" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
            </svg></a>
          </li>
          
          <li><a href="https://twitter.com/iamsunnyyz" target="_blank" className="block text-sm p-2.5 text-[#94A3B8] hover:text-[#38bdf8] hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--pajamas" width="24" height="24" viewBox="0 0 16 16">
              <path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"></path>
            </svg></a>
          </li>
          
          <li><a href="https://www.linkedin.com/in/iamsunnyyz" target="_blank" className="block text-sm p-2.5 text-[#94A3B8] hover:text-[#38bdf8] hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--lucide" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g>
            </svg></a>
          </li>
          
          <li><a href="https://wa.link/dp615p" target="_blank" className="block text-sm p-2.5 text-[#94A3B8] hover:text-[#38bdf8] hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path>
            </svg></a>
          </li>
        
        </ul>

        <p className="font-roboto-mono text-[12px] text-gray-600">
          <a
            href="https://github.com/iamsunnyyz"
            className="hover:text-[#38BDF8]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed & Built by Sunny Chauhan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
