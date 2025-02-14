
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface Brand {
  id: number;
  name: string;
}

interface GiftSetHeaderProps {
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
}

const GiftSetHeader: React.FC<GiftSetHeaderProps> = ({ selectedBrand, setSelectedBrand }) => {
  const brands: Brand[] = [
    { id: 1, name: 'GRANHAND.' },
    { id: 2, name: 'heiion' },
    { id: 3, name: 'Komfortabel COFFEE' }
  ];

  return (
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
  );
};

export default GiftSetHeader;
