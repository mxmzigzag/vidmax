import React from "react";
import { useNavigate } from "react-router-dom";

import notFoundImg from "../assets/images/404.jpeg";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-end bg-vBlack min-h-screen p-4 relative">
      <div className="flex flex-col items-center mr-10 z-10">
        <h1 className="text-5xl text-vRed font-rockSalt mb-16 -rotate-6">
          WHY SO SERIOUS?
        </h1>
        <p className="text-lg text-white">
          You didn't suppose to be here,{" "}
          <button className="text-vRed hover:underline" onClick={handleGoBack}>
            go back
          </button>
          , Batsy!
        </p>
      </div>
      <img src={notFoundImg} alt="404" className="absolute inset-0" />
    </div>
  );
}
