import React from "react";
import { NavLink } from "react-router-dom";

import { safePaddingStyles } from "../constants/styles";
import AuthLayout from "../layouts/AuthLayout";
import SignupForm from "../components/AuthForms/Signup/SignupForm";

function Signup() {
  return (
    <AuthLayout>
      <div
        className={`flex flex-1 items-center justify-end ${safePaddingStyles}`}
      >
        <div className="w-full max-w-md rounded-lg bg-vBlack p-5 z-10 shadow-littleWhite">
          <SignupForm />
          <div className="flex flex-col items-center">
            <span className="text-sm font-light text-white mt-4">
              Already have an accound?{" "}
              <NavLink to="/login" className="text-vRed hover:underline">
                Log in!
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Signup;
