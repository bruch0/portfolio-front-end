import React, { ReactElement } from "react";

import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

interface DialogArgs {
  title: string;
  description: string;
  trigger: ReactElement;
  cancelText: string;
  confirmText: string;
  confirmFunction: () => void;
}

export const Dialog = ({
  description,
  title,
  trigger,
  cancelText,
  confirmText,
  confirmFunction,
}: DialogArgs) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>{cancelText}</AlertDialogCancel>
        <AlertDialogAction onClick={confirmFunction}>
          {confirmText}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);
