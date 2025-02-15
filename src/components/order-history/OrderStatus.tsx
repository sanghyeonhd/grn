
import { useNavigate } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
      <div className="flex justify-end mt-4 pt-4 border-t">
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-sm">
              기간설정
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[400px] p-0 bg-white">
            <div className="space-y-8 px-6 pt-6 pb-10">
              <div className="space-y-6">
                <h2 className="text-lg font-medium">기간설정</h2>
                <div className="grid grid-cols-4 gap-2">
                  {["최근 1년", "1주일", "1개월", "3개월"].map((period) => (
                    <button
                      key={period}
                      className={`h-10 border rounded-sm text-sm ${
                        period === "최근 1년"
                          ? "border-black bg-black text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="text"
                    value="2022.10.28"
                    className="w-[110px] h-10 border border-gray-300 px-2 rounded-sm text-sm text-center"
                    placeholder="YYYY.MM.DD"
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    type="text"
                    value="2023.10.28"
                    className="w-[110px] h-10 border border-gray-300 px-2 rounded-sm text-sm text-center"
                    placeholder="YYYY.MM.DD"
                  />
                </div>
              </div>
              <Button 
                className="w-full h-12 text-white bg-[#2C2C2C] hover:bg-[#1a1a1a] rounded-none"
              >
                조회하기
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default OrderStatus;
