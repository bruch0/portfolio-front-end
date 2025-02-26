import React, { PropsWithChildren } from "react";

export interface TypographyProps {
  className?: string;
  width?: string;
  height?: string;
}

export const Section = ({
  className,
  children,
  height,
  width,
}: PropsWithChildren<TypographyProps>) => (
  <div
    style={{
      width,
      height,
    }}
    className={`rounded-lg border border-[#F4F4F5] shadow-[rgba(0,0,0,0.2)_0px_0_0px_0px,_rgba(0,0,0,0.14)_0px_0px_2px_0px,_rgba(0,0,0,0.12)_0px_0px_15px_0px] ${className}`}
  >
    {children}
  </div>
);
