
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
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

interface Address {
  id: number;
  name: string;
  phone: string;
  address: string;
  isDefault?: boolean;
}

const AddressList = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      name: "홍길동",
      phone: "010-1234-5678",
      address: "부산광역시 부전동 서면로 범내골 비자파크",
      isDefault: true
    }
  ]);
  const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [addressToDelete, setAddressToDelete] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setAddressToDelete(id);
    setShowDeleteDialog(true);
  };

  const handleDelete = () => {
    if (addressToDelete) {
      setAddresses(addresses.filter(addr => addr.id !== addressToDelete));
      setShowDeleteDialog(false);
      setAddressToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 bg-white border-b">
        <div className="flex items-center p-4">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg">배송지 목록</h1>
        </div>
      </div>

      <div className="p-4">
        <button
          onClick={() => navigate('/address/new')}
          className="w-full py-3 border border-gray-200 rounded-sm text-sm mb-4"
        >
          새 배송지 추가
        </button>
        {addresses.length === 0 ? (
          <p className="text-center text-gray-400 mt-8">새 배송지를 추가해 주세요.</p>
        ) : (
          <div className="space-y-2">
            {addresses.map(address => (
              <div 
                key={address.id}
                className={`border rounded p-4 flex items-start ${
                  selectedAddress === address.id ? 'border-black' : 'border-gray-200'
                }`}
              >
                <input
                  type="checkbox"
                  className="mt-1 mr-3"
                  checked={selectedAddress === address.id}
                  onChange={() => setSelectedAddress(address.id)}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{address.name}</p>
                    <button 
                      onClick={() => handleDeleteClick(address.id)}
                      className="text-sm text-gray-500"
                    >
                      삭제
                    </button>
                  </div>
                  <p className="text-sm">{address.phone}</p>
                  <p className="text-sm text-gray-600">{address.address}</p>
                  {address.isDefault && (
                    <span className="text-xs text-gray-500 mt-1">기본 배송지</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>이 주소를 삭제할까요?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="w-full">아니요</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="w-full bg-black hover:bg-black/90">
              삭제
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AddressList;
