
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const CouponRegister = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [couponNumber, setCouponNumber] = useState('');

  const handleRegister = () => {
    if (couponNumber === '1111') {
      toast({
        title: "쿠폰이 등록되었습니다. 보유쿠폰에서 확인해 주세요!",
        className: "bg-red-500 text-white border-none",
      });
      setCouponNumber('');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium">나의 쿠폰함</h1>
      </div>
      
      <div className="border-b">
        <div className="px-4">
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
              쿠폰 번호
            </label>
            <input
              type="text"
              id="couponNumber"
              value={couponNumber}
              onChange={(e) => setCouponNumber(e.target.value)}
              className="w-full p-3 border rounded-md"
              placeholder="쿠폰 번호를 입력해 주세요."
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4">
        <button 
          onClick={handleRegister}
          className="w-full bg-[#2D2D2D] text-white py-4 rounded-md"
        >
          쿠폰 등록
        </button>
      </div>
    </div>
  );
};

export default CouponRegister;
