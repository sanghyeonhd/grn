
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F9F8F7]">
      {/* 메인 배너 */}
      <div className="relative w-full aspect-[4/5]">
        <img
          src="public/lovable-uploads/0a13436b-8b26-4568-94f5-73f1f0edf708.png"
          alt="2025 Calendar"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-6 text-white">
          <h1 className="text-3xl font-bold mb-2">2025<br/>Calender</h1>
          <p className="text-sm">1월 뉴스레터에서 신청하세요</p>
        </div>
        <div className="absolute bottom-4 right-4 text-white text-sm">
          1/3
        </div>
      </div>

      {/* 네비게이션 메뉴 */}
      <nav className="flex justify-between px-6 py-4 border-b">
        <Link to="/journal" className="text-sm">JOURNAL</Link>
        <Link to="/event" className="text-sm">EVENT</Link>
        <Link to="/awards" className="text-sm">AWARDS</Link>
        <Link to="/stores" className="text-sm">STORES</Link>
      </nav>

      {/* 브랜드 섹션 */}
      <section className="px-6 py-8">
        <h2 className="text-sm mb-6">브랜드 숍</h2>
        <div className="grid grid-cols-3 gap-4">
          <Link to="/granshop">
            <img
              src="/lovable-uploads/a17ca42e-b6f9-4aa8-8bef-3e29fbd53b22.png"
              alt="GRANHAND"
              className="w-full mb-2"
            />
            <span className="text-sm">GRANHAND.</span>
          </Link>
          <Link to="/heliotrope">
            <img
              src="/lovable-uploads/27f9f5a7-09d9-4903-a3d9-014614aaff1e.png"
              alt="helion"
              className="w-full mb-2"
            />
            <span className="text-sm">helion</span>
          </Link>
          <Link to="/komfortabel">
            <img
              src="/lovable-uploads/236cc52b-886b-440d-a738-4c442393f3f4.png"
              alt="Komfortabel coffee"
              className="w-full mb-2"
            />
            <span className="text-sm">Komfortabel coffee</span>
          </Link>
        </div>
      </section>

      {/* 바텀 배너 */}
      <div className="relative w-full aspect-[4/3]">
        <img
          src="/lovable-uploads/2c24b0e5-3019-42e4-a3fa-ec7ac94dc6c9.png"
          alt="Sometimes You win Sometimes you learn"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-6 text-white">
          <h2 className="text-xl font-medium">Sometimes You win<br/>Sometimes you learn.</h2>
        </div>
        <div className="absolute bottom-4 right-4 text-white text-sm">
          1/3
        </div>
      </div>
    </div>
  );
};

export default Index;
