
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";
import { addToWishlist, removeFromWishlist, isInWishlist, WishlistItem } from '../../utils/wishlist';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
  category?: string;
}

const ProductCarousel = ({ products, category = 'perfume' }: ProductCarouselProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [wishlistItems, setWishlistItems] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const initialWishlistState = products.reduce((acc, product) => {
      acc[product.id] = isInWishlist(product.id);
      return acc;
    }, {} as { [key: string]: boolean });
    setWishlistItems(initialWishlistState);
  }, [products]);

  const handleWishlistToggle = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const item: WishlistItem = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image
    };

    if (wishlistItems[product.id]) {
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

    setWishlistItems(prev => ({
      ...prev,
      [product.id]: !prev[product.id]
    }));
  };

  const handleProductClick = (productId: string) => {
    navigate(`/granshop/${category}/${productId}`);
  };

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="basis-[163px]">
              <div 
                className="cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative bg-gray-100" style={{ height: '200px' }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    className="absolute top-2 right-2"
                    onClick={(e) => handleWishlistToggle(e, product)}
                  >
                    <Heart 
                      className="text-white" 
                      size={24}
                      fill={wishlistItems[product.id] ? "white" : "none"}
                    />
                  </button>
                </div>
                <div className="mt-2">
                  <h4 className="font-medium text-sm">{product.name}</h4>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-sm">{product.price}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
