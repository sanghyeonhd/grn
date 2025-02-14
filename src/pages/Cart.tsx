
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Minus, Plus } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  option: string;
  shippingOption: string;
  quantity: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Roland Multi Perfume",
      price: 35000,
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png",
      option: "롤랑 멀티퍼퓸 100ml / 1개",
      shippingOption: "구매 안함",
      quantity: 1
    },
    {
      id: 2,
      name: "Roland Multi Perfume",
      price: 55000,
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png",
      option: "롤랑 멀티퍼퓸 200ml / 1개",
      shippingOption: "구매 안함",
      quantity: 1
    },
    {
      id: 3,
      name: "Susie Salmon Multi Perfume",
      price: 35000,
      image: "/lovable-uploads/1d4dae74-da46-4207-9339-a9e1b84fc6eb.png",
      option: "수지샐몬 멀티퍼퓸 100ml / 1개",
      shippingOption: "구매 안함",
      quantity: 1
    }
  ]);

  const toggleSelectItem = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const handleQuantityChange = (id: number, increment: boolean) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handleDeleteSelected = () => {
    if (selectedItems.length === 0) return;
    setCartItems(prev => prev.filter(item => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  const totalAmount = cartItems
    .filter(item => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-4">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-lg">장바구니</h1>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="text-sm">상품 삭제</button>
            </AlertDialogTrigger>
            {selectedItems.length > 0 ? (
              <AlertDialogContent className="bg-white">
                <div className="py-4 text-center">
                  <p>상품을 삭제하시겠습니까?</p>
                </div>
                <div className="flex border-t">
                  <AlertDialogCancel className="flex-1 p-3 text-center border-r">닫기</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteSelected} className="flex-1 p-3 text-center text-blue-500">삭제</AlertDialogAction>
                </div>
              </AlertDialogContent>
            ) : (
              <AlertDialogContent className="bg-white">
                <div className="py-4 text-center">
                  <p>삭제할 상품을 선택해주세요.</p>
                </div>
                <AlertDialogAction className="w-full p-3 text-center border-t">확인</AlertDialogAction>
              </AlertDialogContent>
            )}
          </AlertDialog>
        </div>
      </div>

      {/* Cart Items */}
      <div className="divide-y">
        <div className="p-4 flex items-center">
          <input
            type="checkbox"
            checked={selectedItems.length === cartItems.length}
            onChange={() => {
              if (selectedItems.length === cartItems.length) {
                setSelectedItems([]);
              } else {
                setSelectedItems(cartItems.map(item => item.id));
              }
            }}
            className="mr-2"
          />
          <span>전체 선택 ({selectedItems.length}/{cartItems.length})</span>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="p-4">
            <div className="flex items-start gap-4">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleSelectItem(item.id)}
                className="mt-2"
              />
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.price.toLocaleString()}원</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="text-gray-600">옵션: {item.option}</p>
                  <p className="text-gray-600">쇼핑백: {item.shippingOption}</p>
                </div>
                <div className="mt-3 flex items-center border rounded-md w-fit">
                  <button 
                    onClick={() => handleQuantityChange(item.id, false)}
                    className="px-3 py-1"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-3 py-1 border-x">{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(item.id, true)}
                    className="px-3 py-1"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-4">
        <div className="text-right mb-2">
          <span className="text-sm">합계 </span>
          <span className="text-lg font-medium">{totalAmount.toLocaleString()}원</span>
        </div>
        <button className="w-full py-3 bg-[#2C2C2C] text-white rounded-none">
          구매하기
        </button>
      </div>
    </div>
  );
};

export default Cart;
