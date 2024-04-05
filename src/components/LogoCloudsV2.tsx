import React from "react";
import { Content } from "./Testimonial";
import StaticImage from "./StaticImage";
import { twMerge } from "tailwind-merge";

const LogoCloudsV2 = () => {
  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="responsive-container flex min-h-[388px] flex-col gap-7 py-10 md:flex-row md:py-20 lg:flex-row lg:items-center">
          <div className="lg:flex-1">
            <Content
              title="Easy integrations with 170+ tools"
              description="Connect Landify with your favourite tools that you use daily and keep things on track."
            />
          </div>
          <div className="lg:flex-1">
            <div className="bg-tertiary w-full rounded-b-full px-7 py-6 md:mx-7 md:my-6 lg:px-11 lg:py-10">
              <div className="gap-1/7 grid h-full grid-cols-8 grid-rows-3">
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
                      "col-span-2 row-span-2 flex aspect-square w-full items-center justify-center",
                      ti > 3 && "translate-x-full",
                    )}
                  >
                    {tool.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="bg-tertiary flex aspect-[2] w-full flex-col justify-between gap-16 rounded-b-full p-8">
              <div className="flex gap-16">
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
                ].map((tool, ti) => (
                  <div key={["tool", ti].join("-")}>{tool.icon}</div>
                ))}
              </div>
              <div className="flex gap-16 px-16">
                {[
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
                  <div key={["tool", ti].join("-")}>{tool.icon}</div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloudsV2;
