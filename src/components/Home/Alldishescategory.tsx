"use client";
import { useEffect, useState } from "react";

import { DialogCategory } from "./Dialogcategory";
import Ordercomp from "./Ordercomp";
import { Button } from "../ui/button";
import { Badge } from "lucide-react";

const Alldishescategory = () => {
  type Category = {
    _id:string
    name: string;
  };
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    const result = await fetch("http://localhost:4000/api/categories");
    const responseData = await result.json();
    console.log({ responseData });
    const { data } = responseData;
    console.log(data);

    setCategories(data);
  };
  useEffect(() => {
    getCategories();
  }, []);
 
 const Deletebutton = async (id:string) => {
    await fetch("http://localhost:4000/api/categories/delete", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id:id
      }),
    });
  };

  console.log("categore",categories)
  

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
          <div></div>
          <div className="mt-[16px] flex gap-2">
            {categories.map((category, index) => (
              <Button
                className="bg-white text-black rounded-full border-1 border-black "
                key={index}
              >
                {category.name}
                {/* <p className="bg-black text-white rounded-full  px-2">
                  {categories.length}
                </p> */}
                <div className="bg-red-400 rounded-full h-10 w-10 items-center flex justify-center" onClick={()=>Deletebutton(category._id)} >X</div>
              </Button>
            ))}

            <DialogCategory></DialogCategory>
          </div>
        </div>
      </div>
      {categories.map(
        (
          category: { name: string | undefined },
          index: React.Key | null | undefined
        ) => (
          <Ordercomp key={index} title={category.name}></Ordercomp>
        )
      )}
    </div>
  );
};

export default Alldishescategory;
