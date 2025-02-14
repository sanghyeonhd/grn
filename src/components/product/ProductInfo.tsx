
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ProductInfo = () => {
  return (
    <div className="p-5 space-y-4">
      <div className="space-y-1">
        <div className="text-sm text-gray-500">기프트 &gt; 전체</div>
        <h1 className="text-2xl font-medium">Trio Gift Set</h1>
        <p className="text-sm text-gray-600">서바이 & 핸드크림 & 핸드워시 세트 | 40g & 60g & 450ml</p>
        <div className="text-lg font-medium">68,000 KRW</div>
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
                마음의 향, 손 끝을 거쳐 세상을 향해 전달되다. 세월이 흘러도
                변치 않는 마음을 향기로 담아 전합니다.
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default ProductInfo;
