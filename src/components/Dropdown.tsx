import React, { ReactElement } from "react";
import { Button, ButtonArgs } from "./Button";
import {
  BaseDropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface DropdownArgs {
  customTrigger?: ReactElement;
  options?: string[];
  disabled?: boolean;
  triggerProps?: ButtonArgs;
}

export const Dropdown = ({
  customTrigger,
  options,
  triggerProps,
  disabled,
}: DropdownArgs) => (
  <BaseDropdownMenu>
    <DropdownMenuTrigger asChild disabled={disabled}>
      {customTrigger ? customTrigger : <Button {...triggerProps} />}
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      {options?.map((option, i) => (
        <DropdownMenuItem key={i}>{option}</DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </BaseDropdownMenu>
);
