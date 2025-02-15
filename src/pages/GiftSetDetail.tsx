import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Heart, Share2, ShoppingCart } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { addToWishlist, removeFromWishlist, isInWishlist, WishlistItem } from '../utils/wishlist';
import { useToast } from "@/components/ui/use-toast";
import ProductOptionSheet from '@/components/product/ProductOptionSheet';

const GiftSetDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const [isGiftSheetOpen, setIsGiftSheetOpen] = useState(false);
  const [isPurchaseSheetOpen, setIsPurchaseSheetOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
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
    name: 'Trio Gift Set',
    description: '사쉐 & 핸드크림 & 핸드워시 세트 / 40g & 60G & 450ml',
    price: 68000,
    image: '/lovable-uploads/2c3d03e4-6ab8-47b5-9d62-04e0ca951715.png',
    story: '마음의 향, 손 끝을 거쳐 세상을 향해 전달되다. 세월이 흘러도 변치 않는 마음을 향기로 담아 전합니다.',
  };

  useEffect(() => {
    if (id) {
      setIsWishlisted(isInWishlist(id));
    }
  }, [id]);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } catch (error) {
      toast({
        description: "공유하기가 지원되지 않는 환경입니다.",
      });
    }
  };

  const handleWishlistToggle = () => {
    const item: WishlistItem = {
      id: id || '1',
      name: product.name,
      description: product.description,
      price: `${product.price.toLocaleString()} KRW`,
      image: product.image
    };

    if (isWishlisted) {
      removeFromWishlist(id || '1');
      toast({
        description: "관심상품에서 제거되었습니다.",
      });
    } else {
      addToWishlist(item);
      toast({
        description: "관심상품에 추가되었습니다.",
      });
    }

    setIsWishlisted(!isWishlisted);
  };

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

  return (
    <div className="min-h-screen bg-white pb-[100px]">
      <div className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4">
            <button onClick={handleShare}>
              <Share2 className="w-5 h-5" />
            </button>
            <button onClick={handleWishlistToggle}>
              <Heart className="w-5 h-5" fill={isWishlisted ? "black" : "none"} />
            </button>
            <button onClick={() => navigate('/cart')} className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </button>
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
        </div>
      </div>

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

export default GiftSetDetail;
