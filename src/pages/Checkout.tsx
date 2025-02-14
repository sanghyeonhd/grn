
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

const Checkout = () => {
  const navigate = useNavigate();
  const [useCoupon, setUseCoupon] = useState(false);
  const [usePoints, setUsePoints] = useState(false);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b">
        <div className="flex items-center p-4">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg">선물 결제하기</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* 선물 메시지 */}
        <section>
          <h2 className="text-sm mb-2">선물 메시지</h2>
          <div className="rounded-sm overflow-hidden">
            <img 
              src="/lovable-uploads/694738c9-54dc-4bd6-88a7-fcfe28a6a280.png"
              alt="선물 메시지"
              className="w-full object-cover"
            />
          </div>
        </section>

        {/* 선물할 분 정보 */}
        <section>
          <h2 className="text-sm mb-2">선물할 분 정보</h2>
          <div className="p-4 bg-gray-50 rounded-sm space-y-1 text-sm">
            <p>• 카카오톡으로 선물</p>
            <p className="text-gray-500">• 친구에게 바로 선물</p>
          </div>
          <input
            type="text"
            placeholder="선물 받는 분 정보"
            className="w-full mt-4 p-3 border rounded-sm text-sm"
          />
        </section>

        {/* 주문상품 정보 */}
        <section>
          <h2 className="text-sm mb-4">주문상품 정보</h2>
          <div className="flex gap-4 p-4 bg-gray-50">
            <img 
              src="/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png" 
              alt="GRANHAND."
              className="w-20 h-20 object-cover"
            />
            <div>
              <div className="text-xs text-gray-500">GRANHAND.</div>
              <p className="text-sm font-medium">Lambertwick Multi Perfume</p>
              <p className="text-sm">55,000원</p>
              <p className="text-sm text-gray-600">옵션: 롤랑 멀티퍼퓸 100ml / 1개</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm">쇼핑백 구매</span>
                <Switch checked={useCoupon} onCheckedChange={setUseCoupon} />
                <span className="text-xs text-gray-500">(+500원)</span>
              </div>
            </div>
          </div>
        </section>

        {/* 스탬핑 문구 */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm">스탬핑 문구</h2>
            <Switch checked={usePoints} onCheckedChange={setUsePoints} />
          </div>
          <input
            type="text"
            placeholder="원하는 문구를 입력해 주세요."
            className="w-full p-3 border rounded-sm text-sm"
          />
          <div className="mt-2 text-[10px] text-gray-500 space-y-1">
            <p>• 10자 이하 영문 대문자, 숫자, 특수기호(. , ! % & ? ❤️)만 가능합니다.</p>
            <p>• 스탬핑 작업 시 교환 및 환불이 불가능합니다.</p>
          </div>
        </section>

        {/* 사용 가능 쿠폰 */}
        <section>
          <h2 className="text-sm mb-2">사용 가능 쿠폰</h2>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="5,000원 또는 (10,000원 이상 적립 가능)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5000">5,000원 쿠폰</SelectItem>
            </SelectContent>
          </Select>
        </section>

        {/* 포인트 */}
        <section>
          <h2 className="text-sm mb-2">포인트</h2>
          <div className="flex gap-2">
            <input
              type="text"
              value="5,000"
              className="flex-1 p-3 border rounded-sm text-sm text-right"
            />
            <button className="px-4 py-2 bg-[#2C2C2C] text-white text-sm rounded-sm">
              전액 사용
            </button>
          </div>
        </section>

        {/* 결제수단 */}
        <section>
          <h2 className="text-sm mb-4">결제수단</h2>
          <div className="border p-4 rounded-sm flex items-center gap-2">
            <img 
              src="/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png" 
              alt="현대카드"
              className="w-8 h-8 object-cover"
            />
            <div className="flex-1">
              <p className="text-sm">신용/체크카드</p>
              <p className="text-xs text-gray-500">하나카드</p>
            </div>
            <button className="text-xs text-blue-500">토스 앱 계좌이체</button>
          </div>
        </section>

        {/* 최종 결제 금액 */}
        <section>
          <h2 className="font-medium mb-4">최종 결제 금액</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">상품금액</span>
              <span>35,500원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">배송비</span>
              <span>0원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">쿠폰 할인</span>
              <span>-5,000원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">포인트 사용</span>
              <span>-5,000원</span>
            </div>
            <div className="pt-3 border-t">
              <div className="flex justify-between text-sm">
                <span>합계</span>
                <span className="font-bold text-lg">25,500원</span>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-gray-600">적립 예정 포인트</span>
              <span className="font-medium text-blue-500">+700</span>
            </div>
            <div className="bg-[#322A24]/[0.03] p-2 rounded">
              <div className="flex items-center gap-1 text-[10px] text-gray-500">
                <Info className="w-3 h-3 flex-shrink-0" />
                <span>구매 확정 시 회원 등급별 혜택에 따라 포인트가 지급됩니다.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 약관 동의 */}
        <section>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="allAgree" className="mr-2" />
              <label htmlFor="allAgree" className="text-sm">주문 내용을 확인하였으며, 아래 내용에 모두 동의합니다.</label>
            </div>
            <button className="flex items-center justify-between w-full py-2">
              <span className="text-sm text-gray-600">(필수) 개인정보 수집 • 이용 동의</span>
              <ChevronLeft className="w-4 h-4 rotate-180" />
            </button>
            <button className="flex items-center justify-between w-full py-2">
              <span className="text-sm text-gray-600">(필수) 개인정보 제3자 정보 제공 동의</span>
              <ChevronLeft className="w-4 h-4 rotate-180" />
            </button>
            <button className="flex items-center justify-between w-full py-2">
              <span className="text-sm text-gray-600">(필수) 결제대행 서비스 이용약관 동의</span>
              <ChevronLeft className="w-4 h-4 rotate-180" />
            </button>
          </div>
        </section>
      </div>

      {/* 결제하기 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button className="w-full py-3 bg-[#2C2C2C] text-white rounded-sm">
          25,500원 결제하기
        </button>
      </div>
    </div>
  );
};

export default Checkout;
