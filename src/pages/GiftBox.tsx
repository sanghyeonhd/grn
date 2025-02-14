
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface GiftItem {
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

const GiftBox = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("받은 선물");
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const giftItems: GiftItem[] = [
    {
      id: "1",
      date: "2023.10.23",
      status: "결제 완료 (선물 수락 대기)",
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
      status: "배송 완료 (선물 수락)",
      product: {
        name: "Roland Multi Perfume",
        option: "롤랑 멀티퍼퓸 200ml / 1개",
        price: 55000,
        image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
      }
    },
    {
      id: "3",
      date: "2023.09.18",
      status: "배송 완료 (선물 수락)",
      product: {
        name: "Roland Multi Perfume",
        option: "롤랑 멀티퍼퓸 100ml / 1개",
        price: 35000,
        image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
      }
    }
  ];

  const [openDialog, setOpenDialog] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center gap-4 p-4 border-b">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-medium">선물함</h1>
      </header>

      <Tabs defaultValue="받은 선물" className="w-full">
        <TabsList className="w-full h-auto p-0 bg-white border-b">
          <TabsTrigger 
            value="받은 선물"
            className="flex-1 h-12 data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none"
          >
            받은 선물
          </TabsTrigger>
          <TabsTrigger 
            value="보낸 선물"
            className="flex-1 h-12 data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none"
          >
            보낸 선물
          </TabsTrigger>
        </TabsList>
        <TabsContent value="받은 선물" className="mt-0">
          <div className="space-y-6 p-4">
            {giftItems.map((item) => (
              <div key={item.id} className="space-y-4 pb-6 border-b last:border-b-0">
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
                {item.id === "1" && (
                  <div className="grid grid-cols-2 gap-2">
                    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                      <DialogTrigger asChild>
                        <button className="py-3 border text-sm">
                          선물 받기
                        </button>
                      </DialogTrigger>
                      <DialogContent className="bg-white p-6 max-w-xs w-full">
                        <div className="text-center">
                          <h2 className="text-lg font-medium mb-4">선물 받기</h2>
                          <p className="text-sm text-gray-500 mb-6">선물 받으신 주소지 확인가능해요.</p>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              className="py-3 border text-sm"
                              onClick={() => setOpenDialog(false)}
                            >
                              담기
                            </button>
                            <button
                              className="py-3 border text-sm"
                              onClick={() => {
                                setOpenDialog(false);
                                setOpenConfirmDialog(true);
                              }}
                            >
                              받기
                            </button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Dialog open={openConfirmDialog} onOpenChange={setOpenConfirmDialog}>
                      <DialogContent className="bg-white p-6 max-w-xs w-full">
                        <div className="text-center">
                          <h2 className="text-lg font-medium mb-4">선물 받기 완료</h2>
                          <p className="text-sm text-gray-500 mb-6">선물 받기를 완료하시겠어요?</p>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              className="py-3 border text-sm"
                              onClick={() => setOpenConfirmDialog(false)}
                            >
                              나중에 하기
                            </button>
                            <button
                              className="py-3 border text-sm"
                              onClick={() => setOpenConfirmDialog(false)}
                            >
                              배송지 입력
                            </button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <button className="py-3 border text-sm">
                      선물 거절
                    </button>
                  </div>
                )}
                {item.id !== "1" && (
                  <button className="w-full py-3 border text-sm">
                    구매 확정
                  </button>
                )}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="보낸 선물" className="mt-0">
          <div className="p-4">
            <div className="text-center text-gray-500 py-12">
              보낸 선물이 없습니다.
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GiftBox;
