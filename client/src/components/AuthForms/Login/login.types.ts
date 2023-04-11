export type LoginData = {
  email: string;
  password: string;
};

export type LoginResponse = {
  login: {
    access_token: string;
  };
};
