
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";

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
      name: '홍길동',
      phone: '010-1234-5678',
      address: '부산광역시 부전동 서전로 8번길 럭키하트',
      isDefault: true
    }
  ]);
  const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [addressToDelete, setAddressToDelete] = useState<number | null>(null);

  const handleDelete = (addressId: number) => {
    setAddressToDelete(addressId);
    setDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (addressToDelete) {
      setAddresses(addresses.filter(addr => addr.id !== addressToDelete));
      setDeleteDialog(false);
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
          <h1 className="text-lg font-medium">배송지 목록</h1>
        </div>
      </div>

      <div className="p-4">
        <button
          onClick={() => navigate('/address/new')}
          className="w-full mb-4 py-3 border border-gray-200 rounded-sm text-sm"
        >
          새 배송지 추가
        </button>

        <div className="space-y-2">
          {addresses.map((address) => (
            <div 
              key={address.id}
              className={`border rounded-sm p-4 ${selectedAddress === address.id ? 'border-black' : 'border-gray-200'}`}
            >
              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={selectedAddress === address.id}
                  onChange={() => setSelectedAddress(address.id)}
                  className="mt-1 mr-3"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      {address.isDefault && (
                        <div className="text-xs text-gray-500 mb-1">기본 배송지</div>
                      )}
                      <p className="font-medium">{address.name}</p>
                      <p className="text-sm mt-1">{address.phone}</p>
                      <p className="text-sm text-gray-600 mt-1">{address.address}</p>
                    </div>
                    <div className="flex gap-4">
                      <button className="text-sm text-gray-500">수정</button>
                      <button 
                        onClick={() => handleDelete(address.id)} 
                        className="text-sm text-gray-500"
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button
          onClick={() => navigate(-1)} 
          className="w-full py-3 bg-[#2C2C2C] text-white rounded-sm"
        >
          선택 완료
        </button>
      </div>

      <Dialog open={deleteDialog} onOpenChange={setDeleteDialog}>
        <DialogContent className="w-[320px] rounded-none bg-white">
          <div className="text-center py-4">
            <p>이 주소를 삭제할까요?</p>
          </div>
          <DialogFooter className="flex space-x-2">
            <button
              className="flex-1 py-3 px-4 border text-sm"
              onClick={() => setDeleteDialog(false)}
            >
              아니요
            </button>
            <button
              className="flex-1 py-3 px-4 text-sm text-white bg-[#2C2C2C]"
              onClick={confirmDelete}
            >
              삭제
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddressList;
