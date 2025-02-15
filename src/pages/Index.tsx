import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
const Index = () => {
  return <div className="min-h-screen bg-white">
      {/* 메인 배너 */}
      <div className="relative">
        <img alt="2025 Calendar" className="w-full aspect-[3/4] object-cover" src="/lovable-uploads/0453065a-b312-4957-bacd-f79cfd8999bf.png" />
        <div className="absolute top-[50%] left-6 text-white">
          <h1 className="text-4xl font-bold mb-2">2025<br />Calender</h1>
          <p className="text-base">1월 뉴스레터에서 신청하세요</p>
        </div>
        <div className="absolute bottom-4 right-4 text-white text-sm">
          1/3
        </div>
      </div>

      {/* 네비게이션 메뉴 */}
      <nav className="flex justify-between px-6 py-4 border-b border-gray-200">
        <Link to="/journal" className="text-sm font-medium">JOURNAL</Link>
        <Link to="/event" className="text-sm font-medium">EVENT</Link>
        <Link to="/awards" className="text-sm font-medium">AWARDS</Link>
        <Link to="/stores" className="text-sm font-medium">STORES</Link>
      </nav>

      {/* 브랜드 숍 */}
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

      {/* 바텀 배너 */}
      

      {/* 저널 리스트 */}
      
    </div>;
};
export default Index;