import React from "react";
import { safePaddingStyles } from "../constants/styles";
import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/AuthForms/Login/LoginForm";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <AuthLayout>
      <div
        className={`flex flex-1 items-center justify-end ${safePaddingStyles}`}
      >
        <div className="w-full max-w-md rounded-lg bg-vBlack p-5 z-10 shadow-littleWhite">
          <LoginForm />
          <div className="flex flex-col items-center">
            <span className="text-sm font-light text-white mt-4">
              Don't have an account?{" "}
              <NavLink to="/signup" className="text-vRed hover:underline">
                Sign up!
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Login;
