import React, { PropsWithChildren } from "react";

export interface TypographyArgs {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
}

export const Typography = ({
  type,
  className,
  children,
}: PropsWithChildren<TypographyArgs>) => {
  switch (type) {
    case "h1":
      return (
        <h1
          role="h1"
          className={`text-3xl sm:text-5xl font-extrabold ${className}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          role="h2"
          className={`text-2xl sm:text-4xl font-extrabold ${className}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 role="h3" className={`text-xl sm:text-3xl font-bold ${className}`}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 role="h4" className={`text-lg sm:text-2xl font-bold ${className}`}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 role="h5" className={`text-base sm:text-xl font-bold ${className}`}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 role="h6" className={`text-sm sm:text-lg font-bold ${className}`}>
          {children}
        </h6>
      );
    case "p":
      return (
        <p role="p" className={`text-gray-500 dark:text-gray-400 ${className}`}>
          {children}
        </p>
      );
  }
};
