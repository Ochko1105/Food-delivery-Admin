import React from "react";
import Dishescategory from "./Home/Dishescategory";
import { DialogCategory } from "./Home/Dialogcategory";
import Ordercomp from "./Home/Ordercomp";

const Alldishescategory = ({ Category2 }: { Category2: any }) => {
  return (
    <div>
      {" "}
      <div className="h-[176px] w-screen bg-[#FFFFFF] rounded-md ml-[24px] mt-[24px] max-w-[1440px]">
        {" "}
        <div className="pl-[24px]">
          {" "}
          <div className="font-bold text-[20px]  pt-[24px]">
            Dishes category
          </div>
          <div className="mt-[16px] flex gap-2">
            {Category2.map(
              (
                categor: { title: string | undefined },
                index: React.Key | null | undefined
              ) => (
                <Dishescategory
                  key={index}
                  category={categor.title}
                ></Dishescategory>
              )
            )}

            <DialogCategory></DialogCategory>
          </div>
        </div>
      </div>
      {Category2.map(
        (
          categor: { title: string | undefined },
          index: React.Key | null | undefined
        ) => (
          <Ordercomp key={index} title={categor.title}></Ordercomp>
        )
      )}
    </div>
  );
};

export default Alldishescategory;
