
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Heart, Share2 } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import { useToast } from "@/components/ui/use-toast";
import ProductOptionSheet from '@/components/product/ProductOptionSheet';

const PerfumeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedVolume, setSelectedVolume] = useState<'100ml' | '200ml'>('100ml');
  const [isGiftSheetOpen, setIsGiftSheetOpen] = useState(false);
  const [isPurchaseSheetOpen, setIsPurchaseSheetOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Array<{
    name: string;
    price: number;
    quantity: number;
    option?: string;
  }>>([]);
  const [selectedPurchaseProducts, setSelectedPurchaseProducts] = useState<Array<{
    name: string;
    price: number;
    quantity: number;
    option?: string;
  }>>([]);

  const product = {
    id: '1',
    name: 'Roland Multi Perfume',
    description: '롤랑 멀티퍼퓸 100ml / 200ml',
    price: 35000,
    image: '/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png',
    story: '롤랑의 멀티 퍼퓸은 일상 생활 속 다양한 곳에서 품격있게 사용할 수 있습니다.',
    isOutOfStock: true,
  };

  const recommendedProducts = [
    {
      id: '2',
      name: 'Cask Signature Perfume',
      description: '캐스크 시그니처 퍼퓸 100ml',
      price: 55000,
      image: '/lovable-uploads/49950af0-c308-4706-9628-6fc190caba7f.png',
    },
    {
      id: '3',
      name: 'Roland Multi Perfume',
      description: '롤랑 멀티퍼퓸 200ml',
      price: 45000,
      image: '/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png',
    },
    {
      id: '4',
      name: 'Cask Signature Perfume',
      description: '캐스크 시그니처 퍼퓸 200ml',
      price: 75000,
      image: '/lovable-uploads/49950af0-c308-4706-9628-6fc190caba7f.png',
    },
    {
      id: '5',
      name: 'Roland Multi Perfume',
      description: '롤랑 멀티퍼퓸 100ml',
      price: 35000,
      image: '/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png',
    },
  ];

  const handleProductSelect = (option: string) => {
    if (option === '구매 안함') return;
    
    setSelectedProducts([{
      name: product.name,
      price: product.price + (option.includes('500') ? 500 : 0),
      quantity: 1,
      option,
    }]);
  };

  const handlePurchaseProductSelect = (option: string) => {
    setSelectedPurchaseProducts([{
      name: product.name,
      price: product.price,
      quantity: 1,
      option,
    }]);
  };

  const handleQuantityChange = (index: number, increment: boolean) => {
    setSelectedProducts(prev => prev.map((item, i) => {
      if (i === index) {
        const newQuantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handlePurchaseQuantityChange = (index: number, increment: boolean) => {
    setSelectedPurchaseProducts(prev => prev.map((item, i) => {
      if (i === index) {
        const newQuantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const getTotalPrice = () => {
    return selectedProducts.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getPurchaseTotalPrice = () => {
    return selectedPurchaseProducts.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleNotify = () => {
    toast({
      title: "재입고 알림 신청 완료",
      description: "상품이 입고되면 알림으로 알려드리겠습니다.",
    });
  };

  return (
    <div className="min-h-screen bg-white pb-[100px]">
      <div className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4">
            <Share2 className="w-5 h-5" />
            <Heart className="w-5 h-5" />
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

          <div className="flex gap-3">
            <button
              onClick={() => setSelectedVolume('100ml')}
              className={cn(
                "flex-1 py-2 border rounded",
                selectedVolume === '100ml' ? "border-black" : "border-gray-200"
              )}
            >
              100ml
            </button>
            <button
              onClick={() => setSelectedVolume('200ml')}
              className={cn(
                "flex-1 py-2 border rounded",
                selectedVolume === '200ml' ? "border-black" : "border-gray-200"
              )}
            >
              200ml
            </button>
          </div>

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
                <p className="text-sm text-gray-600">{product.story}</p>
              </div>
            </SheetContent>
          </Sheet>

          <div className="space-y-4">
            <h2 className="text-lg font-medium">추천</h2>
            <div className="grid grid-cols-2 gap-4">
              {recommendedProducts.map((product) => (
                <button 
                  key={product.id}
                  onClick={() => navigate(`/granshop/perfume/${product.id}`)}
                  className="text-left space-y-2"
                >
                  <div className="aspect-square bg-gray-50">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">{product.name}</div>
                    <div className="text-xs text-gray-600">{product.description}</div>
                    <div className="text-sm font-medium">{product.price.toLocaleString()} KRW</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t space-y-3">
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
        {product.isOutOfStock && (
          <button 
            onClick={handleNotify}
            className="w-full py-3 bg-gray-900 text-white"
          >
            재입고 알림 신청
          </button>
        )}
      </div>

      <ProductOptionSheet 
        isOpen={isGiftSheetOpen}
        onOpenChange={setIsGiftSheetOpen}
        type="gift"
        selectedProducts={selectedProducts}
        onProductSelect={handleProductSelect}
        onQuantityChange={handleQuantityChange}
        getTotalPrice={getTotalPrice}
      />

      <ProductOptionSheet 
        isOpen={isPurchaseSheetOpen}
        onOpenChange={setIsPurchaseSheetOpen}
        type="purchase"
        selectedProducts={selectedPurchaseProducts}
        onProductSelect={handlePurchaseProductSelect}
        onQuantityChange={handlePurchaseQuantityChange}
        getTotalPrice={getPurchaseTotalPrice}
      />
    </div>
  );
};

export default PerfumeDetail;
