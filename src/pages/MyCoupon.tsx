
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const MyCoupon = () => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState<'latest' | 'expiry'>('latest');
  const [selectedCoupon, setSelectedCoupon] = useState<number | null>(null);

  // 임시 쿠폰 데이터
  const coupons = [
    {
      id: 1,
      type: ['그랑핸드', '콤포타블'],
      title: '[온라인 전용] 생일 축하 10,000원 쿠폰',
      description: '최소 구매금액 제한 없음',
      validUntil: '2024-01-31까지 사용 가능',
    },
    {
      id: 2,
      type: ['그랑핸드', '콤포타블'],
      title: '[APP 전용] 생일 축하 10,000원 쿠폰',
      description: '최소 구매금액 제한 없음',
      validUntil: '2024-01-31까지 사용 가능',
    },
    {
      id: 3,
      type: ['그랑핸드'],
      title: '[온라인 전용] 패스포트 챌린지 달성 쿠폰',
      description: '상품 교환권',
      validUntil: '2024-01-31까지 사용 가능',
    },
    {
      id: 4,
      type: ['콤포타블', '헤이온'],
      title: '[오프라인 전용] 아메리카노 무료 쿠폰',
      description: '아메리카노 1잔 무료 교환권(4,500원)',
      validUntil: '2024-01-31까지 사용 가능',
    }
  ];

  const handleCouponClick = (id: number) => {
    setSelectedCoupon(id);
  };

  const selectedCouponData = coupons.find(coupon => coupon.id === selectedCoupon);

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 flex items-center gap-4 border-b">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1">
          <h1 className="text-lg">나의 쿠폰함</h1>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="font-medium text-[14px]">보유 쿠폰(5)</span>
            <span className="text-gray-400 text-[14px]">쿠폰 등록</span>
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setSortType('latest')}
            className={`text-[12px] ${
              sortType === 'latest'
                ? 'text-black'
                : 'text-gray-400'
            }`}
          >
            최신순
          </button>
          <button
            onClick={() => setSortType('expiry')}
            className={`text-[12px] ${
              sortType === 'expiry'
                ? 'text-black'
                : 'text-gray-400'
            }`}
          >
            유효기간순
          </button>
        </div>
        
        <div className="space-y-3">
          {coupons.map((coupon) => (
            <div 
              key={coupon.id} 
              className="border rounded-lg p-4 bg-white cursor-pointer"
              onClick={() => handleCouponClick(coupon.id)}
            >
              <div className="flex gap-1 mb-2">
                {coupon.type.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="font-medium mb-1">{coupon.title}</h2>
              <p className="text-gray-600 text-sm mb-1">{coupon.description}</p>
              <p className="text-gray-400 text-xs">{coupon.validUntil}</p>
            </div>
          ))}
        </div>
      </div>

      <Sheet open={selectedCoupon !== null} onOpenChange={() => setSelectedCoupon(null)}>
        <SheetContent side="bottom" className="h-[90vh] p-0 bg-white">
          <div className="p-4 border-b relative">
            <button 
              onClick={() => setSelectedCoupon(null)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-center">쿠폰바로 교환권</h2>
          </div>
          <div className="flex flex-col h-full p-4">
            <div className="mb-6">
              <p className="text-left font-medium text-lg mb-1">{selectedCouponData?.title}</p>
              <p className="text-left text-sm text-gray-600">{selectedCouponData?.description}</p>
              <p className="text-left text-xs text-gray-400 mt-1">{selectedCouponData?.validUntil}</p>
            </div>
            <div className="w-full aspect-square max-w-[280px] mx-auto border rounded-lg flex items-center justify-center">
              {/* QR 코드 이미지가 들어갈 자리 */}
              <div className="text-center">QR 코드</div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MyCoupon;
