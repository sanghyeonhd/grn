
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
            <div className="flex gap-4">
              <img 
                src="/lovable-uploads/1de8625e-503e-4bad-a356-99b9db162841.png"
                alt="Roland Multi Perfume"
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <div className="text-gray-500 text-sm mb-1">GRANHAND</div>
                <div className="font-medium mb-1">Roland Multui Perfume</div>
                <div className="font-medium">35,500원</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-dashed space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>옵션</span>
                <span>롤링 멀티퍼퓸 100ml / 1개</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>쇼핑백</span>
                <span>추가 구매 (+500원)</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>스탬핑 여부</span>
                <span>Y</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>스탬핑 문구</span>
                <span>GRANHAND❤️</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-dashed">
              <div className="text-red-500 font-medium">취소 거부</div>
              <div className="mt-4 space-y-1 text-sm text-gray-500">
                <div>└ 취소 사유 : 재주문</div>
                <div>└ 취소 거부 사유 : 배송 시작</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">환불 정보</h3>
          <div className="bg-white p-4 rounded-lg space-y-3">
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
              <span className="text-[#C0BCB6]">└ 신용카드 (현대카드)</span>
              <span>20,500원</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">포인트 환불</span>
              <span>5,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCancelDetail;
