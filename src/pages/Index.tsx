
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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
          <Carousel opts={{ loop: true, align: "start" }} className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="relative w-[342px] h-[100px]">
                  <img src="/lovable-uploads/67278580-3aa3-431e-8df2-daec9a7bedd0.png" alt="ROLAND. GRANHAND." className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-4 text-white">
                    <h2 className="text-sm font-medium leading-tight">Sometimes You win<br />Sometimes you learn.</h2>
                  </div>
                  <div className="absolute bottom-2 right-8 text-white text-xs bg-black/30 px-1.5 py-0.5 rounded">1/3</div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative w-[342px] h-[100px]">
                  <img src="/lovable-uploads/67278580-3aa3-431e-8df2-daec9a7bedd0.png" alt="ROLAND. GRANHAND." className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-4 text-white">
                    <h2 className="text-sm font-medium leading-tight">Another slide text<br />Goes here.</h2>
                  </div>
                  <div className="absolute bottom-2 right-8 text-white text-xs bg-black/30 px-1.5 py-0.5 rounded">2/3</div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative w-[342px] h-[100px]">
                  <img src="/lovable-uploads/67278580-3aa3-431e-8df2-daec9a7bedd0.png" alt="ROLAND. GRANHAND." className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-4 text-white">
                    <h2 className="text-sm font-medium leading-tight">Final slide text<br />Goes here.</h2>
                  </div>
                  <div className="absolute bottom-2 right-8 text-white text-xs bg-black/30 px-1.5 py-0.5 rounded">3/3</div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* 바텀 배너 */}
      <div className="relative mb-8">
        <img src="/lovable-uploads/2c24b0e5-3019-42e4-a3fa-ec7ac94dc6c9.png" alt="Sometimes You win Sometimes you learn" className="w-full aspect-[4/3] object-cover" />
        <div className="absolute bottom-6 left-6 text-white">
          <h2 className="text-2xl font-medium">Sometimes You win<br />Sometimes you learn.</h2>
        </div>
        <div className="absolute bottom-4 right-4 text-white text-sm">
          1/3
        </div>
      </div>

      {/* 저널 리스트 */}
      <div className="px-4 space-y-4">
        <Link to="/article/1" className="block">
          <div className="aspect-[4/3] bg-gray-100 mb-2">
            <img src="/lovable-uploads/29b0770e-1ae6-4e2c-b680-aa6a22207749.png" alt="Article 1" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-500">취향</div>
            <h3 className="text-sm font-medium">NCLE 제작 대한 모든 것.</h3>
            <div className="text-xs text-gray-500">2023-07-06 5분 읽기</div>
          </div>
        </Link>

        <Link to="/article/2" className="block">
          <div className="aspect-[4/3] bg-gray-100 mb-2">
            <img src="/lovable-uploads/418cc4fd-255d-435e-bc05-32c7e4a05ea7.png" alt="Article 2" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-500">브랜드</div>
            <h3 className="text-sm font-medium">아로마틱 블렌딩 & 그라모그라프의 포트폴리오 향 Top 10</h3>
            <div className="text-xs text-gray-500">2023-07-08 3분 읽기</div>
          </div>
        </Link>

        <Link to="/article/3" className="block">
          <div className="aspect-[4/3] bg-gray-100 mb-2">
            <img src="/lovable-uploads/0a13436b-8b26-4568-94f5-73f1f0edf708.png" alt="Article 3" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-500">소식</div>
            <h3 className="text-sm font-medium">포롱테라피 소식지</h3>
            <div className="text-xs text-gray-500">2023-07-08 3분 읽기</div>
          </div>
        </Link>

        <Link to="/article/4" className="block mb-8">
          <div className="aspect-[4/3] bg-gray-100 mb-2">
            <img src="/lovable-uploads/49950af0-c308-4706-9628-6fc190caba7f.png" alt="Article 4" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-500">이벤트</div>
            <h3 className="text-sm font-medium">One Solution Every Day Off. 2023</h3>
            <div className="text-xs text-gray-500">2023-07-08 4분 읽기</div>
          </div>
        </Link>
      </div>
    </div>;
};
export default Index;
