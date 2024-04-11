"use client";

import React, { useState } from "react";
import Link from "next/link";
import StaticImage from "./StaticImage";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Octocat from "./Octocat";

const links = [
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Help",
    href: "/help",
  },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-10 flex w-full flex-col items-end">
      <div className="flex w-full justify-center backdrop-blur">
        <div className="container flex items-center justify-between px-5 py-4 sm:px-5 sm:py-4 md:px-10 md:py-5 lg:px-0 lg:py-5">
          <div className="flex gap-10">
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/");
                setOpen(false);
              }}
              aria-label="logo"
            >
              <div className="max-w-32">{StaticImage.logo}</div>
            </button>

            <div
              className={twMerge(
                "hidden gap-7 text-sm font-semibold text-neutral-900 transition-all lg:flex lg:items-center",
                open &&
                  "absolute left-0 top-0 z-10 flex min-h-dvh w-full flex-1 flex-col items-center justify-center bg-black/50 text-4xl text-white",
              )}
            >
              {[
                ...(open
                  ? [
                      {
                        name: "Home",
                        href: "/",
                      },
                    ]
                  : []),
                ...links,
              ].map((link, li) => {
                const isSelected = link.href === pathname && !open;
                return (
                  <button
                    key={["link", li].join("-")}
                    className={twMerge(
                      "group animate-fade-left",
                      li === 0 && "animate-delay-0",
                      li === 1 && "animate-delay-75",
                      li === 2 && "animate-delay-100",
                      li === 3 && "animate-delay-200",
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      // router.push(link.href);
                      setOpen(false);
                    }}
                    aria-label={link.name}
                  >
                    <span
                      className={twMerge(
                        "transition-all group-hover:text-primary",
                        isSelected && "text-primary",
                      )}
                    >
                      {link.name}
                    </span>
                    <span
                      className={twMerge(
                        "block h-0.5 max-w-0 bg-primary transition-all group-hover:max-w-full",
                        isSelected && "max-w-full",
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="hidden gap-3 md:flex">
              <button className="max-w-32">{StaticImage.googlePlay}</button>
              <button className="max-w-32">{StaticImage.appStore}</button>
            </div>
            <button
              className="z-20 h-10 w-10 items-center justify-center text-neutral-900 transition-all lg:hidden"
              onClick={() => setOpen((prevState) => !prevState)}
              aria-label="hamburger-menu"
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
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
          </div> */}
        </div>
      </div>

      <Link
        href={"https://github.com/chnirt/landify-landing-page"}
        target="_blank"
        aria-label="github"
      >
        <Octocat />
      </Link>
    </nav>
  );
};

export default Navbar;
