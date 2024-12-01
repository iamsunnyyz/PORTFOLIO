import React from 'react';
import Image from 'next/image';

interface WorkExperience {
  companyName: string;
  role: string;
  period: string;
  responsibilities: string[];
  logo: string; // logo URL
}

const experiences: WorkExperience[] = [
  {
    companyName: 'Freelencer',
    role: 'Self Employeed',
    period: 'Jan 2024 - Present',
    responsibilities: [
      'Developed new features for the core platform',
      'Led a team of 5 engineers',
      'Improved overall system performance by 15%',
    ],
    logo: '/images/freelancer.svg',
  },
  {
    companyName: 'Bluestock Fintech',
    role: 'SDE Intern',
    period: 'June 2024 - Aug 2024',
    responsibilities: [
      'Developed new features for the core platform',
      'Led a team of 5 engineers',
      'Improved overall system performance by 15%',
    ],
    logo: '/images/bluestock.jpeg',
  },
  {
    companyName: 'BNY Mellon',
    role: 'Software Developer',
    period: 'Feb 2022 - May 2024',
    responsibilities: [
      'Created reusable React components',
      'Enhanced website performance',
      'Collaborated with design teams',
    ],
    logo: '/images/bny.jpeg',
  },
  {
    companyName: 'Advertyzement',
    role: 'Backend Developer',
    period: 'Aug 2023 - Jan 2024',
    responsibilities: [
      'Created reusable React components',
      'Enhanced website performance',
      'Collaborated with design teams',
    ],
    logo: '/images/advertyzement.jpeg',
  },
  // Add more experiences here
];

const WhereIveWorked: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-6 sm:px-16 lg:px-28">
  <h2 className="text-center text-4xl font-bold mb-16"
  style={{ color: 'var(--text-color)' }}
  >Where I&#39;ve Worked</h2>

  <div className="relative max-w-5xl mx-auto">
    
    {/* Vertical Line for Large Screens */}
    <div className="hidden sm:block absolute w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 h-full"></div>

    {/* Experience Cards */}
    {experiences.map((experience, index) => (
      <div key={index} className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
        
        {/* Mobile Layout */}
        <div className="block sm:hidden flex items-center mb-4">
          {/* Logo */}
          <div className="relative z-10">
            <Image 
              src={experience.logo}
              alt={experience.companyName}
              className="w-12 h-12 rounded-full bg-white p-2 shadow-md mx-auto"
              width={50}
              height={50}
              quality={75}
            />
          </div>

          {/* Vertical Line on Mobile */}
          <div className="h-12 w-1 bg-gray-300 mx-2"></div>

          {/* Company Name and Period */}
          <div className="text-left">
            <h3 className="text-lg font-semibold text-white">{experience.companyName}</h3>
            <p className="text-sm text-gray-500">{experience.period}</p>
          </div>
        </div>

        {/* Full-Screen Layout */}
        {index % 2 === 0 ? (
          <>
            {/* Left Side (Company Details) */}
            <div className="hidden sm:block w-1/2 pr-8 text-right text-white">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md shadow-[#38BDF8]/50">
                <h3 className="text-xl font-semibold">{experience.companyName}</h3>
                <p className="text-gray-500">{experience.role}</p>
                <ul className="list-disc ml-5 mt-2 text-white">
                  {experience.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Timeline Logo */}
            <div className="hidden sm:block relative z-10">
              <Image 
                src={experience.logo}
                alt={experience.companyName}
                className="w-16 h-16 rounded-full bg-white p-2 shadow-md mx-auto"
                width={200}
                height={100}
                quality={75}
              />
            </div>
            
            {/* Period */}
            <div className="hidden sm:block w-1/2">
              <p className="mt-4 mb-4 text-sm ml-5 text-gray-500">{experience.period}</p>
            </div>
          </>
        ) : (
          <>
            {/* Period */}
            <div className="hidden sm:block w-1/2">
              <p className="mt-4 mb-4 text-sm mr-5 text-right text-gray-500">{experience.period}</p>
            </div>
            
            {/* Timeline Logo */}
            <div className="hidden sm:block relative z-10">
              <Image 
                src={experience.logo}
                alt={experience.companyName}
                className="w-16 h-16 rounded-full bg-white p-2 shadow-md mx-auto"
                width={200}
                height={100}
                quality={75}
              />
            </div>

            {/* Right Side (Company Details) */}
            <div className="hidden sm:block w-1/2 pl-8 text-left text-white">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md shadow-[#38BDF8]/50">
                <h3 className="text-xl font-semibold">{experience.companyName}</h3>
                <p className="text-gray-500">{experience.role}</p>
                <ul className="list-disc ml-5 mt-2 text-white">
                  {experience.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        {/* Experience Card for Mobile */}
        <div className="sm:hidden bg-gray-800 p-6 rounded-lg shadow-md shadow-[#38BDF8]/50 mt-4">
          <p className="text-gray-500 mb-2">{experience.role}</p>
          <ul className="list-disc ml-5 mt-2 text-white">
            {experience.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        
      </div>
    ))}
  </div>
</section>

  );
};

export default WhereIveWorked;
