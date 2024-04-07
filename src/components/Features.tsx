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
      <div className="responsive-container container flex flex-col items-center justify-center gap-14 py-12 md:py-0 lg:py-0">
        <InView animateClassName="animate-fade-up">
          <div className="flex max-w-[800px] flex-col items-center gap-7">
            <span className="text-center text-5xl font-bold text-neutral-900">
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
                className="translate-y-full opacity-0"
                animateClassName="translate-y-0 opacity-100 transition-all duration-1000"
              >
                <div
                  className={twMerge(
                    "flex flex-col items-center gap-6",
                    fi === 0 && "delay-0",
                    fi === 1 && "delay-75",
                    fi === 2 && "delay-100",
                    fi === 3 && "delay-150",
                    fi === 4 && "delay-200",
                    fi === 5 && "delay-300",
                  )}
                >
                  {feature?.icon ? (
                    <div className="max-w-8">{feature.icon}</div>
                  ) : null}
                  <div className="flex flex-col items-center gap-4">
                    {feature?.name ? (
                      <span className="text-3xl font-bold text-neutral-900">
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
