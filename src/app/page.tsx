import Adminlayout from "@/components/Home/Adminlayout";
import { DialogDemo } from "@/components/Home/Dialog";
import { FieldDemo } from "@/components/Home/Field";
import { Input } from "@/components/ui/input";
import React from "react";

const AdminHomepage = () => {
  return (
    <div className="bg-[#F4F4F5]">
      {" "}
      <Adminlayout>
        <DialogDemo></DialogDemo>
      </Adminlayout>
    </div>
  );
};

export default AdminHomepage;
