import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20">
      {/* Hero Section */}
      <section className="flex h-[37rem] justify-center items-center bg-secondary">
        <div className="flex flex-col gap-10">
          <h1 className="text-3xl font-bold leading-tight">
            ХУВЦАС ХЭРЭГСЭЛЭЭ ӨӨРИЙН <br /> ХҮССЭНЭЭР БҮТЭЭЦГЭЭЕ
          </h1>
          <p className="text-lg text-gray-700">
            Онлайн засварлагч ашиглан футболк, цамц <br /> болон бусад
            хэрэгсэлийг өөртөө тааруулан <br /> загварчилаарай
          </p>
          <Button className="rounded-full w-[200px] bg-primary text-white hover:bg-primary/80">
            Загвар үүсгэх
          </Button>
        </div>
        {/* Placeholder for Image/Carousel */}
        <div className="w-[50%] h-[75%] flex flex-col justify-center items-center">
          <div className="w-[25%] h-[50%] bg-gray-400 flex items-center justify-center">
            #
          </div>
          <div className="w-[50%] h-[25%] bg-gray-600 flex items-center justify-center">
            <Carousel>{/* Add actual images or items here */}</Carousel>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="pt-10">
        <div className="flex justify-center">
          <Carousel
            opts={{ align: "start" }}
            className="w-full max-w-screen-xl"
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-[200px] lg:basis-[200px]"
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
      </section>
    </div>
  );
}
