
import React, { useState, useMemo } from 'react';
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
import OrderHeader from '@/components/order-history/OrderHeader';
import OrderTabs from '@/components/order-history/OrderTabs';
import OrderStatus from '@/components/order-history/OrderStatus';
import OrderItem from '@/components/order-history/OrderItem';

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
  const [selectedPeriod, setSelectedPeriod] = useState("전체");
  const [startDate, setStartDate] = useState("2022.10.28");
  const [endDate, setEndDate] = useState("2023.10.28");
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("전체");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

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
      id: "6",
      date: "2023.10.16",
      status: "구매 확정",
      product: {
        name: "Roland Multi Perfume",
        option: "롤랑 멀티퍼퓸 100ml / 1개",
        price: 55000,
        image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
      }
    },
    {
      id: "7",
      date: "2023.10.16",
      status: "배송 지연",
      product: {
        name: "Roland Multi Perfume",
        option: "롤랑 멀티퍼퓸 100ml / 1개",
        price: 55000,
        image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
      }
    }
  ];

  const filteredOrders = useMemo(() => {
    if (!selectedStatus) return orderItems;

    switch (selectedStatus) {
      case 'payment':
        return orderItems.filter(item => 
          item.status === "입금 대기" || item.status === "결제 완료"
        );
      case 'preparing':
        return orderItems.filter(item => item.status === "배송 준비");
      case 'shipping':
        return orderItems.filter(item => item.status === "배송중");
      case 'delivered':
        return orderItems.filter(item => item.status === "배송 완료");
      case 'confirmed':
        return orderItems.filter(item => item.status === "구매 확정");
      default:
        return orderItems;
    }
  }, [selectedStatus]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <OrderHeader 
        selectedPeriod={selectedPeriod}
        startDate={startDate}
        endDate={endDate}
        onPeriodSelect={setSelectedPeriod}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />

      <OrderTabs 
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />

      <OrderStatus onStatusSelect={setSelectedStatus} />

      <div className="space-y-4 p-4">
        {filteredOrders.map((item) => (
          <OrderItem 
            key={item.id}
            item={item}
            onCancelClick={() => setIsCancelModalOpen(true)}
          />
        ))}
      </div>

      <AlertDialog open={isCancelModalOpen} onOpenChange={setIsCancelModalOpen}>
        <AlertDialogContent className="w-[320px] rounded-none">
          <AlertDialogHeader>
            <AlertDialogTitle>취소 유의사항 안내</AlertDialogTitle>
            <AlertDialogDescription>
              출고 중인 상품은 취소 신청이 어려울 수 있어요.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="flex w-full gap-2 sm:flex-row">
              <AlertDialogCancel
                className="mt-0 flex-1 rounded-none bg-white hover:bg-gray-50 text-black border border-gray-300"
                onClick={() => setIsCancelModalOpen(false)}
              >
                닫기
              </AlertDialogCancel>
              <AlertDialogAction
                className="flex-1 rounded-none bg-white hover:bg-gray-50 text-black border border-gray-300"
                onClick={() => {
                  setIsCancelModalOpen(false);
                  setIsConfirmOpen(true);
                }}
              >
                주문 취소
              </AlertDialogAction>
            </div>
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
              className="w-full rounded-none bg-white hover:bg-gray-50 text-black border border-gray-300"
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
