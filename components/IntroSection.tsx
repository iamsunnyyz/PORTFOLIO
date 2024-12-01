"use client";
import React, { useState, useEffect } from "react";

const IntroSection: React.FC = () => {
  const words = ["Software Engineer", "Developer", "Coder", "Designer", "Youtuber", "Traveler"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [scrambledWord, setScrambledWord] = useState(words[0]);
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+[]{}|;:,./<>? ";

  const totalDuration = 5000; // 5 seconds
  const scrambleDuration = totalDuration - 3000; // 2 seconds for scrambling

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, totalDuration);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words.length]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const scramble = () => {
      const currentWord = words[currentWordIndex];
      if (!currentWord) return;

      const updateScrambledWord = () => {
        let newWord = "";
        for (let i = 0; i < currentWord.length; i++) {
          newWord += getRandomCharacter();
        }
        setScrambledWord(newWord);
      };

      clearInterval(intervalId);
      intervalId = setInterval(updateScrambledWord, 50); // Scramble every 50ms

      setTimeout(() => {
        setScrambledWord(currentWord); // Show actual word after scrambling
        clearInterval(intervalId); // Stop scrambling
      }, scrambleDuration);
    };

    scramble();

    return () => clearInterval(intervalId);
  }, [currentWordIndex, scrambleDuration]);

  const getRandomCharacter = () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  };

  return (
    <section
      id="hero"
      className="py-24 md:py-32 flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0 px-4 sm:px-8 md:px-16 lg:px-48"
    >
      <p className="font-mono text-xs sm:text-sm md:text-base text-accent" style={{ opacity: 1, transform: "none" }}>
        Hi, my name is
      </p>

      <div className="max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
        <h1 className="capitalize mb-2 leading-[1.1]" style={{ opacity: 1, transform: "none", color: "var(--text-color)" }}>
          Sunny Chauhan.
        </h1>

        <h1 className="leading-[1.2]" style={{ opacity: 1, transform: "none" }}>
          <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl text-gray-500">
            <span className="scramblingText_text">{scrambledWord}</span>
          </div>
        </h1>
      </div>

      <p
        className="max-w-xl text-sm sm:text-base md:text-lg text-gray-500"
        style={{ opacity: 1, transform: "none" }}
      >
        I&#39;m a passionate Full-Stack Web developer having a strong background in implementing key functionalities,
        including Blockchain Technologies and Artificial Intelligence into websites.
      </p>

      <p className="font-mono text-xs sm:text-sm md:text-base text-accent" style={{ opacity: 1, transform: "none" }}>
        Currently, I am open to work.
      </p>

      <span style={{ opacity: 1, transform: "none" }}>
        <a
          className="text-sm p-4 border-2 block w-fit font-mono capitalize rounded border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150 cursor-pointer mt-5 xs:mt-8 md:mt-10 md:hidden"
          target="_blank"
          rel="noopener noreferrer"
          href="/resume.pdf"
        >
          see my resume
        </a>
      </span>
    </section>
  );
};

export default IntroSection;
