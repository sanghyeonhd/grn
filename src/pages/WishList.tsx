import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, ShoppingBag } from "lucide-react";
import { addToWishlist, removeFromWishlist, isInWishlist, getWishlist, WishlistItem } from '../utils/wishlist';
import { useToast } from "@/hooks/use-toast";
import BottomNavigation from '@/components/common/BottomNavigation';

const WishList = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [products, setProducts] = useState<WishlistItem[]>([]);

  useEffect(() => {
    setProducts(getWishlist());
  }, []);

  const handleWishlistToggle = (e: React.MouseEvent, product: WishlistItem) => {
    e.stopPropagation();
    
    removeFromWishlist(product.id);
    setProducts(prev => prev.filter(item => item.id !== product.id));
    
    toast({
      description: "관심상품에서 제거되었습니다.",
    });
  };

  const ProductCard = ({ product }: { product: WishlistItem }) => (
    <div className="space-y-2">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full aspect-square object-cover cursor-pointer"
          onClick={() => navigate(`/granshop/perfume/${product.id}`)}
        />
        <button 
          className="absolute top-2 right-2"
          onClick={(e) => handleWishlistToggle(e, product)}
        >
          <Heart className="w-6 h-6 text-white fill-white" />
        </button>
      </div>
      <div 
        className="space-y-1 cursor-pointer" 
        onClick={() => navigate(`/granshop/perfume/${product.id}`)}
      >
        <h3 className="text-base font-medium">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="font-medium">{product.price}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <div className="fixed top-0 left-0 right-0 bg-[#FDFBF4] z-50">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-medium">관심상품</h1>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/search')}>
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => navigate('/cart')} className="relative">
              <ShoppingBag className="w-5 h-5" />
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
        
        {products.length === 0 && (
          <div className="flex flex-col items-center justify-center h-[50vh] text-gray-500">
            <p>관심상품이 없습니다.</p>
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default WishList;
