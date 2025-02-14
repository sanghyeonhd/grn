
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Heart, Share2, Plus, Minus } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectedProduct {
  name: string;
  price: number;
  quantity: number;
  option?: string;
}

const ProductDetail = () => {
  const navigate = useNavigate();
  const [isGiftSheetOpen, setIsGiftSheetOpen] = useState(false);
  const [isPurchaseSheetOpen, setIsPurchaseSheetOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);

  const handleProductSelect = (option: string) => {
    const newProduct = {
      name: "Trio Gift Set",
      price: 35500,
      quantity: 1,
      option: option
    };
    setSelectedProducts([...selectedProducts, newProduct]);
  };

  const updateQuantity = (index: number, increment: boolean) => {
    setSelectedProducts(products => 
      products.map((product, i) => {
        if (i === index) {
          return {
            ...product,
            quantity: increment ? product.quantity + 1 : Math.max(1, product.quantity - 1)
          };
        }
        return product;
      })
    );
  };

  const getTotalPrice = () => {
    return selectedProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

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
            <div className="text-sm text-gray-500">기프트 &gt; 전체</div>
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
          <button 
            className="py-3 border border-black text-black"
            onClick={() => setIsGiftSheetOpen(true)}
          >
            선물하기
          </button>
          <button 
            className="py-3 bg-[#2C2C2C] text-white"
            onClick={() => setIsPurchaseSheetOpen(true)}
          >
            구매하기
          </button>
        </div>
      </div>

      {/* Gift Sheet */}
      <Sheet open={isGiftSheetOpen} onOpenChange={setIsGiftSheetOpen}>
        <SheetContent side="bottom" className="h-[80vh] bg-white">
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-auto">
              <h2 className="text-lg font-medium mb-4">쇼핑백</h2>
              
              <Select onValueChange={handleProductSelect}>
                <SelectTrigger className="w-full mb-4">
                  <SelectValue placeholder="선택해 주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="구매 안함">구매 안함</SelectItem>
                  <SelectItem value="추가 구매(+500원)">추가 구매(+500원)</SelectItem>
                </SelectContent>
              </Select>

              {selectedProducts.map((product, index) => (
                <div key={index} className="border-t py-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-gray-600">쇼핑백: {product.option}</p>
                    </div>
                    <button className="text-gray-400">삭제</button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{product.price.toLocaleString()}원</div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateQuantity(index, false)}>
                        <Minus className="w-4 h-4" />
                      </button>
                      <span>{product.quantity}</span>
                      <button onClick={() => updateQuantity(index, true)}>
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span>합계</span>
                <span className="font-medium">{getTotalPrice().toLocaleString()}원</span>
              </div>
              <button 
                className="w-full py-3 bg-[#2C2C2C] text-white"
                onClick={() => setIsGiftSheetOpen(false)}
              >
                선물하기
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Purchase Sheet */}
      <Sheet open={isPurchaseSheetOpen} onOpenChange={setIsPurchaseSheetOpen}>
        <SheetContent side="bottom" className="h-[80vh] bg-white">
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-auto">
              <h2 className="text-lg font-medium mb-4">향 종류</h2>
              
              <Select onValueChange={handleProductSelect}>
                <SelectTrigger className="w-full mb-4">
                  <SelectValue placeholder="옵션을 선택해 주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="마린우드">마린우드</SelectItem>
                  <SelectItem value="수자삼">수자삼</SelectItem>
                  <SelectItem value="규장">규장</SelectItem>
                  <SelectItem value="월리 오멜">월리 오멜</SelectItem>
                  <SelectItem value="트와버드">트와버드</SelectItem>
                  <SelectItem value="비올레또">비올레또</SelectItem>
                </SelectContent>
              </Select>

              {selectedProducts.map((product, index) => (
                <div key={index} className="border-t py-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.option}</p>
                    </div>
                    <button className="text-gray-400">삭제</button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{product.price.toLocaleString()}원</div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateQuantity(index, false)}>
                        <Minus className="w-4 h-4" />
                      </button>
                      <span>{product.quantity}</span>
                      <button onClick={() => updateQuantity(index, true)}>
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span>합계</span>
                <span className="font-medium">{getTotalPrice().toLocaleString()}원</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  className="py-3 border border-black text-black"
                  onClick={() => setIsPurchaseSheetOpen(false)}
                >
                  장바구니 담기
                </button>
                <button 
                  className="py-3 bg-[#2C2C2C] text-white"
                  onClick={() => setIsPurchaseSheetOpen(false)}
                >
                  구매하기
                </button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ProductDetail;
