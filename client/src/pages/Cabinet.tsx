import React, { useContext } from "react";

import { AuthContext } from "../context/auth.context";

import { Roles } from "../types/user.types";

import AdminCabinet from "../components/Cabinets/Admin/AdminCabinet";
import ViewerCabinet from "../components/Cabinets/Viewer/ViewerCabinet";

function Cabinet() {
  const { user } = useContext(AuthContext);

  return user.role === Roles.Admin ? <AdminCabinet /> : <ViewerCabinet />;
}

export default Cabinet;
