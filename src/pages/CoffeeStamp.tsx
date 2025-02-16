
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const CoffeeStamp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center p-4 border-b">
        <button onClick={() => navigate(-1)} className="mr-2">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium">콤포타블 커피 스탬프</h1>
      </header>

      <div className="p-4 space-y-6">
        <div className="text-center text-sm text-gray-500">12개 중 3개의 스탬프를 모았어요</div>
        
        <div className="grid grid-cols-4 gap-4">
          {Array(12).fill(null).map((_, index) => (
            <div 
              key={index}
              className={`aspect-square rounded-full border ${
                index < 3 ? 'bg-gray-100' : 'border-dashed'
              }`}
            />
          ))}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">스탬프 적립 안내</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• 스탬프 12개 적립 시 아메리카노 1잔 무료 증정</li>
            <li>• 스탬프는 음료 구매 시 1개씩 적립됩니다.</li>
            <li>• 유효기간: 2024.12.31까지</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStamp;
