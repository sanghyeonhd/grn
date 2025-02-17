
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User } from 'lucide-react';

const MemberGeneralInfo = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(3);  // setStep을 다시 추가하고 기본값은 3 유지
  const [id] = useState('gran****@****.com');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('홍길동');
  const [birthdate, setBirthdate] = useState('2000.10.10');
  const [phone, setPhone] = useState('01012345678');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) {
      setStep(3);
    }
  };

  const renderStep2 = () => (
    <div className="p-4">
      <h2 className="text-lg font-medium mb-2">비밀번호 재확인</h2>
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
        <div>
          <label className="text-sm">비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-white rounded border mt-1"
          />
        </div>
      </div>
      <button
        onClick={handlePasswordSubmit}
        className="w-full py-3 bg-black text-white rounded mt-8"
      >
        확인
      </button>
    </div>
  );

  const renderStep3 = () => (
    <div className="p-4">
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">로그인 정보</h2>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center bg-gray-100 w-16 h-16 rounded-full mb-2">
            <span className="text-2xl text-white">B</span>
          </div>
          <p className="text-gray-600 text-sm mb-2">{id}</p>
          <div className="inline-block bg-[#322A240D] rounded px-3 py-1">
            <button 
              onClick={() => navigate('/find-password/reset')}
              className="text-sm"
            >
              비밀번호 변경
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-medium">회원 정보</h2>
        <div>
          <label className="text-sm">성명</label>
          <input
            type="text"
            value={name}
            disabled
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-[#E9E6E0] text-[#6F6963] rounded border mt-1"
          />
        </div>
        <div>
          <label className="text-sm">생년월일</label>
          <input
            type="text"
            value={birthdate}
            disabled
            onChange={(e) => setBirthdate(e.target.value)}
            className="w-full p-3 bg-[#E9E6E0] text-[#6F6963] rounded border mt-1"
          />
        </div>
        <div>
          <label className="text-sm">휴대폰 번호</label>
          <input
            type="tel"
            value={phone}
            disabled
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 bg-[#E9E6E0] text-[#6F6963] rounded border mt-1"
          />
        </div>
      </div>

      <button className="w-full py-3 bg-black text-white rounded mt-8">
        본인인증으로 정보 수정하기
      </button>

      <div className="mt-8 border-t pt-4">
        <button className="w-full text-left py-4 flex items-center justify-between">
          <span>로그아웃</span>
          <span>→</span>
        </button>
        <button 
          onClick={() => navigate('/withdraw')}
          className="w-full text-left py-4 text-gray-500"
        >
          회원탈퇴
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <div className="sticky top-0 bg-[#FDFBF4] border-b">
        <div className="p-4 flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg">회원정보</h1>
        </div>
      </div>

      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
    </div>
  );
};

export default MemberGeneralInfo;
