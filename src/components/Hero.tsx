import React from "react";
import StaticImage from "./StaticImage";

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <span className="text-6xl font-bold text-neutral-900">
          The easiest way to manage projects
        </span>
        <span className="text-lg font-normal text-neutral-600">
          From the small stuff to the big picture, organizes the work so teams
          know what to do, why it matters, and how to get it done.
        </span>
      </div>

      <div className="flex gap-4">
        <button className="bg-primary hover:bg-primary/70 rounded-lg px-4 py-2 text-base font-semibold text-white transition-all">
          Get Started
        </button>
        <button className="text-primary ring-primary flex flex-row gap-2 rounded-lg px-4 py-2 text-base font-semibold transition-all hover:ring-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
            />
          </svg>
          Watch Video
        </button>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex min-h-dvh justify-center bg-[url('../photos/background.png')] bg-cover bg-center bg-no-repeat">
      <div className="responsive-container container flex flex-col items-center justify-center gap-8 pt-20 lg:flex-row lg:pt-0">
        <div className="flex-1">
          <HeroContent />
        </div>

        <div className="flex flex-1 justify-center">
          <div className="max-w-80">{StaticImage.mobile}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
