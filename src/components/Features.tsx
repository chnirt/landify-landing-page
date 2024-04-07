"use client";

import React from "react";
import StaticImage from "./StaticImage";
import { twMerge } from "tailwind-merge";
import InView from "./InView";

const FEATURES = [
  {
    icon: StaticImage.feature1,
    name: "Robust workflow",
  },
  {
    icon: StaticImage.feature2,
    name: "Flexibility",
  },
  {
    icon: StaticImage.feature3,
    name: "User friendly",
  },
  {
    icon: StaticImage.feature4,
    name: "Multiple layouts",
  },
  {
    icon: StaticImage.feature5,
    name: "Better components",
  },
  {
    icon: StaticImage.feature6,
    name: "Well organised",
  },
];

const Features = () => {
  return (
    <section className="flex min-h-dvh justify-center">
      <div className="responsive-container container flex flex-col items-center justify-center gap-12 py-12 sm:gap-11 md:gap-16 md:py-20 lg:gap-16 lg:py-0">
        <InView animateClassName="animate-fade-up">
          <div className="flex max-w-[800px] flex-col items-center gap-7">
            <span className="text-center text-4xl font-bold text-neutral-900 sm:text-4xl md:text-4xl lg:text-5xl">
              Tailor-made features
            </span>
            <span className="text-center text-lg font-normal text-neutral-900">
              Lorem ipsum is common placeholder text used to demonstrate the
              graphic elements of a document or visual presentation.
            </span>
          </div>
        </InView>

        <div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, fi) => (
              <InView
                key={["feature", fi].join("-")}
                className={twMerge(
                  "translate-y-full opacity-0 duration-1000",
                  fi === 0 && "delay-0",
                  fi === 1 && "delay-75",
                  fi === 2 && "delay-100",
                  fi === 3 && "delay-150",
                  fi === 4 && "delay-200",
                  fi === 5 && "delay-300",
                )}
                animateClassName="translate-y-0 opacity-100 transition-all"
              >
                <div className="flex flex-col items-center gap-7 sm:gap-7 md:gap-5 lg:gap-8">
                  {feature?.icon ? (
                    <div className="max-w-8">{feature.icon}</div>
                  ) : null}
                  <div className="flex flex-col items-center gap-5 sm:gap-5 md:gap-4 lg:gap-4">
                    {feature?.name ? (
                      <span className="text-2xl font-bold text-neutral-900 sm:text-2xl md:text-2xl lg:text-3xl">
                        {feature.name}
                      </span>
                    ) : null}
                    <span className="text-base font-normal text-neutral-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed erat nibh tristique ipsum.
                    </span>
                  </div>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
