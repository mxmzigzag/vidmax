import React from "react";

import { safePaddingStyles } from "../../constants/styles";

import NavBar from "../NavBar/NavBar";

import LogoIcon from "../../assets/icons/logo";

const EMAIL = "info@vidmax.com";
const PHONE_NUMBER = "+380932817549";

export default function Footer() {
  return (
    <footer className="mt-14 py-10 bg-vBlack">
      <div className={`flex flex-col ${safePaddingStyles}`}>
        <div className="flex items-center justify-between mb-10">
          <div className="flex-1">
            <LogoIcon />
          </div>
          <NavBar />
          <div className="flex flex-1 justify-end text-white ">
            social links
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex-1"></div>
          <div className="flex flex-1 flex-col items-center">
            <a href={`mailto:${EMAIL}`} className="text-base text-white mb-1">
              {EMAIL}
            </a>
            <a href={`callto:${PHONE_NUMBER}`} className="text-base text-white">
              {PHONE_NUMBER}
            </a>
          </div>
          <div className="flex flex-1 justify-end">
            <p className="text-sm text-white">
              © 2023 private property of mxmzigzag
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
