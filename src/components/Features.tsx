import React from "react";
import Image from "next/image";
import StaticImage from "./StaticImage";

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
    <div className="flex min-h-dvh justify-center">
      <div className="responsive-container container flex flex-col items-center justify-center gap-14 py-12 md:py-0 lg:py-0">
        <div className="flex max-w-[800px] flex-col items-center gap-7">
          <span className="text-center text-5xl font-bold text-neutral-900">
            Tailor-made features
          </span>
          <span className="text-center text-lg font-normal text-neutral-900">
            Lorem ipsum is common placeholder text used to demonstrate the
            graphic elements of a document or visual presentation.
          </span>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, fi) => (
              <div
                key={["feature", fi].join("-")}
                className="flex flex-col items-center gap-6"
              >
                {feature?.icon ? (
                  <div className="h-8">{feature.icon}</div>
                ) : null}
                <div className="flex flex-col items-center gap-4">
                  {feature?.name ? (
                    <span className="text-3xl font-bold text-neutral-900">
                      {feature.name}
                    </span>
                  ) : null}
                  <span className="text-base font-normal text-neutral-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    erat nibh tristique ipsum.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
