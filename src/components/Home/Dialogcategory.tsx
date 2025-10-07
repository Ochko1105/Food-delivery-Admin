"use client";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogCategory() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <img
            src="/icon.png
                
            "
            height={36}
            width={36}
            className="ml-4"
          />
        </DialogTrigger>

        <DialogContent className="sm:max-w-[472px]">
          <DialogHeader>
            <DialogTitle>Add new category</DialogTitle>
          </DialogHeader>

          <div className="flex gap-5 flex-col ">
            {" "}
            <Label htmlFor="name-1">Category name</Label>
            <Input
              id="name-1"
              name="name"
              placeholder="Type category name..."
            />
          </div>
          <DialogFooter className="mt-[36px]">
            <div className="flex-1 flex justify-end">
              <Button type="submit">Add category</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
