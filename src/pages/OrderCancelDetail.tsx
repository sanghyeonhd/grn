
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderCancelDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center h-12 border-b">
        <button onClick={() => navigate(-1)} className="px-4">
          <X className="w-6 h-6" />
        </button>
        <h1 className="flex-1 text-center pr-10">취소 상세</h1>
      </header>

      <div className="p-4 space-y-4">
        <div className="space-y-4">
          <h2 className="text-lg">취소 상품 정보</h2>
          <div className="flex gap-4">
            <img 
              src="/lovable-uploads/bd410fec-4c86-460a-9aa6-b3fd0fe4e20b.png"
              alt="Roland Multi Perfume"
              className="w-20 h-20 object-cover"
            />
            <div>
              <div className="text-gray-500">GRANHAND</div>
              <div className="font-medium">Roland Multui Perfume</div>
              <div className="text-lg">55,000원</div>
              <div className="text-sm text-gray-500">롤링 멀티퍼퓸 100ml / 1개</div>
              <div className="text-sm text-gray-500">추가 구매 (+500원)</div>
              <div className="text-sm text-gray-500">Y</div>
              <div className="text-sm text-gray-500">GRANHAND❤️</div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-red-500">취소 거부</h3>
          <div className="text-sm text-gray-500">• 취소 사유 : 재주문</div>
          <div className="text-sm text-gray-500">• 취소 거부 사유 : 배송 시작</div>
        </div>

        <div className="space-y-2">
          <h3>환불 정보</h3>
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
          <div className="flex justify-between items-center pt-2 border-t">
            <span>환불 금액</span>
            <span className="font-medium">25,500원</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">• 신용카드 (현대카드)</span>
            <span>5,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCancelDetail;
