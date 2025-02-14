
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductHeader from '@/components/product/ProductHeader';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ChevronLeft, Heart, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  options?: string[];
  category: string;
  story: string;
  information?: {
    label: string;
    value: string;
  }[];
  recommends?: {
    id: string;
    name: string;
    price: number;
    image: string;
  }[];
  recentlyVisited?: {
    id: string;
    name: string;
    price: number;
    image: string;
  }[];
}

const CategoryProductDetail = () => {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState<string>('100ml');

  const product: CategoryProduct = {
    id: '1',
    name: 'Roland Multi Perfume',
    description: '롤랑 멀티퍼퓸 100ml / 200ml',
    price: 35000,
    image: '/lovable-uploads/a1b7f0de-8d36-492e-94f9-3c2877b33f80.png',
    options: ['100ml', '200ml'],
    category: 'perfume',
    story: '향취를 만나보세요. 편안하게 생각해 보세요하다.\n살아있는 자연스러운 행복한 생활은 프리미엄적이면서 스스로마다 활기차게 열락을 찾아 인생밝힙니다.',
    information: [
      { label: '제품명', value: 'Roland Multi Perfume 롤랑 멀티퍼퓸' },
      { label: '제조국', value: '대한민국' },
      { label: '제조사', value: 'Made from Pure Evil, Good moral Hygine' },
      { label: '전성분', value: 'Perfume, rose synthetic, chemistry, fresh air' },
      { label: '사용기한', value: '제품 수령 후 36개월' },
      { label: '용량', value: '100ml / 200ml' },
      { label: '사용방법', value: '취향에 맞게 적당량을 분사한다.' },
      { label: '제품특징', value: '· 수정과를 품은듯한 달달하고 깔끔한 매력을 가진 향\n· 은은하게 흐르는 물결 같은 톤다운된 허브향과 스파이시한 향취\n· 시간이 지날 수록 더욱 깊어지는 향취' },
      { label: '주의사항', value: '· 고온 다습한 곳을 피해 보관\n· 직사광선을 피해 보관\n· 상처가 있는 곳 등에는 사용을 금함\n· 눈에 들어갔을 경우 즉시 씻어낼 것\n· 이상이 있는 경우 사용을 중지' }
    ],
    recommends: [
      {
        id: '2',
        name: 'Roland Multi Perfume',
        price: 35000,
        image: '/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png'
      },
      {
        id: '3',
        name: 'Roland Multi Perfume',
        price: 35000,
        image: '/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png'
      }
    ],
    recentlyVisited: [
      {
        id: '4',
        name: 'Roland Multi Perfume',
        price: 35000,
        image: '/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png'
      },
      {
        id: '5',
        name: 'Roland Multi Perfume',
        price: 35000,
        image: '/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white pb-[100px]">
      <div className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex items-center justify-between p-4">
          <ChevronLeft className="w-6 h-6" />
          <div className="flex items-center gap-4">
            <Share2 className="w-5 h-5" />
            <Heart className="w-5 h-5" />
            <div className="relative">
              <div className="w-5 h-5 text-center bg-red-500 text-white rounded-full text-xs flex items-center justify-center">2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[56px]">
        <div className="aspect-square bg-gray-50">
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-5 space-y-6">
          <div className="space-y-2">
            <h1 className="text-xl font-medium">{product.name}</h1>
            <p className="text-sm text-gray-600">{product.description}</p>
            <div className="text-lg font-medium">{product.price.toLocaleString()} KRW</div>
          </div>

          {product.options && (
            <div className="flex gap-3">
              {product.options.map((option) => (
                <button
                  key={option}
                  className={cn(
                    "flex-1 py-2 border rounded text-sm",
                    selectedOption === option ? "border-black" : "border-gray-200"
                  )}
                  onClick={() => setSelectedOption(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          <Sheet>
            <button className="flex items-center justify-between w-full py-4 border-t border-b">
              <span className="text-sm">Fragrance Story</span>
              <ChevronLeft className="w-5 h-5 rotate-180" />
            </button>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Fragrance Story</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <p className="text-sm text-gray-600 whitespace-pre-line">{product.story}</p>
              </div>
            </SheetContent>
          </Sheet>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">구매 혜택</h3>
              <p className="text-sm text-gray-600">
                - 회원 등급에 따라 3~1% 적립<br />
                - 쿠폰 사용 혜택<br />
                - 포인트 사용 혜택
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">배송비 안내</h3>
              <p className="text-sm text-gray-600">
                1. 배송비<br />
                - 당일 배송 / 배송비 3,000원<br />
                - 홈택배 봉투로 발송됨
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">상세</h3>
              <p className="text-sm text-gray-600">
                {product.information?.map((info, index) => (
                  <div key={index} className="flex text-sm border-b py-2">
                    <span className="w-24 text-gray-500">{info.label}</span>
                    <span className="flex-1 text-gray-800 whitespace-pre-line">{info.value}</span>
                  </div>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <div className="grid grid-cols-2 gap-3">
          <button className="py-3 border border-black text-black">
            장바구니
          </button>
          <button className="py-3 bg-[#2C2C2C] text-white">
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductDetail;
