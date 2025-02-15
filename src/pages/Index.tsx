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
  const navigate = useNavigate();

  const handleCategoryClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    navigate(`/journal?category=${category.toLowerCase()}`);
  };

  return <div className="min-h-screen bg-[#FDFBF4]">
      {/* 메인 배너 */}
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

      {/* 저널 리스트 */}
      <section className="px-6 py-8">
        <h2 className="text-sm font-medium mb-6">저널</h2>
        <div className="space-y-6">
          <Link to="/journal/1" className="block">
            <div className="relative aspect-square mb-4">
              <img 
                src="/lovable-uploads/e599283a-a3a2-4e3a-88b8-9a782e14152f.png" 
                alt="NOLL Store" 
                className="w-full h-full object-cover rounded-sm"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <span 
                  className="text-xs cursor-pointer hover:underline"
                  onClick={(e) => handleCategoryClick(e, 'Team')}
                >#Team</span>
                <h3 className="text-base font-medium mt-1">NOLL 놀에 대한 모든 것.</h3>
                <p className="text-xs mt-1 text-gray-200">2023-07-08 조회 412</p>
              </div>
            </div>
          </Link>

          <Link to="/journal/2" className="block">
            <div className="relative aspect-square mb-4">
              <img 
                src="/lovable-uploads/26818efa-30ea-4335-9455-38183496a890.png" 
                alt="Sometimes you win Sometimes you learn" 
                className="w-full h-full object-cover rounded-sm"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <span 
                  className="text-xs cursor-pointer hover:underline"
                  onClick={(e) => handleCategoryClick(e, 'Team')}
                >#Team</span>
                <h3 className="text-base font-medium mt-1">여름의 끝에서 팀 그랑핸드가 꼽은 최고의 공포영화 Top 10</h3>
                <p className="text-xs mt-1 text-gray-200">2023-07-08 조회 412</p>
              </div>
            </div>
          </Link>

          <Link to="/journal/3" className="block">
            <div className="relative aspect-square mb-4">
              <img 
                src="/lovable-uploads/a773021d-65d3-4dde-bb9b-a24d88982a50.png" 
                alt="Green Circle" 
                className="w-full h-full object-cover rounded-sm"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <span 
                  className="text-xs cursor-pointer hover:underline"
                  onClick={(e) => handleCategoryClick(e, 'Essay')}
                >#Essay</span>
                <h3 className="text-base font-medium mt-1">초록의 고립 속에서</h3>
                <p className="text-xs mt-1 text-gray-200">2023-07-08 조회 412</p>
              </div>
            </div>
          </Link>

          <Link to="/journal/4" className="block">
            <div className="relative aspect-square mb-4">
              <img 
                src="/lovable-uploads/2a0cabfd-61ab-4dbf-be41-3b8c9d808e8f.png" 
                alt="One Second Every Day" 
                className="w-full h-full object-cover rounded-sm"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <span 
                  className="text-xs cursor-pointer hover:underline"
                  onClick={(e) => handleCategoryClick(e, 'Film')}
                >#Film</span>
                <h3 className="text-base font-medium mt-1">One Second Every Day Off, 2023 Summer</h3>
                <p className="text-xs mt-1 text-gray-200">2023-07-08 조회 412</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>;
};

export default Index;
