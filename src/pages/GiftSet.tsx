
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const products = {
  giftsets: [
    {
      id: 1,
      name: "Trio Gift Set",
      description: "서재 & 본드-펄 & 핸드워시 세트 | 40g & 60g & 450m",
      price: "68,000 KRW",
      image: "/lovable-uploads/a6bf45c9-0df9-4cb1-b393-6e4fda0b86a1.png"
    },
    {
      id: 2,
      name: "Trio Gift Set",
      description: "서재 & 본드-펄 & 핸드워시 세트 | 40g & 60g & 450m",
      price: "68,000 KRW",
      image: "/lovable-uploads/a6bf45c9-0df9-4cb1-b393-6e4fda0b86a1.png"
    }
  ],
  perfumes: [
    {
      id: 1,
      name: "Roland Multi Perfume",
      description: "롤랑 멀티퍼퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/lovable-uploads/2c24b0e5-3019-42e4-a3fa-ec7ac94dc6c9.png",
      soldOut: false
    },
    {
      id: 2,
      name: "Roland Multi Perfume",
      description: "롤랑 멀티퍼퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/lovable-uploads/2c24b0e5-3019-42e4-a3fa-ec7ac94dc6c9.png",
      soldOut: true
    }
  ]
};

const ProductCard = ({ product, type }: { product: any, type: 'giftset' | 'perfume' }) => (
  <Card className="relative border-none shadow-none">
    <CardContent className="p-0">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-auto rounded-lg"
        />
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80">
          <Heart className="w-5 h-5" />
        </button>
        {type === 'perfume' && product.soldOut && (
          <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white/80 px-4 py-2 rounded-md">
            <span className="text-[#ea384c] font-semibold">Sold out</span>
          </div>
        )}
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="font-medium">{product.price}</p>
      </div>
    </CardContent>
  </Card>
);

const GiftSet = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
        <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
          <h1 className="text-xl font-bold">GRANHAND.</h1>
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5" />
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </div>
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="pt-16 pb-4 px-4 bg-[#F5F5F5] text-center">
        <p className="text-sm text-gray-600 leading-relaxed">
          그랑핸드는 감각 소비되고 있다고 우리가 아닌,<br />
          보이지 않는 곳에서 무수한 존재들로 부른 사람들에게<br />
          우리의 마음을 온기를 전하고 싶습니다.
        </p>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-20">
        <Tabs defaultValue="giftset" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto py-4 space-x-6">
            <TabsTrigger 
              value="giftset"
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-black rounded-none px-0"
            >
              기프트 세트
            </TabsTrigger>
            <TabsTrigger 
              value="perfume"
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-black rounded-none px-0"
            >
              퍼퓸
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="giftset" className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              {products.giftsets.map((product) => (
                <ProductCard key={product.id} product={product} type="giftset" />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="perfume" className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              {products.perfumes.map((product) => (
                <ProductCard key={product.id} product={product} type="perfume" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around items-center p-4">
          {['홈', '가이드', '스토어', '관심상품', 'My'].map((item) => (
            <button key={item} className="flex flex-col items-center gap-1">
              <span className="text-xs">{item}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default GiftSet;
