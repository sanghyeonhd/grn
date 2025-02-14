import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";

const Main = () => {
  const navigate = useNavigate();

  const journalItems = [{
    id: 1,
    image: "/public/lovable-uploads/ad6ff026-1dc4-453b-8e88-0913eb046a87.png",
    category: "브랜드",
    title: "2025 Calender",
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
  }];

  return (
    <div className="min-h-screen bg-[#FDFBF5]">
      {/* 헤더 이미지 섹션 */}
      <div className="relative h-[482px]">
        <img 
          src={journalItems[0].image}
          alt="2025 Calendar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-8 left-[7.69%] right-[4.62%]">
          <h1 className="text-[32px] font-bold leading-[42px] text-[#FDFBF5] font-pretendard mb-4">
            2025<br />Calender
          </h1>
          <p className="text-[18px] leading-[26px] text-[#FDFBF5] font-pretendard font-normal">
            1월 뉴스레터에서 신청하세요
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
        <h3 className="text-[14px] font-bold leading-[22px] text-[#6F6963] font-pretendard mb-6">
          BRAND SHOP
        </h3>
        <div className="flex gap-2">
          <button className="h-[50px] bg-[#322A24] text-white rounded-[50px] text-sm font-pretendard whitespace-nowrap px-[10px]">
            GRANHAND
          </button>
          <button className="h-[50px] bg-[#322A24] text-white rounded-[50px] text-sm font-pretendard whitespace-nowrap px-[10px]">
            heiion
          </button>
          <button className="h-[50px] bg-[#322A24] text-white rounded-[50px] text-sm font-pretendard whitespace-nowrap px-[10px]">
            Komfortabel coffee
          </button>
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
    </div>
  );
};

export default Main;
