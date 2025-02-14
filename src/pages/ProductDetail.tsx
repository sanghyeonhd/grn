
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Heart, Share2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const ProductDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4">
            <button>
              <Share2 className="w-5 h-5" />
            </button>
            <button className="relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">50</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-[56px] pb-[100px]">
        {/* Product Image */}
        <div className="aspect-square">
          <img 
            src="/lovable-uploads/6ae09e1a-c53d-4a4c-9396-e2e9edd6e93f.png"
            alt="Trio Gift Set" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-5 space-y-4">
          <div className="space-y-1">
            <div className="text-sm text-gray-500">기프트 > 전체</div>
            <h1 className="text-2xl font-medium">Trio Gift Set</h1>
            <p className="text-sm text-gray-600">서바이 & 핸드크림 & 핸드워시 세트 | 40g & 60g & 450ml</p>
            <div className="text-lg font-medium">68,000 KRW</div>
          </div>

          {/* Fragrance Story Section */}
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
      </div>

      {/* Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <div className="grid grid-cols-2 gap-3">
          <button className="py-3 border border-black text-black">
            선물하기
          </button>
          <button className="py-3 bg-[#2C2C2C] text-white">
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
