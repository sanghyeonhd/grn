
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
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  // 예시 데이터
  const products: Product[] = [
    {
      id: 1,
      category: 'GRANHAND × Diffuser',
      name: 'Kyujang Diffuser Set',
      subCategory: 'GRANHAND × Diffuser',
      price: '60,000 KRW',
      image: '/lovable-uploads/e0745317-f898-418f-abb0-01b631e273c4.png'
    },
    {
      id: 2,
      category: 'GRANHAND × Diffuser',
      name: 'Kyujang Diffuser Set',
      subCategory: 'GRANHAND × Diffuser',
      price: '60,000 KRW',
      image: '/lovable-uploads/e0745317-f898-418f-abb0-01b631e273c4.png'
    },
    {
      id: 3,
      category: 'GRANHAND × Diffuser',
      name: 'Kyujang Diffuser Set',
      subCategory: 'GRANHAND × Diffuser',
      price: '60,000 KRW',
      image: '/lovable-uploads/e0745317-f898-418f-abb0-01b631e273c4.png'
    }
  ];

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term && !recentSearches.includes(term)) {
      setRecentSearches(prev => [term, ...prev].slice(0, 10));
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Search Header */}
      <div className="sticky top-0 bg-white border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="디퓨저"
              className="w-full py-2 pl-8 pr-8 bg-gray-100 rounded-md text-sm"
            />
            <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            {searchTerm && (
              <button 
                onClick={clearSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search Categories */}
      {searchResults.length > 0 && (
        <div className="px-4 py-2 flex items-center gap-2 text-xs border-b overflow-x-auto whitespace-nowrap">
          <button className="px-3 py-1 bg-gray-100 rounded-full">통합검색</button>
          <button className="px-3 py-1 rounded-full">쇼핑</button>
          <button className="px-3 py-1 rounded-full">로열티쇼</button>
          <button className="px-3 py-1 rounded-full">프렌츠</button>
        </div>
      )}

      {/* Search Results */}
      {searchResults.length > 0 ? (
        <div className="p-4">
          <div className="text-sm text-gray-500 mb-4">검색 수 {searchResults.length}개</div>
          <div className="space-y-4">
            {searchResults.map((product) => (
              <div key={product.id} className="flex gap-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-20 h-20 object-cover"
                />
                <div className="flex-1">
                  <div className="text-xs text-gray-500">{product.category}</div>
                  <div className="text-sm font-medium mt-1">{product.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{product.subCategory}</div>
                  <div className="text-sm mt-1">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div className="text-sm font-medium mb-2">최근 검색어</div>
          {recentSearches.length > 0 ? (
            <div className="space-y-2">
              {recentSearches.map((term, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between py-2"
                >
                  <button 
                    onClick={() => handleSearch(term)}
                    className="text-sm"
                  >
                    {term}
                  </button>
                  <button 
                    onClick={() => setRecentSearches(recentSearches.filter(t => t !== term))}
                    className="text-gray-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-gray-400">최근 검색어가 없습니다.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
