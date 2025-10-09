"use client";
import { useEffect, useState } from "react";

import { DialogCategory } from "./Home/Dialogcategory";
import Ordercomp from "./Home/Ordercomp";
import { Button } from "./ui/button";

const Alldishescategory = () => {
  const [dishes, setDishes] = useState<{ title: string; id: string }[]>([]);
  function Getdishes() {
    fetch("http://localhost:3000/orders")
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }
  useEffect(() => {
    Getdishes();
  }, []);

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
            {dishes.map(
              (
                dish: { title: string | undefined },
                index: React.Key | null | undefined
              ) => (
                <Button
                  className="bg-white text-black rounded-full border-1 border-black "
                  key={index}
                >
                  {dish.title}
                  <p className="bg-black text-white rounded-full  px-2">
                    {dishes.length}
                  </p>
                </Button>
              )
            )}

            <DialogCategory></DialogCategory>
          </div>
        </div>
      </div>
      {dishes.map(
        (
          dish: { title: string | undefined },
          index: React.Key | null | undefined
        ) => (
          <Ordercomp key={index} title={dish.title}></Ordercomp>
        )
      )}
    </div>
  );
};

export default Alldishescategory;
