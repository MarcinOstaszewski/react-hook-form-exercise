import { useForm } from 'react-hook-form';
import { FormData, UserSchema } from "./FormField/types";
import FormField from './FormField/FormField';
import { Flex } from '../components/Flex/Flex';
import { FormStyled } from './Form.styled';

import { zodResolver } from "@hookform/resolvers/zod";
import { Description } from './Description/Description';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });

  return (
    <FormStyled onSubmit={handleSubmit((data) => {
      console.log('data', data);
    })}>
      <h2>Product form</h2>
      <Flex aligncontent="center" alignitems="center">
        <Flex direction="column" width={"400px"} alignitems="center">
          <FormField
            type="text"
            placeholder="Product Title"
            name="title"
            register={register}
            error={errors.title}
          />

          <Description />
          {/* <textarea {...register("description")} placeholder="Product Description" /> */}

          <input type="submit" />
        </Flex>
      </Flex>
    </FormStyled>
  );
};