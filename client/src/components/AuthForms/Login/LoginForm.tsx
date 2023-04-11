import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./login.schema";

import { loginMutation } from "../../../apollo/mutations/login.mutation";
import { LoginData, LoginResponse } from "./login.types";
import InputGroup from "../../Inputs/InputGroup";
import Button from "../../Button/Button";

function LoginForm() {
  const navigate = useNavigate();

  const [logIn, { loading }] = useMutation<LoginResponse>(loginMutation);

  const defaultValues = {
    email: "",
    password: "",
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData: LoginData) => {
    try {
      const { data } = await logIn({
        variables: {
          ...formData,
        },
      });
      if (data) {
        localStorage.setItem("token", data.login.access_token);
        navigate("/");
        toast("Logged in!");
      }
    } catch (err: any) {
      toast(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white text-xl mb-2.5">Login</h2>
      <InputGroup
        label="Email"
        name="email"
        placeholder="E-mail"
        register={register}
        error={errors.email?.message}
      />
      <InputGroup
        type="password"
        label="Password"
        name="password"
        placeholder="Password"
        register={register}
        error={errors.password?.message}
      />
      <Button
        type="submit"
        size="sm"
        onClick={handleSubmit(onSubmit)}
        isLoading={loading}
      >
        Log in
      </Button>
    </div>
  );
}

export default memo(LoginForm);
