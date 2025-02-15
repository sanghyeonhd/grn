
import { useNavigate } from 'react-router-dom';

const OrderStatus = () => {
  const navigate = useNavigate();
  
  const statuses = [
    { label: '입금/결제', count: 1, path: '/orders/payment' },
    { label: '배송준비', count: 0, path: '/orders/preparing' },
    { label: '배송중', count: 0, path: '/orders/shipping' },
    { label: '배송완료', count: 1, path: '/orders/delivered' },
    { label: '구매확정', count: 17, path: '/orders/confirmed' },
  ];

  return (
    <div className="bg-white rounded-lg mx-4 mt-4 p-4">
      <div className="grid grid-cols-5 gap-2 text-center text-sm">
        {statuses.map((status) => (
          <button
            key={status.label}
            onClick={() => navigate(status.path)}
            className="space-y-1"
          >
            <div className="font-medium">{status.count}</div>
            <div className="text-gray-500">{status.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrderStatus;
