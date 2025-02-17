
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderCancelDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFBF4]">
      <header className="flex items-center h-12 border-b">
        <button onClick={() => navigate(-1)} className="px-4">
          <X className="w-6 h-6" />
        </button>
        <h1 className="flex-1 text-center pr-10">취소 상세</h1>
      </header>

      <div className="p-4 space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-4">취소 상품 정보</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-gray-500 mb-1">GRANHAND</div>
            <div className="flex justify-between items-start mb-1">
              <div className="font-medium">Roland Multui Perfume</div>
              <div className="font-medium">35,500원</div>
            </div>
            <div className="space-y-1 text-sm text-gray-500">
              <div>롤링 멀티퍼퓸 100ml / 1개</div>
              <div>추가 구매 (+500원)</div>
              <div>Y</div>
              <div>GRANHAND❤️</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-red-500 font-medium mb-2">취소 완료</div>
          <div className="space-y-1 text-sm text-gray-500">
            <div>• 취소 사유 : 재주문</div>
            <div>• 취소 거부 사유 : 배송 시작</div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">환불 정보</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">결제 금액</span>
              <span>25,500원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">상품금액</span>
              <span>35,500원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">배송비</span>
              <span>0원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">쿠폰 사용</span>
              <span>-5,000원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">포인트 사용</span>
              <span>-5,000</span>
            </div>
            <div className="flex justify-between text-sm text-red-500">
              <span>차감 금액</span>
              <span>(-) 0원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">추가 배송비</span>
              <span>0원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">반품 배송비</span>
              <span>0원</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t">
              <span className="font-medium">환불 금액</span>
              <span className="font-medium">25,500원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">• 신용카드 (현대카드)</span>
              <span>5,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCancelDetail;
