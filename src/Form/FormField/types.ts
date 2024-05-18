import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export const UserSchema: ZodType<FormData> = z
  .object({
    title: z.string({
      required_error: "required field",
      invalid_type_error: "Title is required",
    }).min(1, { message: 'Product Title is required' }),
    description: z.string()
  })

export type FormData = {
    title: string;
    description: string;
  };

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};


export type ValidFieldNames =
  | "title"
  | "description";