
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, ShoppingBag } from 'lucide-react';

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 flex items-center justify-between">
        <h1 className="text-lg">마이페이지</h1>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/notifications')}>
            <Bell className="w-6 h-6" />
          </button>
          <div className="relative">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xl">B</span>
            </div>
            <div>
              <h2 className="font-bold">홍길동님</h2>
            </div>
          </div>
          <button 
            className="px-3 py-1 border border-gray-300 rounded text-sm"
            onClick={() => navigate('/grade-guide')}
          >
            등급 안내
          </button>
        </div>

        <div className="mt-6">
          <div>
            <p className="text-[13px]"><span className="font-bold">68,000원</span> 추가 구매 시 Bronze 달성</p>
            <p className="text-sm text-gray-500">다음달 예상 등급 Basic</p>
            <div className="mt-2 relative">
              <div className="h-1 w-full bg-gray-200 rounded">
                <div className="h-full w-[32%] bg-black rounded" />
              </div>
              <div className="flex justify-between text-xs mt-1 text-gray-500">
                <span>32,000원</span>
                <span>100,000원</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button 
            className="w-full py-3 border border-black text-center"
            onClick={() => navigate('/my-coupon')}
          >
            나의 쿠폰함
          </button>
        </div>

        <div className="mt-8 grid grid-cols-4 gap-4">
          <button className="flex flex-col items-center gap-2">
            <span className="text-sm">포인트</span>
            <span className="text-xs">0</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <span className="text-sm">출석체크</span>
            <span className="text-xs">0</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <span className="text-sm">선물함</span>
            <span className="text-xs">0</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <span className="text-sm">주문내역</span>
            <span className="text-xs">0</span>
          </button>
        </div>

        <div className="mt-8 space-y-4">
          <button className="w-full py-3 text-left border-t">최근 본 상품</button>
          <button className="w-full py-3 text-left border-t">챌린지</button>
          <button className="w-full py-3 text-left border-t">취소/교환/반품 내역</button>
          <button className="w-full py-3 text-left border-t">회원정보</button>
          <button className="w-full py-3 text-left border-t">고객센터</button>
          <button className="w-full py-3 text-left border-t">설정</button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
