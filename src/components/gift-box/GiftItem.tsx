
import { ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressForm from "@/pages/AddressForm";
import PurchaseConfirmation from "@/components/order-history/PurchaseConfirmation";

interface GiftItemProps {
  item: {
    id: string;
    date: string;
    status: string;
    product: {
      id: string;
      brand: string;
      name: string;
      option: string;
      price: number;
      image: string;
      shoppingBag: string;
      stampingType: string;
      stampingLabel: string;
    };
  };
}

const GiftItem = ({
  item
}: GiftItemProps) => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [openRejectDialog, setOpenRejectDialog] = useState(false);
  const [openRejectConfirmDialog, setOpenRejectConfirmDialog] = useState(false);
  const [openAddressDialog, setOpenAddressDialog] = useState(false);
  const [openPurchaseConfirmation, setOpenPurchaseConfirmation] = useState(false);
  const isSentGift = item.id.startsWith('s');

  return (
    <div className="space-y-4 pb-6 border-b last:border-b-0">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={() => navigate(`/order-history/${item.id}`)}
      >
        <div className="text-lg">{item.date}</div>
        <ChevronRight className="w-5 h-5" />
      </div>
      <div className="flex gap-4">
        <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover" />
        <div className="flex-1">
          <div className="text-gray-500">{item.status}</div>
          <div className="font-medium">{item.product.name}</div>
          <div className="text-sm text-gray-500">{item.product.option}</div>
          <div className="font-medium mt-1">{item.product.price.toLocaleString()}원</div>
        </div>
      </div>

      {!isSentGift ? (
        item.id === "1" ? (
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
                  <p className="text-sm text-gray-500 mb-6">선물 받은 후에는 취소가 불가능해요.</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-3 border text-sm" onClick={() => setOpenDialog(false)}>
                      닫기
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
                  <p className="text-sm text-gray-500 mb-6">선물 받기를 완료했어요. 배송지를 입력하시겠어요?</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-3 border text-sm" onClick={() => setOpenConfirmDialog(false)}>
                      나중에 하기
                    </button>
                    <button 
                      className="py-3 border text-sm"
                      onClick={() => {
                        setOpenConfirmDialog(false);
                        setOpenAddressDialog(true);
                      }}
                    >
                      배송지 입력
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={openAddressDialog} onOpenChange={setOpenAddressDialog}>
              <DialogContent className="bg-white sm:max-w-[425px] max-h-[85vh] overflow-y-auto">
                <AddressForm />
              </DialogContent>
            </Dialog>

            <Dialog open={openRejectDialog} onOpenChange={setOpenRejectDialog}>
              <DialogTrigger asChild>
                <button className="py-3 border text-sm">
                  선물 거절
                </button>
              </DialogTrigger>
              <DialogContent className="bg-white p-6 max-w-xs w-full">
                <div className="text-center">
                  <h2 className="text-lg font-medium mb-4">선물 거절 완료</h2>
                  <p className="text-sm text-gray-500 mb-6">선물 거절 후에는 취소가 불가능해요.</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-3 border text-sm" onClick={() => setOpenRejectDialog(false)}>
                      닫기
                    </button>
                    <button 
                      className="py-3 border text-sm"
                      onClick={() => {
                        setOpenRejectDialog(false);
                        setOpenRejectConfirmDialog(true);
                      }}
                    >
                      거절
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={openRejectConfirmDialog} onOpenChange={setOpenRejectConfirmDialog}>
              <DialogContent className="bg-white p-6 max-w-xs w-full">
                <div className="text-center">
                  <h2 className="text-lg font-medium mb-4">선물 거절 완료</h2>
                  <p className="text-sm text-gray-500 mb-6">선물 거절 후에는 취소가 불가능해요.</p>
                  <button 
                    className="w-32 py-3 border text-sm mx-auto"
                    onClick={() => setOpenRejectConfirmDialog(false)}
                  >
                    닫기
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        ) : item.id === "4" ? (
          <div className="w-full">
            <Dialog open={openAddressDialog} onOpenChange={setOpenAddressDialog}>
              <DialogContent className="bg-white sm:max-w-[425px] max-h-[85vh] overflow-y-auto">
                <AddressForm />
              </DialogContent>
            </Dialog>

            <button 
              className="w-full py-3 border text-sm bg-white"
              onClick={() => setOpenAddressDialog(true)}
            >
              배송지 입력
            </button>
          </div>
        ) : item.id === "2" ? (
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <button className="py-3 border text-sm">배송 조회</button>
              <button className="py-3 border text-sm">교환/반품 신청</button>
            </div>
            <button 
              className="w-full py-3 border text-sm"
              onClick={() => setOpenPurchaseConfirmation(true)}
            >
              구매 확정
            </button>

            <PurchaseConfirmation
              isOpen={openPurchaseConfirmation}
              onClose={() => setOpenPurchaseConfirmation(false)}
              onConfirm={(selectedProducts) => {
                console.log('Selected products:', selectedProducts);
                setOpenPurchaseConfirmation(false);
              }}
              products={[
                {
                  id: "1",
                  brand: "GRANHAND",
                  name: "Roland Multi Perfume",
                  price: 55000,
                  image: "/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png",
                  option: "롤링 멀티퍼퓸 200ml / 1개",
                  shoppingBag: "추가 구매 (+500원)",
                  stampingType: "N",
                  stampingLabel: "",
                }
              ]}
            />
          </div>
        ) : (
          <button className="w-full py-3 border text-sm bg-[#F6F6F7]">
            선물 거절
          </button>
        )
      ) : (
        item.id === "s1" || item.id === "s2" ? (
          <div className="grid grid-cols-2 gap-2">
            <button className="py-3 border text-sm">
              주문 취소
            </button>
            <button className="py-3 border text-sm">
              다른 사람에게 선물하기
            </button>
          </div>
        ) : (
          <button 
            className="w-full py-3 border text-sm"
            onClick={() => navigate(`/order-history/${item.id}`)}
          >
            주문 상세보기
          </button>
        )
      )}
    </div>
  );
};

export default GiftItem;
