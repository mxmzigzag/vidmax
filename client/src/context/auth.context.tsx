import { createContext, memo, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { IUser } from "../types/user.types";
import { AuthResponse } from "../components/AuthForms/Login/login.types";
import { checkTokenQuery } from "../apollo/query/checkToken.query";

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
  id: "0",
  email: "",
  username: "",
  firstname: "",
  lastname: "",
  avatar: "",
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

  const [checkToken] = useLazyQuery(checkTokenQuery);

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

  const checkTokenValidity = async (token: string) => {
    const res = await checkToken({ variables: { token } });
    if (!res.data) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setToken("");
      setUser(defaultUser);
    }
  };

  useEffect(() => {
    checkTokenValidity(token);
  }, []);

  const value = {
    isAuth: Boolean(token),
    token,
    user,
    setAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default memo(AuthProvider);
