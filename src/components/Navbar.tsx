"use client";

import React, { useState } from "react";
import Link from "next/link";
import StaticImage from "./StaticImage";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="fixed top-0 z-10 flex w-full justify-center backdrop-blur">
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

            <button
              className="flex h-10 w-10 items-center justify-center text-neutral-900 transition-all lg:hidden"
              onClick={() => setOpen((prevState) => !prevState)}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={twMerge(
          "fixed left-1/2 top-1/2 z-10 hidden h-full w-full -translate-x-1/2 -translate-y-1/2 bg-black/50 transition-all",
          open && "inline lg:hidden",
        )}
        onClick={() => {
          setOpen(false);
        }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-7 text-xl font-semibold text-neutral-300 backdrop-blur-sm transition-all lg:flex lg:flex-col">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              router.push("#");
              setOpen(false);
            }}
          >
            <span>Features</span>
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              router.push("#");
              setOpen(false);
            }}
          >
            <span>Pricing</span>
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              router.push("#");
              setOpen(false);
            }}
          >
            <span>Careers</span>
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              router.push("#");
              setOpen(false);
            }}
          >
            <span>Help</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
