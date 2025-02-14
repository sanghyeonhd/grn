
import React, { useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Splash from '../components/Splash';

const Index = () => {
  const isMobile = useIsMobile();
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <Splash onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 py-6 space-y-6">
        {/* 헤더 */}
        <header className="text-2xl font-bold">
          GRANHAND.
        </header>

        {/* 로그인 폼 */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm">아이디</label>
            <Input 
              type="email" 
              placeholder="이메일을 입력해주세요."
              className="w-full border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm">비밀번호</label>
            <Input 
              type="password" 
              placeholder="비밀번호를 입력해주세요."
              className="w-full border-gray-300"
            />
          </div>

          <Button 
            className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12"
          >
            로그인
          </Button>

          <Button 
            variant="outline"
            className="w-full border-gray-300 rounded-none h-12"
          >
            이메일 회원가입
          </Button>

          <div className="flex justify-center space-x-2 text-sm text-gray-500">
            <button className="hover:underline">아이디 찾기</button>
            <span>|</span>
            <button className="hover:underline">비밀번호 찾기</button>
          </div>

          {/* 소셜 로그인 */}
          <div className="pt-4">
            <p className="text-center text-sm text-gray-500 mb-4">간편 로그인</p>
            <div className="flex justify-center space-x-4">
              <button className="w-10 h-10">
                <img src="/public/lovable-uploads/6f4cb4c7-7087-4c4d-ac4a-7a8a9591edb2.png" alt="Apple" className="w-full" />
              </button>
              <button className="w-10 h-10">
                <img src="/public/lovable-uploads/9a46f8c3-c0e0-480f-84ea-85c9fbcf3ee1.png" alt="Naver" className="w-full" />
              </button>
              <button className="w-10 h-10">
                <img src="/public/lovable-uploads/a6f9138a-d672-46fe-85f6-0c2bf8162c97.png" alt="Kakao" className="w-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
