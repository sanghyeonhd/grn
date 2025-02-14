
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 섹션 */}
      <div className="relative h-[40vh]">
        <img 
          src="/public/lovable-uploads/236cc52b-886b-440d-a738-4c442393f3f4.png"
          alt="2025 Calendar"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl font-bold">2025</h1>
          <h2 className="text-xl">Calender</h2>
          <p className="mt-2">1월 뉴스레터에서 신청하세요</p>
        </div>
      </div>

      {/* 네비게이션 메뉴 */}
      <nav className="flex justify-around py-4 border-b">
        {['JOURNAL', 'EVENT', 'AWARDS', 'STORES'].map((item) => (
          <button 
            key={item}
            onClick={() => navigate(`/${item.toLowerCase()}`)}
            className="text-sm font-medium text-gray-600"
          >
            {item}
          </button>
        ))}
      </nav>

      {/* 브랜드샵 섹션 */}
      <section className="px-4 py-6">
        <h3 className="text-sm mb-4">BRAND SHOP</h3>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-black text-white rounded-full text-sm">
            GRANHAND
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
            houga
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-sm">
            Comfortable coffee
          </button>
        </div>
      </section>

      {/* 컨텐츠 목록 */}
      <section className="px-4 space-y-4">
        <Card 
          className="p-0 overflow-hidden cursor-pointer"
          onClick={() => navigate('/journal/1')}
        >
          <img 
            src="/public/lovable-uploads/5543f85b-0d24-4ab3-a996-08c599742a75.png"
            alt="Sometimes you win sometimes you learn"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-sm text-gray-500 mb-2">하남</p>
            <h3 className="font-medium mb-1">NOLL 놀에 대한 모든 것.</h3>
            <p className="text-xs text-gray-500">2023-07-08 조회 412</p>
          </div>
        </Card>

        <Card 
          className="p-0 overflow-hidden cursor-pointer"
          onClick={() => navigate('/event/1')}
        >
          <img 
            src="/public/lovable-uploads/183e831a-0ce5-4fe8-a07d-3a1388afd6c3.png"
            alt="Calendar event"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-medium mb-1">2024 Calender | 10월 뉴스레터에서 신청하세요</h3>
            <p className="text-xs text-gray-500">2023-07-08</p>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Main;
