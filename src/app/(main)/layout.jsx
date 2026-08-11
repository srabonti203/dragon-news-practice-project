import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import BreakingNews from "@/components/shared/BreakingNews";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default MainLayout;
