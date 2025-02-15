import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Heart, Share2, ShoppingCart } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { addToWishlist, removeFromWishlist, isInWishlist, WishlistItem } from '../utils/wishlist';
import { useToast } from "@/hooks/use-toast";
import ProductOptionSheet from '@/components/product/ProductOptionSheet';
import { cn } from '@/lib/utils';

const PerfumeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedVolume, setSelectedVolume] = useState<'100ml' | '200ml'>('100ml');
  const [isGiftSheetOpen, setIsGiftSheetOpen] = useState(false);
  const [isPurchaseSheetOpen, setIsPurchaseSheetOpen] = useState(false);
  const [isStockNotifyRequested, setIsStockNotifyRequested] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Array<{
    name: string;
    price: number;
    quantity: number;
    option?: string;
  }>>([]);
  const [selectedPurchaseProducts] = useState<Array<{
    name: string;
    price: number;
    quantity: number;
    option?: string;
  }>>([]);

  const product = {
    id: '2',
    name: 'Roland Multi Perfume',
    description: '롤랑 멀티퍼퓸 100ml / 200ml',
    price: 35000,
    image: '/lovable-uploads/21fa37c7-fef3-4a02-9062-c9825bb7638e.png',
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
      id: id || '2',
      name: product.name,
      description: product.description,
      price: `${product.price.toLocaleString()} KRW`,
      image: product.image
    };

    if (isWishlisted) {
      removeFromWishlist(id || '2');
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

  const handleStockNotify = () => {
    if (isStockNotifyRequested) {
      setIsStockNotifyRequested(false);
      toast({
        description: "재입고 알림이 취소되었어요.",
        className: "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 text-center",
      });
    } else {
      setIsStockNotifyRequested(true);
      toast({
        description: (
          <div className="space-y-2">
            <p>재입고 알림이 신청되었어요.</p>
            <p className="text-xs text-gray-600">
              상품이 재입고되면 앱 푸시로 알려드립니다.<br />
              [알림 설정] &gt; [재입고 알림]이 켜져 있는지 확인해 보세요.
            </p>
          </div>
        ),
        className: "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 text-center",
      });
    }
  };

  const handleProductSelect = (option: string) => {
    setSelectedProducts([{
      name: product.name,
      price: product.price + (option.includes('500') ? 500 : 0),
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

  const getTotalPrice = () => {
    return selectedProducts.reduce((total, item) => total + (item.price * item.quantity), 0);
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
        {product.isOutOfStock ? (
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={handleStockNotify}
              className="py-3 border border-black text-black"
            >
              {isStockNotifyRequested ? "재입고 알림 취소" : "재입고 알림"}
            </button>
            <button 
              className="py-3 bg-gray-300 text-white cursor-not-allowed"
              disabled
            >
              품절
            </button>
          </div>
        ) : (
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
        onProductSelect={() => {}}
        onQuantityChange={() => {}}
        getTotalPrice={() => 0}
      />
    </div>
  );
};

export default PerfumeDetail;
