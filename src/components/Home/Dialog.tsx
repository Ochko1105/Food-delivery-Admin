"use client";
import { Button } from "@/components/ui/button";

import { FaTrashCan } from "react-icons/fa6";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Textarea } from "../ui/textarea";
import { SelectDemo } from "./Select";
import { useState } from "react";

export function DialogDemo(title: { title: string }) {
  const [pev, setPev] = useState("");
  const handleonimage = (e: any) => {
    const file = e.target.files[0];
    const filepev = URL.createObjectURL(file);
    setPev(filepev);
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            className="h-[240px] w-[270px]  mt-[24px]  outline-dashed outline-3 outline-[#EF4444]"
            variant="outline"
          >
            <div className="flex flex-col items-center">
              {" "}
              <img
                src="/icon.png
                
            "
                height={36}
                width={36}
              />
              <div className="mt-[24px] "> Add a new Dish to {title.title}</div>
            </div>
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[472px]">
          <DialogHeader>
            <DialogTitle>Dishes info</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3 ">
              <div className="flex gap-5 ">
                {" "}
                <Label htmlFor="name-1" className="w-[100px]">
                  Dish Name
                </Label>
                <Input id="name-1" name="name" />
              </div>
            </div>
            <div className="grid gap-5">
              <div className="  flex gap-3 ">
                {" "}
                <Label htmlFor="username-1">Dish category</Label>
                <div className="flex items-center">
                  {" "}
                  <SelectDemo></SelectDemo>
                </div>
              </div>
            </div>
          </div>
          <FieldSet>
            <FieldGroup>
              <Field>
                <div className="flex gap-5">
                  {" "}
                  <div>
                    {" "}
                    <FieldLabel htmlFor="checkout-7j9-optional-comments">
                      Comments
                    </FieldLabel>
                  </div>
                  <Textarea
                    id="checkout-7j9-optional-comments"
                    placeholder="Add any additional comments"
                    className="resize-none"
                  />
                </div>
              </Field>
            </FieldGroup>
          </FieldSet>
          <div className="flex gap-5 ">
            {" "}
            <Label htmlFor="name-1" className="w-[100px]">
              Price
            </Label>
            <Input placeholder="$$$$" id="name-1" name="name" />
          </div>
          <FieldSet>
            <FieldGroup>
              <Field>
                <div className="flex gap-4">
                  {" "}
                  <div>
                    {" "}
                    <FieldLabel
                      htmlFor="checkout-7j9-optional-comments"
                      className="w-fit "
                    >
                      Image
                    </FieldLabel>
                  </div>
                  <div className="ml-10  h-[120px] w-[326px] bg-gray-400 relative flex items-center justify-center">
                    <img
                      className="absolute inset-0 h-full w-full object-contain"
                      src={pev}
                    />
                    <input
                      onChange={(e) => handleonimage(e)}
                      type="file"
                      className=" opacity-0 absolute inset-0"
                    />
                    Add image
                  </div>
                </div>
              </Field>
            </FieldGroup>
          </FieldSet>
          <DialogFooter className="mt-[36px]">
            <div className="flex-1 flex justify-between">
              {" "}
              <div>
                {" "}
                <DialogClose asChild>
                  <Button variant="outline" className="border-red-500 ">
                    <FaTrashCan color="red" />
                  </Button>
                </DialogClose>
              </div>
              <Button type="submit">Save changes</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
