
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"

const FindId = () => {
  const navigate = useNavigate();

  const handlePhoneAuth = () => {
    navigate('/find-id/phone');
  };
  
  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <header className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
        <h1 className="text-xl font-medium">아이디 찾기</h1>
      </header>

      <div className="space-y-6">
        <p className="text-base">
          휴대폰 본인인증을 통해 아이디(이메일)를 확인합니다.
        </p>

        <div className="bg-gray-50 p-4 space-y-2 text-sm text-gray-600 mt-4">
          <p>• SNS 계정으로 가입하신 회원님은 아이디 찾기가 불가능합니다.</p>
          <p>• 가입하신 계정이 기억나지 않을 경우 hello@granhand.com으로 문의 하시기 바랍니다.</p>
        </div>

        <Button 
          onClick={handlePhoneAuth}
          className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12 mt-8"
        >
          본인인증 하기
        </Button>
      </div>
    </div>
  );
};

export default FindId;
