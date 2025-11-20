import NavBar from "@/components/NavBar";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full flex items-center justify-center">
      <NavBar />
      {children}
    </div>
  );
};

export default layout;
