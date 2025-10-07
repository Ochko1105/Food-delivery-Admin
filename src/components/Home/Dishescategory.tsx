import React from "react";
import { Button } from "../ui/button";

import { DialogCategory } from "./Dialogcategory";

const Dishescategory = ({ category }: { category?: string }) => {
  return (
    <div className="">
      {" "}
      <Button className="bg-white text-black rounded-full border-1 border-black ">
        {category}
        <p className="bg-black text-white rounded-full  px-2">1</p>
      </Button>
    </div>
  );
};

export default Dishescategory;
