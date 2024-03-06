import React from "react";
import SideNav from "../_components/SideNav";
import TopHeader from "../_components/TopHeader";

const layout = ({ children }) => {
  
  return (
    <div>
      <div className = "hidden md:block h-full z-50 fixed inset-y-0 md:w-64 flex-col">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <TopHeader />
      {children}
      </div>
    </div>
  );
};

export default layout;
