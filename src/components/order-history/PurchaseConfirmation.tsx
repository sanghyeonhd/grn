
import { useState } from "react";
import { X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

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
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

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

  const handleConfirmClick = () => {
    setIsConfirmModalOpen(true);
  };

  const handleConfirmFinish = () => {
    setIsConfirmModalOpen(false);
    onConfirm(selectedProducts);
  };

  return (
    <>
      <div className="fixed inset-0 bg-white z-50">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <button onClick={onClose}>
              <X className="w-6 h-6" />
            </button>
            <div className="font-medium">구매 확정</div>
            <div className="w-6" /> {/* Spacer for alignment */}
          </div>

          <div className="flex-1 overflow-auto">
            <div className="p-4">
              <div>주문하신 상품은 잘 받으셨나요?</div>
            </div>

            <div>
              <div className="px-4 py-3 flex items-center gap-2 border-y bg-gray-50">
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
                <div key={product.id} className="p-4 flex items-start gap-4 border-b">
                  <Checkbox
                    id={`product-${product.id}`}
                    checked={selectedProducts.includes(product.id)}
                    onCheckedChange={() => handleSelectProduct(product.id)}
                  />
                  <div className="flex gap-4 flex-1">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="text-sm text-gray-400">{product.brand}</div>
                        <div className="font-medium">{product.name}</div>
                        <div className="font-medium mt-1">
                          {product.price.toLocaleString()}원
                        </div>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div>옵션: {product.option}</div>
                        <div>쇼핑백: {product.points ? `추가 구매 (+${product.points}P)` : '-'}</div>
                        {product.stampingType === "Y" && (
                          <>
                            <div>스탬핑 여부: Y</div>
                            <div>스탬핑 문구: {product.stampingLabel}</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 grid grid-cols-2 gap-2">
            <button 
              className="py-3 px-4 border text-sm bg-white"
              onClick={onClose}
            >
              취소
            </button>
            <button
              className="py-3 px-4 text-sm text-white bg-[#2C2C2C]"
              onClick={handleConfirmClick}
            >
              구매 확정
            </button>
          </div>
        </div>
      </div>

      <AlertDialog open={isConfirmModalOpen} onOpenChange={setIsConfirmModalOpen}>
        <AlertDialogContent className="w-[320px] rounded-none bg-white">
          <AlertDialogHeader className="text-center">
            <AlertDialogTitle>구매 확정</AlertDialogTitle>
            <AlertDialogDescription>
              구매 확정이 완료되었어요.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <button
              className="w-full py-3 px-4 text-sm text-white bg-[#2C2C2C]"
              onClick={handleConfirmFinish}
            >
              확인
            </button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default PurchaseConfirmation;
