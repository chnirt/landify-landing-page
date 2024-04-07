"use client";

import React from "react";
import { Content } from "./Testimonial";
import StaticImage from "./StaticImage";
import { twMerge } from "tailwind-merge";
import InView from "./InView";

const LogoCloudsV2 = () => {
  return (
    <section className="flex justify-center">
      <div className="responsive-container container py-11 sm:py-11 md:py-20 lg:py-16">
        <div className="flex flex-col gap-4 border-t-[1px] border-neutral-200 sm:gap-4 md:flex-row lg:flex-row lg:items-center lg:gap-7">
          <div className="py-7 sm:py-7 md:flex-1 md:py-7 lg:flex-1 lg:gap-12">
            <InView animateClassName="animate-fade-right">
              <Content
                title="Easy integrations with 170+ tools"
                description="Connect Landify with your favourite tools that you use daily and keep things on track."
              />
            </InView>
          </div>
          <div className="md:flex-1 lg:flex-1">
            <div className="rounded-b-full bg-tertiary px-7 py-6 lg:px-11 lg:py-10">
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
                    <InView
                      className={twMerge(
                        "scale-0 duration-1000",
                        ti === 0 && "delay-0",
                        ti === 1 && "delay-75",
                        ti === 2 && "delay-100",
                        ti === 3 && "delay-150",
                        ti === 4 && "delay-200",
                        ti === 5 && "delay-300",
                        ti === 6 && "delay-500",
                      )}
                      animateClassName="scale-110 transition-all"
                    >
                      {tool.icon}
                    </InView>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloudsV2;
