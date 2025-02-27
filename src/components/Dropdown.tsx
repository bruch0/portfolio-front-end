import React, { forwardRef, ReactElement } from "react";

import {
  BaseDropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Button, ButtonArgs } from "./Button";

interface DropdownArgs {
  customTrigger?: ReactElement;
  options?: { label: string; onClick?: (args: never) => void }[];
  disabled?: boolean;
  triggerProps?: ButtonArgs;
  dropdownTitle?: string;
}

export const Dropdown = forwardRef(
  (
    {
      customTrigger,
      options,
      triggerProps,
      disabled,
      dropdownTitle,
    }: DropdownArgs,
    ref
  ) => (
    <BaseDropdownMenu>
      <DropdownMenuTrigger asChild disabled={disabled}>
        {customTrigger ? customTrigger : <Button {...triggerProps} ref={ref} />}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {dropdownTitle && (
          <>
            <DropdownMenuLabel>{dropdownTitle}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        {options?.map((option, i) => (
          <DropdownMenuItem key={i} onClick={option.onClick}>
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </BaseDropdownMenu>
  )
);

Dropdown.displayName = "Dropdown";
