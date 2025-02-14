
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
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">B</span>
            </div>
            <h2 className="text-lg font-medium mb-1">홍길동님</h2>
            <p className="text-gray-600 mb-4">현재 등급은 Basic 입니다.</p>
            <div className="w-full space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">구매 금액</span>
                <span>32,000원</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">기간</span>
                <span>2023.08.01 - 2024.01.31</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">등급 혜택 안내</h2>
          {[
            { 
              name: 'Basic', 
              benefits: '기준: 최근 6개월 구매금액 10만 원 미만 및 미구매\n혜택: 신규 가입 10,000원 쿠폰', 
              icon: 'B',
              pointRate: '1%'
            },
            { 
              name: 'Bronze', 
              benefits: '기준: 최근 6개월 구매금액 10만 원 이상, 20만 원 미만\n혜택: 월 5,000원 등급 혜택 쿠폰 1장 지급', 
              icon: 'B',
              pointRate: '2%'
            },
            { 
              name: 'Silver', 
              benefits: '기준: 최근 6개월 구매금액 20만 원 이상, 50만 원 미만\n혜택: 월 10,000원 등급 혜택 쿠폰 1장 지급', 
              icon: 'S',
              pointRate: '3%'
            },
            { 
              name: 'Gold', 
              benefits: '기준: 최근 6개월 구매금액 50만 원 이상, 100만 원 미만\n혜택: 월 15,000원 등급 혜택 쿠폰 1장 지급', 
              icon: 'G',
              pointRate: '4%'
            },
            { 
              name: 'VIP', 
              benefits: '기준: 최근 6개월 구매금액 100만 원 이상\n혜택: 월 20,000원 등급 혜택 쿠폰 1장 지급', 
              icon: 'V',
              pointRate: '5%'
            }
          ].map((grade) => (
            <div key={grade.name} className="border-t py-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">{grade.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium">{grade.name}</h3>
                    <span className="text-sm text-gray-500">포인트 적립 {grade.pointRate}</span>
                  </div>
                  <p className="text-sm text-gray-600 whitespace-pre-line">{grade.benefits}</p>
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
