import React from "react";
import StaticImage from "./StaticImage";

const LogoClouds = () => {
  return (
    <div className="flex justify-center py-3">
      <div className="container border-b-[1px] border-t-[1px] border-neutral-200 py-6">
        <div className="responsive-container grid min-h-14 grid-cols-2 items-center gap-16 md:grid-cols-4 lg:grid-flow-col lg:grid-cols-none">
          <div className="flex h-7 justify-center">{StaticImage.airbnb}</div>
          <div className="flex h-7 justify-center">{StaticImage.hubSpot}</div>
          <div className="flex h-7 justify-center">{StaticImage.google}</div>
          <div className="flex h-7 justify-center">{StaticImage.microsoft}</div>
          <div className="flex h-7 justify-center md:col-start-2">
            {StaticImage.walmart}
          </div>
          <div className="flex h-7 justify-center">{StaticImage.fedEx}</div>
        </div>
      </div>
    </div>
  );
};

export default LogoClouds;
