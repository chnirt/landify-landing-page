"use client"

import React from "react";
import { Content } from "./Testimonial";
import StaticImage from "./StaticImage";
import { twMerge } from "tailwind-merge";
import { useInView } from "react-intersection-observer";

const LogoCloudsV2 = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <section ref={ref} className="flex justify-center">
      <div className="container">
        <div className="responsive-container flex min-h-[388px] flex-col gap-7 py-10 md:flex-row md:py-20 lg:flex-row lg:items-center">
          <div className="lg:flex-1">
            <div className={twMerge("opacity-0", inView && "animate-fade-right")}>
              <Content
                title="Easy integrations with 170+ tools"
                description="Connect Landify with your favourite tools that you use daily and keep things on track."
              />
            </div>
          </div>
          <div className="lg:flex-1">
            <div className="w-full rounded-b-full bg-tertiary px-7 py-6 md:mx-7 md:my-6 lg:px-11 lg:py-10">
              <div className={twMerge("opacity-0", inView && "animate-fade-left")}>
                <div className="grid h-full grid-cols-8 grid-rows-3 gap-1/7">
                  {[
                    {
                      icon: StaticImage.tool1,
                    },
                    {
                      icon: StaticImage.tool2,
                    },
                    {
                      icon: StaticImage.tool3,
                    },
                    {
                      icon: StaticImage.tool4,
                    },
                    {
                      icon: StaticImage.tool5,
                    },
                    {
                      icon: StaticImage.tool6,
                    },
                    {
                      icon: StaticImage.tool7,
                    },
                  ].map((tool, ti) => (
                    <div
                      key={["tool", ti].join("-")}
                      className={twMerge(
                        "col-span-2 row-span-2 flex aspect-square w-full items-center justify-center transition-all hover:scale-110",
                        ti > 3 && "translate-x-full",
                      )}
                    >
                      {tool.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloudsV2;
