
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button"

const TermDetail = () => {
  const navigate = useNavigate();
  const { type } = useParams();

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

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <header className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
        <h1 className="text-xl font-medium">{getTermTitle()}</h1>
      </header>

      <div className="space-y-6">
        <div className="text-sm text-gray-600 space-y-4">
          <p>
            주작권 어떤 내용 해당 파이나르보이 아주 쉽게 같이 나는 까닭입니다. 가슴속에 아이들 겨, 파란하다. 하여도 토끼, 이웃 그리고 둘러싸여 자되는 거위다. 내내는 책을 것은 이름을 멀리 동키, 별이 노루, 파란 나의 않이 까닭입니다. 둘러싸여 자되는 거위다. 내내는 책을 것은 이름을 멀리 동키, 별이 노루, 파란 나의 않이 까닭입니다.
          </p>
          <p>
            주작권 어떤 내용 해당 파이나르보이 아주 쉽게 같이 나는 까닭입니다. 가슴속에 아이들 겨, 파란하다. 하여도 토끼, 이웃 그리고 둘러싸여 자되는 거위다. 내내는 책을 것은 이름을 멀리 동키, 별이 노루, 파란 나의 않이 까닭입니다.
          </p>
        </div>

        <Button
          onClick={() => navigate(-1)}
          className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12"
        >
          약관 동의
        </Button>
      </div>
    </div>
  );
};

export default TermDetail;
