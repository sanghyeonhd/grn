
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Heart, Share2, ShoppingBag } from 'lucide-react';

const ProductHeader = () => {
  const navigate = useNavigate();

  return (
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
          </button>
          <button onClick={() => navigate('/cart')} className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default ProductHeader;
