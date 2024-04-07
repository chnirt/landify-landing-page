import React from "react";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

const InView = ({
  className,
  animateClassName,
  children,
}: {
  className?: string | undefined;
  animateClassName?: string | undefined;
  children: React.ReactNode;
}) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div
      ref={ref}
      className={twMerge("opacity-0", inView ? animateClassName : className)}
    >
      {children}
    </div>
  );
};

export default InView;
