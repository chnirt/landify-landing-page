"use client";

import React from "react";
import { Content } from "./Testimonial";
import StaticImage from "./StaticImage";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

const ACHIEVEMENTS = [
  {
    icon: StaticImage.feature1,
    label: "Downloads per day",
    prefix: null,
    value: 10000,
    suffix: "+",
  },
  {
    icon: StaticImage.feature4,
    label: "Users",
    value: 2,
    suffix: " Million",
  },
  {
    icon: StaticImage.feature5,
    label: "Clients",
    value: 500,
    suffix: "+",
  },
  {
    icon: StaticImage.feature7,
    label: "Countries",
    value: 140,
  },
];

const Achievements = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
      {ACHIEVEMENTS.map((achievement, ai) => (
        <div
          key={["achievement", ai].join("-")}
          className="flex items-center gap-5"
        >
          {achievement?.icon ? (
            <div className="flex max-h-12 max-w-12 items-center justify-center">
              {achievement.icon}
            </div>
          ) : null}
          <div className="flex flex-col">
            {achievement?.value ? (
              <CountUp
                className="text-4xl font-bold text-neutral-900"
                start={0}
                end={achievement.value}
                suffix={achievement.suffix}
                scrollSpyOnce
                scrollSpyDelay={800}
              />
            ) : null}
            {achievement?.label ? (
              <span className="text-base font-normal text-neutral-900">
                {achievement.label}
              </span>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

const Metrics = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <section ref={ref} className="flex justify-center">
      <div className="container">
        <div className="responsive-container flex min-h-[388px] flex-col gap-7 py-14 lg:flex-row lg:items-center">
          <div className="lg:flex-1">
            <div className={twMerge("opacity-0", inView && "animate-fade-right")}>
              <Content
                title="Our 18 years of achievements"
                description="With our super powers we have reached this"
              />
            </div>
          </div>
          <div className="lg:flex-1">
            <div className={twMerge("opacity-0", inView && "animate-fade-left")}>
              <Achievements />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
