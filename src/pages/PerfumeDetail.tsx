
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Heart, Share2 } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import { useToast } from "@/components/ui/use-toast";

const PerfumeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedVolume, setSelectedVolume] = useState<'100ml' | '200ml'>('100ml');

  const product = {
    id: '1',
    name: 'Roland Multi Perfume',
    description: '롤랑 멀티퍼퓸 100ml / 200ml',
    price: 35000,
    image: '/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png',
    story: '롤랑의 멀티 퍼퓸은 일상 생활 속 다양한 곳에서 품격있게 사용할 수 있습니다.',
    isOutOfStock: true,
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
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        {product.isOutOfStock ? (
          <button 
            onClick={handleNotify}
            className="w-full py-3 bg-gray-900 text-white"
          >
            재입고 알림 신청
          </button>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 border border-black text-black">
              선물하기
            </button>
            <button className="py-3 bg-[#2C2C2C] text-white">
              구매하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfumeDetail;
