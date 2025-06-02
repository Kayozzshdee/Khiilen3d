"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ButtonClick from "@/components/buttonClick";
import SizeClick from "@/components/sizeClick";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export default function SearchFilterLayout() {
  const [priceRange, setPriceRange] = useState([5000, 180000]);

  const [toggle, setToggle] = useState(0);
  const reset = () => {
    setToggle(0);
  };
  return (
    <div className="flex flex-col gap-5 border rounded-3xl p-5 border-gray-400 w-[300px] h-[700px]">
      <div className="flex justify-between">
        <h1>Шүүлтүүр</h1>
        <SlidersHorizontal />
      </div>
      <div>
        <div className="flex flex-col w-full">
          <div className="flex gap-1">
            <ButtonClick />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {["Майк", "Өмд", "Малгайтай цамц", "Сорочик", "Поло"].map((item) => (
          <div key={item} className="flex justify-between items-center">
            <Button
              variant="outline"
              className="flex justify-start border-none"
            >
              {item}
            </Button>
          </div>
        ))}
        <div className="w-full max-w-sm">
          <h3 className="font-medium mb-2">Үнийн дүн</h3>

          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={5000}
            max={180000}
            step={5000}
            className="mb-4"
          />

          <div className="flex justify-between text-sm text-gray-500">
            <span>{priceRange[0]}₮</span>
            <span>{priceRange[1]}₮</span>
          </div>
        </div>
        <div>
          <h1>Colors</h1>
          <div className="flex flex-col gap-2">
            <div></div>
            <RadioGroup defaultValue="option-one" className="flex">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  className="bg-green-600"
                />
                <Label htmlFor="option-one"></Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  className="bg-red-700"
                />
                <Label htmlFor="option-one"></Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  className="bg-yellow-500"
                />
                <Label htmlFor="option-one"></Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  className="bg-orange-500"
                />
                <Label htmlFor="option-one"></Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  className="bg-sky-500"
                />
                <Label htmlFor="option-one"></Label>
              </div>
            </RadioGroup>
            <RadioGroup defaultValue="option-one" className="flex">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  className="bg-blue-800"
                />
                <Label htmlFor="option-one"></Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  className="bg-purple-500"
                />
                <Label htmlFor="option-one"></Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  className="bg-pink-600"
                />
                <Label htmlFor="option-one"></Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  className="bg-whiteb"
                />
                <Label htmlFor="option-one"></Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="option-two"
                  id="option-two"
                  className="bg-black "
                />
                <Label htmlFor="option-two"></Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Size</h1>
          <SizeClick />
        </div>
      </div>
      <div className="flex justify-center items-end">
        <Button className="rounded-full w-[135px] bg-primary text-white hover:bg-primary/80  ">
          Хайх
        </Button>
        <Button
          onClick={() => window.location.reload()}
          className="rounded-full w-[135px] bg-primary text-white hover:bg-primary/80  "
        >
          Цэвэрлэх
        </Button>
      </div>
    </div>
  );
}
