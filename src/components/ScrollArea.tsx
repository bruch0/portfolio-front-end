import React, { PropsWithChildren } from "react";

import { BaseScrollArea } from "./ui/scroll-area";

interface ScrollAreaArgs {
  className?: string;
}

export const ScrollArea = ({
  className,
  children,
}: PropsWithChildren<ScrollAreaArgs>) => (
  <BaseScrollArea className={className}>{children}</BaseScrollArea>
);
