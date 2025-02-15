
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"

const FindId = () => {
  const navigate = useNavigate();

  const handlePhoneAuth = () => {
    navigate('/find-id/phone');
  };
  
  return (
    <div className="min-h-screen bg-[#FDFBF4] px-4 py-6">
      <header className="mb-10">
        <div className="flex flex-col gap-1">
          <button onClick={() => navigate(-1)} className="text-2xl w-fit">&lt;</button>
          <h1 className="text-2xl font-medium">아이디 찾기</h1>
        </div>
        <p className="text-sm font-normal text-gray-600 mt-3">
          휴대폰 본인인증을 통해 아이디(이메일)를 확인합니다.
        </p>
      </header>

      <div className="space-y-6">
        <div className="bg-[#F9F9F9] p-5 space-y-2.5 mt-8 rounded-none">
          <p className="text-[13px] text-gray-600">• SNS 계정으로 가입하신 회원님은 아이디 찾기가 불가능합니다.</p>
          <p className="text-[13px] text-gray-600">• 가입하신 계정이 기억나지 않을 경우 hello@granhand.com으로 문의 하시기 바랍니다.</p>
        </div>

        <Button 
          onClick={handlePhoneAuth}
          className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-[52px] mt-12 text-base font-normal"
        >
          본인인증 하기
        </Button>
      </div>
    </div>
  );
};

export default FindId;
