
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import GiftSetHeader from '@/components/gift-set/GiftSetHeader';
import GiftSetBanner from '@/components/gift-set/GiftSetBanner';
import GiftSetTabs from '@/components/gift-set/GiftSetTabs';
import ProductGrid from '@/components/gift-set/ProductGrid';
import BottomNavigation from '@/components/gift-set/BottomNavigation';

interface GiftSetProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  soldOut?: boolean;
}

const GiftSet = () => {
  const location = useLocation();
  const [selectedBrand, setSelectedBrand] = useState('GRANHAND.');
  const [selectedTab, setSelectedTab] = useState(() => {
    const path = location.pathname.split('/').pop();
    if (path === 'gift-set') return '기프트 세트';
    if (path === 'perfume') return '퍼퓸';
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

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    window.history.pushState(null, '', `/granshop${tab === '기프트 세트' ? '/gift-set' : tab === '퍼퓸' ? '/perfume' : ''}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <GiftSetHeader selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
      <GiftSetBanner />
      <GiftSetTabs selectedTab={selectedTab} onTabClick={handleTabClick} />
      <ProductGrid products={products} />
      <BottomNavigation />
    </div>
  );
};

export default GiftSet;
