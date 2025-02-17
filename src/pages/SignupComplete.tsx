
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"

const SignupComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFBF4] px-4 py-6 flex flex-col">
      <div className="flex w-full h-1 mb-12">
        <div className="w-1/4 bg-gray-200" />
        <div className="w-1/4 bg-gray-200" />
        <div className="w-1/4 bg-gray-200" />
        <div className="w-1/4 bg-[#2C2C2C]" />
      </div>

      <header className="mb-12">
        <h1 className="text-[20px] font-medium text-center">그랭핸드의 회원이 되신 것을 환영합니다!</h1>
      </header>

      <div className="flex-1 space-y-6">
        <div className="space-y-8">
          <div className="flex items-start space-x-3">
            <img src="/lovable-uploads/5a5321d2-296b-4b71-af00-2b9527a71cf8.png" alt="신규가입 혜택" className="w-6 h-6" />
            <p className="text-base">신규 가입 축하 쿠폰 10,000원</p>
          </div>
          <div className="flex items-start space-x-3">
            <img src="/lovable-uploads/5da97eac-1aea-46f6-8ac6-81755733cac1.png" alt="출석체크 혜택" className="w-6 h-6" />
            <p className="text-base">출석 체크만 해도 적립 포인트를 드려요</p>
          </div>
          <div className="flex items-start space-x-3">
            <img src="/lovable-uploads/dd578cb0-8955-40e8-92f4-4f26bf2ecf83.png" alt="포인트 혜택" className="w-6 h-6" />
            <p className="text-base">매일 만나는 행운! 최대 5,000원 포인트</p>
          </div>
          <div className="flex items-start space-x-3">
            <img src="/lovable-uploads/69585518-cff8-431a-8e68-5b3cac16f4e6.png" alt="무료배송 혜택" className="w-6 h-6" />
            <p className="text-base">하나만 구매해도 전 제품 무료 배송</p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <Button
          onClick={() => navigate('/')}
          className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12"
        >
          그랭핸드 시작하기
        </Button>
      </div>
    </div>
  );
};

export default SignupComplete;
