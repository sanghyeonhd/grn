
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CouponRegister = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 flex items-center gap-4 border-b">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1">
          <Tabs defaultValue="register" className="w-full">
            <TabsList className="w-full bg-transparent border-b">
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
              >
                쿠폰 등록
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="p-4">
        <div className="space-y-4">
          <div>
            <label htmlFor="couponNumber" className="block text-sm font-medium text-gray-700 mb-1">
              쿠폰 번호 입력
            </label>
            <input
              type="text"
              id="couponNumber"
              className="w-full p-3 border rounded-lg"
              placeholder="쿠폰 번호를 입력해주세요"
            />
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg">
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponRegister;
