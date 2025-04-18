
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PurchaseConfirmation from './PurchaseConfirmation';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

interface OrderItemProps {
  item: {
    id: string;
    date: string;
    status: string;
    product: {
      name: string;
      option: string;
      price: number;
      image: string;
    };
  };
  onCancelClick: () => void;
}

const OrderItem = ({ item, onCancelClick }: OrderItemProps) => {
  const navigate = useNavigate();
  const [isPurchaseConfirmOpen, setIsPurchaseConfirmOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handlePurchaseConfirm = (selectedProducts: string[]) => {
    console.log('Selected products for purchase confirmation:', selectedProducts);
    setIsPurchaseConfirmOpen(false);
  };

  const renderButtons = () => {
    // 입금 대기 상태이고 id가 1인 두 번째 주문 카드
    if (item.id === '1' && item.status === '입금 대기') {
      return (
        <button 
          className="w-full py-3 border text-sm"
          onClick={onCancelClick}
        >
          주문 취소
        </button>
      );
    }

    // 결제 완료 상태이고 id가 5인 세 번째 주문 카드
    if (item.id === '5' && item.status === '결제 완료') {
      return (
        <button 
          className="w-full py-3 border text-sm"
          onClick={onCancelClick}
        >
          주문 취소
        </button>
      );
    }

    // 배송 준비 상태이고 id가 3인 네 번째 주문 카드
    if (item.id === '3' && item.status === '배송 준비') {
      return (
        <button 
          className="w-full py-3 border text-sm"
          onClick={onCancelClick}
        >
          주문 취소
        </button>
      );
    }

    // 배송 지연 상태이고 id가 7인 주문 카드
    if (item.id === '7' && item.status === '배송 지연') {
      return (
        <button 
          className="w-full py-3 border text-sm"
          onClick={onCancelClick}
        >
          주문 취소
        </button>
      );
    }

    // 구매 확정 버튼이 있는 주문 카드 (배송 완료 상태)
    if (item.status === '배송 완료') {
      return (
        <>
          <div className="grid grid-cols-2 gap-2">
            <button className="py-3 border text-sm">
              배송 조회
            </button>
            <button 
              className="py-3 border text-sm"
              onClick={() => navigate('/order/return')}
            >
              교환/반품 신청
            </button>
          </div>
          <button 
            className="w-full py-3 border text-sm"
            onClick={() => setIsPurchaseConfirmOpen(true)}
          >
            구매 확정
          </button>
        </>
      );
    }

    // 구매 확정 상태인 경우
    if (item.status === '구매 확정') {
      return (
        <div className="grid grid-cols-2 gap-2">
          <button className="py-3 border text-sm">
            배송 조회
          </button>
          <button 
            className="py-3 border text-sm"
            onClick={() => setIsAlertOpen(true)}
          >
            교환/반품 신청
          </button>
        </div>
      );
    }

    // 기본 버튼 (나머지 주문 카드)
    return (
      <div className="grid grid-cols-2 gap-2">
        <button className="py-3 border text-sm">
          배송 조회
        </button>
        <button 
          className="py-3 border text-sm"
          onClick={() => navigate('/order/return')}
        >
          교환/반품 신청
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="bg-white rounded-lg p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">{item.date}</div>
          <div className="flex items-center gap-2">
            <div className="text-sm font-medium">{item.status}</div>
            <ChevronRight 
              className="w-5 h-5 cursor-pointer" 
              onClick={() => navigate(`/order-history/${item.id}`)}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="w-20 h-20 object-cover"
          />
          <div className="flex-1">
            <div className="font-medium">{item.product.name}</div>
            <div className="text-sm text-gray-500">{item.product.option}</div>
            <div className="font-medium mt-2">{item.product.price.toLocaleString()}원</div>
          </div>
        </div>
        
        {renderButtons()}

        <PurchaseConfirmation
          isOpen={isPurchaseConfirmOpen}
          onClose={() => setIsPurchaseConfirmOpen(false)}
          onConfirm={handlePurchaseConfirm}
          products={[
            {
              id: "1",
              brand: "GRANHAND",
              name: "Roland Multi Perfume",
              price: 55500,
              image: "/lovable-uploads/49950af0-c308-4706-9628-6fc190caba7f.png",
              option: "롤랑 멀티퍼퓸 200ml / 1개",
              stampingLabel: "Y",
              stampingType: "GRANHAND ❤️",
              points: 500
            }
          ]}
        />
      </div>

      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>교환/반품 불가 안내</AlertDialogTitle>
            <AlertDialogDescription>
              배송 완료 후 7일이 지나거나 구매를 확정한 경우에는 교환반품 접수가 불가능해요.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsAlertOpen(false)}>
              확인
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default OrderItem;
