import Navbar from "@/components/Navbar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center py-5 w-10/12 mx-auto">
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default AuthLayout;
