
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Main = () => {
  const navigate = useNavigate();
  const bannerItems = [
    {
      id: 1,
      image: "/public/lovable-uploads/5efa3b32-af2d-4af0-9928-c99bfed9e19a.png",
      text: "Sometimes You win,\nSometimes you learn."
    },
    {
      id: 2,
      image: "/public/lovable-uploads/5efa3b32-af2d-4af0-9928-c99bfed9e19a.png",
      text: "Second banner text"
    },
    {
      id: 3,
      image: "/public/lovable-uploads/5efa3b32-af2d-4af0-9928-c99bfed9e19a.png",
      text: "Third banner text"
    }
  ];
  const journalItems = [{
    id: 1,
    image: "/public/lovable-uploads/3bb0ea96-deb8-4824-a935-28d1a109940b.png",
    category: "브랜드",
    title: "NOLL 놀에 대한 모든 것.",
    description: "1월 뉴스레터에서 신청하세요",
    date: "2023-07-08",
    views: 412
  }, {
    id: 2,
    category: "하남",
    title: "NOLL 놀에 대한 모든 것.",
    image: "/public/lovable-uploads/5543f85b-0d24-4ab3-a996-08c599742a75.png",
    date: "2023-07-08",
    views: 412
  }, {
    id: 3,
    category: "브랜드",
    title: "2025 신규 브랜드",
    image: "/public/lovable-uploads/2c8101d5-73d5-41b7-acc5-1dd784aa0ecd.png",
    date: "2023-07-08",
    views: 325
  }, {
    id: 4,
    category: "하남",
    title: "새로운 매장 오픈",
    image: "/public/lovable-uploads/5543f85b-0d24-4ab3-a996-08c599742a75.png",
    date: "2023-07-08",
    views: 287
  }];

  return <div className="min-h-screen bg-[#FDFBF5]">
      {/* 헤더 이미지 섹션 */}
      <div className="relative h-[482px]">
        <img src={journalItems[0].image} alt={journalItems[0].title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-8 left-[7.69%] right-[4.62%]">
          <h1 className="text-[32px] font-bold leading-[42px] text-[#FDFBF5] font-pretendard mb-4">
            NOLL<br />놀에 대한 모든 것.
          </h1>
          <p className="text-[18px] leading-[26px] text-[#FDFBF5] font-pretendard font-normal">
            {journalItems[0].description}
          </p>
        </div>
      </div>

      {/* 네비게이션 메뉴 */}
      <nav className="flex px-6 py-4 bg-[#FDFBF5] shadow-[0px_4px_10px_rgba(0,0,0,0.03)]">
        {['JOURNAL', 'EVENT', 'AWARDS', 'STORES'].map(item => <button key={item} onClick={() => navigate(`/${item.toLowerCase()}`)} className="text-[14px] font-bold text-[#6F6963] leading-[22px] font-pretendard mr-6">
            {item}
          </button>)}
      </nav>

      {/* 브랜드샵 섹션 */}
      <section className="px-6 pt-[37px]">
        <h3 className="text-[14px] font-bold leading-[22px] text-[#6F6963] font-pretendard mb-6">브랜드 숍</h3>
        <div className="flex gap-2 mb-6">
          <button className="h-[50px] bg-[#FDFBF5] rounded-[50px] px-4 flex items-center justify-center">
            <img 
              src="/public/lovable-uploads/c7dcf8c0-da2c-494c-bef0-9742b4053335.png" 
              alt="GRANHAND" 
              className="h-5 object-contain"
            />
          </button>
          <button className="h-[50px] px-4 bg-[#322A24] text-white rounded-[50px] text-sm font-pretendard whitespace-nowrap">
            heiion
          </button>
          <button className="h-[50px] px-4 bg-[#322A24] text-white rounded-[50px] text-sm font-pretendard whitespace-nowrap">
            Komfortabel coffee
          </button>
        </div>
        <div className="flex justify-center">
          <Carousel className="w-[342px]" opts={{ loop: true, align: "start", active: true }}>
            <CarouselContent>
              {bannerItems.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="relative h-[100px] rounded-2xl overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={`Banner ${item.id}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center">
                      <p className="text-[#FDFBF5] text-lg font-bold pl-6 whitespace-pre-line">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* 저널 섹션 */}
      <section className="px-6 pt-8">
        <h3 className="text-[14px] font-bold leading-[22px] text-[#6F6963] font-pretendard mb-4">
          저널
        </h3>
        <div className="space-y-4">
          {journalItems.map(item => <Card key={item.id} className="p-0 overflow-hidden cursor-pointer border-none shadow-none" onClick={() => navigate(`/journal/${item.id}`)}>
              <div className="relative h-[460px]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-16 left-4">
                  <p className="text-[12px] font-bold leading-[20px] text-[#FDFBF5] font-pretendard mb-1">
                    #{item.category}
                  </p>
                  <h3 className="text-[16px] font-bold leading-[24px] text-[#FDFBF5] font-pretendard mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[12px] font-medium leading-[20px] text-[#E9E6E0] font-pretendard">
                    {item.date} {item.views && `조회 ${item.views}`}
                  </p>
                </div>
              </div>
            </Card>)}
        </div>
      </section>
    </div>;
};
export default Main;
