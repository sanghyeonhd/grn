
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GiftBoxHeader from '@/components/gift-box/GiftBoxHeader';
import GiftItem from '@/components/gift-box/GiftItem';
import { Product } from "@/types/order";

interface GiftItem {
  id: string;
  date: string;
  status: string;
  product: Product;
}

const GiftBox = () => {
  const [selectedTab, setSelectedTab] = useState("받은 선물");

  const receivedGiftItems: GiftItem[] = [
    {
      id: "1",
      date: "2023.10.23",
      status: "결제 완료 (선물 수락 대기)",
      product: {
        id: "p1",
        brand: "GRANHAND",
        name: "Roland Multi Perfume",
        option: "롤랑 멀티퍼퓸 100ml / 1개",
        price: 35000,
        image: "/lovable-uploads/11f4c675-9f43-465f-a75c-10e60b9379e8.png",
        shoppingBag: "구매 안함",
        stampingType: "N",
        stampingLabel: ""
      }
    },
    {
      id: "4",
      date: "2023.10.23",
      status: "결제 완료 (선물 수락 배송대기)",
      product: {
        id: "p2",
        brand: "GRANHAND",
        name: "Roland Multi Perfume",
        option: "롤랑 멀티퍼퓸 100ml / 1개",
        price: 35000,
        image: "/lovable-uploads/11f4c675-9f43-465f-a75c-10e60b9379e8.png",
        shoppingBag: "구매 안함",
        stampingType: "N",
        stampingLabel: ""
      }
    },
    {
      id: "2",
      date: "2023.10.16",
      status: "배송 완료 (선물 수락)",
      product: {
        id: "p3",
        brand: "GRANHAND",
        name: "Roland Multi Perfume",
        option: "롤랑 멀티퍼퓸 200ml / 1개",
        price: 55000,
        image: "/lovable-uploads/11f4c675-9f43-465f-a75c-10e60b9379e8.png",
        shoppingBag: "구매 안함",
        stampingType: "N",
        stampingLabel: ""
      }
    },
    {
      id: "3",
      date: "2023.09.18",
      status: "배송 완료 (선물 거절)",
      product: {
        id: "p4",
        brand: "GRANHAND",
        name: "Roland Multi Perfume",
        option: "롤랑 멀티퍼퓸 100ml / 1개",
        price: 35000,
        image: "/lovable-uploads/11f4c675-9f43-465f-a75c-10e60b9379e8.png",
        shoppingBag: "구매 안함",
        stampingType: "N",
        stampingLabel: ""
      }
    }
  ];

  const sentGiftItems: GiftItem[] = [
    {
      id: "s1",
      date: "2023.10.23",
      status: "결제 완료 (선물 수락 대기)",
      product: {
        id: "p5",
        brand: "GRANHAND",
        name: "Roland Multi Perfume",
        option: "롤랑 멀티퍼퓸 100ml / 1개",
        price: 35000,
        image: "/lovable-uploads/11f4c675-9f43-465f-a75c-10e60b9379e8.png",
        shoppingBag: "구매 안함",
        stampingType: "N",
        stampingLabel: ""
      }
    },
    {
      id: "s2",
      date: "2023.10.20",
      status: "결제 완료 (선물 수락)",
      product: {
        id: "p6",
        brand: "GRANHAND",
        name: "Roland Multi Perfume",
        option: "롤랑 멀티퍼퓸 200ml / 1개",
        price: 55000,
        image: "/lovable-uploads/11f4c675-9f43-465f-a75c-10e60b9379e8.png",
        shoppingBag: "구매 안함",
        stampingType: "N",
        stampingLabel: ""
      }
    },
    {
      id: "s3",
      date: "2023.10.16",
      status: "배송 완료 (선물 수락)",
      product: {
        id: "p7",
        brand: "GRANHAND",
        name: "Roland Multi Perfume",
        option: "롤랑 멀티퍼퓸 100ml / 1개",
        price: 35000,
        image: "/lovable-uploads/11f4c675-9f43-465f-a75c-10e60b9379e8.png",
        shoppingBag: "구매 안함",
        stampingType: "N",
        stampingLabel: ""
      }
    },
    {
      id: "s4",
      date: "2023.09.18",
      status: "선물 거절",
      product: {
        id: "p8",
        brand: "GRANHAND",
        name: "Roland Multi Perfume",
        option: "롤랑 멀티퍼퓸 100ml / 1개",
        price: 35000,
        image: "/lovable-uploads/11f4c675-9f43-465f-a75c-10e60b9379e8.png",
        shoppingBag: "구매 안함",
        stampingType: "N",
        stampingLabel: ""
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <GiftBoxHeader />
      
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
            {receivedGiftItems.map((item) => (
              <GiftItem key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="보낸 선물" className="mt-0">
          <div className="space-y-6 p-4">
            {sentGiftItems.map((item) => (
              <GiftItem key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GiftBox;
