import React, { memo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./signup.schema";

import { SignupData, SignupResponse } from "./signup.types";
import { AuthContext } from "../../../context/auth.context";
import { signupMutation } from "../../../apollo/mutations/signup.mutation";
import InputGroup from "../../Inputs/InputGroup";
import Button from "../../Button/Button";

function SignupForm() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const [signUp, { loading }] = useMutation<SignupResponse>(signupMutation);

  const defaultValues = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData: SignupData) => {
    try {
      const { confirmPassword, ...singUpData } = formData;
      const { data } = await signUp({
        variables: {
          ...singUpData,
        },
      });
      if (data) {
        setAuth(data.signup);
        navigate("/");
        toast("Welcome to Vidmax!");
      }
    } catch (err: any) {
      toast(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white text-xl mb-2.5">Sign Up</h2>
      <InputGroup
        label="Email"
        name="email"
        placeholder="E-mail"
        register={register}
        error={errors.email?.message}
      />
      <InputGroup
        label="Username"
        name="username"
        placeholder="Username"
        register={register}
        error={errors.username?.message}
      />
      <InputGroup
        type="password"
        label="Password"
        name="password"
        placeholder="Password"
        register={register}
        error={errors.password?.message}
      />
      <InputGroup
        type="password"
        label="Confirm password"
        name="confirmPassword"
        placeholder="Confirm password"
        register={register}
        error={errors.confirmPassword?.message}
      />
      <Button
        type="submit"
        size="sm"
        onClick={handleSubmit(onSubmit)}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </div>
  );
}

export default memo(SignupForm);
