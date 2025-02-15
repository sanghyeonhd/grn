
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Guide = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <div className="sticky top-0 z-10 bg-white border-b">
        <div className="px-4 py-3 flex justify-between items-center">
          <h1 className="text-lg font-bold">GUIDE</h1>
          <button className="relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 8.25H3V18.75C3 19.1478 3.15804 19.5294 3.43934 19.8107C3.72064 20.092 4.10218 20.25 4.5 20.25H19.5C19.8978 20.25 20.2794 20.092 20.5607 19.8107C20.842 19.5294 21 19.1478 21 18.75V8.25Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M3 8.25L12 3L21 8.25" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
              new
            </div>
          </button>
        </div>
      </div>

      {/* 안내 문구 */}
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <span className="text-amber-400">✦</span>
          <p>원하시는 항목 주제에 들어나서, 아래 항목을 모두 선택해 주세요.</p>
        </div>

        {/* 질문 목록 */}
        <div className="space-y-6">
          <div className="border-b pb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm">1. 어떤 용도로 사용하시나요?</h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm border rounded-full">선물할 거예요</button>
              <button className="px-4 py-2 text-sm border rounded-full">제가 쓸 거예요</button>
            </div>
          </div>

          <div className="border-b pb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm">2. 어떤 계절에 맞는 향을 찾으세요?</h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="border-b pb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm">3. 원하시는 제질을 선택해 주세요.</h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="border-b pb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm">4. 원하시는 분위기를 선택해 주세요.</h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 네비게이션 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around py-3">
          <button className="flex flex-col items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 9.5L12 3L21 9.5V20H3V9.5Z" stroke="black" strokeWidth="2"/>
            </svg>
            <span className="text-xs mt-1">홈</span>
          </button>
          <button className="flex flex-col items-center text-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16 2H8V4H16V2Z" fill="black"/>
              <path d="M3 7V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V7H3Z" fill="black"/>
            </svg>
            <span className="text-xs mt-1">퍼가이드</span>
          </button>
          <button className="flex flex-col items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 8.25H3V18.75C3 19.1478 3.15804 19.5294 3.43934 19.8107C3.72064 20.092 4.10218 20.25 4.5 20.25H19.5C19.8978 20.25 20.2794 20.092 20.5607 19.8107C20.842 19.5294 21 19.1478 21 18.75V8.25Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs mt-1">스토어</span>
          </button>
          <button className="flex flex-col items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" stroke="black" strokeWidth="2"/>
            </svg>
            <span className="text-xs mt-1">관심상품</span>
          </button>
          <button className="flex flex-col items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="7" r="4" stroke="black" strokeWidth="2"/>
              <path d="M4 21C4 17.134 7.58172 14 12 14C16.4183 14 20 17.134 20 21" stroke="black" strokeWidth="2"/>
            </svg>
            <span className="text-xs mt-1">My</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guide;
