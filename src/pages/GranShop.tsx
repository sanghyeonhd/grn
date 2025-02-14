
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Heart, Search, ShoppingCart } from "lucide-react";

const products = {
  perfumes: [
    {
      id: 1,
      name: "Roland Multi Perfume",
      description: "롤랑 멀티퍼퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png",
      soldOut: false
    },
    {
      id: 2,
      name: "Roland Multi Perfume",
      description: "롤랑 멀티퍼퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png",
      soldOut: true
    },
    {
      id: 3,
      name: "Roland Multi Perfume",
      description: "롤랑 멀티퍼퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png",
      soldOut: false
    },
    {
      id: 4,
      name: "Roland Multi Perfume",
      description: "롤랑 멀티퍼퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png",
      soldOut: false
    }
  ],
  giftsets: [
    {
      id: 1,
      name: "Gift Set Example",
      description: "선물 세트 예시",
      price: "50,000 KRW",
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png",
      soldOut: false
    }
  ]
};

const ProductCard = ({ product }: { product: any }) => (
  <div className="relative">
    <div className="relative">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full aspect-square object-cover rounded-none"
      />
      <button className="absolute top-4 right-4">
        <Heart className="w-6 h-6 text-white" />
      </button>
      {product.soldOut && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <span className="text-white font-medium">Sold out</span>
        </div>
      )}
    </div>
    <div className="mt-3 space-y-1">
      <h3 className="text-base font-medium">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="font-medium">{product.price}</p>
    </div>
  </div>
);

const GranShop = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isCurrentPath = (path: string) => {
    return location.pathname.includes(path);
  };

  const handleCategoryClick = (category: string) => {
    if (category === '기프트 세트') {
      navigate('/granshop/giftset');
    } else if (category === '퍼퓸') {
      navigate('/granshop/perfume');
    }
  };

  // 현재 경로에 따라 표시할 상품 결정
  const displayProducts = location.pathname.includes('perfume') ? products.perfumes : products.giftsets;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">GRANHAND.</h1>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/search')}>
              <Search className="w-5 h-5" />
            </button>
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </div>
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="pt-[72px] relative">
        <div className="h-[130px] relative">
          <img 
            src="/lovable-uploads/a0f05104-c55e-484b-aa9e-2f0428d66925.png" 
            alt="banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-left">
            <p className="text-xs text-white leading-relaxed">
              그랑핸드는 감각 소비되고 있다고 우리가 아닌,<br />
              보이지 않는 곳에서 무수한 존재들로 부른 사람들에게<br />
              우리의 마음을 온기를 전하고 싶습니다.
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 border-b">
        <div className="flex items-center gap-4 py-3 text-[0.688rem] overflow-x-auto scrollbar-hide">
          <button 
            className={`whitespace-nowrap ${isCurrentPath('/granshop/all') ? 'font-medium text-black' : 'text-gray-600'}`}
            onClick={() => handleCategoryClick('전체')}
          >
            전체
          </button>
          <button 
            className={`whitespace-nowrap ${isCurrentPath('/granshop/giftset') ? 'font-medium text-black' : 'text-gray-600'}`}
            onClick={() => handleCategoryClick('기프트 세트')}
          >
            기프트 세트
          </button>
          <button 
            className={`whitespace-nowrap ${isCurrentPath('/granshop/perfume') ? 'font-medium text-black' : 'text-gray-600'}`}
            onClick={() => handleCategoryClick('퍼퓸')}
          >
            퍼퓸
          </button>
          <button 
            className={`whitespace-nowrap ${isCurrentPath('/granshop/space') ? 'font-medium text-black' : 'text-gray-600'}`}
            onClick={() => handleCategoryClick('공간')}
          >
            공간
          </button>
          <button 
            className={`whitespace-nowrap ${isCurrentPath('/granshop/body') ? 'font-medium text-black' : 'text-gray-600'}`}
            onClick={() => handleCategoryClick('바디')}
          >
            바디
          </button>
        </div>
      </div>

      {/* Sub Categories */}
      <div className="px-4 border-b">
        <div className="flex items-center gap-4 py-3 text-[0.688rem] overflow-x-auto scrollbar-hide">
          <button className="whitespace-nowrap text-gray-600">시그니처</button>
          <button className="whitespace-nowrap text-gray-600">퍼퓸</button>
          <button className="whitespace-nowrap text-gray-600">멀티 퍼퓸</button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-4 py-3 flex items-center justify-between border-b">
        <span className="text-sm">전체</span>
        <button className="text-sm flex items-center gap-1">
          추천순
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>

      {/* Product Grid */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around items-center p-4">
          {[
            { name: '홈', active: true },
            { name: '가이드', active: false },
            { name: '스토어', active: false },
            { name: '관심상품', active: false },
            { name: 'My', active: false }
          ].map((item) => (
            <button 
              key={item.name} 
              className={`flex flex-col items-center gap-1 ${item.active ? 'text-black' : 'text-gray-400'}`}
            >
              <span className="text-xs">{item.name}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default GranShop;
