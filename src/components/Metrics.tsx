"use client";

import React from "react";
import { Content } from "./Testimonial";
import StaticImage from "./StaticImage";
import CountUp from "react-countup";
import InView from "./InView";
import { Typography } from "./Typography";

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
              <Typography variant="h3" className="text-neutral-900">
                <CountUp
                  start={0}
                  end={achievement.value}
                  suffix={achievement.suffix}
                  enableScrollSpy={true}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </Typography>
            ) : null}
            {achievement?.label ? (
              <Typography variant="body-small" className="text-neutral-900">
                {achievement.label}
              </Typography>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

const Metrics = () => {
  return (
    <section className="flex justify-center">
      <div className="container">
        <div className="responsive-container flex flex-col gap-7 py-12 md:py-20 lg:flex-row lg:items-center lg:py-24">
          <div className="lg:flex-1">
            <InView animateClassName="animate-fade-right">
              <Content
                title="Our 18 years of achievements"
                description="With our super powers we have reached this"
              />
            </InView>
          </div>
          <div className="lg:flex-1">
            <InView animateClassName="animate-fade-left">
              <Achievements />
            </InView>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
