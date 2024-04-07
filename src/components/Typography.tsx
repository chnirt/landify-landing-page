import React, { ElementType } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "body-small"
  | "small";

interface Props {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
  "body-small": "p",
  small: "span",
};

const sizes: Record<Variant, string> = {
  h1: "text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold", // 36
  h2: "text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold", // 30
  h3: "text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold", // 24
  h4: "text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold", // 20
  h5: "text-lg sm:text-lg md:text-xl lg:text-2xl font-bold", // 18
  body: "text-base sm:text-base md:text-lg lg:text-xl", // 16
  "body-small": "text-sm sm:text-sm md:text-base lg:text-lg", // 14
  small: "text-xs sm:text-xs md:text-sm lg:text-base", // 12

  //   h1: "text-5xl font-bold sm:text-4xl",
  //   h2: "text-4xl font-bold sm:text-3xl",
  //   h3: "text-3xl font-bold sm:text-2xl",
  //   h4: "text-2xl font-bold sm:text-1xl",
  //   h5: "text-xl font-bold sm:text-lg",
  //   body: "text-lg sm:text-md",
  //   "body-small": "text-md sm:text-sm",
  //   small: "text-sm sm:text-xs",
};

export const Typography = ({ variant, children, className, as }: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return <Tag className={[sizeClasses, className].join(" ")}>{children}</Tag>;
};
