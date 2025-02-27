import { useState } from "react";
import { useController, useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { BaseInput } from "@/components/ui/input";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

type TextImageProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};
export const ImageUpload = ({
  name,
  defaultValue,
  label,
  placeholder,
  disabled,
  className,
}: TextImageProps) => {
  const [selectedImage, setSelectedImage] = useState();
  const { control } = useFormContext();

  const { field } = useController({
    name,
    control,
    defaultValue,
  });

  //@ts-expect-error - Typagem gera erros com a prop onChange do Input
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }

    field.onChange(e);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem className="pointer">
          {label && <FormLabel className="text-lg">{label}</FormLabel>}
          <FormControl>
            <BaseInput
              type="file"
              accept="image/*"
              className={className}
              disabled={disabled}
              placeholder={placeholder}
              {...field}
              onChange={imageChange}
            />
          </FormControl>
          <AspectRatio ratio={16 / 15.2} className="bg-muted">
            {selectedImage && (
              <Image
                src={URL.createObjectURL(selectedImage)}
                alt="Thumb"
                fill
                className="h-full w-full rounded-md object-cover"
              />
            )}
          </AspectRatio>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
