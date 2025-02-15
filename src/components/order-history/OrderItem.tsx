
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
  };

  return (
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
      {item.id !== "4" && (
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
      )}
      {item.id === "2" && (
        <button 
          className="w-full py-3 border text-sm"
          onClick={() => setIsPurchaseConfirmOpen(true)}
        >
          구매 확정
        </button>
      )}

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
  );
};

export default OrderItem;
