
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductHeader from '@/components/product/ProductHeader';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ChevronLeft, Heart } from 'lucide-react';
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
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isAddToCartOpen, setIsAddToCartOpen] = useState(false);

  const product: CategoryProduct = {
    id: '1',
    name: 'Roland Multi Perfume',
    description: '롤랑 멀티퍼퓸 100ml / 200ml',
    price: 35000,
    image: '/lovable-uploads/3b72e8db-9912-46db-9b22-015b8cd51751.png',
    options: ['100ml', '200ml'],
    category: 'perfume',
    story: '롤랑 브랜드에서 향기를 만나다. 감각과 감성이 살아나던 순간, 향에 몰입할 수 있었던 롤랑과의 만남.',
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
    ]
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="min-h-screen bg-white pb-[100px]">
      <ProductHeader />
      
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
            <div className="text-sm text-gray-500">
              퍼퓸 > 시그니처
            </div>
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
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

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
                  <p className="text-sm text-gray-600 whitespace-pre-line">{product.story}</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">배송 정보 안내</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="space-y-1">
                  <p className="font-medium">1. 배송 정보</p>
                  <p>- 배송 방법: 택배</p>
                  <p>- 배송 지역: 전국</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">2. 배송비 안내</p>
                  <p>- 3,000원 (3만원 이상 구매시 무료배송)</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">3. 배송</p>
                  <p>- 배송 기간: 결제 완료 후 1-3일 이내 도착</p>
                  <p>- 배송 진행 상황은 마이페이지에서 조회 가능</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">4. 교환/반품</p>
                  <p>- 단순 변심: 수령 후 7일 이내</p>
                  <p>- 제품 하자: 수령 후 30일 이내</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">5. 고객센터</p>
                  <p>- 전화: 1544-9999</p>
                  <p>- 상담시간: 평일 10:00 - 17:00</p>
                  <p>- 점심시간: 12:30 - 13:30</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Information</h3>
              <div className="space-y-4">
                {product.information?.map((info, index) => (
                  <div key={index} className="flex text-sm border-b pb-4">
                    <span className="w-24 text-gray-500">{info.label}</span>
                    <span className="flex-1 text-gray-800 whitespace-pre-line">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <div className="grid grid-cols-2 gap-3">
          <button className="py-3 border border-black text-black">
            장바구니
          </button>
          <button 
            className="py-3 bg-[#2C2C2C] text-white"
            onClick={() => setIsAddToCartOpen(true)}
          >
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductDetail;
