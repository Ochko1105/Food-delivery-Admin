import Alldishescategory from "@/components/Alldishescategory";
import Adminlayout from "@/components/Home/Adminlayout";
import { DialogDemo } from "@/components/Home/Dialog";
import Dishescategory from "@/components/Home/Dishescategory";

import Ordercomp from "@/components/Home/Ordercomp";
import { Button } from "@/components/ui/button";

import React from "react";

const AdminHomepage = () => {
  const Category2 = [
    { title: "Appetizers" },
    { title: "Pizzas" },
    { title: "Salad" },
  ];
  return (
    <div className="bg-[#F4F4F5] max-w-[1440px]">
      {" "}
      <Adminlayout
        classname="w-[165px] bg-white text-black"
        classname2="w-[165px] bg-black text-white"
      >
        <Alldishescategory Category2={Category2}></Alldishescategory>
      </Adminlayout>
    </div>
  );
};

export default AdminHomepage;
