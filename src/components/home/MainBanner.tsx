
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const MainBanner = () => {
  return (
    <div className="relative">
      <Carousel opts={{ loop: true, align: "start" }} className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="relative">
              <img alt="2025 Calendar" className="w-full aspect-[3/4] object-cover" src="/lovable-uploads/0453065a-b312-4957-bacd-f79cfd8999bf.png" />
              <div className="absolute bottom-12 left-6 text-white">
                <h1 className="text-4xl font-bold mb-8">2025<br />Calender</h1>
                <p className="text-base">1월 뉴스레터에서 신청하세요</p>
              </div>
              <div className="absolute bottom-4 right-4 text-white text-sm">
                1/3
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative">
              <img alt="Brand Story" className="w-full aspect-[3/4] object-cover" src="/lovable-uploads/2c24b0e5-3019-42e4-a3fa-ec7ac94dc6c9.png" />
              <div className="absolute bottom-12 left-6 text-white">
                <h1 className="text-4xl font-bold mb-2">Brand<br />Story</h1>
                <p className="text-base">그랑핸드의 브랜드 이야기</p>
              </div>
              <div className="absolute bottom-4 right-4 text-white text-sm">
                2/3
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative">
              <img alt="Special Gift" className="w-full aspect-[3/4] object-cover" src="/lovable-uploads/88d4aa47-a1b1-4440-8599-18396dfefb7f.png" />
              <div className="absolute bottom-12 left-6 text-white">
                <h1 className="text-4xl font-bold mb-2">Special<br />Gift</h1>
                <p className="text-base">특별한 선물을 준비했어요</p>
              </div>
              <div className="absolute bottom-4 right-4 text-white text-sm">
                3/3
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MainBanner;
