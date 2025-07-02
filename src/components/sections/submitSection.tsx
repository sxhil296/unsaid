"use client";
import { useState } from "react";

import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

const colors = [
  // Row 1
  "#FFFFFF",
  "#C0C0C0",
  "#808080",
  "#000000",
  // Row 2
  "#FF8000",
  "#FFFF00",
  "#F5DEB3",
  "#8B4513",
  // Row 3
  "#C0C0C0",
  "#20B2AA",
  "#87CEEB",
  "#00BFFF",
  // Row 4
  "#8A2BE2",
  "#9370DB",
  "#9999CC",
  "#D8BFD8",
  // Row 5
  "#8B0000",
  "#FF0000",
  "#FF4500",
  "#FFA07A",
  // Row 6
  "#808000",
  "#008000",
  "#32CD32",
  "#90EE90",
  // Row 7
  "#0000FF",
  "#4169E1",
  "#8B4B8B",
  "#483D8B",
  // Row 8
  "#FFB6C1",
  "#FF69B4",
  "#FF1493",
  "#DEB887",
];

const initialFormState = {
  to: "",
  message: "",
  bgColor: "#000",
  textColor: "#fff",
};


export default function SubmitSection() {
  const [formState, setFormState] = useState(initialFormState);
  const [msgBg, setMsgBg] = useState("#000");
  const [msgColor, setMsgColor] = useState("#fff");
  function getContrastYIQ(hex: string): string {
    hex = hex.replace("#", "");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "#000000" : "#FFFFFF";
  }
  const handleColorSelect = (color: string) => {
    setMsgBg(color);
    setMsgColor(getContrastYIQ(color));
  };
  return (
    <section className="flex flex-col items-center justify-center bg-background px-5 mt-32">
      <div className="mx-auto w-full max-w-[600px]">
        <h2 className="text-3xl sm:text-5xl font-heading text-foreground text-center">
          Share Your Unsaid Words
        </h2>
        <form className="mt-8 flex flex-col sm:flex-row gap-4 w-full">
          {/* left */}
          <div className="w-full sm:w-[60%] border-4 border-black p-4 bg-secondary-background">
            <div className="flex gap-2 justify-start items-center ">
              <Label htmlFor="to" className="text-lg">
                To:
              </Label>
              <input
                type="text"
                id="to"
                className="bg-transparent border-none outline-none ring-none"
              />
            </div>
            <textarea
              id="message"
              rows={10}
              className="w-full mt-2 p-2 border-none outline-none ring-none text-lg font-medium"
              placeholder="Write your message here..."
              style={{ backgroundColor: msgBg, color: msgColor }}
            />
          </div>
          {/* colors */}
          <div className="w-full sm:w-[40%] h-full">
            <div className="grid grid-cols-6 place-items-center  sm:grid-cols-4 gap-2 h-full ">
              {colors.map((color, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-10 h-10 border-2 border-black hover:scale-110 transition-transform cursor-pointer`}
                  style={{ backgroundColor: color }}
                  title={color}
                  onClick={() => handleColorSelect(color)}
                />
              ))}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
