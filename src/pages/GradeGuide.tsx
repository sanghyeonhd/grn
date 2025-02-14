
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const GradeGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 flex items-center gap-4 border-b">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg">등급 안내</h1>
      </div>

      <div className="p-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xl">B</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">현재 등급은</p>
              <p className="font-medium">Basic 입니다.</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span>구매 금액</span>
              <span>32,000원</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span>기간</span>
              <span>2023.08.01 - 2024.01.31</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">등급 혜택 안내</h2>
          {[
            { name: 'Basic', benefits: '포인트 적립 1%', icon: 'B' },
            { name: 'Bronze', benefits: '포인트 적립 2%', icon: 'B' },
            { name: 'Silver', benefits: '포인트 적립 3%', icon: 'S' },
            { name: 'Gold', benefits: '포인트 적립 4%', icon: 'G' },
            { name: 'VIP', benefits: '포인트 적립 5%', icon: 'V' }
          ].map((grade) => (
            <div key={grade.name} className="border-t py-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm">{grade.icon}</span>
                </div>
                <div>
                  <h3 className="font-medium">{grade.name}</h3>
                  <p className="text-sm text-gray-600">{grade.benefits}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradeGuide;
