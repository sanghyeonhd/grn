
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const MyCoupon = () => {
  const navigate = useNavigate();

  // 임시 쿠폰 데이터
  const coupons = [
    {
      id: 1,
      title: '신규 가입 감사 쿠폰',
      discount: '10%',
      minOrderAmount: 30000,
      maxDiscountAmount: 10000,
      validUntil: '2024.04.30까지',
      status: '사용가능',
    },
    {
      id: 2,
      title: '첫 구매 특별 할인',
      discount: '5,000원',
      minOrderAmount: 50000,
      maxDiscountAmount: 5000,
      validUntil: '2024.05.31까지',
      status: '사용가능',
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 flex items-center gap-4 border-b">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg">나의 쿠폰함</h1>
      </div>
      
      <div className="p-4 space-y-4">
        {coupons.map((coupon) => (
          <div 
            key={coupon.id} 
            className="border rounded-lg p-4 space-y-3 bg-white shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-medium text-lg">{coupon.title}</h2>
                <p className="text-blue-600 font-semibold text-xl mt-1">
                  {coupon.discount}
                </p>
              </div>
              <span className="text-blue-500 text-sm border border-blue-500 rounded px-2 py-1">
                {coupon.status}
              </span>
            </div>
            
            <div className="space-y-1 text-[13px] text-gray-600">
              <p>{coupon.minOrderAmount.toLocaleString()}원 이상 구매 시</p>
              <p>최대 {coupon.maxDiscountAmount.toLocaleString()}원 할인</p>
            </div>
            
            <div className="pt-2 border-t">
              <p className="text-[12px] text-gray-500">{coupon.validUntil}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCoupon;
