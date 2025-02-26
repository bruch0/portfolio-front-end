import React, { forwardRef, ReactElement } from "react";

import {
  BaseDropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Button, ButtonArgs } from "./Button";

interface DropdownArgs {
  customTrigger?: ReactElement;
  options?: string[];
  disabled?: boolean;
  triggerProps?: ButtonArgs;
}

export const Dropdown = forwardRef(
  ({ customTrigger, options, triggerProps, disabled }: DropdownArgs, ref) => (
    <BaseDropdownMenu>
      <DropdownMenuTrigger asChild disabled={disabled}>
        {customTrigger ? customTrigger : <Button {...triggerProps} ref={ref} />}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {options?.map((option, i) => (
          <DropdownMenuItem key={i}>{option}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </BaseDropdownMenu>
  )
);

Dropdown.displayName = "Dropdown";
