
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const TermDetail = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const [isChecked, setIsChecked] = useState(false);

  const getTermTitle = () => {
    switch(type) {
      case 'service':
        return '서비스 이용 약관 동의';
      case 'privacy':
        return '개인정보 수집 및 이용 동의';
      case 'marketing':
        return '마케팅 목적의 개인정보 수집 및 이용 동의';
      case 'advertisement':
        return '광고성 정보 수신 동의';
      default:
        return '약관 상세';
    }
  };

  const handleAgree = () => {
    if (type && isChecked) {
      navigate(`/signup/terms?agreed=${type}`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="p-4">
        <button onClick={() => navigate(-1)} className="text-2xl">←</button>
      </header>

      <div className="px-4 pt-4 pb-20 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-6">
          <Checkbox 
            checked={isChecked} 
            onCheckedChange={(checked) => setIsChecked(checked as boolean)} 
          />
          <h1 className="text-lg font-medium">{getTermTitle()}</h1>
        </div>

        <div className="flex-1 border border-gray-200 rounded-lg">
          <div 
            className="h-full overflow-y-auto text-sm text-gray-600 p-4"
          >
            <p>
              주작권 어떤 내용 해당 파이나르보이 아주 쉽게 같이 나는 까닭입니다. 가슴속에 아이들 겨, 파란하다. 하여도 토끼, 이웃 그리고 둘러싸여 자되는 거위다. 내내는 책을 것은 이름을 멀리 동키, 별이 노루, 파란 나의 않이 까닭입니다. 둘러싸여 자되는 거위다. 내내는 책을 것은 이름을 멀리 동키, 별이 노루, 파란 나의 않이 까닭입니다.
            </p>
            {/* 스크롤이 가능하도록 충분한 내용을 추가 */}
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} className="mt-4">
                주작권 어떤 내용 해당 파이나르보이 아주 쉽게 같이 나는 까닭입니다. 가슴속에 아이들 겨, 파란하다. 하여도 토끼, 이웃 그리고 둘러싸여 자되는 거위다.
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white">
        <Button
          onClick={handleAgree}
          disabled={!isChecked}
          className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12"
        >
          약관 동의
        </Button>
      </div>
    </div>
  );
};

export default TermDetail;
