
import React, { useState } from 'react';
import ProductHeader from '@/components/product/ProductHeader';
import ProductInfo from '@/components/product/ProductInfo';
import ProductOptionSheet from '@/components/product/ProductOptionSheet';

interface SelectedProduct {
  name: string;
  price: number;
  quantity: number;
  option?: string;
}

const ProductDetail = () => {
  const [isGiftSheetOpen, setIsGiftSheetOpen] = useState(false);
  const [isPurchaseSheetOpen, setIsPurchaseSheetOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);

  const handleProductSelect = (option: string) => {
    const newProduct = {
      name: "Trio Gift Set",
      price: 35500,
      quantity: 1,
      option: option
    };
    setSelectedProducts([...selectedProducts, newProduct]);
  };

  const updateQuantity = (index: number, increment: boolean) => {
    setSelectedProducts(products => 
      products.map((product, i) => {
        if (i === index) {
          return {
            ...product,
            quantity: increment ? product.quantity + 1 : Math.max(1, product.quantity - 1)
          };
        }
        return product;
      })
    );
  };

  const getTotalPrice = () => {
    return selectedProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <ProductHeader />

      <div className="pt-[56px] pb-[100px]">
        <div className="aspect-square">
          <img 
            src="/lovable-uploads/6ae09e1a-c53d-4a4c-9396-e2e9edd6e93f.png"
            alt="Trio Gift Set" 
            className="w-full h-full object-cover"
          />
        </div>

        <ProductInfo />
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <div className="grid grid-cols-2 gap-3">
          <button 
            className="py-3 border border-black text-black"
            onClick={() => setIsGiftSheetOpen(true)}
          >
            선물하기
          </button>
          <button 
            className="py-3 bg-[#2C2C2C] text-white"
            onClick={() => setIsPurchaseSheetOpen(true)}
          >
            구매하기
          </button>
        </div>
      </div>

      <ProductOptionSheet
        isOpen={isGiftSheetOpen}
        onOpenChange={setIsGiftSheetOpen}
        type="gift"
        selectedProducts={selectedProducts}
        onProductSelect={handleProductSelect}
        onQuantityChange={updateQuantity}
        getTotalPrice={getTotalPrice}
      />

      <ProductOptionSheet
        isOpen={isPurchaseSheetOpen}
        onOpenChange={setIsPurchaseSheetOpen}
        type="purchase"
        selectedProducts={selectedProducts}
        onProductSelect={handleProductSelect}
        onQuantityChange={updateQuantity}
        getTotalPrice={getTotalPrice}
      />
    </div>
  );
};

export default ProductDetail;
