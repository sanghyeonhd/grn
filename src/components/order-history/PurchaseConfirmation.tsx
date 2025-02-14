
import { useState } from "react";
import { X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface Product {
  id: string;
  brand: string;
  name: string;
  price: number;
  image: string;
  option: string;
  stampingLabel: string;
  stampingType: string;
  points: number;
}

interface PurchaseConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (selectedProducts: string[]) => void;
  products: Product[];
}

const PurchaseConfirmation = ({
  isOpen,
  onClose,
  onConfirm,
  products
}: PurchaseConfirmationProps) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map(product => product.id));
    }
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b">
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
          <div className="font-medium">구매 확정</div>
          <div className="w-6" /> {/* Spacer for alignment */}
        </div>

        <div className="flex-1 overflow-auto">
          <div className="p-4">
            <div className="text-lg">주문하신 상품은 잘 받으셨나요?</div>
          </div>

          <div className="border-t">
            <div className="p-4 flex items-center gap-2 border-b">
              <Checkbox
                id="select-all"
                checked={selectedProducts.length === products.length}
                onCheckedChange={handleSelectAll}
              />
              <label htmlFor="select-all" className="text-sm">
                전체 선택 ({selectedProducts.length}/{products.length})
              </label>
            </div>

            {products.map((product) => (
              <div key={product.id} className="p-4 flex gap-4 border-b">
                <Checkbox
                  id={`product-${product.id}`}
                  checked={selectedProducts.includes(product.id)}
                  onCheckedChange={() => handleSelectProduct(product.id)}
                />
                <div className="flex-1">
                  <div className="text-sm text-gray-500">{product.brand}</div>
                  <div className="font-medium mt-1">{product.name}</div>
                  <div className="text-lg font-medium mt-1">
                    {product.price.toLocaleString()}원
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    옵션: {product.option}
                  </div>
                  {product.stampingLabel && (
                    <div className="text-sm text-gray-500">
                      스탬핑 네임: {product.stampingLabel}
                    </div>
                  )}
                  {product.stampingType && (
                    <div className="text-sm text-gray-500">
                      스탬핑 종류: {product.stampingType}
                    </div>
                  )}
                  <div className="text-sm text-gray-500">
                    추가 구매 (+{product.points}P)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 grid grid-cols-2 gap-2 border-t">
          <button 
            className="py-3 border text-sm"
            onClick={onClose}
          >
            취소
          </button>
          <button
            className="py-3 text-sm text-white bg-black"
            onClick={() => onConfirm(selectedProducts)}
          >
            구매 확정
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseConfirmation;
