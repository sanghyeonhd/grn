
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button"

const TermDetail = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

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

  const handleScroll = () => {
    if (!contentRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    // 스크롤이 거의 하단에 도달했을 때 (약간의 여유를 둠)
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 10;

    if (scrolledToBottom && !isButtonEnabled) {
      setIsButtonEnabled(true);
    }
  };

  const handleAgree = () => {
    if (type) {
      navigate(`/signup/terms?agreed=${type}`);
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 flex flex-col">
      <header className="flex items-center mb-8">
        <button onClick={() => navigate(-1)} className="text-2xl mr-4">←</button>
        <h1 className="text-xl font-medium">{getTermTitle()}</h1>
      </header>

      <div 
        ref={contentRef} 
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto text-sm text-gray-600 space-y-4 pb-4"
      >
        <p>
          이용약관 내용이 여기에 표시됩니다. 스크롤을 끝까지 내려주세요.
        </p>
        {/* 스크롤이 가능하도록 충분한 내용을 추가 */}
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>
            주작권 어떤 내용 해당 파이나르보이 아주 쉽게 같이 나는 까닭입니다. 가슴속에 아이들 겨, 파란하다. 하여도 토끼, 이웃 그리고 둘러싸여 자되는 거위다.
          </p>
        ))}
      </div>

      <Button
        onClick={handleAgree}
        disabled={!isButtonEnabled}
        className="w-full bg-[#2C2C2C] hover:bg-[#1a1a1a] text-white rounded-none h-12 mt-4"
      >
        약관 동의
      </Button>
    </div>
  );
};

export default TermDetail;
