"use client";
import FooterNav from "@/components/FooterNav";
import WithAuthorization from "@/components/hoc/AuthUser";
import NavBar from "@/components/NavBar";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center overflow-y-auto overflow-x-hidden">
      <NavBar />
      {children}
      <FooterNav />
    </div>
  );
};

export default WithAuthorization(layout, ["Admin", "Super Admin"]);
