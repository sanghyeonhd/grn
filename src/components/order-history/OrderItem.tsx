
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PurchaseConfirmation from './PurchaseConfirmation';

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

  const handlePurchaseConfirm = (selectedProducts: string[]) => {
    console.log('Selected products for purchase confirmation:', selectedProducts);
    setIsPurchaseConfirmOpen(false);
    // Here you would typically make an API call to confirm the purchase
  };

  return (
    <div className="space-y-4 pb-6 border-b last:border-b-0">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => navigate(`/order-history/${item.id}`)}
      >
        <div className="text-lg">{item.date}</div>
        <ChevronRight className="w-5 h-5" />
      </div>
      <div className="flex gap-4">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-20 h-20 object-cover"
        />
        <div className="flex-1">
          <div className="text-gray-500 flex items-center gap-2">
            {item.status}
            {item.status === "입금 대기" && (
              <button className="text-sm underline">문의하기</button>
            )}
          </div>
          <div className="font-medium">{item.product.name}</div>
          <div className="text-sm text-gray-500">{item.product.option}</div>
          <div className="font-medium mt-1">{item.product.price.toLocaleString()}원</div>
        </div>
      </div>
      {item.id === "1" ? (
        <button
          className="w-full py-3 border text-sm"
          onClick={onCancelClick}
        >
          주문 취소
        </button>
      ) : item.id === "2" ? (
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <button className="py-3 border text-sm">배송 조회</button>
            <button className="py-3 border text-sm">교환/반품 신청</button>
          </div>
          <button 
            className="w-full py-3 border text-sm"
            onClick={() => setIsPurchaseConfirmOpen(true)}
          >
            구매 확정
          </button>
        </div>
      ) : null}

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
          },
          {
            id: "2",
            brand: "GRANHAND",
            name: "Cask Signature Perfume",
            price: 110000,
            image: "/lovable-uploads/49950af0-c308-4706-9628-6fc190caba7f.png",
            option: "캐스크 시그니처퍼퓸 100ml / 1개",
            stampingLabel: "",
            stampingType: "",
            points: 500
          }
        ]}
      />
    </div>
  );
};

export default OrderItem;
