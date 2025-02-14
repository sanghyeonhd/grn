
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const MyCoupon = () => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState<'latest' | 'expiry'>('latest');

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
              className="border rounded-lg p-4 bg-white"
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
    </div>
  );
};

export default MyCoupon;
