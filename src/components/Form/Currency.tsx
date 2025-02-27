import { useController, useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { BaseInput } from "@/components/ui/input";

export const formatCurrency = (value: string) => {
  if (!value) return "0,00";

  let numericValue = value.replace(/[^0-9]/g, "");

  numericValue = numericValue.replace(/^0+(?!$)/, "");

  while (numericValue.length < 3) {
    numericValue = `0${numericValue}`;
  }

  const integerPart = numericValue.slice(0, -2);
  const decimalPart = numericValue.slice(-2);

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  );

  return `${formattedIntegerPart},${decimalPart}`;
};

type CurrencyProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};
export const Currency = ({
  name,
  defaultValue,
  label,
  placeholder,
  disabled,
  className,
}: CurrencyProps) => {
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
              value={formatCurrency(String(field.value))}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
