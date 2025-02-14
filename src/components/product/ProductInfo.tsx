
import React from 'react';
import { ChevronLeft, Heart } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ProductInfo = () => {
  return (
    <div className="p-5 space-y-6">
      <div className="space-y-1">
        <div className="text-sm text-gray-500">퍼퓸 &gt; 멀티 퍼퓸</div>
        <h1 className="text-2xl font-medium">Roland Multi Perfume</h1>
        <p className="text-sm text-gray-600">롤랑 멀티퍼퓸 100ml / 200ml</p>
        <div className="text-lg font-medium">35,000 KRW</div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 py-2 border rounded text-sm">100ml</button>
        <button className="flex-1 py-2 border rounded text-sm">200ml</button>
      </div>

      <div>
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex items-center justify-between w-full py-4 border-t border-b">
              <span className="text-sm">Fragrance Story</span>
              <ChevronLeft className="w-5 h-5 rotate-180" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Fragrance Story</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <p className="text-sm text-gray-600">
                롤랑 브랜드에서 향기를 만나다.<br />
                감각과 감성이 살아나던 순간, 향에 몰입할 수 있었던 롤랑과의 만남.<br />
                향에 대한 깊은 프로그래밍처럼 시그니처로 향을 맡을 수 있습니다.
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium">배송 예정 안내</h3>
          <p className="text-sm text-gray-600">
            - 당일 배송 / 배송비 3,000원<br />
            - 홈택배 봉투로 발송됨
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">구매 혜택</h3>
          <p className="text-sm text-gray-600">
            - 회원 등급에 따라 3~1% 적립
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">문의</h3>
          <p className="text-sm text-gray-600">
            - 배송 전/후 교환 및 반품 가능<br />
            - 문의 접수는 CS팀에서 처리됩니다 (상담시간: 13:00~18:00)
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">운영시간</h3>
          <p className="text-sm text-gray-600">
            - 평일: 13:00 - 18:00<br />
            - 토/일/공휴일 휴무<br />
            - 점심시간: 12:00 - 13:00
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Information</h3>
          <div className="space-y-1">
            <div className="flex text-sm">
              <span className="w-20 text-gray-500">브랜드</span>
              <span>Roland Multi Perfume 롤랑 멀티퍼퓸</span>
            </div>
            <div className="flex text-sm">
              <span className="w-20 text-gray-500">제품명</span>
              <span>세리강 롤랑 퍼퓸</span>
            </div>
            <div className="flex text-sm">
              <span className="w-20 text-gray-500">용량</span>
              <span>100ml / 200ml</span>
            </div>
            <div className="flex text-sm">
              <span className="w-20 text-gray-500">제조국</span>
              <span>대한민국</span>
            </div>
            <div className="flex text-sm">
              <span className="w-20 text-gray-500">제조사</span>
              <span>Roland 롤랑</span>
            </div>
            <div className="flex text-sm">
              <span className="w-20 text-gray-500">제조일자</span>
              <span>2023.12</span>
            </div>
            <div className="flex text-sm">
              <span className="w-20 text-gray-500">사용기한</span>
              <span>제조일로부터 24개월</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Recommend</h3>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="relative aspect-square">
                <img 
                  src="/lovable-uploads/07bd9556-ce74-44fd-832b-e7677fffc09d.png"
                  alt="Roland Multi Perfume"
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2">
                  <Heart className="w-5 h-5 text-white" />
                </button>
              </div>
              <div>
                <h4 className="text-sm font-medium">Roland Multi Perfume</h4>
                <p className="text-sm">35,000 KRW</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Recently visited</h3>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="relative aspect-square">
                <img 
                  src="/lovable-uploads/07bd9556-ce74-44fd-832b-e7677fffc09d.png"
                  alt="Roland Multi Perfume"
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2">
                  <Heart className="w-5 h-5 text-white" />
                </button>
              </div>
              <div>
                <h4 className="text-sm font-medium">Roland Multi Perfume</h4>
                <p className="text-sm">35,000 KRW</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
