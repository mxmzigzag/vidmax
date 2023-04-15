import { AuthResponse } from "../Login/login.types";

export type SignupData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export type SignupResponse = {
  signup: AuthResponse;
};
