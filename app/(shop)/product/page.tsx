"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function page() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-8">
      <div className=" ">
        <div className="flex gap-5">
          <div className="flex flex-col">
            <div className="bg-gray-400 rounded-xl w-[900px] h-[490px]">#</div>
            <div className="flex justify-center">
              <div>
                <div className="scrall">
                  <Carousel
                    className="w-full max-w-sm"
                    opts={{ align: "start" }}
                  >
                    <CarouselContent className="-ml-1">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <CarouselItem
                          key={index}
                          className="md:basis-1/2 lg:basis-1/3"
                        >
                          <div className="p-1">
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-4xl font-semibold">
                                  {index + 1}
                                </span>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-between h-[490px]">
              <div className="font-Poppins">
                <h1>Heading: 123abc</h1>
                <h1>₮ 35,000</h1>
                <div>
                  <div className="">
                    <RadioGroup defaultValue="option-one" className="flex">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="option-one"
                          id="option-one"
                          className="bg-black"
                        />
                        <Label htmlFor="option-one"></Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="option-one"
                          id="option-one"
                          className="bg-white"
                        />
                        <Label htmlFor="option-one"></Label>
                      </div>
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
                          value="option-two"
                          id="option-two"
                          className="bg-red-700"
                        />
                        <Label htmlFor="option-two"></Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex justify-between items-center  bg-gray-300 rounded-full w-[120px] h-[40px]">
                  <Button
                    variant="outline"
                    className="bg-transparent text-black border-none rounded-full"
                    onClick={() => count > 0 && setCount(count - 1)}
                  >
                    -
                  </Button>
                  <p className="text-black">{count}</p>
                  <Button
                    variant="outline"
                    className="bg-transparent text-black border-none rounded-full"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="outline"
                  className="rounded-full  w-[220px] h-[40px] bg-primary text-gray-400"
                >
                  Худалдан авах
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll */}
      <div className="flex justify-center ">
        <h1 className="flex justify-center item-center text-2xl font-semibold  m-10">
          TREND CLOTHES
        </h1>
      </div>
      <div className="flex justify-center item-center">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-screen-lg mx-auto py-6"
        >
          <CarouselContent className="gap-4">
            {Array.from({ length: 20 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/8 min-w-[200px]">
                <div className="p-2">
                  <Card className="rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                    <CardContent className="flex h-[300px] w-[200px] items-center justify-center p-4">
                      <span className="text-2xl font-bold text-gray-700">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-gray-600 hover:text-black" />
          <CarouselNext className="text-gray-600 hover:text-black" />
        </Carousel>
      </div>
    </div>
  );
}
