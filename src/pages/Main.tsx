
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";

const Main = () => {
  const navigate = useNavigate();

  const journalItems = [
    {
      id: 1,
      image: "/public/lovable-uploads/a0b924b4-c414-41e8-8e2d-e878cf941a1c.png",
      category: "브랜드",
      title: "2025 Calender",
      description: "1월 뉴스레터에서 신청하세요",
      date: "2023-07-08",
      views: 412
    },
    {
      id: 2,
      category: "하남",
      title: "NOLL 놀에 대한 모든 것.",
      image: "/public/lovable-uploads/5543f85b-0d24-4ab3-a996-08c599742a75.png",
      date: "2023-07-08",
      views: 412
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 이미지 섹션 */}
      <div className="relative h-[50vh]">
        <img 
          src={journalItems[0].image}
          alt="2025 Calendar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-8 left-6 text-white">
          <h1 className="text-3xl font-bold">2025</h1>
          <h2 className="text-2xl mb-2">Calender</h2>
          <p className="text-sm">1월 뉴스레터에서 신청하세요</p>
        </div>
      </div>

      {/* 네비게이션 메뉴 */}
      <nav className="flex justify-around py-4 border-b">
        {['JOURNAL', 'EVENT', 'AWARDS', 'STORES'].map((item) => (
          <button 
            key={item}
            onClick={() => navigate(`/${item.toLowerCase()}`)}
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            {item}
          </button>
        ))}
      </nav>

      {/* 브랜드샵 섹션 */}
      <section className="px-6 py-8">
        <h3 className="text-sm font-medium mb-4">BRAND SHOP</h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-6 py-2.5 bg-black text-white rounded-full text-sm">
            GRANHAND
          </button>
          <button className="px-6 py-2.5 border border-gray-300 rounded-full text-sm">
            heiion
          </button>
          <button className="px-6 py-2.5 border border-gray-300 rounded-full text-sm">
            Komfortabel coffee
          </button>
        </div>
      </section>

      {/* 저널 목록 */}
      <section className="px-6 space-y-6">
        {journalItems.map((item, index) => (
          <Card 
            key={item.id}
            className="p-0 overflow-hidden cursor-pointer border-none shadow-none"
            onClick={() => navigate(`/journal/${item.id}`)}
          >
            <img 
              src={item.image}
              alt={item.title}
              className="w-full aspect-[4/3] object-cover rounded-lg mb-4"
            />
            <div className="space-y-2">
              <p className="text-sm text-gray-500">{item.category}</p>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-xs text-gray-500">
                {item.date} {item.views && `조회 ${item.views}`}
              </p>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Main;
