
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Info } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const GiftCheckout = () => {
  const navigate = useNavigate();
  const [showGiftMessage, setShowGiftMessage] = useState(false);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b">
        <div className="flex items-center p-4">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg">선물하기</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* 보내는 분 정보 */}
        <section>
          <h2 className="text-sm mb-2">보내는 분</h2>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="이름"
              className="w-full p-3 border rounded-sm text-sm"
            />
            <input
              type="tel"
              placeholder="연락처"
              className="w-full p-3 border rounded-sm text-sm"
            />
          </div>
        </section>

        {/* 받는 분 정보 */}
        <section>
          <h2 className="text-sm mb-2">받는 분</h2>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="이름"
              className="w-full p-3 border rounded-sm text-sm"
            />
            <input
              type="tel"
              placeholder="연락처"
              className="w-full p-3 border rounded-sm text-sm"
            />
          </div>
        </section>

        {/* 선물 메시지 */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm">선물 메시지</h2>
            <Switch 
              checked={showGiftMessage}
              onCheckedChange={setShowGiftMessage}
            />
          </div>
          {showGiftMessage && (
            <textarea
              placeholder="받는 분께 보낼 메시지를 입력해 주세요. (최대 100자)"
              className="w-full p-3 border rounded-sm text-sm h-24 resize-none"
              maxLength={100}
            />
          )}
        </section>

        {/* 주문 상품 정보 */}
        <section>
          <h2 className="text-sm mb-4">주문 상품 정보</h2>
          <div className="flex gap-4 p-4 bg-gray-50">
            <img 
              src="/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png" 
              alt="GRANHAND."
              className="w-20 h-20 object-cover"
            />
            <div>
              <p className="text-sm font-medium">Lambertwick Multi Perfume</p>
              <p className="text-sm">55,000원</p>
              <p className="text-sm text-gray-600">옵션: 롤랑 멀티퍼퓸 100ml / 1개</p>
              <p className="text-sm text-gray-600">쇼핑백 (+500원)</p>
            </div>
          </div>
        </section>

        {/* 결제수단 */}
        <section>
          <h2 className="text-sm mb-2">결제수단</h2>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="결제 방식을 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="card">신용/체크카드</SelectItem>
              <SelectItem value="transfer">계좌이체</SelectItem>
              <SelectItem value="naverpay">네이버페이</SelectItem>
              <SelectItem value="kakaopay">카카오페이</SelectItem>
            </SelectContent>
          </Select>
        </section>

        {/* 최종 결제 금액 */}
        <section>
          <h2 className="font-medium mb-4">최종 결제 금액</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">상품금액</span>
              <span>55,500원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">쇼핑백</span>
              <span>500원</span>
            </div>
            <div className="flex justify-between font-medium pt-3 border-t">
              <span>결제 금액</span>
              <span>56,000원</span>
            </div>
          </div>
        </section>

        {/* 약관 동의 */}
        <section className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" id="allAgree" className="mr-2" />
            <label htmlFor="allAgree" className="text-sm">주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</label>
          </div>
        </section>
      </div>

      {/* 결제하기 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button className="w-full py-3 bg-[#2C2C2C] text-white rounded-sm">
          56,000원 결제하기
        </button>
      </div>
    </div>
  );
};

export default GiftCheckout;
