import { useController, useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import {
  BaseSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type SelectProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  options: string[];
};
export const Select = ({
  name,
  defaultValue,
  disabled,
  placeholder,
  label,
  options,
}: SelectProps) => {
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
          <BaseSelect
            onValueChange={field.onChange}
            defaultValue={field.value}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option, i) => (
                <SelectItem value={option} key={i}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </BaseSelect>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
