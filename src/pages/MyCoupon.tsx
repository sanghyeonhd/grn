
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Info } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
        <Sheet>
          <SheetTrigger asChild>
            <button className="ml-auto">
              <Info className="w-5 h-5 text-gray-600" />
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh]">
            <SheetHeader>
              <SheetTitle>쿠폰 사용안내</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-medium mb-2">쿠폰 사용방법</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 상품 구매 시 보유하신 쿠폰을 선택하여 할인 혜택을 받으실 수 있습니다.</li>
                  <li>• 쿠폰은 주문서 작성 시 선택하여 사용 가능합니다.</li>
                  <li>• 일부 쿠폰의 경우 특정 상품이나 카테고리에서만 사용이 가능할 수 있습니다.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">쿠폰 유의사항</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 쿠폰은 발급일로부터 지정된 유효기간 내에서만 사용이 가능합니다.</li>
                  <li>• 쿠폰은 타인에게 양도할 수 없습니다.</li>
                  <li>• 주문 취소 시, 사용한 쿠폰은 자동으로 복구됩니다.</li>
                  <li>• 일부 쿠폰은 중복 사용이 불가능할 수 있습니다.</li>
                </ul>
              </div>
            </div>
          </SheetContent>
        </Sheet>
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
