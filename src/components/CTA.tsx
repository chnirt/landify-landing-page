"use client";

import React from "react";
import { Content } from "./Testimonial";
import StaticImage from "./StaticImage";
import InView from "./InView";

const CTA = () => {
  return (
    <section className="flex justify-center overflow-hidden bg-quaternary">
      <div className="container">
        <div className="responsive-container flex flex-col gap-8 sm:gap-8 md:gap-12 lg:flex-row lg:gap-8 lg:py-0">
          <div className="flex-1">
            <InView animateClassName="animate-fade-down">
              <div className="flex flex-col justify-center gap-14 pt-14 sm:pt-14 md:pt-20 lg:py-28">
                <Content
                  title="Manage all projects from your mobile"
                  description="Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!"
                />
                <div className="flex flex-col gap-3">
                  <span className="text-lg font-medium text-neutral-900">
                    Get the App
                  </span>
                  <div className="flex flex-row gap-4">
                    <button className="max-w-32">
                      {StaticImage.googlePlay}
                    </button>
                    <button className="max-w-32">{StaticImage.appStore}</button>
                  </div>
                </div>
              </div>
            </InView>
          </div>

          <div className="flex flex-col items-center sm:items-center md:flex-row md:items-stretch md:justify-center">
            <div className="max-w-80">
              <InView animateClassName="animate-fade-down">
                {StaticImage.mobile2}
              </InView>
            </div>
            <div className="flex items-end">
              <div className="max-w-80">
                <InView animateClassName="animate-fade-up">
                  {StaticImage.mobile3}
                </InView>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
