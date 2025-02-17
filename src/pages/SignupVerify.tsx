import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"

const SignupVerify = () => {
  const navigate = useNavigate();

  const handleVerification = () => {
    // PASS 본인인증 모듈 연동 로직이 들어갈 자리
    navigate('/signup/complete');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-4 py-6 space-y-4">
        <button onClick={() => navigate(-1)} className="text-2xl">←</button>
        
        <div className="flex w-full h-1">
          <div className="w-2/4 bg-[#2C2C2C]" />
          <div className="w-1/4 bg-[#2C2C2C]" />
          <div className="w-1/4 bg-gray-200" />
        </div>

        <h1 className="text-xl font-medium">본인인증을 진행해 주세요.</h1>
        
        <p className="text-base text-gray-600">안전한 이용을 위해 최초 한 번 본인인증을 진행해요.</p>
      </div>

      <div className="px-4 py-4 mt-auto">
        <Button
          onClick={handleVerification}
          className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12"
        >
          본인인증하고 가입하기
        </Button>
      </div>
    </div>
  );
};

export default SignupVerify;
