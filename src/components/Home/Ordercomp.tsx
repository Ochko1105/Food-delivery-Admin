import React from "react";
import Dishescategory from "./Dishescategory";
import { DialogDemo } from "./Dialog";
import Foodcontainer from "./Foodcontainer";

const Ordercomp = ({ title }: { title: any }) => {
  return (
    <div>
      {" "}
      <div className="bg-[#FFFFFF] mt-[24px] ml-[24px] max-w-[1440px] ">
        {" "}
        <div className="pt-4 pl-4 font-bold">
          {title} ({Array.length})
        </div>
        <div className="flex gap-7 flex-wrap w-[1440px] ml-[24px] ">
          {" "}
          <DialogDemo title={title}></DialogDemo>
          {Array.from({ length: 6 }).map((_, index) => (
            <Foodcontainer
              key={index}
              title="Grilled chicken cobb salad"
              price="12.99"
            ></Foodcontainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ordercomp;
