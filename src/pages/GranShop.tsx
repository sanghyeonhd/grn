import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Heart, Search, ShoppingBag, ChevronDown } from "lucide-react";
import { addToWishlist, removeFromWishlist, isInWishlist, WishlistItem } from '../utils/wishlist';
import { useToast } from "@/components/ui/use-toast";
import BottomNavigation from '@/components/common/BottomNavigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const products = {
  perfumes: [
    {
      id: 1,
      name: "Roland Multi Perfume",
      description: "롤랑 멀티퍼퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/lovable-uploads/75467d13-7ba3-4eb0-b062-1aa53c949465.png",
      soldOut: false
    },
    {
      id: 2,
      name: "Roland Multi Perfume",
      description: "롤랑 멀티퍼퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/lovable-uploads/75467d13-7ba3-4eb0-b062-1aa53c949465.png",
      soldOut: true
    },
    {
      id: 3,
      name: "Roland Multi Perfume",
      description: "롤랑 멀티퍼퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/lovable-uploads/75467d13-7ba3-4eb0-b062-1aa53c949465.png",
      soldOut: false
    },
    {
      id: 4,
      name: "Roland Multi Perfume",
      description: "롤랑 멀티퍼퓸 100ml / 200ml",
      price: "35,000 KRW",
      image: "/lovable-uploads/75467d13-7ba3-4eb0-b062-1aa53c949465.png",
      soldOut: false
    }
  ],
  giftsets: [
    {
      id: 1,
      name: "Trio Gift Set",
      description: "사쉐 & 핸드크림 & 핸드워시 세트 / 40g & 60G & 450ml",
      price: "68,000 KRW",
      image: "/lovable-uploads/2c3d03e4-6ab8-47b5-9d62-04e0ca951715.png",
      soldOut: false
    }
  ],
  space: [
    {
      id: 1,
      name: "Space Diffuser",
      description: "공간 디퓨저 150ml",
      price: "45,000 KRW",
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png",
      soldOut: false
    }
  ],
  body: [
    {
      id: 1,
      name: "Body Lotion",
      description: "바디 로션 250ml",
      price: "38,000 KRW",
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png",
      soldOut: false
    }
  ]
};

const ProductCard = ({ product }: { product: any }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  useEffect(() => {
    setIsWishlisted(isInWishlist(product.id.toString()));
  }, [product.id]);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const item: WishlistItem = {
      id: product.id.toString(),
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image
    };

    if (isWishlisted) {
      removeFromWishlist(product.id.toString());
      toast({
        description: "관심상품에서 제거되었습니다.",
      });
    } else {
      addToWishlist(item);
      toast({
        description: "관심상품에 추가되었습니다.",
      });
    }

    setIsWishlisted(!isWishlisted);
  };

  const handleClick = () => {
    const category = location.pathname.split('/')[2] || 'giftset';
    navigate(`/granshop/${category}/${product.id}`);
  };
  
  return (
    <div className="relative" onClick={handleClick}>
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full aspect-square object-cover rounded-none"
        />
        <button 
          className="absolute top-4 right-4" 
          onClick={handleWishlistToggle}
        >
          <Heart 
            className="w-6 h-6 text-white" 
            fill={isWishlisted ? "white" : "none"}
          />
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
};

const GranShop = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedBrand, setSelectedBrand] = useState('GRANHAND.');
  const [sortOption, setSortOption] = useState('추천순');

  const dropdownStyles = {
    backgroundColor: '#FFFFFF',
    '--tw-bg-opacity': '1',
  } as React.CSSProperties;

  const menuItemStyles = {
    backgroundColor: '#FFFFFF',
    '--tw-bg-opacity': '1',
    width: '100%',
  } as React.CSSProperties;

  const isCurrentPath = (path: string) => {
    return location.pathname.includes(path);
  };

  const handleCategoryClick = (category: string) => {
    if (category === '기프트 세트') {
      navigate('/granshop/giftset');
    } else if (category === '퍼퓸') {
      navigate('/granshop/perfume');
    } else if (category === '공간') {
      navigate('/granshop/space');
    } else if (category === '바디') {
      navigate('/granshop/body');
    } else {
      navigate('/granshop');
    }
  };

  const getDisplayProducts = () => {
    if (location.pathname.includes('perfume')) return products.perfumes;
    if (location.pathname.includes('giftset')) return products.giftsets;
    if (location.pathname.includes('space')) return products.space;
    if (location.pathname.includes('body')) return products.body;
    return products.giftsets;
  };

  const isGiftsetPath = location.pathname.includes('giftset');

  const getBrandLogo = (brand: string) => {
    switch (brand) {
      case 'GRANHAND.':
        return {
          src: "/lovable-uploads/66df05bf-51f9-4241-8db3-1d9289f9bd21.png",
          className: "w-[109px] h-[14px] object-contain"
        };
      case 'heiion':
        return {
          src: "/lovable-uploads/e2d45399-1ffd-41f7-b123-c8856c1408d4.png",
          className: "h-6"
        };
      case 'Komfortabel':
        return {
          src: "/lovable-uploads/64dfd9b8-2894-4518-803c-3b7324c4147a.png",
          className: "h-6"
        };
      default:
        return {
          src: "/lovable-uploads/66df05bf-51f9-4241-8db3-1d9289f9bd21.png",
          className: "w-[109px] h-[14px] object-contain"
        };
    }
  };

  const currentBrandLogo = getBrandLogo(selectedBrand);

  const sortProducts = (products: any[]) => {
    switch (sortOption) {
      case '인기순':
        return [...products];
      case '낮은 가격순':
        return [...products].sort((a, b) => 
          Number(a.price.replace(/[^0-9]/g, '')) - Number(b.price.replace(/[^0-9]/g, ''))
        );
      case '높은 가격순':
        return [...products].sort((a, b) => 
          Number(b.price.replace(/[^0-9]/g, '')) - Number(a.price.replace(/[^0-9]/g, ''))
        );
      case '상품명 오름차순':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case '상품명 내림차순':
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      default: // 추천순
        return [...products];
    }
  };

  const displayProducts = sortProducts(getDisplayProducts());

  const isAllCategory = !location.pathname.includes('giftset') && 
                       !location.pathname.includes('perfume') && 
                       !location.pathname.includes('space') && 
                       !location.pathname.includes('body');

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <div className="fixed top-0 left-0 right-0 bg-[#FDFBF4] z-10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <img 
                  src={currentBrandLogo.src} 
                  alt={selectedBrand}
                  className={currentBrandLogo.className}
                />
                <ChevronDown className="w-5 h-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-screen rounded-none border-x-0 z-50 !bg-white" 
                style={dropdownStyles}
                align="start"
                sideOffset={20}
                forceMount
              >
                <div className="p-4 !bg-white" style={dropdownStyles}>
                  <p className="text-sm text-gray-500 mb-4">다양한 BRAND를 만나보세요.</p>
                  <div className="flex justify-between items-center gap-4">
                    <DropdownMenuItem 
                      className="flex-1 flex flex-col items-center justify-center p-4 hover:bg-gray-50 rounded-lg !bg-white"
                      style={menuItemStyles}
                      onClick={() => setSelectedBrand('GRANHAND.')}
                    >
                      <img 
                        src="/lovable-uploads/66df05bf-51f9-4241-8db3-1d9289f9bd21.png" 
                        alt="GRANHAND." 
                        className="w-[109px] mb-2"
                      />
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="flex-1 flex flex-col items-center justify-center p-4 hover:bg-gray-50 rounded-lg !bg-white"
                      style={menuItemStyles}
                      onClick={() => setSelectedBrand('heiion')}
                    >
                      <img 
                        src="/lovable-uploads/e2d45399-1ffd-41f7-b123-c8856c1408d4.png" 
                        alt="heiion" 
                        className="w-auto mb-2"
                      />
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="flex-1 flex flex-col items-center justify-center p-4 hover:bg-gray-50 rounded-lg !bg-white"
                      style={menuItemStyles}
                      onClick={() => setSelectedBrand('Komfortabel')}
                    >
                      <img 
                        src="/lovable-uploads/64dfd9b8-2894-4518-803c-3b7324c4147a.png" 
                        alt="Komfortabel coffee" 
                        className="w-auto mb-2"
                      />
                    </DropdownMenuItem>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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

      {!isGiftsetPath && (
        <div className="px-4 border-b">
          <div className="flex items-center gap-4 py-3 text-[0.688rem] overflow-x-auto scrollbar-hide">
            <button className="whitespace-nowrap text-gray-600">시그니처</button>
            <button className="whitespace-nowrap text-gray-600">퍼퓸</button>
            <button className="whitespace-nowrap text-gray-600">멀티 퍼퓸</button>
          </div>
        </div>
      )}

      <div className="px-4 py-3 flex items-center justify-between border-b">
        {isAllCategory && <span className="text-[0.688rem]">전체</span>}
        {!isAllCategory && <div />} {/* 빈 div로 레이아웃 유지 */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-[0.688rem] flex items-center gap-1">
            {sortOption}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-36">
            {['추천순', '인기순', '낮은 가격순', '높은 가격순', '상품명 오름차순', '상품명 내림차순'].map((option) => (
              <DropdownMenuItem 
                key={option} 
                onClick={() => setSortOption(option)}
                className="cursor-pointer text-[0.688rem]"
              >
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default GranShop;
