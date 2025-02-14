
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"

const FindIdResult = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <header className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
        <h1 className="text-xl font-medium">계정을 찾았습니다.</h1>
      </header>

      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded">
          <p className="text-center">granhand@gmail.com</p>
          <p className="text-center text-sm text-gray-500 mt-1">2023.08.03 가입</p>
        </div>

        <button 
          onClick={() => navigate('/find-password')}
          className="w-full text-left text-gray-700 py-2"
        >
          비밀번호 재설정하기 →
        </button>

        <div className="mt-8 space-y-2 text-sm text-gray-500">
          <p>• SNS 계정으로 가입하신 회원님은 비밀번호를 재설정할 수 없습니다.</p>
          <p>• 로그인 화면에서 간편 로그인 계정을 이용해 주세요.</p>
        </div>

        <Button 
          onClick={() => navigate('/')}
          className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12 mt-4"
        >
          로그인
        </Button>
      </div>
    </div>
  );
};

export default FindIdResult;
