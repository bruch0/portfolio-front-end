"use client";

import React from "react";
import { toast as sonnerToast } from "sonner";

/** A fully custom toast that still maintains the animations and interactions. */
function CustomToast(props: ToastProps) {
  const { title, variant } = props;

  const variantClass = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-black",
  };

  return (
    <div
      className={`flex rounded-lg shadow-lg ring-1 ring-black/5 w-full md:max-w-[364px] items-center p-4 ${variantClass[variant]}`}
    >
      <div className="flex flex-1 items-center">
        <div className="w-full">
          <p className="text-base font-medium text-white">{title}</p>
        </div>
      </div>
    </div>
  );
}

export const toast = (toast: Omit<ToastProps, "id">) => {
  return sonnerToast.custom((id) => <CustomToast id={id} {...toast} />, {
    position: "top-center",
  });
};

interface ToastProps {
  id: string | number;
  title: string;
  variant: "success" | "error" | "info";
}
