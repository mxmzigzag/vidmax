import React from "react";

import Header from "../components/Header/Header";

import BG from "../assets/images/AuthPageBg.jpeg";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-vBlack relative">
      <Header />
      <img src={BG} alt="auth-bg" className="absolute inset-0" />
      {children}
    </div>
  );
}
