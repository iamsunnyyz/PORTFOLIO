"use client";
import React, { useEffect, useRef } from "react";

const SpotlightEffect: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed rounded-full pointer-events-none z-0"
      style={{
        width: "600px",  // Set custom width
        height: "600px", // Set custom height
        background: "radial-gradient(circle, rgba(2, 52, 128, 0.3) 0%, rgba(255, 255, 255, 0) 70%)",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default SpotlightEffect;
