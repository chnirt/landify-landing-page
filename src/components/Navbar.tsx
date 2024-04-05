import React from "react";
import StaticImage from "./StaticImage";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 flex w-full justify-center backdrop-blur">
      <div className="responsive-container container flex flex-row justify-between py-4 md:py-5 lg:py-5">
        <div className="flex items-center gap-9">
          <Link
            href={"https://www.figma.com/community/file/894552273937682724"}
            target="_blank"
          >
            <div className="max-w-32">{StaticImage.logo}</div>
          </Link>
          <div className="hidden gap-7 text-sm font-semibold text-neutral-900 lg:flex">
            <Link href="#">
              <span>Features</span>
            </Link>
            <Link href="#">
              <span>Pricing</span>
            </Link>
            <Link href="#">
              <span>Careers</span>
            </Link>
            <Link href="#">
              <span>Help</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3">
          <button className="hidden max-w-32 md:flex">
            {StaticImage.googlePlay}
          </button>
          <button className="hidden max-w-32 md:flex">
            {StaticImage.appStore}
          </button>

          <button className="flex h-10 w-10 items-center justify-center text-neutral-900 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
