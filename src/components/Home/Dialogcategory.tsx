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

import { useState } from "react";

export function DialogCategory() {
  const [newName, setNewName] = useState("");

  async function createNewTask() {
    if (!newName) {
      alert("hooson baina");
      return;
    }

    await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newName }),
    });

    setNewName("");
  }

  return (
    <Dialog>
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
            value={newName}
            placeholder="Type category name..."
            onKeyDown={(e) =>
              e.key === "Enter" &&
              (createNewTask(), alert("Amjilttai ilgeele refresh hiinuu"))
            }
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <DialogFooter className="mt-[36px]">
          <div className="flex-1 flex justify-end">
            <Button
              onClick={() => (createNewTask(), alert("Daragdlaa"))}
              type="submit"
            >
              Add category
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
