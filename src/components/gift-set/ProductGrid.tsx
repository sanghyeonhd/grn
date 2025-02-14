
import React from 'react';
import { Heart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  soldOut?: boolean;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <>
      <div className="flex justify-between items-center px-4 py-3">
        <p className="text-xs">전체</p>
        <button className="text-xs text-gray-600">추천순 ▼</button>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-6 px-4">
        {products.map((product) => (
          <div key={product.id} className="space-y-2">
            <div className="relative aspect-square bg-[#F5F5F5]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              {product.soldOut ? (
                <div className="absolute inset-0 bg-gray-500/50 flex items-center justify-center">
                  <span className="text-white font-semibold text-xl">Sold out</span>
                </div>
              ) : (
                <button className="absolute top-2 right-2">
                  <Heart className="text-white" size={24} />
                </button>
              )}
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="text-xs text-gray-600">{product.description}</p>
              <p className="text-sm">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
