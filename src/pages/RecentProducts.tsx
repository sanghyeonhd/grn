
import { ChevronLeft, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Product } from "@/types/order";
import { useState, useEffect } from "react";
import { addToWishlist, removeFromWishlist, isInWishlist, WishlistItem } from '../utils/wishlist';
import { useToast } from "@/hooks/use-toast";

const RecentProducts = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [wishlistState, setWishlistState] = useState<{ [key: string]: boolean }>({});

  const recentProducts: Product[] = [
    {
      id: "1",
      brand: "GRANHAND",
      name: "Roland Multi Perfume",
      price: 35000,
      option: "롤랑 멀티퍼퓸 100ml / 200ml",
      shoppingBag: "구매 안함",
      stampingType: "N",
      image: "/lovable-uploads/55a68fca-eb33-480d-bb5a-e14c8a947254.png"
    },
    {
      id: "2",
      brand: "GRANHAND",
      name: "Roland Multi Perfume",
      price: 35000,
      option: "롤랑 멀티퍼퓸 100ml / 200ml",
      shoppingBag: "구매 안함",
      stampingType: "N",
      image: "/lovable-uploads/55a68fca-eb33-480d-bb5a-e14c8a947254.png"
    },
    {
      id: "3",
      brand: "GRANHAND",
      name: "Roland Multi Perfume",
      price: 35000,
      option: "롤랑 멀티퍼퓸 100ml / 200ml",
      shoppingBag: "구매 안함",
      stampingType: "N",
      image: "/lovable-uploads/55a68fca-eb33-480d-bb5a-e14c8a947254.png"
    },
    {
      id: "4",
      brand: "GRANHAND",
      name: "Roland Multi Perfume",
      price: 35000,
      option: "롤랑 멀티퍼퓸 100ml / 200ml",
      shoppingBag: "구매 안함",
      stampingType: "N",
      image: "/lovable-uploads/55a68fca-eb33-480d-bb5a-e14c8a947254.png"
    }
  ];

  useEffect(() => {
    const initialWishlistState = recentProducts.reduce((acc, product) => {
      acc[product.id] = isInWishlist(product.id);
      return acc;
    }, {} as { [key: string]: boolean });
    setWishlistState(initialWishlistState);
  }, []);

  const handleWishlistToggle = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const item: WishlistItem = {
      id: product.id,
      name: product.name,
      description: product.option,
      price: `${product.price.toLocaleString()} KRW`,
      image: product.image
    };

    if (wishlistState[product.id]) {
      removeFromWishlist(product.id);
      toast({
        description: "관심상품에서 제거되었습니다.",
      });
    } else {
      addToWishlist(item);
      toast({
        description: "관심상품에 추가되었습니다.",
      });
    }

    setWishlistState(prev => ({
      ...prev,
      [product.id]: !prev[product.id]
    }));
  };

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <header className="sticky top-0 bg-[#FDFBF4] border-b">
        <div className="flex items-center h-12">
          <button onClick={() => navigate(-1)} className="px-4">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="flex-1 text-center pr-10">최근 본 상품</h1>
        </div>
      </header>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {recentProducts.map((product) => (
            <div key={product.id} className="space-y-2">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full aspect-square object-cover cursor-pointer"
                  onClick={() => navigate(`/granshop/perfume/${product.id}`)}
                />
                <button
                  onClick={(e) => handleWishlistToggle(e, product)}
                  className="absolute top-2 right-2"
                >
                  <Heart 
                    className="w-6 h-6 text-black" 
                    fill={wishlistState[product.id] ? "black" : "none"}
                  />
                </button>
              </div>
              <div className="cursor-pointer" onClick={() => navigate(`/granshop/perfume/${product.id}`)}>
                <div className="text-sm text-gray-500">{product.brand}</div>
                <div className="font-medium">{product.name}</div>
                <div className="text-sm text-gray-500">{product.option}</div>
                <div className="font-medium">{product.price.toLocaleString()} KRW</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProducts;
