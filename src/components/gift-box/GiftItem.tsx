
import { ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface GiftItemProps {
  item: {
    id: string;
    date: string;
    status: string;
    product: {
      name: string;
      option: string;
      price: number;
      image: string;
    };
  };
}

const GiftItem = ({ item }: GiftItemProps) => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [openRejectDialog, setOpenRejectDialog] = useState(false);
  const [openRejectConfirmDialog, setOpenRejectConfirmDialog] = useState(false);
  const [openCancelDialog, setOpenCancelDialog] = useState(false);
  const [openCancelConfirmDialog, setOpenCancelConfirmDialog] = useState(false);

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
      {item.id === "1" ? (
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

          <Dialog open={openRejectDialog} onOpenChange={setOpenRejectDialog}>
            <DialogTrigger asChild>
              <button className="py-3 border text-sm">
                선물 거절
              </button>
            </DialogTrigger>
            <DialogContent className="bg-white p-6 max-w-xs w-full">
              <div className="text-center">
                <h2 className="text-lg font-medium mb-4">선물 거절 완료</h2>
                <p className="text-sm text-gray-500 mb-6">선물을 거절하시겠어요?</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    className="py-3 border text-sm"
                    onClick={() => setOpenRejectDialog(false)}
                  >
                    담기
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
                <p className="text-sm text-gray-500 mb-6">선물 거절하시면 취소가 불가능해요.</p>
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
      ) : item.id === "2" ? (
        <div className="grid grid-cols-2 gap-2">
          <Dialog open={openCancelDialog} onOpenChange={setOpenCancelDialog}>
            <DialogTrigger asChild>
              <button className="py-3 border text-sm">
                주문 취소
              </button>
            </DialogTrigger>
            <DialogContent className="bg-white p-6 max-w-xs w-full">
              <div className="text-center">
                <h2 className="text-lg font-medium mb-4">취소 유의사항 안내</h2>
                <p className="text-sm text-gray-500 mb-6">주고 좋은 선물도 취소 상황이 여러가 수 있어요.</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    className="py-3 border text-sm"
                    onClick={() => setOpenCancelDialog(false)}
                  >
                    담기
                  </button>
                  <button
                    className="py-3 border text-sm"
                    onClick={() => {
                      setOpenCancelDialog(false);
                      setOpenCancelConfirmDialog(true);
                    }}
                  >
                    주문 취소
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={openCancelConfirmDialog} onOpenChange={setOpenCancelConfirmDialog}>
            <DialogContent className="bg-white p-6 max-w-xs w-full">
              <div className="text-center">
                <h2 className="text-lg font-medium mb-4">취소 불가 안내</h2>
                <p className="text-sm text-gray-500 mb-6">선택하신 선물을 수령하여 취소가 불가능해요.</p>
                <button
                  className="w-32 py-3 border text-sm mx-auto"
                  onClick={() => setOpenCancelConfirmDialog(false)}
                >
                  확인
                </button>
              </div>
            </DialogContent>
          </Dialog>

          <button className="py-3 border text-sm">
            다른 사람에게 선물하기
          </button>
        </div>
      ) : (
        <button className="w-full py-3 border text-sm">
          구매 확정
        </button>
      )}
    </div>
  );
};

export default GiftItem;
