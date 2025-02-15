import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MyCoupon = () => {
  const navigate = useNavigate();
  const [coupons, setCoupons] = useState([
    { id: 1, name: "신규 가입 쿠폰", discount: "10%", expiryDate: "2024.12.31" },
    { id: 2, name: "생일 기념 쿠폰", discount: "5,000원", expiryDate: "2024.11.15" },
  ]);

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <div className="p-4 flex items-center gap-4 bg-[#FDFBF4] border-b">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium">나의 쿠폰함</h1>
      </div>
      
      <div className="border-b">
        <div className="px-4">
          <Tabs defaultValue="mycoupon" className="w-full">
            <TabsList className="w-full bg-[#FDFBF4] border-b">
              <TabsTrigger 
                value="mycoupon" 
                className="flex-1 data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-400"
                onClick={() => navigate('/my-coupon')}
              >
                보유 쿠폰
              </TabsTrigger>
              <TabsTrigger 
                value="register" 
                className="flex-1 data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-400"
                onClick={() => navigate('/coupon-register')}
              >
                쿠폰 등록
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="p-4">
        {coupons.length > 0 ? (
          <ul className="space-y-4">
            {coupons.map((coupon) => (
              <li key={coupon.id} className="bg-white p-4 rounded-md shadow-sm">
                <div className="font-medium">{coupon.name}</div>
                <div className="text-sm text-gray-500">할인: {coupon.discount}</div>
                <div className="text-sm text-gray-500">만료일: {coupon.expiryDate}</div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center text-gray-500 py-12">
            사용 가능한 쿠폰이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCoupon;
