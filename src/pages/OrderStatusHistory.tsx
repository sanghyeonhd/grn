
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface OrderItem {
  id: string;
  date: string;
  status: string;
  product: {
    name: string;
    option: string;
    price: number;
    image: string;
  };
  type: "cancel" | "exchange" | "return";
}

const OrderStatusHistory = () => {
  const navigate = useNavigate();

  const orders: OrderItem[] = [
    {
      id: "1",
      date: "2024.10.23",
      status: "취소 진행 중",
      type: "cancel",
      product: {
        name: "Roland Multi Perfume",
        option: "롤랑 멀티퍼퓸 100ml / 1개",
        price: 35000,
        image: "/lovable-uploads/befffbc2-1526-4009-a956-9e69fe010a26.png"
      }
    },
    {
      id: "2",
      date: "2024.10.23",
      status: "교환 진행 중",
      type: "exchange",
      product: {
        name: "Roland Multi Perfume",
        option: "롤랑 멀티퍼퓸 100ml / 1개",
        price: 35000,
        image: "/lovable-uploads/befffbc2-1526-4009-a956-9e69fe010a26.png"
      }
    },
    {
      id: "3",
      date: "2024.10.16",
      status: "반품 진행 중",
      type: "return",
      product: {
        name: "Roland Multi Perfume",
        option: "롤랑 멀티퍼퓸 100ml / 1개",
        price: 35000,
        image: "/lovable-uploads/befffbc2-1526-4009-a956-9e69fe010a26.png"
      }
    }
  ];

  const handleDetailClick = (type: "cancel" | "exchange" | "return") => {
    switch (type) {
      case "cancel":
        navigate("/order-cancel-detail");
        break;
      case "exchange":
        navigate("/order-exchange-detail");
        break;
      case "return":
        navigate("/order-return-detail");
        break;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <header className="sticky top-0 bg-[#FDFBF4] border-b">
        <div className="flex items-center h-12">
          <button onClick={() => navigate(-1)} className="px-4">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="flex-1 text-center pr-10">취소/교환/반품 내역</h1>
        </div>
      </header>

      <div className="divide-y">
        {orders.map((order) => (
          <div key={order.id} className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-lg">{order.date}</div>
              <ChevronRight className="w-5 h-5" />
            </div>
            <div className="flex gap-4">
              <img
                src={order.product.image}
                alt={order.product.name}
                className="w-20 h-20 object-cover"
              />
              <div className="flex-1">
                <div className="text-gray-500 flex items-center gap-2">
                  {order.status}
                  <button className="text-sm underline">문의하기</button>
                </div>
                <div className="font-medium">{order.product.name}</div>
                <div className="text-sm text-gray-500">{order.product.option}</div>
                <div className="font-medium mt-1">{order.product.price.toLocaleString()}원</div>
              </div>
            </div>
            <button 
              className="w-full py-3 border text-sm"
              onClick={() => handleDetailClick(order.type)}
            >
              {order.type === 'cancel' && '취소 상세 보기'}
              {order.type === 'exchange' && '교환 상세 보기'}
              {order.type === 'return' && '반품 상세 보기'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatusHistory;
