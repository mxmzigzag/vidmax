import { createContext, memo, useState } from "react";
import { IUser } from "../types/user.types";
import { AuthResponse } from "../components/AuthForms/Login/login.types";

interface IAuthContext {
  isAuth: boolean;
  token: string;
  user: IUser;
  setAuth: (auth: AuthResponse) => any;
}

type Props = {
  children: JSX.Element;
};

const defaultUser = {
  id: 0,
  email: "",
  username: "",
  firstname: "",
  lastname: "",
};

export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  token: "",
  user: defaultUser,
  setAuth: () => {},
});

const AuthProvider = ({ children }: Props) => {
  const storageToken = localStorage.getItem("token");
  const storageUser = localStorage.getItem("user");

  const [token, setToken] = useState<string>(storageToken || "");
  const [user, setUser] = useState<IUser>(
    storageUser ? JSON.parse(storageUser) : defaultUser
  );

  const setAuth = (auth: AuthResponse) => {
    localStorage.setItem("token", auth.access_token);
    localStorage.setItem("user", JSON.stringify(auth.user));
    setToken(auth.access_token);
    setUser(auth.user);
  };

  console.log("AUTH CONT:", token, user);

  const value = {
    isAuth: Boolean(token),
    token,
    user,
    setAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default memo(AuthProvider);
