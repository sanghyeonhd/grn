
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

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
}

const OrderHistory = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState("최근 1년");
  const [startDate, setStartDate] = useState("2022.10.28");
  const [endDate, setEndDate] = useState("2023.10.28");
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const orderItems: OrderItem[] = [
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
        option: "롤랑 멀티퍼퓸 200ml / 1개",
        price: 55000,
        image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
      }
    }
  ];

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center gap-4 p-4 border-b">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium">주문 내역</h1>
        <div className="flex-1 flex justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-sm">
                기간설정
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[400px] px-4">
              <div className="space-y-6 pt-6">
                <h2 className="text-lg font-medium">기간설정</h2>
                <div className="grid grid-cols-4 gap-2">
                  {["최근 1년", "1주일", "1개월", "3개월"].map((period) => (
                    <button
                      key={period}
                      className={`py-2 border rounded-sm text-sm ${
                        selectedPeriod === period
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                      onClick={() => handlePeriodSelect(period)}
                    >
                      {period}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="flex-1 border p-2 rounded-sm text-sm"
                  />
                  <span>-</span>
                  <input
                    type="text"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="flex-1 border p-2 rounded-sm text-sm"
                  />
                </div>
                <Button className="w-full bg-black hover:bg-black/90">
                  조회하기
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className="grid grid-cols-5 py-4 text-center text-sm border-b">
        <div>
          <div>1</div>
          <div className="text-gray-500">입금/결제</div>
        </div>
        <div>
          <div>0</div>
          <div className="text-gray-500">배송준비</div>
        </div>
        <div>
          <div>0</div>
          <div className="text-gray-500">배송중</div>
        </div>
        <div>
          <div>1</div>
          <div className="text-gray-500">배송완료</div>
        </div>
        <div>
          <div>17</div>
          <div className="text-gray-500">구매확정</div>
        </div>
      </div>

      <div className="space-y-4 p-4">
        {orderItems.map((item) => (
          <div key={item.id} className="space-y-4">
            <div className="flex justify-between items-center">
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
                <div className="text-gray-500">{item.status}</div>
                <div className="font-medium">{item.product.name}</div>
                <div className="text-sm text-gray-500">{item.product.option}</div>
                <div className="font-medium mt-1">{item.product.price.toLocaleString()}원</div>
              </div>
            </div>
            <button
              className="w-full py-3 border text-sm"
              onClick={() => setIsCancelModalOpen(true)}
            >
              주문 취소
            </button>
          </div>
        ))}
      </div>

      <AlertDialog open={isCancelModalOpen} onOpenChange={setIsCancelModalOpen}>
        <AlertDialogContent className="w-[320px] rounded-none">
          <AlertDialogHeader>
            <AlertDialogTitle>취소 유의사항 안내</AlertDialogTitle>
            <AlertDialogDescription>
              주문 취소 신청은 취소 신청이 이뤄질 수 있어요.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-row gap-2">
            <AlertDialogCancel
              className="flex-1 rounded-none border-gray-300"
              onClick={() => setIsCancelModalOpen(false)}
            >
              닫기
            </AlertDialogCancel>
            <AlertDialogAction
              className="flex-1 rounded-none bg-black hover:bg-black/90"
              onClick={() => {
                setIsCancelModalOpen(false);
                setIsConfirmOpen(true);
              }}
            >
              주문 취소
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <AlertDialogContent className="w-[320px] rounded-none">
          <AlertDialogHeader>
            <AlertDialogTitle>취소 불가 안내</AlertDialogTitle>
            <AlertDialogDescription>
              선택하신 상품은 주문매체 취소가 불가능해요.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className="w-full rounded-none bg-black hover:bg-black/90"
              onClick={() => setIsConfirmOpen(false)}
            >
              확인
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default OrderHistory;
