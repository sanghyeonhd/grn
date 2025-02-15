import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, ShoppingBag, Wallet, CalendarCheck, Gift, ScrollText, Home, BookOpen, Scan, Heart, User } from 'lucide-react';
import BottomNavigation from '@/components/common/BottomNavigation';

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <header className="sticky top-0 bg-[#FDFBF4] border-b">
        <div className="p-4 flex items-center justify-between">
          <h1 className="text-lg">마이페이지</h1>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/notifications')}>
              <Bell className="w-6 h-6" />
            </button>
            <button onClick={() => navigate('/cart')} className="relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </button>
          </div>
        </div>
      </header>

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

          <div className="mt-4">
            <img 
              src="/lovable-uploads/7a38547d-6152-4ebb-a55b-86c27fd71d22.png" 
              alt="Sometimes you win" 
              className="w-[342px] h-[100px] object-cover rounded-xl"
            />
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
          <button 
            className="flex flex-col items-center gap-2"
            onClick={() => navigate('/points')}
          >
            <Wallet className="w-6 h-6" />
            <span className="text-sm">포인트</span>
          </button>
          <button 
            className="flex flex-col items-center gap-2"
            onClick={() => navigate('/attendance')}
          >
            <CalendarCheck className="w-6 h-6" />
            <span className="text-sm">출석체크</span>
          </button>
          <button 
            className="flex flex-col items-center gap-2"
            onClick={() => navigate('/gift-box')}
          >
            <Gift className="w-6 h-6" />
            <span className="text-sm">선물함</span>
          </button>
          <button 
            className="flex flex-col items-center gap-2"
            onClick={() => navigate('/order-history')}
          >
            <ScrollText className="w-6 h-6" />
            <span className="text-sm">주문내역</span>
          </button>
        </div>

        <div className="mt-8 space-y-4">
          <button 
            className="w-full py-3 text-left border-t"
            onClick={() => navigate('/recent-products')}
          >
            최근 본 상품
          </button>
          <button 
            className="w-full py-3 text-left border-t"
            onClick={() => navigate('/challenge')}
          >
            챌린지
          </button>
          <button 
            className="w-full py-3 text-left border-t"
            onClick={() => navigate('/order-status-history')}
          >
            취소/교환/반품 내역
          </button>
          <button 
            className="w-full py-3 text-left border-t"
            onClick={() => navigate('/member-general-info')}
          >
            회원정보(일반)
          </button>
          <button 
            className="w-full py-3 text-left border-t"
            onClick={() => navigate('/member-social-info')}
          >
            회원정보(간편)
          </button>
          <button 
            className="w-full py-3 text-left border-t"
            onClick={() => navigate('/customer-service')}
          >
            고객센터
          </button>
          <button 
            className="w-full py-3 text-left border-t"
            onClick={() => navigate('/settings')}
          >
            설정
          </button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default MyPage;
