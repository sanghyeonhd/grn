
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const FindPassword = () => {
  const navigate = useNavigate();
  
  const handleNext = () => {
    navigate('/find-password/verify');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF4] px-4 py-6">
      <header className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
        <h1 className="text-[18px] font-medium">비밀번호 찾기</h1>
      </header>

      <div className="space-y-6">
        <div>
          <p>가입한 아이디(이메일)를 입력해 주세요.</p>
          <p className="text-sm text-gray-500">휴대폰 본인인증을 통해 아이디(이메일)를 확인합니다.</p>
        </div>

        <div className="space-y-2">
          <label className="text-sm">아이디</label>
          <Input
            type="email"
            placeholder="이메일을 입력해 주세요."
            className="w-full border-[#C0BCB6] rounded bg-[#FFFFFF]"
          />
        </div>

        <div className="bg-[rgba(50,42,36,0.03)] p-4 rounded mt-4">
          <ul className="text-[10px] text-gray-500 space-y-1">
            <li className="flex items-start">
              <span className="mr-1">•</span>
              <span>SNS 계정으로 가입하신 회원님은 비밀번호를 재설정할 수 없습니다.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1">•</span>
              <span>본인인 확인에서 인증 문제가 발생 후 이용해 주세요.</span>
            </li>
          </ul>
        </div>

        <Button
          onClick={handleNext}
          className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white h-[52px] rounded-none"
        >
          본인인증 하기
        </Button>
      </div>
    </div>
  );
};

export default FindPassword;
