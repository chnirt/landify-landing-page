"use client"

import React from "react";
import { Content } from "./Testimonial";
import StaticImage from "./StaticImage";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

const CTA = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <section ref={ref} className="bg-quaternary flex justify-center overflow-hidden">
      <div className="container">
        <div className="responsive-container flex min-h-[558px] flex-col gap-8 pt-14 lg:flex-row lg:py-0">
          <div className="flex flex-1 flex-col justify-center gap-16">
            <div className={twMerge("opacity-0", inView && "animate-fade-down")}>
              <Content
                title="Manage all projects from your mobile"
                description="Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!"
              />
              <div className="flex flex-col gap-4">
                <span className="text-lg font-medium text-neutral-900">
                  Get the App
                </span>
                <div className="flex flex-row gap-3">
                  <button className="max-w-32">{StaticImage.googlePlay}</button>
                  <button className="max-w-32">{StaticImage.appStore}</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-center lg:flex-row lg:items-stretch">
            <div className={twMerge("opacity-0", inView && "animate-fade-down")}>
              <div className="max-w-60">{StaticImage.mobile2}</div>
            </div>
            <div className="flex items-end">
              <div className={twMerge("opacity-0", inView && "animate-fade-up")}>
                <div className="max-w-60">{StaticImage.mobile3}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
