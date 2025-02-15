
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 메인 배너 */}
      <div className="relative">
        <img
          src="/lovable-uploads/af93f711-1913-442a-9299-1234e0ea018a.png"
          alt="2025 Calendar"
          className="w-full"
        />
        <div className="absolute top-4 left-4">
          <h1 className="text-2xl font-medium mb-1">2025<br/>Calender</h1>
          <p className="text-sm">1월 뉴스레터에서 신청하세요</p>
        </div>
        <div className="absolute bottom-2 right-2 text-xs">
          1/3
        </div>
      </div>

      {/* 네비게이션 메뉴 */}
      <nav className="flex justify-between px-4 py-3 border-b border-gray-200">
        <Link to="/journal" className="text-sm">JOURNAL</Link>
        <Link to="/event" className="text-sm">EVENT</Link>
        <Link to="/awards" className="text-sm">AWARDS</Link>
        <Link to="/stores" className="text-sm">STORES</Link>
      </nav>

      {/* 브랜드 숍 */}
      <section className="px-4 py-6">
        <h2 className="text-sm mb-4">BRAND SHOP</h2>
        <div className="grid grid-cols-3 gap-3">
          <Link to="/granshop" className="bg-gray-100 rounded-lg py-3 text-center">
            <span className="text-sm">GRANHAND.</span>
          </Link>
          <Link to="/heliotrope" className="bg-gray-100 rounded-lg py-3 text-center">
            <span className="text-sm">helion</span>
          </Link>
          <Link to="/komfortabel" className="bg-gray-100 rounded-lg py-3 text-center">
            <span className="text-sm">Komfortabel coffee</span>
          </Link>
        </div>
      </section>

      {/* 콘텐츠 리스트 */}
      <div className="px-4 space-y-4">
        <div className="relative">
          <img 
            src="/lovable-uploads/2c24b0e5-3019-42e4-a3fa-ec7ac94dc6c9.png" 
            alt="Sometimes You win Sometimes you learn"
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="absolute bottom-2 left-2 text-white">
            <h2 className="text-lg font-medium">Sometimes You win<br/>Sometimes you learn.</h2>
          </div>
          <div className="absolute bottom-2 right-2 text-xs text-white">
            1/3
          </div>
        </div>

        {/* 추가 콘텐츠 아이템들 */}
        <Link to="/article/1" className="block">
          <div className="aspect-[4/3] bg-gray-100 mb-2">
            <img 
              src="/lovable-uploads/29b0770e-1ae6-4e2c-b680-aa6a22207749.png" 
              alt="Article 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-500">취향</div>
            <h3 className="text-sm font-medium">NCLE 제작 대한 모든 것.</h3>
            <div className="text-xs text-gray-500">2023-07-06 5분 읽기</div>
          </div>
        </Link>

        <Link to="/article/2" className="block">
          <div className="aspect-[4/3] bg-gray-100 mb-2">
            <img 
              src="/lovable-uploads/418cc4fd-255d-435e-bc05-32c7e4a05ea7.png" 
              alt="Article 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-500">브랜드</div>
            <h3 className="text-sm font-medium">아로마틱 블렌딩 & 그라모그라프의 포트폴리오 향 Top 10</h3>
            <div className="text-xs text-gray-500">2023-07-08 3분 읽기</div>
          </div>
        </Link>

        <Link to="/article/3" className="block">
          <div className="aspect-[4/3] bg-gray-100 mb-2">
            <img 
              src="/lovable-uploads/0a13436b-8b26-4568-94f5-73f1f0edf708.png" 
              alt="Article 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-500">소식</div>
            <h3 className="text-sm font-medium">포롱테라피 소식지</h3>
            <div className="text-xs text-gray-500">2023-07-08 3분 읽기</div>
          </div>
        </Link>

        <Link to="/article/4" className="block mb-8">
          <div className="aspect-[4/3] bg-gray-100 mb-2">
            <img 
              src="/lovable-uploads/49950af0-c308-4706-9628-6fc190caba7f.png" 
              alt="Article 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-500">이벤트</div>
            <h3 className="text-sm font-medium">One Solution Every Day Off. 2023</h3>
            <div className="text-xs text-gray-500">2023-07-08 4분 읽기</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Index;
