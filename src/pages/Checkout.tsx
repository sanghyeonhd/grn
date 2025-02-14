
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Checkout = () => {
  const navigate = useNavigate();
  const [useCoupon, setUseCoupon] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("simple");

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b">
        <div className="flex items-center p-4">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg">결제하기</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* 배송정보 */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm">배송정보</h2>
            <button className="text-sm text-blue-500">배송지 목록</button>
          </div>
          <div className="space-y-2">
            <div className="border rounded p-4 flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <div>
                <p className="font-medium">김 명</p>
                <p className="text-sm">010-1234-5678</p>
                <p className="text-sm text-gray-600">부산광역시 부전동 서면로 범내골 비자파크</p>
              </div>
            </div>
            <div className="border rounded p-4 flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <div>
                <p className="font-medium">홍 길동</p>
                <p className="text-sm">010-9876-5432</p>
                <p className="text-sm text-gray-600">서울특별시 강남구 테헤란로 123</p>
              </div>
            </div>
          </div>
        </section>

        {/* 배송 요청사항 */}
        <section>
          <h2 className="text-sm mb-2">배송 요청사항</h2>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="직접 입력" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="direct">직접 입력</SelectItem>
              <SelectItem value="door">문 앞에 놓아주세요</SelectItem>
              <SelectItem value="security">경비실에 맡겨주세요</SelectItem>
            </SelectContent>
          </Select>
          <input
            type="text"
            placeholder="(필수) 입력해 주세요"
            className="w-full mt-2 p-3 border rounded-sm text-sm"
          />
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
                <div className="text-[10px] text-gray-500 space-y-1">
                  <p>무통장 입금은 영업일 기준 24시간 이내 확인됩니다.</p>
                  <p>주문 후 72시간 이내에 미입금 시 자동 취소됩니다.</p>
                </div>
              </div>
            </div>
          </RadioGroup>
        </section>

        {/* 최종 결제 금액 */}
        <section>
          <h2 className="text-sm mb-4">최종 결제 금액</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>상품금액</span>
              <span>35,500원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>포인트</span>
              <span className="text-blue-500">-5,000원</span>
            </div>
            <div className="flex justify-between font-medium pt-2 border-t">
              <span>최종 결제</span>
              <span>25,500원</span>
            </div>
          </div>
        </section>

        {/* 약관 동의 */}
        <section className="space-y-2">
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
        <button className="w-full py-3 bg-gray-200 text-gray-500">
          결제하기
        </button>
      </div>
    </div>
  );
};

export default Checkout;
