import React from "react";
import { useParams } from "react-router-dom";

function Cabinet() {
  const { userId } = useParams();
  return <div>Cabinet: {userId}</div>;
}

export default Cabinet;
