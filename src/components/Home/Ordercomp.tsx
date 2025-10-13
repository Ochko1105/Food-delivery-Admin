"use client"
import React, { useEffect, useState } from "react";

import { DialogDemo } from "./Dialog";
import Foodcontainer from "./Foodcontainer";

const Ordercomp = ({ title }: { title: any }) => {
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
 
   type Dish = {
  name: string;
  ingredients: string;
  price: number;
  category: string;
  image: string;
  };

    const [dishes, setDishes] = useState<Dish[]>([]);
  const getDishes = async () => {
    const result = await fetch("http://localhost:4000/api/food");
    const responseData = await result.json();
    console.log({ responseData });
    const { data } = responseData;
    console.log(data);

    setDishes(data);
  };
  useEffect(() => {
      getDishes();
    }, []);
  return (
    <div>
  
      <div className="bg-[#FFFFFF] mt-[24px] ml-[24px] max-w-[1440px] ">
        
        <div className="pt-4 pl-4 font-bold">
          {title}
        </div>
        <div className="flex gap-7 flex-wrap w-[1440px] ml-[24px] ">
          <DialogDemo title={title}></DialogDemo>
          {dishes.name===categories.name && <div>         {dishes.map((dish,index)=>(
           <Foodcontainer
           image={dish.image}
           comment={dish.ingredients}
              key={index}
              title={dish.name}
              price={dish.price}
            ></Foodcontainer>
        ))}</div>}
             {dishes.map((dish,index)=>(
           <Foodcontainer
           image={dish.image}
           comment={dish.ingredients}
              key={index}
              title={dish.name}
              price={dish.price}
            ></Foodcontainer>
        ))}
        </div>
    
      </div>
    </div>
  );
};

export default Ordercomp;
