
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
              <SheetTitle>쿠폰 사용 안내</SheetTitle>
            </SheetHeader>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-medium mb-2">1. 사용 조건</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 부문의 종류 사용은 불가하며, 각 부문은 구매 시 1회 적용 가능합니다.</li>
                  <li>• 할인 적용금액에 따라(각 상품의 판매가 또는 총 주문 금액)을 초과할 경우 사용 불가능 합니다.</li>
                  <li>• 최소 구매 금액이 있는 쿠폰의 경우 금액이 충족되어야 사용 가능합니다.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">2. 유효기간</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 사용기간이 자난 쿠폰은 자동으로 소멸되며, 재발행 되지 않습니다.</li>
                  <li>• 부문의 유효기간은 별도 명시된 기간을 따릅니다.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">3. 부문의 취소 및 제한</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 부문 사용기간 동안 푸 취소쿠폰 시 부문은 재발급되지 않습니다.</li>
                  <li>• 주문 부분 취소 및 부분 반품시 사용 할인이 적용된 상품의 실가 있을 경우 부문은 재 발급되지 않습니다.</li>
                  <li>• 주문 부분 취소 및 부분 반품으로 인해 최소 주문 금액 조건 미달일 시, 부문 할인 금액을 차액을 결제 후 결제신 완료됩니다.</li>
                  <li>• 발행 사용은 구매 시 부문 적용이 재한될 수 있습니다.</li>
                  <li>• 주문 취소 및 반품(취부 구입)으로 인한 등급 부문의 재발급은 최대 3회까지 기준의 며, 계정당 취대 적/순 초과의 경우 부문이 재발급 되지 않습니다.</li>
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
