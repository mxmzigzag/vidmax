import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { safePaddingStyles } from "../../constants/styles";
import { AuthContext } from "../../context/auth.context";

import NavBar from "../NavBar/NavBar";
import { UserPill } from "../UserPill/UserPill";

import LogoIcon from "../../assets/icons/logo";
import SearchIcon from "../../assets/icons/search";

type Props = {
  isFixed?: boolean;
};

function Header({ isFixed = true }: Props) {
  const { isAuth } = useContext(AuthContext);
  return (
    <header
      className={`flex py-4 bg-transparent z-50 ${safePaddingStyles} ${
        isFixed ? "absolute top-0 left-0 right-0" : ""
      }`}
    >
      <div className="flex items-center text-white text-xl font-bold">
        <NavLink to="/">
          <LogoIcon />
        </NavLink>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <NavBar />
        <button className="text-white text-xl ml-5 mr-10 hover:scale-125 duration-300 transition-all">
          <SearchIcon />
        </button>
        {isAuth ? (
          <UserPill />
        ) : (
          <NavLink
            to="/login"
            className="flex items-center text-base font-bold text-white py-1.5 px-4 bg-vRed rounded-md h-10 hover:bg-vRedLight transition-all"
          >
            Sign In
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
