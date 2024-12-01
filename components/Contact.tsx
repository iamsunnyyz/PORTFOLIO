import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 max-w-xl mx-auto text-center flex flex-col justify-center !py-16 md:!py-24 mb-20 md:mb-32" style={{opacity: '1', transform: 'none'}}>
      <p className="mb-3 font-mono text-sm capitalize text-accent">what&apos; next</p>
      <h2 className="text-4xl !mb-5" style={{ color: 'var(--text-color)' }}>Get In Touch</h2>
      <p className="text-1xl text-gray-400">I’m currently looking for a remote job or any new opportunities.</p>
      <p className="text-1xl text-gray-400">Whether you have a project to discuss or just want to say hi, my inbox is open for all!</p>
      <div className="flex gap-x-4 justify-center">
        <span>
          <a className="text-sm p-4  border-2 block mx-auto w-fit font-mono capitalize rounded border-[#38bdf8] text-accent hover:border-white focus:outline-none focus:bg-accent-light duration-150 cursor-pointer mt-12" target="_blank" rel="noopener noreferrer" href="https://calendly.com/iamsunnyyz/personal">
            Setup A Meeting
          </a>
        </span>
        <span>
          <a className="text-sm p-4  border-2 block mx-auto w-fit font-mono capitalize rounded border-[#38bdf8] text-accent hover:border-white focus:outline-none focus:bg-accent-light duration-150 cursor-pointer mt-12" target="_blank" rel="noopener noreferrer" href="mailto:sunny170600@gmail.com">
            Say Hello
          </a>
        </span>
      </div>
    </section>
  );
};

export default Contact;
