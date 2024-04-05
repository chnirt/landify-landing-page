import React from "react";
import StaticImage from "./StaticImage";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center bg-black">
      <div className="container">
        <div className="responsive-container flex min-h-[488px] flex-col justify-center gap-10 md:min-h-[288px] md:flex-row md:items-center md:justify-between md:gap-0 lg:min-h-[288px] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-7">
            {StaticImage.logo2}
            <div className="flex flex-col gap-4">
              <div className="flex gap-6 text-base font-normal text-white">
                <span>Download Now</span>
                <span>License</span>
              </div>
              <div className="grid grid-cols-4 gap-5 text-base font-normal text-white">
                <Link href="#">
                  <span>About</span>
                </Link>
                <Link href="#">
                  <span>Features</span>
                </Link>
                <Link href="#">
                  <span>Pricing</span>
                </Link>
                <Link href="#">
                  <span>News</span>
                </Link>
                <Link href="#">
                  <span>Help</span>
                </Link>
                <Link href="#">
                  <span>Contact</span>
                </Link>
              </div>
            </div>
            <span className="text-sm font-normal text-neutral-300">
              © 2021 Landify UI Kit. All rights reserved
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-lg font-medium text-neutral-300">
              Get the App
            </span>
            <div className="flex flex-col gap-3">
              <button>{StaticImage.googlePlay}</button>
              <button>{StaticImage.appStore}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
