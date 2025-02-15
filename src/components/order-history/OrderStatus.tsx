
import { useNavigate } from 'react-router-dom';

const OrderStatus = () => {
  const navigate = useNavigate();
  
  // Filter counts based on specific status
  const paymentCount = orderItems.filter(item => 
    item.status === "입금 대기" || item.status === "결제 완료"
  ).length;
  
  const preparingCount = orderItems.filter(item => 
    item.status === "배송 준비"
  ).length;
  
  const shippingCount = orderItems.filter(item => 
    item.status === "배송중"
  ).length;
  
  const deliveredCount = orderItems.filter(item => 
    item.status === "배송 완료"
  ).length;
  
  const confirmedCount = orderItems.filter(item => 
    item.status === "구매 확정"
  ).length;

  const statuses = [
    { label: '입금/결제', count: paymentCount, path: '/orders/payment' },
    { label: '배송준비', count: preparingCount, path: '/orders/preparing' },
    { label: '배송중', count: shippingCount, path: '/orders/shipping' },
    { label: '배송완료', count: deliveredCount, path: '/orders/delivered' },
    { label: '구매확정', count: confirmedCount, path: '/orders/confirmed' },
  ];

  // Find a confirmed order for the bottom card
  const confirmedOrder = orderItems.find(item => item.status === "구매 확정");

  return (
    <>
      <div className="bg-white rounded-lg mx-4 mt-4 p-4">
        <div className="grid grid-cols-5 gap-2 text-center text-xs">
          {statuses.map((status) => (
            <button
              key={status.label}
              onClick={() => navigate(status.path)}
              className="space-y-1"
            >
              <div className="font-medium text-sm">{status.count}</div>
              <div className="text-gray-500 text-[10px]">{status.label}</div>
            </button>
          ))}
        </div>
      </div>

      {confirmedOrder && (
        <div className="bg-white rounded-lg mx-4 mt-4 p-4">
          <div className="space-y-2">
            <div className="text-xs text-gray-500">{confirmedOrder.date}</div>
            <div className="text-sm font-medium">{confirmedOrder.status}</div>
            <div className="flex gap-4">
              <img 
                src={confirmedOrder.product.image} 
                alt={confirmedOrder.product.name} 
                className="w-20 h-20 object-cover"
              />
              <div className="flex-1">
                <div className="text-sm font-medium">{confirmedOrder.product.name}</div>
                <div className="text-xs text-gray-500 mt-1">{confirmedOrder.product.option}</div>
                <div className="text-sm font-medium mt-2">
                  {confirmedOrder.product.price.toLocaleString()}원
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Import order items from parent component
const orderItems = [
  {
    id: "1",
    date: "2023.10.23",
    status: "입금 대기",
    product: {
      name: "Roland Multi Perfume",
      option: "롤랑 멀티퍼퓸 100ml / 1개",
      price: 35000,
      image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
    }
  },
  {
    id: "2",
    date: "2023.10.16",
    status: "배송 완료",
    product: {
      name: "Roland Multi Perfume",
      option: "롤랑 멀티퍼퓸 100ml / 1개",
      price: 35000,
      image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
    }
  },
  {
    id: "3",
    date: "2023.10.16",
    status: "배송 준비",
    product: {
      name: "Roland Multi Perfume",
      option: "롤랑 멀티퍼퓸 100ml / 1개",
      price: 35000,
      image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
    }
  },
  {
    id: "4",
    date: "2023.10.16",
    status: "배송중",
    product: {
      name: "Roland Multi Perfume",
      option: "롤랑 멀티퍼퓸 100ml / 1개",
      price: 55000,
      image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
    }
  },
  {
    id: "5",
    date: "2023.10.16",
    status: "결제 완료",
    product: {
      name: "Roland Multi Perfume",
      option: "롤랑 멀티퍼퓸 200ml / 1개",
      price: 55000,
      image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
    }
  },
  {
    id: "6",
    date: "2023.10.16",
    status: "구매 확정",
    product: {
      name: "Roland Multi Perfume",
      option: "롤랑 멀티퍼퓸 100ml / 1개",
      price: 55000,
      image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
    }
  }
];

export default OrderStatus;
