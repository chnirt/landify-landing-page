"use client";

import React from "react";
import StaticImage from "./StaticImage";
import { TypeAnimation } from "react-type-animation";
import InView from "./InView";
import { Typography } from "./Typography";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

const HeroContent = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <div className="min-h-20 sm:min-h-20 md:min-h-28 lg:min-h-32">
          <Typography variant="h1" className="text-neutral-900">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "The easiest way to manage projects",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </Typography>
        </div>
        <div className="min-h-20 sm:min-h-20 md:min-h-20 lg:min-h-24">
          <span className="text-lg font-normal text-neutral-600">
            From the small stuff to the big picture, organizes the work so teams
            know what to do, why it matters, and how to get it done.
          </span>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          variant="primary"
          onClick={() => {
            window.open(
              "https://www.figma.com/community/file/894552273937682724",
              "_ blank",
            );
          }}
        >
          Get Started
        </Button>
        <Button variant="outline">
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
        </Button>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="flex min-h-dvh justify-center bg-[url('../photos/background.webp')] bg-cover bg-center bg-no-repeat">
      <div className="responsive-container container flex flex-col items-center justify-center gap-10 py-20 lg:flex-row lg:gap-8 lg:py-0 lg:pt-0">
        <div className="flex-1">
          <HeroContent />
        </div>

        <div className="flex flex-1 justify-center">
          <InView animateClassName="animate-fade-left">
            <div>{StaticImage.mobile}</div>
          </InView>
        </div>
      </div>
    </section>
  );
};

export default Hero;
