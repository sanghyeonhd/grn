
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"

const SignupComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <header className="mb-12">
        <h1 className="text-2xl font-medium text-center">그랭핸드의 회원이 되신 것을 환영합니다!</h1>
      </header>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">🎉</span>
            <p className="text-base">신규 가입 축하 쿠폰 10,000원</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">💰</span>
            <p className="text-base">출석 체크만 해도 적립 포인트를 드려요</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">❤️</span>
            <p className="text-base">매일 만나는 행운! 최대 5,000원 포인트</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">💬</span>
            <p className="text-base">하나만 구매해도 전 제품 무료 배송</p>
          </div>
        </div>

        <Button
          onClick={() => navigate('/')}
          className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12 mt-8"
        >
          그랭핸드 시작하기
        </Button>
      </div>
    </div>
  );
};

export default SignupComplete;
