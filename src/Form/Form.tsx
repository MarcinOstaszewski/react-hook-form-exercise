import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormData } from "./FormField/types";
import FormField from './FormField/FormField';
import { Flex } from '../components/Flex/Flex';
import { FormStyled } from './Form.styled';

export const Form = () => {
  // const { register, handleSubmit } = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();
  const [data, setData] = useState("");

  return (
    <FormStyled onSubmit={handleSubmit((data) => {
      setData(JSON.stringify(data));
      console.log(data);
    })}>
      <h2>Product list</h2>
      <Flex alignContent="center" width="100%" alignItems="center">
        <Flex direction="column" width={"400px"} alignItems="center">
          <FormField
            type="text"
            placeholder="Product Title"
            name="title"
            register={register}
            error={errors.title}
          />
          <textarea {...register("description")} placeholder="Product Description" />

          <p>{data}</p>
          <input type="submit" />
        </Flex>
      </Flex>
    </FormStyled>
  );
};