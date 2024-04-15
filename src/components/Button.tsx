import React, { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}

const sizes: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary/70",
  outline: "text-primary ring-primary hover:ring-1",
};

export const Button = ({ variant, children, className, ...rest }: Props) => {
  const buttonContainerClass =
    "rounded-lg px-6 py-4 transition-colors flex flex-row gap-2";
  const buttonTextClass = "text-base font-semibold";
  const buttonClasses = [buttonContainerClass, buttonTextClass].join(" ");
  const variantClasses = sizes[variant];

  return (
    <button
      className={[buttonClasses, variantClasses, className].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
};
