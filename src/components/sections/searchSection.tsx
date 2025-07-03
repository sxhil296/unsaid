"use client";
import { colors } from "@/data";

import { useState } from "react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Check, ChevronDown } from "lucide-react";
export default function SearchSection() {
  const [selected, setSelected] = useState<string[]>([]);
  const [tempSelected, setTempSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const toggleColor = (color: string) => {
    setTempSelected((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleApply = () => {
    setSelected(tempSelected);
    setOpen(false);
  };

  const handleReset = () => {
    setTempSelected([]);
  };
  return (
    <div className="bg-secondary-background border border-black my-10 py-2 px-4 h-[56px] flex justify-start items-center ">
      <input
        type="text"
        placeholder="Search by name..."
        className="w-full border-none outline-none ring-none"
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="w-[200px] justify-between rounded-none flex border p-2 items-center text-nowrap"
          >
            {selected.length > 0
              ? `${selected.length} selected`
              : "Apply Filter"}
            <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] max-w-[200px] bg-secondary-background rounded-none mr-[20px] sm:mr-0">
          <div className="mb-2 max-h-[200px] overflow-y-auto">
            <p className="text-sm font-medium px-2 py-1">Colors</p>
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => toggleColor(color)}
                className={`flex w-full items-center px-2 py-1 gap-2 hover:bg-accent ${
                  tempSelected.includes(color) ? "bg-accent" : ""
                }`}
              >
                <span
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="flex-1 text-left text-sm">{color}</span>
                {tempSelected.includes(color) && <Check className="w-4 h-4" />}
              </button>
            ))}
          </div>
          <div className="flex justify-between border-t pt-2 mt-2">
            <Button
              variant="noShadow"
              onClick={handleReset}
              className="rounded-none"
            >
              Reset
            </Button>
            <Button
              onClick={handleApply}
              variant="noShadow"
              className="rounded-none"
            >
              Apply
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
