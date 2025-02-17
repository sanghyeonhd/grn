
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"

const FindIdResult = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-[#FDFBF4] px-4 py-6 flex flex-col">
      <header className="flex items-center">
        <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
      </header>

      <div className="flex-1 flex flex-col">
        <h1 className="text-[18px] font-medium mt-12 mb-8">계정을 찾았습니다.</h1>

        <div className="space-y-6">
          <div className="bg-[rgba(50,42,36,0.03)] p-4 rounded">
            <p className="text-center">granhand@gmail.com</p>
            <p className="text-center text-sm text-gray-500 mt-1">2023.08.03 가입</p>
          </div>

          <button 
            onClick={() => navigate('/find-password')}
            className="w-full text-left text-gray-700 py-2"
          >
            비밀번호 재설정하기 →
          </button>
        </div>

        <div className="mt-auto space-y-4">
          <div className="bg-[rgba(50,42,36,0.03)] p-4 rounded">
            <p className="text-sm text-gray-500">
              SNS 계정으로 가입하신 회원님은 비밀번호를 재설정할 수 없습니다. 로그인 화면에서 간편 로그인 계정을 이용해 주세요.
            </p>
          </div>

          <Button 
            onClick={() => navigate('/')}
            className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12"
          >
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FindIdResult;
