import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Adminlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-screen">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Adminlayout;
