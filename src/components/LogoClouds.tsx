import React from "react";
import StaticImage from "./StaticImage";
import { twMerge } from "tailwind-merge";

const LOGOS = [
  {
    icon: StaticImage.airbnb,
  },
  {
    icon: StaticImage.hubSpot,
  },
  {
    icon: StaticImage.google,
  },
  {
    icon: StaticImage.microsoft,
  },
  {
    icon: StaticImage.walmart,
  },
  {
    icon: StaticImage.fedEx,
  },
];

const Logo = () => {
  return (
    <div className="grid min-h-14 animate-infinite-scroll grid-cols-2 items-center gap-16 pr-16 md:grid-cols-4 lg:grid-flow-col lg:grid-cols-none">
      {LOGOS.map((logo, li) => {
        const isFourth = li === 4;
        return (
          <div
            key={["logo", li].join("-")}
            className={twMerge(
              "flex max-h-7 justify-center transition-all hover:scale-110",
              isFourth && "md:col-start-2",
            )}
          >
            {logo.icon}
          </div>
        );
      })}
    </div>
  );
};

const Loop = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <div className="absolute w-full -translate-y-full translate-x-full">
        {children}
      </div>
    </>
  );
};

const LogoClouds = () => {
  return (
    <div className="flex justify-center py-3">
      <div className="responsive-container container">
        <div className="overflow-hidden relative border-b-[1px] border-t-[1px] border-neutral-200 py-6">
          <Loop>
            <Logo />
          </Loop>
        </div>
      </div>
    </div>
  );
};

export default LogoClouds;
