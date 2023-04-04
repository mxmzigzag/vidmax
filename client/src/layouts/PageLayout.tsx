import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-vBlack">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
