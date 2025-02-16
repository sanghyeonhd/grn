
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Passport = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center p-4 border-b">
        <button onClick={() => navigate(-1)} className="mr-2">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium">그랑핸드 패스포트</h1>
      </header>

      <div className="p-4 space-y-6">
        <div className="text-center text-sm text-gray-500">방문 횟수 3회</div>
        
        <div className="grid grid-cols-5 gap-4">
          {Array(10).fill(null).map((_, index) => (
            <div 
              key={index}
              className={`aspect-square rounded-lg border ${
                index < 3 ? 'bg-gray-100' : 'border-dashed'
              }`}
            />
          ))}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">패스포트 적립 안내</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• 10회 방문 시 향수 구매 10% 할인 쿠폰 지급</li>
            <li>• 매장 방문 시 1회씩 적립됩니다.</li>
            <li>• 유효기간: 2024.12.31까지</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Passport;
