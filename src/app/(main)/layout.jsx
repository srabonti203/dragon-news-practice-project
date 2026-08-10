import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import BreakingNews from "@/components/shared/BreakingNews";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default MainLayout;
