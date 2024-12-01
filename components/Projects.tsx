"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Projects: React.FC = () => {
  const [isHoveringFrontend, setIsHoveringFrontend] = useState(false);
  const [isHoveringBackend, setIsHoveringBackend] = useState(false);
  const frontendCarouselRef = useRef<HTMLDivElement | null>(null);
  const backendCarouselRef = useRef<HTMLDivElement | null>(null);

  const projectsData = {
    frontend: [
      { title: "Veterinary", description: "A brief overview of frontend project 1.", techStack: ["HTML", "CSS", "JavaScript", "ReactJS"], link: "https://github.com/iamsunnyyz", image: "/images/frontend/veterinary.png" },
      { title: "Yoga Class", description: "A brief overview of frontend project 2.", techStack: ["Bootstrap", "Javascript", "HTML"], link: "https://github.com/iamsunnyyz", image: "/images/frontend/yogaclass.png" },
      { title: "Nice Meal", description: "A brief overview of frontend project 3.", techStack: ["Vue", "NextJS", "Bootstrap"], link: "https://github.com/iamsunnyyz", image: "/images/frontend/nicemeal.png" },
      { title: "Eat Sushi", description: "A brief overview of frontend project 4.", techStack: ["NextJS", "Tailwind CSS"], link: "https://github.com/iamsunnyyz", image: "/images/frontend/sushi.png" },
      { title: "Dental care", description: "A brief overview of frontend project 5.", techStack: ["NextJS", "Tailwind CSS"], link: "https://github.com/iamsunnyyz", image: "/images/frontend/dentalcare.png" },
    ],
    backend: [
      { title: "Crypto Exchange", description: "A brief overview of backend project 1.", techStack: ["Node.js", "Express", "MongoDB"], link: "https://github.com/iamsunnyyz", image: "/images/backend/cryptoex.png" },
      { title: "Mr Barber", description: "A brief overview of backend project 2.", techStack: ["Django", "PostgreSQL"], link: "https://github.com/iamsunnyyz", image: "/images/backend/mrbarber.png" },
      { title: "Backend Project 3", description: "A brief overview of backend project 3.", techStack: ["Node.js", "Express", "MongoDB"], link: "https://github.com/iamsunnyyz", image: "/images/image1.avif" },
      { title: "Backend Project 4", description: "A brief overview of backend project 4.", techStack: ["Node.js", "Express", "MongoDB"], link: "https://github.com/iamsunnyyz", image: "/images/image3.avif" },
    ],
  };

  // Auto-scroll effect for frontend (left-to-right)
  useEffect(() => {
    const frontendCarousel = frontendCarouselRef.current;
    if (!frontendCarousel) return;

    let animationFrameId: number;

    const scrollLeftToRight = () => {
      if (!isHoveringFrontend) {
        if (frontendCarousel.scrollLeft + frontendCarousel.offsetWidth >= frontendCarousel.scrollWidth) {
          frontendCarousel.scrollLeft = 0; // Reset to start
        } else {
          frontendCarousel.scrollLeft += 1; // Increment scroll position
        }
      }
      animationFrameId = requestAnimationFrame(scrollLeftToRight);
    };

    animationFrameId = requestAnimationFrame(scrollLeftToRight);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHoveringFrontend]);

  // Auto-scroll effect for backend (right-to-left)
  useEffect(() => {
    const backendCarousel = backendCarouselRef.current;
    if (!backendCarousel) return;

    let animationFrameId: number;

    const scrollRightToLeft = () => {
      if (!isHoveringBackend) {
        if (backendCarousel.scrollLeft <= 0) {
          backendCarousel.scrollLeft = backendCarousel.scrollWidth; // Reset to end
        } else {
          backendCarousel.scrollLeft -= 1; // Decrement scroll position
        }
      }
      animationFrameId = requestAnimationFrame(scrollRightToLeft);
    };

    animationFrameId = requestAnimationFrame(scrollRightToLeft);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHoveringBackend]);

  return (
    <section id="projects" className="max-w-6xl mx-auto py-16 text-center px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-8"
      style={{ color: 'var(--text-color)' }}
      >Projects I Have Worked On</h2>

      {/* Frontend Projects */}
      <h3 className="text-2xl text-gray-500 font-semibold mb-4">Frontend Projects</h3>
      <div
        ref={frontendCarouselRef}
        className="mt-8 overflow-x-scroll sm:overflow-hidden relative cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHoveringFrontend(true)}
        onMouseLeave={() => setIsHoveringFrontend(false)}
      >
        <div className="flex space-x-4 sm:flex-nowrap w-max">
          {projectsData.frontend.concat(projectsData.frontend).map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-dark-800 rounded-lg overflow-hidden shadow-md border border-dark-600/80"
              style={{ width: "300px" }}
            >
              <Image src={project.image} alt={project.title} width={300} height={225} className="w-full h-40 object-cover" />
              <div className="p-4 text-left">
                <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                <p className="text-sm text-gray-400 mb-1">{project.description}</p>
                <p className="text-sm text-gray-300 mb-2">{project.techStack.join(", ")}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Backend Projects */}
      <h3 className="text-2xl text-gray-500 font-semibold mt-12 mb-4">Backend Projects</h3>
      <div
        ref={backendCarouselRef}
        className="mt-8 overflow-x-scroll sm:overflow-hidden relative cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHoveringBackend(true)}
        onMouseLeave={() => setIsHoveringBackend(false)}
      >
        <div className="flex space-x-4 sm:flex-nowrap w-max">
          {projectsData.backend.concat(projectsData.backend).map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-dark-800 rounded-lg overflow-hidden shadow-md border border-dark-600/80"
              style={{ width: "300px" }}
            >
              <Image src={project.image} alt={project.title} width={300} height={225} className="w-full h-40 object-cover" />
              <div className="p-4 text-left">
                <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                <p className="text-sm text-gray-400 mb-1">{project.description}</p>
                <p className="text-sm text-gray-300 mb-2">Tech Stack: {project.techStack.join(", ")}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
