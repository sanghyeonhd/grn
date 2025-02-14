
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const MemberSocialInfo = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [id] = useState('gran****@****.com');
  const [name, setName] = useState('홍길동');
  const [birthdate, setBirthdate] = useState('2000.10.10');
  const [phone, setPhone] = useState('01012345678');

  const renderStep1 = () => (
    <div className="p-4">
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">로그인 계정 재확인</h2>
        <p className="text-sm text-gray-600">
          회원님의 정보를 안전하게 보호하기 위해
          <br />
          인증 절차가 필요해요.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm">아이디</label>
          <input
            type="text"
            value={id}
            disabled
            className="w-full p-3 bg-gray-100 rounded border mt-1"
          />
        </div>
      </div>

      <button
        onClick={() => setStep(2)}
        className="w-full py-3 bg-[#2C2C2C] text-white mt-8"
      >
        카카오 계정으로 인증
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="p-4">
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">로그인 정보</h2>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center bg-gray-100 w-16 h-16 rounded-full mb-2">
            <span className="text-2xl">B</span>
          </div>
          <p className="text-gray-600 text-sm">{id}</p>
          <p className="text-sm text-gray-600">카카오로 로그인 하셨습니다.</p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-medium">회원 정보</h2>
        <div>
          <label className="text-sm">성명</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-gray-100 rounded border mt-1"
          />
        </div>
        <div>
          <label className="text-sm">생년월일</label>
          <input
            type="text"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="w-full p-3 bg-gray-100 rounded border mt-1"
          />
        </div>
        <div>
          <label className="text-sm">휴대폰 번호</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 bg-gray-100 rounded border mt-1"
          />
        </div>
      </div>

      <button className="w-full py-3 bg-[#2C2C2C] text-white mt-8">
        본인인증으로 정보 수정하기
      </button>

      <div className="mt-8 border-t pt-4">
        <button className="w-full text-left py-4 flex items-center justify-between">
          <span>로그아웃</span>
          <span>→</span>
        </button>
        <button className="w-full text-left py-4 text-gray-500">
          회원탈퇴
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 bg-white border-b">
        <div className="p-4 flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg">회원정보</h1>
        </div>
      </div>

      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
    </div>
  );
};

export default MemberSocialInfo;
