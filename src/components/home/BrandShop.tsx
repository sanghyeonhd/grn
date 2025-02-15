
import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const BrandShop = () => {
  return (
    <section className="px-6 py-8">
      <h2 className="text-sm font-medium mb-6">브랜드 숍</h2>
      <div className="flex items-center justify-between">
        <Link to="/granshop" className="flex-1 flex items-end justify-center">
          <img src="/lovable-uploads/66df05bf-51f9-4241-8db3-1d9289f9bd21.png" alt="GRANHAND." className="h-3 w-auto" />
        </Link>
        <Separator orientation="vertical" className="h-6 bg-gray-300" />
        <Link to="/heliotrope" className="flex-1 flex items-center justify-center">
          <img src="/lovable-uploads/e2d45399-1ffd-41f7-b123-c8856c1408d4.png" alt="heiion" className="h-6 w-auto" />
        </Link>
        <Separator orientation="vertical" className="h-6 bg-gray-300" />
        <Link to="/komfortabel" className="flex-1 flex items-center justify-center">
          <img src="/lovable-uploads/64dfd9b8-2894-4518-803c-3b7324c4147a.png" alt="Komfortabel coffee" className="h-6 w-auto" />
        </Link>
      </div>
      <div className="mt-8">
        <Carousel opts={{
          loop: true,
          align: "start"
        }} className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="relative w-[342px] h-[100px]">
                <img src="/lovable-uploads/67278580-3aa3-431e-8df2-daec9a7bedd0.png" alt="ROLAND. GRANHAND." className="w-full h-full object-cover" />
                <div className="absolute top-3 left-4 text-white">
                  <h2 className="text-sm font-medium leading-tight">Sometimes You win<br />Sometimes you learn.</h2>
                </div>
                <div className="absolute bottom-2 right-10 text-white text-xs bg-black/30 px-1.5 py-0.5 rounded">1/3</div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative w-[342px] h-[100px]">
                <img src="/lovable-uploads/67278580-3aa3-431e-8df2-daec9a7bedd0.png" alt="ROLAND. GRANHAND." className="w-full h-full object-cover" />
                <div className="absolute top-3 left-4 text-white">
                  <h2 className="text-sm font-medium leading-tight">Another slide text<br />Goes here.</h2>
                </div>
                <div className="absolute bottom-2 right-10 text-white text-xs bg-black/30 px-1.5 py-0.5 rounded">2/3</div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative w-[342px] h-[100px]">
                <img src="/lovable-uploads/67278580-3aa3-431e-8df2-daec9a7bedd0.png" alt="ROLAND. GRANHAND." className="w-full h-full object-cover" />
                <div className="absolute top-3 left-4 text-white">
                  <h2 className="text-sm font-medium leading-tight">Final slide text<br />Goes here.</h2>
                </div>
                <div className="absolute bottom-2 right-10 text-white text-xs bg-black/30 px-1.5 py-0.5 rounded">3/3</div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default BrandShop;
