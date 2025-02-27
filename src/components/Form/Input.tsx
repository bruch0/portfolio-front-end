import { useController, useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { BaseInput } from "@/components/ui/input";

type TextInputProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};
export const Input = ({
  name,
  defaultValue,
  label,
  placeholder,
  disabled,
  className,
}: TextInputProps) => {
  const { control } = useFormContext();

  const { field } = useController({
    name,
    control,
    defaultValue,
  });

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem className={className}>
          {label && <FormLabel className="text-lg">{label}</FormLabel>}
          <FormControl>
            <BaseInput
              disabled={disabled}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
