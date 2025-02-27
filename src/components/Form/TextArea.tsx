import { useController, useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { BaseTextarea } from "@/components/ui/textarea";

type TextAreaProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};
export const TextArea = ({
  name,
  defaultValue,
  label,
  placeholder,
  disabled,
  className,
}: TextAreaProps) => {
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
        <FormItem>
          {label && <FormLabel className="text-lg">{label}</FormLabel>}
          <FormControl>
            <BaseTextarea
              className={`${className} resize-none`}
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
