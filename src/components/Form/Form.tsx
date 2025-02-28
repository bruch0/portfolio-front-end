"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  PathValue,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z, ZodSchema } from "zod";

import { BaseForm } from "@/components/ui/form";

import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { Select } from "./Select";
import { ImageUpload } from "./Image";
import { Currency } from "./Currency";

type FormProps<T extends FieldValues> = {
  formId?: string;
  onSubmit: SubmitHandler<T>;
  schema: ZodSchema<T>;
  defaultValues?: DefaultValues<T>;
  children:
    | ((props: {
        reset: (values: T) => void;
        setValue: (name: Path<T>, value: PathValue<T, Path<T>>) => void;
        setError: (name: Path<T>, value: PathValue<T, Path<T>>) => void;
        watch: (name: Path<T>) => unknown;
        errors: () => unknown;
      }) => React.ReactNode)
    | React.ReactNode;
};

export const Form = <T extends FieldValues>(props: FormProps<T>) => {
  const { children, onSubmit, formId, schema, defaultValues } = props;

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <BaseForm {...form}>
      <form
        id={formId}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        role="form"
      >
        {typeof children === "function"
          ? children({
              reset: (values) => form.reset(values),
              setValue: (name, value) => form.setValue(name, value),
              setError: (name, value) => form.setError(name, value),
              watch: (name) => form.watch(name),
              errors: () => form.formState.errors,
            })
          : children}
      </form>
    </BaseForm>
  );
};

Form.Input = Input;
Form.TextArea = TextArea;
Form.Currency = Currency;
Form.Select = Select;
Form.Image = ImageUpload;
