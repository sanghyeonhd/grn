import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
interface ProductOptionSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'gift' | 'purchase';
  selectedProducts: Array<{
    name: string;
    price: number;
    quantity: number;
    option?: string;
  }>;
  onProductSelect: (option: string) => void;
  onQuantityChange: (index: number, increment: boolean) => void;
  getTotalPrice: () => number;
}
const ProductOptionSheet = ({
  isOpen,
  onOpenChange,
  type,
  selectedProducts,
  onProductSelect,
  onQuantityChange,
  getTotalPrice
}: ProductOptionSheetProps) => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [showCartDialog, setShowCartDialog] = React.useState(false);
  const handleAddToCart = () => {
    if (selectedProducts.length === 0) {
      toast({
        description: "옵션을 선택해주세요."
      });
      return;
    }
    setShowCartDialog(true);
    onOpenChange(false);
  };
  const handleCartDialogClose = (goToCart: boolean) => {
    setShowCartDialog(false);
    if (goToCart) {
      navigate('/cart');
    }
  };
  const handlePurchase = () => {
    if (selectedProducts.length === 0) {
      toast({
        description: "옵션을 선택해주세요."
      });
      return;
    }
    if (type === 'gift') {
      navigate('/gift-checkout');
    } else {
      navigate('/checkout');
    }
    onOpenChange(false);
  };
  return <>
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent side="bottom" className="h-[80vh] bg-white">
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-auto">
              <h2 className="text-lg font-medium mb-4">
                {type === 'gift' ? '쇼핑백' : '향 종류'}
              </h2>
              
              <Select onValueChange={onProductSelect}>
                <SelectTrigger className="w-full mb-4">
                  <SelectValue placeholder={type === 'gift' ? '선택해 주세요' : '옵션을 선택해 주세요'} />
                </SelectTrigger>
                <SelectContent>
                  {type === 'gift' ? <>
                      <SelectItem value="구매 안함">구매 안함</SelectItem>
                      <SelectItem value="추가 구매(+500원)">추가 구매(+500원)</SelectItem>
                    </> : <>
                      <SelectItem value="마린우드">마린우드</SelectItem>
                      <SelectItem value="수자삼">수자삼</SelectItem>
                      <SelectItem value="규장">규장</SelectItem>
                      <SelectItem value="월리 오멜">월리 오멜</SelectItem>
                      <SelectItem value="트와버드">트와버드</SelectItem>
                      <SelectItem value="비올레또">비올레또</SelectItem>
                    </>}
                </SelectContent>
              </Select>

              {selectedProducts.map((product, index) => <div key={index} className="border-t py-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-gray-600">
                        {type === 'gift' ? `쇼핑백: ${product.option}` : product.option}
                      </p>
                    </div>
                    <button className="text-gray-400">삭제</button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{product.price.toLocaleString()}원</div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => onQuantityChange(index, false)}>
                        <Minus className="w-4 h-4" />
                      </button>
                      <span>{product.quantity}</span>
                      <button onClick={() => onQuantityChange(index, true)}>
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>)}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span>합계</span>
                <span className="font-medium">{getTotalPrice().toLocaleString()}원</span>
              </div>
              {type === 'gift' ? <button className="w-full py-3 bg-[#2C2C2C] text-white disabled:bg-gray-300" onClick={handlePurchase} disabled={selectedProducts.length === 0}>
                  선물하기
                </button> : <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 border border-black text-black disabled:border-gray-300 disabled:text-gray-300" onClick={handleAddToCart} disabled={selectedProducts.length === 0}>
                    장바구니 담기
                  </button>
                  <button className="py-3 bg-[#2C2C2C] text-white disabled:bg-gray-300" onClick={handlePurchase} disabled={selectedProducts.length === 0}>
                    구매하기
                  </button>
                </div>}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Dialog open={showCartDialog} onOpenChange={() => setShowCartDialog(false)}>
        <DialogContent className="sm:max-w-md bg-white/90 backdrop-blur-sm">
          <DialogDescription className="text-center">
            <p className="py-4 text-lg">상품을 장바구니에 담았어요.</p>
            <p className="text-gray-500 pb-4 text-xs my-0 mx-0 py-0">장바구니를 확인하시겠어요?</p>
          </DialogDescription>
          <DialogFooter className="sm:flex-row gap-2">
            <button className="flex-1 py-3 border border-black text-black" onClick={() => handleCartDialogClose(false)}>
              계속 쇼핑하기
            </button>
            <button className="flex-1 py-3 bg-[#2C2C2C] text-white" onClick={() => handleCartDialogClose(true)}>
              장바구니 보기
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>;
};
export default ProductOptionSheet;