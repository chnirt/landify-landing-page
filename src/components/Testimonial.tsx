"use client";

import React from "react";
import StaticImage from "./StaticImage";
import { useInView } from "react-intersection-observer";
import InView from "./InView";
import { Typography } from "./Typography";

export const Content = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-6 sm:gap-6 md:gap-6 lg:gap-7">
    {/* {title ? (
      <span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[60px] tracking-tight text-neutral-900">
        {title}
      </span>
    ) : null} */}
    {title ? (
      <Typography variant="h2" className="text-neutral-900">
        {title}
      </Typography>
    ) : null}
    {/* {description ? (
      <span className="text-base sm:text-base md:text-base lg:text-lg">
        {description}
      </span>
    ) : null} */}
    {description ? (
      <Typography variant="body" className="font-normal text-neutral-900">
        {description}
      </Typography>
    ) : null}
  </div>
);

const Card = ({
  logo,
  content,
  creator,
  role,
}: {
  logo: any;
  content: string;
  creator: string;
  role: string;
}) => {
  return (
    <div className="flex flex-col gap-8 rounded-lg bg-white px-9 py-8 shadow-md sm:gap-8 md:gap-9 lg:gap-8">
      {logo ? <div className="max-w-28">{logo}</div> : null}
      <div className="flex items-start justify-start gap-4 lg:gap-3">
        {StaticImage.smallQuoteMark}
        <div className="flex flex-col gap-9">
          {content ? (
            <span className="text-lg font-normal text-neutral-900">
              {content}
            </span>
          ) : null}
          <div className="flex flex-col gap-3">
            {creator ? (
              <span className="text-lg font-bold text-neutral-900">
                {creator}
              </span>
            ) : null}
            {role ? (
              <span className="text-sm font-normal text-neutral-500">
                {role}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="flex min-h-dvh justify-center bg-secondary/100">
      <div className="container relative flex items-center">
        <div className="absolute left-2 top-12 md:left-5 md:top-16 lg:left-0 lg:top-16">
          {StaticImage.quoteMark}
        </div>

        <div className="responsive-container relative grid gap-8 py-20 lg:grid-flow-col lg:grid-cols-12 lg:py-32">
          <div className="row-span-3 lg:col-start-2 lg:col-end-7">
            <InView animateClassName="animate-fade-right">
              <Content
                title="Real Stories from Real Customers"
                description="Get inspired by these stories."
              />
            </InView>
          </div>
          <div className="lg:col-start-7 lg:col-end-11 lg:row-span-9 lg:row-start-2">
            <InView animateClassName="animate-fade-left">
              <Card
                logo={StaticImage.airbnb}
                content={
                  "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyonecan use it."
                }
                creator={"Jane Cooper"}
                role={"CEO, Airbnb"}
              />
            </InView>
          </div>
          <div className="lg:col-start-3 lg:col-end-7 lg:row-span-12 lg:row-start-5">
            <InView animateClassName="animate-fade-right">
              <Card
                logo={StaticImage.hubSpot}
                content={
                  "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable."
                }
                creator={"Floyd Miles"}
                role={"Vice President, GoPro"}
              />
            </InView>
          </div>
          <div className="lg:col-start-7 lg:col-end-10 lg:row-span-8">
            <InView animateClassName="animate-fade-left">
              <Card
                logo={StaticImage.strapi}
                content={"Landify saved our time in designing my company page."}
                creator={"Kristin Watson"}
                role={"Co-Founder, Strapi"}
              />
            </InView>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
