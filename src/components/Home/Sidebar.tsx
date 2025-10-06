import React from "react";
import { Button } from "../ui/button";

const Sidebar = () => {
  return (
    <div className="h-screen w-[205px]">
      <div className="flex gap-2 mt-[36px] mx-5">
        <div>
          <img src="/Logo.png" className="h-10 w-10"></img>
        </div>
        <div>
          {" "}
          <div className="font-bold">NomNom</div>
          <div className="text-[12px] text-[#71717A]">Swift delivery</div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10 items-center">
        <Button className="bg-white text-black w-[165px]">
          <img src="/dashboard.png"></img> Food menu
        </Button>
        <Button className="w-[165px]">
          {" "}
          <img src="/Vector.png"></img>Orders
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
