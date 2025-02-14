
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Heart } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';

interface GiftSetProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  soldOut?: boolean;
}

const GiftSet = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedBrand, setSelectedBrand] = useState('GRANHAND.');
  const [selectedTab, setSelectedTab] = useState(() => {
    if (location.pathname === '/granshop/gift-set') return '기프트 세트';
    if (location.pathname === '/granshop/perfume') return '퍼퓸';
    return '전체';
  });
  
  const products: GiftSetProduct[] = [
    {
      id: 1,
      name: "Roland Multi Perfume",
      description: "롤랑 머스크퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/public/lovable-uploads/95b72031-442a-4f1b-b4ca-4cd004cdfbc6.png"
    },
    {
      id: 2,
      name: "Roland Multi Perfume",
      description: "롤랑 머스크퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/public/lovable-uploads/95b72031-442a-4f1b-b4ca-4cd004cdfbc6.png",
      soldOut: true
    },
    {
      id: 3,
      name: "Roland Multi Perfume",
      description: "롤랑 머스크퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/public/lovable-uploads/95b72031-442a-4f1b-b4ca-4cd004cdfbc6.png"
    },
    {
      id: 4,
      name: "Roland Multi Perfume",
      description: "롤랑 머스크퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/public/lovable-uploads/95b72031-442a-4f1b-b4ca-4cd004cdfbc6.png"
    }
  ];

  const brands = [
    { id: 1, name: 'GRANHAND.' },
    { id: 2, name: 'heiion' },
    { id: 3, name: 'Komfortabel COFFEE' }
  ];

  const handleTabClick = (tab: string) => {
    if (tab === '기프트 세트') {
      navigate('/granshop/gift-set');
    } else if (tab === '퍼퓸') {
      navigate('/granshop/perfume');
    }
    setSelectedTab(tab);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-between px-4 h-[44px]">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex items-center">
                <span className="text-lg font-bold mr-1">{selectedBrand}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[240px]">
              <div className="py-6">
                <p className="text-center text-gray-600 mb-6">다양한 BRAND를 만나보세요.</p>
                <div className="space-y-4">
                  {brands.map((brand) => (
                    <button
                      key={brand.id}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => setSelectedBrand(brand.name)}
                    >
                      {brand.name}
                    </button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center space-x-4">
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </div>

      <div className="relative h-[130px] bg-[#F5F5F5]">
        <img 
          src="/public/lovable-uploads/6636d39a-ad0a-41a2-9827-05059fd77488.png" 
          alt="Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-end justify-start p-4">
          <p className="text-white text-left text-xs leading-5">
            그랑핸드는 쉽게 소비되고 잊혀질 무언가가 아닌,<br />
            보이지 않는 곳에서 무수한 존재들로 모든 사람들에게<br />
            우리의 메시지/가치를 전하고 싶습니다.
          </p>
        </div>
      </div>

      <div className="flex border-b border-gray-200 px-4">
        <button 
          onClick={() => handleTabClick('전체')}
          className={`px-3 py-3 text-xs ${selectedTab === '전체' ? 'font-bold border-b-2 border-black' : 'text-gray-600'}`}
        >
          전체
        </button>
        <button 
          onClick={() => handleTabClick('기프트 세트')}
          className={`px-3 py-3 text-xs ${selectedTab === '기프트 세트' ? 'font-bold border-b-2 border-black' : 'text-gray-600'}`}
        >
          기프트 세트
        </button>
        <button 
          onClick={() => handleTabClick('퍼퓸')}
          className={`px-3 py-3 text-xs ${selectedTab === '퍼퓸' ? 'font-bold border-b-2 border-black' : 'text-gray-600'}`}
        >
          퍼퓸
        </button>
        <button 
          onClick={() => handleTabClick('공간')}
          className={`px-3 py-3 text-xs ${selectedTab === '공간' ? 'font-bold border-b-2 border-black' : 'text-gray-600'}`}
        >
          공간
        </button>
        <button 
          onClick={() => handleTabClick('바디')}
          className={`px-3 py-3 text-xs ${selectedTab === '바디' ? 'font-bold border-b-2 border-black' : 'text-gray-600'}`}
        >
          바디
        </button>
      </div>

      <div className="flex justify-between items-center px-4 py-3">
        <p className="text-xs">전체</p>
        <button className="text-xs text-gray-600">추천순 ▼</button>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-6 px-4">
        {products.map((product) => (
          <div key={product.id} className="space-y-2">
            <div className="relative aspect-square bg-[#F5F5F5]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              {product.soldOut ? (
                <div className="absolute inset-0 bg-gray-500/50 flex items-center justify-center">
                  <span className="text-white font-semibold text-xl">Sold out</span>
                </div>
              ) : (
                <button className="absolute top-2 right-2">
                  <Heart className="text-white" size={24} />
                </button>
              )}
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="text-xs text-gray-600">{product.description}</p>
              <p className="text-sm">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-[60px] bg-white border-t border-gray-200">
        <div className="flex justify-around items-center h-full">
          <button className="flex flex-col items-center justify-center space-y-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            </svg>
            <span className="text-xs">홈</span>
          </button>
          <button className="flex flex-col items-center justify-center space-y-1 text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span className="text-xs">커뮤니티</span>
          </button>
          <button className="flex flex-col items-center justify-center space-y-1 text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span className="text-xs">스토어</span>
          </button>
          <button className="flex flex-col items-center justify-center space-y-1 text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span className="text-xs">관심상품</span>
          </button>
          <button className="flex flex-col items-center justify-center space-y-1 text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="text-xs">My</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftSet;

