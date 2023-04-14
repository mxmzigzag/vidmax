export type SignupData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export type SignupResponse = {
  signup: {
    access_token: string;
  };
};
