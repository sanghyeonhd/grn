
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, Home, BookOpen, Scan, User } from "lucide-react";

const WishList = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Roland Multi Perfume",
      description: "롤랑 멀티퍼퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png",
    },
    {
      id: 2,
      name: "Roland Multi Perfume",
      description: "롤랑 멀티퍼퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png",
    },
    {
      id: 3,
      name: "Roland Multi Perfume",
      description: "롤랑 멀티퍼퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png",
    },
    {
      id: 4,
      name: "Roland Multi Perfume",
      description: "롤랑 멀티퍼퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png",
    },
  ];

  const ProductCard = ({ product }: { product: any }) => (
    <div className="space-y-2">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full aspect-square object-cover"
        />
        <button className="absolute top-2 right-2">
          <Heart className="w-6 h-6 text-white fill-white" />
        </button>
      </div>
      <div className="space-y-1">
        <h3 className="text-base font-medium">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="font-medium">{product.price}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-medium">관심상품</h1>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/search')}>
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => navigate('/cart')} className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </button>
          </div>
        </div>
      </div>

      <div className="pt-[56px] px-4 pb-[80px]">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around items-center h-[60px]">
          <button 
            className="flex flex-col items-center justify-center gap-1"
            onClick={() => navigate('/')}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">홈</span>
          </button>
          <button 
            className="flex flex-col items-center justify-center gap-1"
            onClick={() => navigate('/guide')}
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-xs">향 가이드</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-1">
            <Scan className="w-5 h-5" />
            <span className="text-xs">스캔</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-1">
            <Heart className="w-5 h-5 fill-black" />
            <span className="text-xs font-medium">관심상품</span>
          </button>
          <button 
            className="flex flex-col items-center justify-center gap-1"
            onClick={() => navigate('/mypage')}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">MY</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default WishList;
