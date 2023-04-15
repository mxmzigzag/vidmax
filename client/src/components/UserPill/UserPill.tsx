import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

export const UserPill = () => {
  const { user } = useContext(AuthContext);
  return (
    <NavLink
      to={`/cabinet/${user.id}`}
      className="flex items-center bg-vRed rounded-md h-10 overflow-hidden hover:bg-vRedLight transition-all"
    >
      {user.avatar ? (
        <img src="" alt="user-avatar" className="w-10 h-10" />
      ) : (
        <div className="flex items-center justify-center w-10 h-10 bg-violet-600">
          <span className="text-base font-bold text-white uppercase">
            {user.username[0]}
          </span>
        </div>
      )}
      <span className="text-base font-bold text-white mx-2.5">
        {user.username}
      </span>
    </NavLink>
  );
};
