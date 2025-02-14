
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const GiftCheckout = () => {
  const navigate = useNavigate();
  const [useCoupon, setUseCoupon] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("simple");
  const [deliveryMethod, setDeliveryMethod] = useState("kakao");

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
        {/* 선물 메시지 */}
        <section>
          <h2 className="text-base mb-4">선물 메시지</h2>
          <div className="relative mb-4">
            <img 
              src="/lovable-uploads/29b0770e-1ae6-4e2c-b680-aa6a22207749.png"
              alt="선물 메시지 이미지"
              className="w-full aspect-[2/1] object-cover rounded-lg"
            />
            <div className="absolute bottom-4 right-4 text-white text-sm">
              18/100
            </div>
          </div>
          
          {/* 선물 받는 분 정보 */}
          <div className="space-y-4">
            <h3 className="text-sm">선물 받는 분 정보</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <input 
                  type="radio" 
                  id="kakao" 
                  name="deliveryMethod"
                  checked={deliveryMethod === "kakao"}
                  onChange={() => setDeliveryMethod("kakao")}
                  className="w-4 h-4"
                />
                <label htmlFor="kakao" className="text-sm">카카오톡으로 선물</label>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="radio" 
                  id="sms" 
                  name="deliveryMethod"
                  checked={deliveryMethod === "sms"}
                  onChange={() => setDeliveryMethod("sms")}
                  className="w-4 h-4"
                />
                <label htmlFor="sms" className="text-sm">문자(SMS)로 선물</label>
              </div>
            </div>
            
            <div className="bg-[#322A24]/[0.03] p-4 rounded">
              <div className="text-xs text-gray-500 space-y-1">
                <p>• 선물하기 결제 후 카카오톡 덕구 메세지로 받을 수 있어요.</p>
                <p>• 포인트 선물은 그랜핸드 회원만 받을 수 있어요.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 받는 분 입력 */}
        <section>
          <h2 className="text-sm mb-2">받는 분<span className="text-red-500">*</span></h2>
          <input
            type="text"
            placeholder="받는 분의 성함을 입력해 주세요."
            className="w-full p-3 border rounded text-sm"
          />
        </section>

        {/* 배송지 입력 */}
        <section>
          <h2 className="text-sm mb-2">배송지<span className="text-red-500">*</span></h2>
          <button 
            onClick={() => navigate('/address/list')}
            className="w-full p-3 border rounded text-sm text-left text-gray-400"
          >
            배송지를 입력해주세요.
          </button>
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

        {/* 스탬핑 문구 */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm">스탬핑 문구</h2>
            <Switch />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="원하는 문구를 입력해 주세요."
              className="flex-1 p-3 border rounded-sm text-sm"
            />
            <button className="px-4 py-2 border rounded-sm">특수기호</button>
          </div>
          <div className="mt-2 text-[10px] text-gray-500 space-y-1">
            <p>10자 이하 영문 대문자, 숫자, 특수기호(. , ! % & ? ❤️)만 가능합니다.</p>
            <p>스탬핑 작업 시 교환 및 환불이 불가능합니다.</p>
          </div>
        </section>

        {/* 사용 가능 쿠폰 */}
        <section>
          <h2 className="text-sm mb-2">사용 가능 쿠폰</h2>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="5,000원 또는 (10,000원 이상 적립 가능)" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="5000">5,000 포인트 사용</SelectItem>
            </SelectContent>
          </Select>
        </section>

        {/* 포인트 */}
        <section className="flex items-center justify-between bg-gray-50 p-4">
          <span className="text-sm">포인트</span>
          <div className="flex items-center gap-2">
            <span className="text-sm">5,000</span>
            <button className="px-2 py-1 text-xs bg-gray-800 text-white">전액 사용</button>
          </div>
        </section>

        {/* 결제수단 */}
        <section>
          <h2 className="text-sm mb-4">결제수단</h2>
          <RadioGroup 
            value={paymentMethod} 
            onValueChange={setPaymentMethod}
            className="space-y-4"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="simple" id="simple" />
                <label htmlFor="simple" className="text-sm font-medium">간편결제</label>
              </div>
              {paymentMethod === "simple" && (
                <div className="pl-6">
                  <Carousel className="w-full max-w-sm">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="bg-black text-white p-4 rounded-sm">
                          <p className="text-sm font-medium">현대카드</p>
                          <p className="text-xs mt-1">•••• 2332</p>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="border border-gray-200 p-4 rounded-sm text-left">
                          <p className="text-sm font-medium text-blue-500">신규 카드</p>
                          <p className="text-xs mt-1 text-gray-500">등록 후 결제하기</p>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="normal" id="normal" />
                <label htmlFor="normal" className="text-sm font-medium">일반결제</label>
              </div>
              <div className="pl-6 space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <button className="border border-gray-200 p-4 rounded-sm text-left">
                    <p className="text-sm font-medium">신용/체크카드</p>
                  </button>
                  <button className="border border-gray-200 p-4 rounded-sm text-left">
                    <p className="text-sm font-medium">토스 퀵 계좌이체</p>
                  </button>
                  <button className="border border-gray-200 p-4 rounded-sm text-left">
                    <p className="text-sm font-medium">네이버페이</p>
                  </button>
                  <button className="border border-gray-200 p-4 rounded-sm text-left">
                    <p className="text-sm font-medium">무통장 입금</p>
                  </button>
                </div>
                <div className="bg-[#322A24]/[0.03] p-4 rounded text-[10px] text-gray-500 space-y-1">
                  <p>무통장 입금은 영업일 기준 24시간 이내 확인됩니다.</p>
                  <p>주문 후 72시간 이내에 미입금 시 자동 취소됩니다.</p>
                </div>
              </div>
            </div>
          </RadioGroup>
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
              <span>-5,000</span>
            </div>
            <div className="flex justify-between font-medium pt-3 border-t">
              <div>
                <span>결제 금액</span>
                <div className="text-sm text-gray-600">└신용카드 결제</div>
              </div>
              <span>25,500원</span>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-gray-600">적립 예정 포인트</span>
              <span className="font-medium text-blue-500">+700</span>
            </div>
            <div className="bg-[#322A24]/[0.03] p-2 rounded">
              <div className="flex items-center gap-1 text-[10px] text-gray-500 whitespace-nowrap">
                <Info className="w-3 h-3 flex-shrink-0" />
                <span>구매 확정 시 회원 등급별 혜택에 따라 포인트가 지급됩니다.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 약관 동의 */}
        <section className="space-y-2">
          <div className="flex items-center mb-4">
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
        </section>
      </div>

      {/* 결제하기 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button className="w-full py-3 bg-gray-200 rounded-sm text-gray-500">
          결제하기
        </button>
      </div>
    </div>
  );
};

export default GiftCheckout;
