
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
  const [includeShoppingBag, setIncludeShoppingBag] = useState(false);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b">
        <div className="flex items-center p-4">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-medium">선물 결제하기</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* 선물 메시지 섹션 */}
        <section>
          <div className="bg-white border rounded-lg p-4 mb-4">
            <img 
              src="/lovable-uploads/09d701c7-ea2c-4c9c-81be-90a5040af573.png"
              alt="선물 메시지 이미지"
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h2 className="text-sm font-medium mb-2">선물할 때 본 모습</h2>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• 카카오톡으로 전달</li>
              <li>• 카카오톡으로 전달</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm">받는 분의 선물상자 모양을 꾸며보세요</h3>
            <textarea
              placeholder="선물박스에 표시될 메시지를 작성해주세요."
              className="w-full p-3 border rounded text-sm h-24 resize-none"
              maxLength={100}
            />
          </div>
        </section>

        {/* 주문상품 정보 */}
        <section>
          <div className="space-y-4">
            <div className="flex gap-4">
              <img 
                src="/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png" 
                alt="GRANHAND."
                className="w-20 h-20 object-cover"
              />
              <div>
                <p className="text-sm text-gray-500">GRANHAND.</p>
                <p className="text-sm font-medium">Lambertwick Multi Perfume</p>
                <p className="text-sm">55,000원</p>
                <p className="text-sm text-gray-600">옵션: 롤랑 멀티퍼퓸 100ml / 1개</p>
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <span className="text-sm">쇼핑백 포함</span>
              <Switch 
                checked={includeShoppingBag}
                onCheckedChange={setIncludeShoppingBag}
              />
            </div>

            {includeShoppingBag && (
              <p className="text-xs text-red-500">
                * 쇼핑백 포장 및 배송이 별도로 진행되며, 수령인의 주소지로 배송됩니다.
              </p>
            )}
          </div>
        </section>

        {/* 사용 가능 쿠폰 */}
        <section>
          <Select>
            <SelectTrigger className="w-full text-sm">
              <SelectValue placeholder="5,000원 할인 [첫 구매 고객 전용] (최소 구매 2만원)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new-user">5,000원 할인 [첫 구매 고객 전용] (최소 구매 2만원)</SelectItem>
            </SelectContent>
          </Select>
        </section>

        {/* 포인트 */}
        <section>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="5,000"
              className="flex-1 p-3 border rounded text-sm"
            />
            <button className="px-4 py-2 bg-gray-900 text-white rounded text-sm">
              전액 사용
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">사용 가능한 포인트: 13,500P</p>
        </section>

        {/* 결제수단 */}
        <section>
          <h2 className="text-base font-medium mb-4">결제수단</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded"></div>
                <span className="text-sm">현대카드</span>
              </div>
              <Info className="w-5 h-5 text-gray-400" />
            </div>
            <button className="w-full p-3 border rounded text-sm text-left">
              신용/체크카드
            </button>
            <button className="w-full p-3 border rounded text-sm text-left">
              무통장 입금
            </button>
          </div>
        </section>

        {/* 최종 결제 금액 */}
        <section>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">상품금액</span>
              <span>35,500원</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">쇼핑백</span>
              <span>-5,000원</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">포인트 사용</span>
              <span>-5,000원</span>
            </div>
            <div className="flex justify-between pt-2 border-t font-medium">
              <span>결제 금액</span>
              <span>25,500원</span>
            </div>
          </div>
          <div className="mt-2 p-2 bg-gray-50 rounded text-xs text-gray-500">
            <span>적립 예상 포인트</span>
            <span className="float-right">+700</span>
          </div>
        </section>

        {/* 약관 동의 */}
        <section className="space-y-2">
          <button className="flex items-center justify-between w-full py-2">
            <span className="text-sm">(필수) 개인정보 수집 이용 동의</span>
            <ChevronLeft className="w-4 h-4 rotate-[270deg]" />
          </button>
          <button className="flex items-center justify-between w-full py-2">
            <span className="text-sm">(필수) 개인정보 제3자 제공 동의</span>
            <ChevronLeft className="w-4 h-4 rotate-[270deg]" />
          </button>
          <button className="flex items-center justify-between w-full py-2">
            <span className="text-sm">(필수) 선물하기 서비스 이용약관</span>
            <ChevronLeft className="w-4 h-4 rotate-[270deg]" />
          </button>
        </section>
      </div>

      {/* 결제하기 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button className="w-full py-3 bg-[#2C2C2C] text-white rounded">
          25,500원 결제하기
        </button>
      </div>
    </div>
  );
};

export default GiftCheckout;
