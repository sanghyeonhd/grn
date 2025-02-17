
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search as SearchIcon, X } from 'lucide-react';

interface Product {
  id: number;
  category: string;
  name: string;
  subCategory: string;
  price: string;
  image: string;
}

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState('통합검색');

  // 예시 데이터
  const products: Product[] = [
    {
      id: 1,
      category: 'GRANHAND × Diffuser',
      name: 'Kyujang Diffuser Set',
      subCategory: 'GRANHAND × Diffuser',
      price: '60,000 KRW',
      image: '/lovable-uploads/ffa83a92-3ba5-457e-ad69-56babae50bb1.png'
    },
    {
      id: 2,
      category: 'GRANHAND × Diffuser',
      name: 'Kyujang Diffuser Set',
      subCategory: 'GRANHAND × Diffuser',
      price: '60,000 KRW',
      image: '/lovable-uploads/ffa83a92-3ba5-457e-ad69-56babae50bb1.png'
    },
    {
      id: 3,
      category: 'GRANHAND × Diffuser',
      name: 'Kyujang Diffuser Set',
      subCategory: 'GRANHAND × Diffuser',
      price: '60,000 KRW',
      image: '/lovable-uploads/ffa83a92-3ba5-457e-ad69-56babae50bb1.png'
    }
  ];

  useEffect(() => {
    if (searchTerm && (searchTerm.includes('디퓨저') || searchTerm.includes('디퓨져'))) {
      setSearchResults(products);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Image failed to load:', e.currentTarget.src);
    e.currentTarget.src = '/placeholder.svg';  // 기본 플레이스홀더 이미지로 대체
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 bg-white px-4 py-3">
          <button onClick={() => navigate(-1)} className="p-1">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="pt-20 px-4">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="검색어를 입력해 주세요."
              className="w-full py-2.5 pr-8 text-base border-b border-gray-300 focus:outline-none focus:border-gray-500"
            />
            <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Search Categories */}
        <div className="px-4 py-2 mt-4 border-b">
          <div className="flex items-center gap-6 text-sm">
            <button 
              className={`py-2 px-1 ${activeTab === '통합검색' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
              onClick={() => setActiveTab('통합검색')}
            >
              통합검색
            </button>
            <button 
              className={`py-2 px-1 ${activeTab === '쇼핑' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
              onClick={() => setActiveTab('쇼핑')}
            >
              쇼핑
            </button>
            <button 
              className={`py-2 px-1 ${activeTab === '콘텐츠' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
              onClick={() => setActiveTab('콘텐츠')}
            >
              콘텐츠
            </button>
          </div>
        </div>

        {/* Search Results or No Results */}
        <div className="px-4">
          {searchResults.length > 0 ? (
            <div className="py-4">
              <div className="text-sm mb-4">검색 수 {searchResults.length}개</div>
              <div className="space-y-4">
                {searchResults.map((product) => (
                  <div key={product.id} className="flex gap-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      onError={handleImageError}
                      className="w-20 h-20 object-cover bg-gray-100"
                    />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500">{product.category}</div>
                      <div className="text-sm font-medium mt-1">{product.name}</div>
                      <div className="text-sm mt-1">{product.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : searchTerm ? (
            <div className="py-12 text-center text-gray-500">
              <p>검색 결과가 없어요.</p>
              <p className="mt-1 text-sm">다른 키워드로 검색해 보세요.</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Search;
