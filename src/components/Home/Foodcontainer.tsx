import React from "react";

const Foodcontainer = ({ title, price,image,comment }: { price: string| number; title: string ,image:string,comment:string}) => {
  return (
    <div className="w-[270px] mt-[20px] border-2 rounded-md">
      <div className="card bg-[#FFFFFF] h-[240px] shadow-sm items-center">
        <div className="mt-[8px] mb-0">
          <img
            height={100}
            width={170}
            src={image}
          />
        </div>

        <div className="card mx-5 mt-2">
          <div className="flex gap-2 mt-0">
            {" "}
            <h2 className="card-title text-red-500 font-normal text-[14px]">
              {title}
            </h2>
            <p>${price}</p>
          </div>

          <p className="text-[12px] mt-2">
        {comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Foodcontainer;
