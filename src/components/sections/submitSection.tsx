"use client";
import { useEffect, useState } from "react";

import { Label } from "../ui/label";
import { colors } from "@/data";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Button } from "../ui/button";
import { toast } from "sonner";

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
  const [submitting, setSubmitting] = useState(false);
  const [checked, setChecked] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [remainingHours, setRemainingHours] = useState<number | null>(null);
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

  useEffect(() => {
    const lastSubmitted = localStorage.getItem("lastSubmittedTime");
    if (lastSubmitted) {
      const diff = Date.now() - parseInt(lastSubmitted, 10);
      const hoursPassed = diff / (1000 * 60 * 60);
      if (hoursPassed < 4) {
        setCooldown(true);
        setRemainingHours(Math.ceil(4 - hoursPassed));
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.to.trim() === "") {
      toast.info("Please enter a name.");
      return;
    }
    if (formState.message.trim() === "") {
      toast.info("Please enter a message.");
      return;
    }
    if (formState.message.length < 5) {
      toast.info("Message cannot be less than 5 characters.");
      return;
    }
    if (formState.message.length > 700) {
      toast.info("Message cannot exceed 500 characters.");
      return;
    }

    if (!checked) {
      toast.info("Please agree to the terms and conditions.");
      return;
    }

    try {
      setSubmitting(true);
      const formData = {
        to: formState.to,
        message: formState.message,
        bgColor: msgBg,
        textColor: msgColor,
      };
      console.log("Form submitted:", formData);
      toast.success("Message submitted successfully!");
      setFormState(initialFormState);
      setMsgBg("#000");
      setMsgColor("#fff");
      localStorage.setItem("lastSubmittedTime", Date.now().toString());
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit the message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center bg-background px-5 mt-24 sm:mt-0 mb-12 sm:mb-8 min-h-screen">
      <div className="mx-auto w-full max-w-[600px]">
        <h2 className="text-3xl sm:text-5xl font-heading text-foreground text-center">
          Share Your Unsaid Words
        </h2>
        <form
          className="mt-8 flex flex-col gap-4 w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full h-full">
            {/* left */}
            <div className="w-full sm:w-[60%] border-4 border-black p-4 bg-secondary-background">
              <div className="flex gap-2 justify-start items-center ">
                <Label htmlFor="to" className="text-lg">
                  To:
                </Label>
                <input
                  type="text"
                  placeholder="Enter name..."
                  id="to"
                  name="to"
                  autoComplete="off"
                  value={formState.to}
                  onChange={(e) =>
                    setFormState({ ...formState, to: e.target.value })
                  }
                  className="bg-transparent border-none outline-none ring-none"
                />
              </div>
              <textarea
                id="message"
                rows={10}
                name="message"
                autoComplete="off"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full mt-2 p-2 border-none outline-none ring-none text-lg font-medium"
                placeholder={
                  cooldown
                    ? `You can submit your next message after ${remainingHours} hour${
                        remainingHours !== 1 ? "s" : ""
                      }`
                    : "Write your message here..."
                }
                style={{ backgroundColor: msgBg, color: msgColor }}
                readOnly={cooldown}
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
          </div>

          <div className="flex w-full flex-col justify-center items-center gap-4 sm:gap-8 mt-4 sm:mt-8">
            <div className="flex justify-center items-center gap-2">
              <Checkbox
                checked={checked}
                onCheckedChange={(val) => {
                  setChecked(!!val);
                  if (val) {
                    localStorage.setItem("termsAccepted", "true");
                  } else {
                    localStorage.removeItem("termsAccepted");
                  }
                }}
              />
              <Label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <Link href="/terms-and-conditions">terms and conditions</Link>
              </Label>
            </div>
            <Button
              className="w-full"
              type="submit"
              disabled={submitting || cooldown}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
