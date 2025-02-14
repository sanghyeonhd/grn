
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductHeader from '@/components/product/ProductHeader';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ChevronLeft, Heart } from 'lucide-react';

interface CategoryProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  options?: string[];
  category: string;
  story: string;
}

const CategoryProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isAddToCartOpen, setIsAddToCartOpen] = useState(false);

  // 실제 구현시에는 API나 데이터 저장소에서 가져와야 할 데이터
  const product: CategoryProduct = {
    id: '1',
    name: 'Roland Multi Perfume',
    description: '롤랑 멀티퍼퓸 100ml / 200ml',
    price: 35000,
    image: '/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png',
    options: ['100ml', '200ml'],
    category: 'perfume',
    story: '롤랑 브랜드에서 향기를 만나다. 감각과 감성이 살아나던 순간, 향에 몰입할 수 있었던 롤랑과의 만남.'
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="min-h-screen bg-white">
      <ProductHeader />
      
      <div className="pt-[56px] pb-[100px]">
        <div className="aspect-square">
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-5 space-y-6">
          <div className="space-y-1">
            <div className="text-sm text-gray-500">
              {location.pathname.includes('perfume') && '퍼퓸 > 멀티 퍼퓸'}
              {location.pathname.includes('space') && '공간 > 디퓨저'}
              {location.pathname.includes('body') && '바디 > 핸드크림'}
            </div>
            <h1 className="text-2xl font-medium">{product.name}</h1>
            <p className="text-sm text-gray-600">{product.description}</p>
            <div className="text-lg font-medium">{product.price.toLocaleString()} KRW</div>
          </div>

          {product.options && (
            <div className="flex gap-3">
              {product.options.map((option) => (
                <button
                  key={option}
                  className={`flex-1 py-2 border rounded text-sm ${
                    selectedOption === option ? 'border-black' : ''
                  }`}
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
                  <p className="text-sm text-gray-600">{product.story}</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">구매 혜택</h3>
              <p className="text-sm text-gray-600">
                - 회원 등급에 따라 3~1% 적립
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">배송 안내</h3>
              <p className="text-sm text-gray-600">
                - 당일 배송 / 배송비 3,000원<br />
                - 홈택배 봉투로 발송됨
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
